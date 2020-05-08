# Authentication Credentials in URL

If authentication credentials are sent in the URL, then they will not only be visible to anyone with access to application logs, but also to any upstream proxy of the web app (if they are sent over HTTP rather than HTTPS).

## Red Team

Look for credentials in GET requests.

## Blue Team

Don't send credentials over GET requests and don't use HTTP. Instead use POST data to send credentials and always use HTTPS. GET requests are more likely to expose credentials, because they are often stored in browser histories, bookmarks, referrer headers, upstream proxy logs, and the web application logs.

```bash
# Good
curl https://example.com/login -d '{"user": "me", "password": "mysecretpassword"}'

# Bad
curl http://example.com/login?user=me&password=mysecretpassword
```
