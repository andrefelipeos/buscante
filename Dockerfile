# building stage
FROM node:18.19-bullseye-slim AS build
WORKDIR /buscante
COPY package*.json .
RUN npm install
RUN npm install --global @angular/cli@16
COPY . .
RUN ng build

# production stage
FROM nginx:stable-alpine-slim
COPY --from=build /buscante/dist/buscante /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
