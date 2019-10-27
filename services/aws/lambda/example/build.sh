#!/usr/bin/env bash

set -e

# Create bucket if it doesn't already exist:
# aws s3api create-bucket --bucket=terraform-serverless-example-domt --region=us-east-1

(cd src && zip ../example.zip main.js)
aws s3 cp example.zip s3://terraform-serverless-example-domt/v1.0.1/example.zip
