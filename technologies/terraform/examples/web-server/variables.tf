variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

variable "environment" {
  type = "string"
  default = "dev"
}

variable "user" {
  type = "string"
}

variable "application_name" {
  type = "string"
  default = "example_web_server"
}

variable "web_image_id" {
  type = "string"
  # Ubuntu Server 18.04 LTS (HVM), SSD Volume Type (64-bit x86)
  default = "ami-07d0cf3af28718ef8"
}

variable "web_instance_type" {
  type = "string"
  default = "t2.micro"
}

variable "web_server_port" {
  type = "string"
  default = 8080
}
