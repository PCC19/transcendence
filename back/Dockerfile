FROM node:18.12.0-alpine3.16

# Copy scripts to inside container
#COPY ./install_node.sh ./

RUN apk update && apk upgrade && apk add bash && apk add vim

RUN mkdir /app
RUN npm install -g npm@8.19.3
RUN npm install -g @nestjs/cli

EXPOSE 8080

#ENTRYPOINT ["/conf/setup_mariadb.sh"]

# Infinite loop
CMD ["bash"]
