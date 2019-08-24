variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

# S3 does not allow underscores
variable "project_character_sensitive" {
  type = "string"
  default = "softwarenotes"
}

variable "user" {
  type = "string"
}
