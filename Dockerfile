FROM node:14-alpine

WORKDIR /urs/src/app

COPY . .
RUN npm i
EXPOSE 8080

CMD ["npm", "start"
