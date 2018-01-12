# Docker

## Docker Hub

* Log In: `docker login`

## Images

List: `docker images`
Remove: `docker rmi ID`
Remove all dangling images: `docker images -q -f dangling=true | xargs docker rmi`

### Building an Image

* Create a Dockerfile in a new folder (see [examples](./examples))
* Build image: `docker build -t IMAGENAME LOCALPATH`

### Pushing an Image

* Tag the image if not done already: `docker tag LOCALIMAGE TARGETIMAGE`
* Push: `docker push TARGETIMAGE`

## Containers

List: `docker ps`
Remove: `docker rm ID`
Remove all stopped containers: `docker ps -aq --no-trunc -f status=exited | xargs docker rm`
Enter a bash session from an image: `docker run -it IMAGEID bash`
Enter a bash session for a running container: `docker exec -it CONTAINERNAME bash`
