FROM node:18.12.0-alpine3.16

# Copy scripts to inside container
#COPY ./install_node.sh ./

RUN apk update && apk upgrade && apk add bash && apk add vim

RUN mkdir /app
RUN mkdir /back
COPY . ./back
RUN npm install -g npm@8.19.3
RUN npm install -g @nestjs/cli
RUN npm install -g pg
RUN npm install -g @types/node
RUN npm install -g typeorm



EXPOSE 8080

#ENTRYPOINT ["/conf/setup_mariadb.sh"]

# Infinite loop
#CMD ["/bin/bash"]
ENTRYPOINT ["tail", "-f", "/dev/null"]
