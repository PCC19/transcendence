.PHONY: all build buildno up down clean fclean ps

YML= -f ./srcs/docker-compose.yml
ENV= --env-file ./srcs/.env


VOLUMES_PATH = /home/pcunha/data
VOLUMES_DIR = db_data site_data
VOLUMES = $(addprefix $(VOLUMES_PATH)/, $(VOLUMES_DIR))

all: down build

build:
	echo "Building ..."
	docker build -t node_img .
	#docker-compose $(YML) $(ENV) build

down:
	docker container stop node_c
	#docker-compose $(YML) $(ENV) down

clean: down
	echo "Deleting container ..."
	docker container rm node_c

fclean: down
	echo "Docker pruning ..."
	docker system prune -f -a

re: fclean build up

up:
	docker run -it --name node_c node_img
	#docker-compose $(YML) $(ENV) up -d 
	#docker-compose $(YML) $(ENV) ps -a

#ps:
#	docker-compose $(YML) $(ENV) ps -a

