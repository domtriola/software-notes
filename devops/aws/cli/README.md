# Command Line Interface (CLI)

## CLI Setup

* Create an IAM user and assign to a group with AdministratorAccess
* Generate an Access Key
* [Install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/installing.html)
* Run `aws configure` and enter the credentials created in the previous steps (use us-east-1 as the region)

## Commands

### Key Pairs

* Create: `aws ec2 create-key-pair --key-name KEYNAME --query 'KeyMaterial' --output text > ~/.ssh/KEYNAME.pem`
* Delete: `aws ec2 delete-key-pair --key-name KEYNAME`

### Security Groups

* Create: `aws ec2 create-security-group --group-name GROUPNAME --description "DESCRIPTION"`
* Delete: `aws ec2 delete-security-group --group-id GROUPID`
* Authorize: `aws ec2 authorize-security-group-ingress --group-id GROUPID --protocol tcp --port PORTNUMBER --cidr 0.0.0.0/0 --source-group GROUPID`
