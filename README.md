## Tech stack

* **Node** 16.16
* **Yarn** 1.22
* **Docker** 20.10.17
* **Docker Compose** 2.9.0
* **React** 18.2
* **TypeScript** 4.5

## Install and run with local environment

```bash
  yarn install
  yarn start
```

## Docker development environment

Build and tag the Docker image

```bash
 docker build -t sample:dev .
```

Spin up the container once the build is done:

```bash
  docker run \
  -it \
  --rm \
  -v ${PWD}:/app \
  -v /app/node_modules \
  -p 3001:3000 \
  -e CHOKIDAR_USEPOLLING=true \
  sample:dev
```

Build the image and fire up the container:

```bash
  docker-compose up -d --build
```

Stop container

```bash
  docker-compose stop
```

## Docker production environment

Build and tag the Docker image:

```bash
  docker build -f Dockerfile.prod -t sample:prod .
```

Spin up the container

```bash
  docker run -it --rm -p 1337:80 sample:prod
```

Fire up the container

```bash
  docker-compose -f docker-compose.prod.yml up -d --build
```

Publish docker container to registry

`$CI_IMAGE_TAG` is docker image tag
`$CI_REGISTRY_IMAGE` is docker registry

```bash
  docker push $CI_REGISTRY_IMAGE:$CI_IMAGE_TAG
```
