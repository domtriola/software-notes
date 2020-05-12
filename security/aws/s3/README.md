# S3

Don't configure buckets with overly permissive configurations. For example, although external users may need to be able to "s3:GetObject" (e.g. for a static site hosted in S3), they do not need to be able to "s3:ListBucket", which might provide them with access to files that they otherwise wouldn't be able to find.

**NOTE:** "Any Authenticated AWS User" means just that: ***any*** user. It does not imply that that user has been authorized to interact with your account. Instead only grant access to specific users in your account.

**NOTE:** all buckets are globally unique, so don't name a bucket something that you wouldn't want someone to be able to deduce (e.g. acquisition_with_xcompany).

**NOTE:** the ability to list all buckets cannot be fine-tuned. It's all or nothing.
