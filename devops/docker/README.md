# Docker

## Docker Hub

* Log In: `docker login`

## Images

List: `docker images`
Remove: `docker rmi ID`

### Building an Image

* Create a Dockerfile in a new folder (see [examples](./examples))
* Build image: `docker build -t IMAGENAME LOCALPATH`

### Pushing an Image

* Tag the image if not done already: `docker tag LOCALIMAGE TARGETIMAGE`
* Push: `docker push TARGETIMAGE`

## Containers

List: `docker ps`
Remove: `docker rm ID`
Running a container from an image: `docker -it IMAGEID /bin/bash`
