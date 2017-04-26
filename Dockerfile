FROM debian:8.7
LABEL maintainer "karel@striegel.be"

RUN apt-get update && \
    apt-get upgrade && \
    apt-get install curl vim git -y && \
    curl -sL https://deb.nodesource.com/setup_7.x |  bash - && \
    apt-get install -y nodejs 

RUN npm init -y && \
    npm install --save body-parser && \
    npm install --save errorhandler && \
    npm install --save method-override && \
    npm install --save express

RUN mkdir /src/

COPY dist /src/
COPY docker/server.js /src/server.js

WORKDIR /src/
EXPOSE 4567

ENTRYPOINT ["node","server.js"]
#CMD ["node","server.js"]
