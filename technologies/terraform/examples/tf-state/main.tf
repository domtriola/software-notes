# NOTE:
# Take care to not expose sensitive data when using a backend for state:
# https://github.com/hashicorp/terraform/issues/516

provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_s3_bucket" "terraform_state" {
  # NOTE: details like application and environment will be specified in the S3
  # key when configured for each deployment as long as those details are a part
  # of the application directory path. It is recommended to use a folder
  # structure like:
  #
  # dev/
  #   web-server-cluster/
  #     main.tf
  #     outputs.tf
  #     variables.tf
  #   data-stores/
  #     mysql/
  #       ...
  #     redis/
  #       ...
  # stage/
  #   web-server-cluster/
  #     ...
  #   data-stores/
  #     ...
  # prod/
  #   ...
  # global/
  #   s3/
  #     main.tf    <- (this file) creates global S3 bucket for entire project
  #     outputs.tf
  #     variables.tf
  #
  # https://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html
  bucket = "tfstate.${var.project_character_sensitive}.${var.user}"
  acl    = "private"

  versioning {
    enabled = true
  }

  lifecycle {
    prevent_destroy = true
  }
}
