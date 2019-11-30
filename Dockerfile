FROM node:8.16.2-jessie
LABEL MAINTAINER="emmonspired <dan.ryan.emmons@gmail.com>"

RUN mkdir /app 
COPY package*.json /app/

WORKDIR /app
RUN npm install && npm cache clean --force

COPY . /app/

ENTRYPOINT ["npm", "run", "start"]
