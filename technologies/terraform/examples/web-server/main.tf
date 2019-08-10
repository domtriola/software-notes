provider "aws" {
  region = "${var.aws_region}"
}

resource "aws_instance" "web" {
  ami                    = "${var.web_image_id}"
  instance_type          = "${var.web_instance_type}"
  vpc_security_group_ids = ["${aws_security_group.web_access.id}"]

  tags = {
    Name = "${var.user}-${var.application_name}-web"
  }

  # Create basic web server and run when the instance boots up
  user_data = <<-EOF
              #!/bin/bash
              echo "Hello, world" > index.html
              nohup busybox httpd -f -p "${var.web_server_port}" &
              EOF
}

resource "aws_security_group" "web_access" {
  name = "${var.user}-${var.application_name}-web_access"

  ingress {
    from_port   = "${var.web_server_port}"
    to_port     = "${var.web_server_port}"
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
