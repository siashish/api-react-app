FROM node:18-alpine

WORKDIR /api-app/

COPY package.json /api-app/
RUN npm install
COPY public/ /api-app/public
COPY src/ /api-app/src

EXPOSE 3000
CMD [ "npm", "start" ]