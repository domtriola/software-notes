variable "aws_region" {
  type = "string"
  default = "us-east-1"
}

variable "environment" {
  type = "string"
  default = "dev"
}

variable "project" {
  type = "string"
  default = "software_notes"
}

variable "user" {
  type = "string"
}

variable "application_name" {
  type = "string"
  default = "example_web_server"
}

# ELB complains about underscores
variable "application_name_character_sensitive" {
  type = "string"
  default = "examplewebserver"
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

variable "web_server_protocol" {
  type = "string"
  default = "http"
}

variable "web_server_port" {
  type = "string"
  default = 8080
}
