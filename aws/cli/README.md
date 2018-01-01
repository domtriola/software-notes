# AWS CLI

## Setup

* Create an IAM user and assign to a group with AdministratorAccess
* Generate an Access Key
* [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* Run `aws configure` and enter the credentials created in the previous steps (use us-east-1 as the region)
* Generate an EC2 ssh key pair: `aws ec2 create-key-pair --key-name KEYNAME --query 'KeyMaterial' --output text > ~/.ssh/KEYNAME.pem` (I used aws-dom for the KEYNAME)
* Update permissions for key pair: `chmod 400 ~/.ssh/KEYNAME.pem`
* Verify that the key pair works: `aws ec2 describe-key-pairs --key-name KEYNAME`
* Create a general access security group: `aws ec2 create-security-group --group-name GROUPNAME --description "DESCRIPTION"` (I used 'SERVICENAME-general-access' for the GROUPNAME)
* Open ports in the security group: `aws ec2 authorize-security-group-ingress --group-id GROUPID --protocol tcp --port PORTNUMBER --cidr 0.0.0.0/0`

## Commands

### Key Pairs

* Create: `aws ec2 create-key-pair --key-name KEYNAME --query 'KeyMaterial' --output text > ~/.ssh/KEYNAME.pem`
* Delete: `aws ec2 delete-key-pair --key-name KEYNAME`

### Security Groups

* Create: `aws ec2 create-security-group --group-name GROUPNAME --description "DESCRIPTION"`
* Delete: `aws ec2 delete-security-group --group-id GROUPID`
* Authorize: `aws ec2 authorize-security-group-ingress --group-id GROUPID --protocol tcp --port PORTNUMBER --cidr 0.0.0.0/0 --source-group GROUPID`
