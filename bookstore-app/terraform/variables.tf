variable "aws_region" {
  type    = string
  default = "ap-south-1"
}

variable "instance_type" {
  type    = string
  default = "m7i-flex.large"
}

variable "public_key_path" {
  type    = string
  default = "~/Downloads/ud_key.pem"
}