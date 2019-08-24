terraform {
  backend "s3" {
    bucket  = "tfstate.softwarenotes.domt"
    key     = "examples/tf-state/terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }
}
