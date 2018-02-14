# Simple Storage Service (S3)

With the S3 service data is stored in inexpensive boxes with a lot of redundancy. Consider building in retry logic if an API call fails, since the S3 hardware is cheap and not the most reliable (the redundancy ensures that your data will still be there).

S3 is slow (especially for writes), so consider using a CDN (like CloudFront) as well.

## Buckets

Buckets must have a unique name, since the bucket name is part of the URI. Internally, there's no directory tree. Files just have names, and can be searched via regex patterns to mock a directory search. When querying S3 be sure to include trailing slashes to avoid accidentally gathering results from other paths.

For example, searching for everything at `a/b` would return both results.
```
a/b/c/foo.txt
a/bar.txt
```

* Create: `aws s3api create-bucket --bucket BUCKETNAME`
* Upload: `aws s3 cp FILEPATH s3://BUCKETNAME/FILENAME`
* List: `aws s3 ls s3://BUCKETNAME`
* Delete bucket contents: `aws s3 rm s3://BUCKETNAME --recursive`
* Delete bucket: `aws s3api delete-bucket --bucket BUCKETNAME`
