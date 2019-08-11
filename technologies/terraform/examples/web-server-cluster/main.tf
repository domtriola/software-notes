provider "aws" {
  region = "${var.aws_region}"
}

data "aws_availability_zones" "all" {}

resource "aws_launch_configuration" "web" {
  image_id        = "${var.web_image_id}"
  instance_type   = "${var.web_instance_type}"
  security_groups = ["${aws_security_group.web_instance.id}"]

  user_data = <<-EOF
              #!/bin/bash
              echo "Hello, world" > index.html
              nohup busybox httpd -f -p "${var.web_server_port}" &
              EOF

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_security_group" "web_instance" {
  name = "${var.user}-${var.application_name}-web_instance"

  ingress {
    from_port   = "${var.web_server_port}"
    to_port     = "${var.web_server_port}"
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${var.user}-${var.application_name}-web_instance"
    Environment = "${var.environment}"
    Project = "${var.project}"
  }
}

resource "aws_autoscaling_group" "web" {
  launch_configuration = "${aws_launch_configuration.web.id}"
  availability_zones   = "${data.aws_availability_zones.all.names}"

  load_balancers    = ["${aws_elb.web.name}"]
  health_check_type = "ELB"
  min_size          = 2
  max_size          = 4

  tags = [
    {
      key                 = "Name"
      value               = "${var.user}-${var.application_name}-web"
      propagate_at_launch = true
    },
    {
      key                 = "Environment"
      value               = "${var.environment}"
      propagate_at_launch = true
    },
    {
      key                 = "Project"
      value               = "${var.project}"
      propagate_at_launch = true
    },
  ]
}

resource "aws_elb" "web" {
  name = "${var.user}-${var.application_name_character_sensitive}-web"
  availability_zones = "${data.aws_availability_zones.all.names}"
  security_groups    = ["${aws_security_group.web_elb.id}"]

  listener {
    lb_port = 80
    lb_protocol = "http"
    instance_port = "${var.web_server_port}"
    instance_protocol = "${var.web_server_protocol}"
  }

  health_check {
    healthy_threshold   = 2
    unhealthy_threshold = 2
    timeout             = 3
    interval            = 30
    target              = "HTTP:${var.web_server_port}/"
  }

  tags = {
    Environment = "${var.environment}"
    Project = "${var.project}"
  }
}

resource "aws_security_group" "web_elb" {
  name = "${var.user}-${var.application_name}-web_elb"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Environment = "${var.environment}"
    Project = "${var.project}"
  }
}
