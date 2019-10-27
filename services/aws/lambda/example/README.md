# AWS Lambda with Terraform

Example from: https://learn.hashicorp.com/terraform/aws/lambda-api-gateway

## Setup

Create the lambda bucket if it doesn't already exist:

```bash
aws s3api create-bucket --bucket=terraform-serverless-example-domt --region=us-east-1
```

Run `build` to zip and deploy the lambda code:

```bash
./build.sh
```

Deploy terraform infrastructure:

```bash
cd terraform
terraform init
terraform apply
```

## Test

https://ibxhbx86vf.execute-api.us-east-1.amazonaws.com/test

Or invoke manually in AWS console
