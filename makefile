.PHONY: build up down clean

build:
	docker-compose build
up:
	docker-compose up -d
down:
	docker-compose down
clean:
	docker-compose down --rmi all --volumes --remove-orphans
logs:
	docker-compose logs
