# Stage 1
FROM node:lts-alpine as build
ENV TZ=Europe/Berlin
RUN apk add --no-cache tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime
WORKDIR /app
COPY . .
RUN npm i && npm run build

# Stage 2
FROM nginx:stable-alpine as run
RUN rm -rf /usr/share/nginx/html/*
ENV TZ=Europe/Berlin
RUN apk add --no-cache tzdata && cp /usr/share/zoneinfo/$TZ /etc/localtime
COPY --from=build /app/dist/time-wizard/browser /usr/share/nginx/html
COPY --from=build /app/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
HEALTHCHECK CMD curl -f http://localhost/ || exit
