# Elastic Container Service (ECS)

* [Component Documentation](#component-documentation)
* [Cluster Setup](#cluster-setup)
* [Commands](#commands)
  * [Clusters](#clusters)
  * [Task Definitions](#task-definitions)
  * [Running Tasks](#running-tasks)
  * [Services](#services)

## Component Documentation

* [Clusters](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_clusters.html#cluster_concepts)
* [Container Instance](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_instances.html)
* [Container Agent](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ECS_agent.html)
* [Task Definition](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html)
* [Scheduler](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/scheduling_tasks.html)
* [Service](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_services.html)
* [Task](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs_run_task.html)
* [Elastic Container Registry](https://aws.amazon.com/ecr/)

## Cluster Setup

* Create: `aws ecs create-cluster --cluster-name CLUSTERNAME`
* Create two IAM roles:
  * ecsInstanceRole: AmazonS3ReadOnlyAccess, AmazonEC2ContainerServiceforEC2Role
  * ecsServiceRole: AmazonEC2ContainerServiceRole
* Upload an `ecs.config` file to a private s3 bucket: `aws s3 cp LOCALPATH s3://BUCKETNAME/FILENAME`
* Create an EC2 instance with the amazon-ecs-optimized image for your region, the ecsInstanceRole previously created, and a bash command to retrieve the ecs.config file from the S3 bucket: `aws ec2 run-instances --image-id ami-fad25980 --count 1 --instance-type t2.micro --iam-instance-profile Name=ecsInstanceRole --key-name KEYPAIRNAME --security-group-ids SGID --user-data file://copy-ecs-config-to-s3`

## Commands

### Clusters

* List: `aws ecs list-clusters`
* Create: `aws ecs create-cluster --cluster-name CLUSTERNAME`
* Info: `aws ecs describe-clusters --clusters CLUSTERNAME`
* Delete: `aws ecs delete-cluster --clusters CLUSTERNAME`
* List instances in a cluster: `aws ecs list-container-instances --cluster CLUSTERNAME`
* Describe container instance: `aws ecs describe-container-instances --cluster CLUSTERNAME --container-instances ARN`

### Task Definitions

* Generate skeleton: `aws ecs register-task-definition --generate-cli-skeleton`
* Register a task definition: `aws ecs register-task-definition --cli-input-json file://web-task-definition.json`
* List task definition families: `aws ecs list-task-definition-families`
* List task definitions: `aws ecs list-task-definitions`
* Describe task definition: `aws ecs describe-task-definition --task-definition FAMILYNAME:REVISIONNUMBER`
* Deregister a task definition: `aws ecs deregister-task-definition --task-definition FAMILYNAME:REVISIONNUMBER`

#### Running Tasks

**Run a task:**

* Run: `aws ecs run-task --cluster CLUSTERNAME --task-definition DEFINITIONNAME --count COUNT`
* List tasks: `aws ecs list-tasks --cluster CLUSTERNAME`
* Stop: `aws ecs stop-task --cluster CLUSTERNAME --task ARN`

**Start a task on a specific container instance:**

* Find a container ARN: `aws ecs list-container-instances --cluster CLUSTERNAME`
* Start: `aws ecs start-task --cluster CLUSTERNAME --task-definition DEFINITIONNAME --container-instances ARN`

An alternative to running tasks manually is to let a Service handle the task. See [Services](#services) section below.

### Services

* Generate skeleton: `aws ecs create-service --generate-cli-skeleton`
* Create: `aws ecs create-service --cluster CLUSTERNAME --service-name SERVICENAME --task-definition TASKDEFINITION --desired-count COUNT`
* List: `aws ecs list-services --cluster CLUSTERNAME`
* Describe: `aws ecs describe-services --cluster CLUSTERNAME --service SERVICENAME`
* Update (count): `aws ecs update-service --cluster CLUSTERNAME --service SERVICENAME --task-definition TASKDEFINITION --desired-count NEWCOUNT`
* Delete: update count to 0 with above command, then run `aws ecs delete-service --cluster CLUSTERNAME --service SERVICENAME`
