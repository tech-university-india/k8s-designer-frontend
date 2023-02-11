# Stage 1 (named "builder"): Production React Build
FROM node:14-alpine AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2: Start fresh, use Nginx as webserver,
# and copy just the build artifacts from the previous stage.
FROM nginx:alpine
WORKDIR /app
RUN rm -rf *
COPY --from=builder /app/build /usr/share/nginx/html
# Run nginx with global directives and daemon off
CMD ["nginx", "-g", "daemon off;"]
