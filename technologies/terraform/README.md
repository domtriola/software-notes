# Terraform

[Terraform](https://www.terraform.io/) is a configuration language for managing infrastructure. It does not handle the actual deployment of code.

Note that although artifacts created by Terraform are typically ignored by Git, they are still important, because they are the source of truth about what Terraform has already created for you.

## Commands

First `cd` into the directory containing the desired `main.tf` file.

**Initialize**

```bash
terraform init
```

**Preview Plan**

```bash
terraform plan
```

**Deploy**

```bash
terraform apply
```
