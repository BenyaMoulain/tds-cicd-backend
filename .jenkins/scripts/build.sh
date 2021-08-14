docker-compose build --no-cache --build-arg MONGOURI=${MONGOURI}
docker run tds-cicd-backend_app -p 3001:3001