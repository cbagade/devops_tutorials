// create bucket first
// aws s3 mb s3://bucket-stroing-tfstate
// terraform init
// terraform apply --auto-approve
// aws s3 ls s3://bucket-stroing-tfstate --recursive
// terraform destroy --auto-approve
// after terraform destroy
// aws s3 rb s3://bucket-stroing-tfstate --force

terraform {
    backend "s3" {
        key = "terraform/terraform.tfstate"
        bucket = "bucket-stroing-tfstate"
        region="us-east-1"
    }
}
