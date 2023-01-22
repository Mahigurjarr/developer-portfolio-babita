#stage 1
FROM node:16.13 as node
WORKDIR /app
COPY ./frontend/ /app
RUN npm install
RUN npm run build --prod

#stage 2
FROM nginx:latest
COPY --from=node /app/dist/angular-starter/browser /usr/share/nginx/html
