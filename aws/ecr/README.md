# Elastic Container Registry (ECR)

## Creating a Repo

* Get login for local Docker: `aws ecr get-login`
* For new version of docker remove `-e none` from the resulting command before running it
* Create repository: `aws ecr create-repository --repository-name PATH/NAME`
* Describe: `aws ecr describe-repositories`

## Uploading an Image

* List images: `aws ecr list-images --repository-name REPOSITORYNAME`
* Tag local image: `docker tag IMAGE REPOSITORYURI`
* Push local images to tagged repo: `docker push REPOSITORYURI`

## Deleting Repository

Delete repo: `aws ecr delete-repository --repository-name REPONAME --force`
