output "s3_bucket_arn" {
  value = "${aws_s3_bucket.terraform_state.arn}"
}

output "aws_region" {
  value = "${var.aws_region}"
}
