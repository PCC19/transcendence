# MARIADB DOCKERFILE
#FROM debian:buster
FROM node:18.12.0-alpine3.16

# Copy scripts to inside container
#COPY ./install_node.sh ./

RUN apk update && apk upgrade && apk add bash && apk add vim

# Execute installation script
#RUN ./install_node.sh

RUN mkdir /app

EXPOSE 3000

#ENTRYPOINT ["/conf/setup_mariadb.sh"]

# Infinite loop
CMD ["bash"]
