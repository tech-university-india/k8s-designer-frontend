# Stage 1 (named "builder"): Production React Build
FROM node:19-alpine3.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build


# Stage 2: Start fresh, install a static server,
# and copy just the build artifacts from the previous stage.
FROM node:19-alpine3.16

WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/build ./build

EXPOSE 7000
CMD ["serve", "-s", "build", "-l", "7000"]