FROM node:18.12.0-alpine3.16

# Copy scripts to inside container
#COPY ./install_node.sh ./

RUN apk update && apk upgrade && apk add bash && apk add vim

RUN mkdir /app

EXPOSE 8080

#ENTRYPOINT ["/conf/setup_mariadb.sh"]

# Infinite loop
CMD ["bash"]
