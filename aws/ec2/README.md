# EC2

## Pre-launch Setup from CLI

* Generate an EC2 ssh key pair: `aws ec2 create-key-pair --key-name KEYNAME --query 'KeyMaterial' --output text > ~/.ssh/KEYNAME.pem` (I used aws-dom for the KEYNAME)
* Update permissions for key pair: `chmod 400 ~/.ssh/KEYNAME.pem`
* Verify that the key pair works: `aws ec2 describe-key-pairs --key-name KEYNAME`
* Create a general access security group: `aws ec2 create-security-group --group-name GROUPNAME --description "DESCRIPTION"` (I used 'SERVICENAME-general-access' for the GROUPNAME)
* Open ports in the security group: `aws ec2 authorize-security-group-ingress --group-id GROUPID --protocol tcp --port PORTNUMBER --cidr 0.0.0.0/0`
