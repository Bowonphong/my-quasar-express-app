# Stage 1: Build Quasar App
FROM node:20 AS builder

ARG API_URL=http://localhost:3000
ENV API_URL=${API_URL}

WORKDIR /app

COPY package*.json ./
RUN npm install -g @quasar/cli
RUN npm ci --ignore-scripts

COPY . .
RUN quasar prepare
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist/spa /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
