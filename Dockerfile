FROM node:20-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

RUN apk --no-cache add libaio libnsl libc6-compat curl && \
  cd /tmp && \
  curl -o instantclient-basiclite.zip https://download.oracle.com/otn_software/linux/instantclient/instantclient-basiclite-linuxx64.zip -SL && \
  unzip instantclient-basiclite.zip && \
  mv instantclient*/ /usr/lib/instantclient && \
  rm instantclient-basiclite.zip && \
  ln -s /usr/lib/instantclient/libclntsh.so.21.13 /usr/lib/libclntsh.so && \
  ln -s /usr/lib/instantclient/libocci.so.21.13 /usr/lib/libocci.so && \
  ln -s /usr/lib/instantclient/libociicus.so /usr/lib/libociicus.so && \
  ln -s /usr/lib/instantclient/libnnz21.so /usr/lib/libnnz21.so && \
  ln -s /usr/lib/libnsl.so.2 /usr/lib/libnsl.so.1 && \
  ln -s /lib/libc.so.6 /usr/lib/libresolv.so.2 && \
  ln -s /lib64/ld-linux-x86-64.so.2 /usr/lib/ld-linux-x86-64.so.2

ENV CONNECT_STRING_DEV="dev=(DESCRIPTION =(ADDRESS = (PROTOCOL = TCP)(HOST = 192.168.4.11)(PORT = 1521))(CONNECT_DATA =(SID= f3ites)))"
ENV ORACLE_BASE /usr/lib/instantclient
ENV LD_LIBRARY_PATH /usr/lib/instantclient
ENV TNS_ADMIN /usr/lib/instantclient
ENV ORACLE_HOME /usr/lib/instantclient

COPY . .

COPY --chown=node:node . .

USER node

