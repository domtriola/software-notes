# AWS Lambda with Terraform

Example from: https://learn.hashicorp.com/terraform/aws/lambda-api-gateway

## Setup

Create the lambda bucket if it doesn't already exist:

```bash
aws s3api create-bucket --bucket=terraform-serverless-example-domt --region=us-east-1
```

Run `build` to zip and deploy the lambda code. Update version in `build.sh` to deploy a new version.

```bash
./build.sh
```

Deploy terraform infrastructure:

```bash
cd terraform
terraform init
terraform apply -var="app_version=1.0.1"
```

## Test

Visit output URL from `terraform apply`

Or invoke manually in AWS console

## Cleanup

```bash
terraform destroy -var="app_version=1.0.1"
```
