# Stage 1 (named "builder"): Production React Build
FROM node:19-alpine3.16 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
 

# Stage 2: Start fresh, install a static server,
# and copy just the build artifacts from the previous stage.
FROM nginx:alpine
WORKDIR  /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/build /usr/share/nginx/html
#COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
# Run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"] 

RUN apk add --no-cache python3 py3-pip
