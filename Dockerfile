FROM node:19.1.0-alpine3.15
WORKDIR /usr/src/app
EXPOSE 5000
COPY . .
RUN npm install
CMD npm run start
