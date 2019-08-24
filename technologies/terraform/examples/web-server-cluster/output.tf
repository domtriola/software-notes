output "web_elb_dns_name" {
  value = "${aws_elb.web.dns_name}"
}
