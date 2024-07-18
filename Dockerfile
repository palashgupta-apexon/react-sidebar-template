FROM node:alpine3.10 as myImage
WORKDIR /app
COPY . /app
RUN npm install
RUN npm run build

# nginx
FROM nginx:alpine3.17
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=myImage /app/build .
ENTRYPOINT [ "nginx", "-g", "demon off" ]