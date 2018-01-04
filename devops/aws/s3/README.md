# Simple Storage Service (S3)

## Buckets

Create: `aws s3api create-bucket --bucket BUCKETNAME`
Upload: `aws s3 cp FILEPATH s3://BUCKETNAME/FILENAME`
List: `aws s3 ls s3://BUCKETNAME`
Delete bucket contents: `aws s3 rm s3://BUCKETNAME --recursive`
Delete bucket: `aws s3api delete-bucket --bucket BUCKETNAME`
