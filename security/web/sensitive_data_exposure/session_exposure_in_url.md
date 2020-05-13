# Session Exposure in URL

If a session ID is sent in a URL, then it would be more likely to show up in application logs and/or copy pasted by the user when they try to share a login link.

## Red Team

Look for session info in GET requests

## Blue Team

Send session info with a cookie that is `HttpOnly` and `Secure`.

Don't send session info over in the URL of GET requests or the data of POST requests. GET requests are likely to expose session info, because they are often stored in browser histories, bookmarks, referrer headers, upstream proxy logs, web application logs, and many more potential places. POST request data is still susceptible to being stolen via XSS attacks.

```bash
# Good (cookie should be set with HttpOnly and Secure flags)
curl https://example.com/login --cookie "session_id=123456"

# Bad
curl http://example.com/login?session_id=123456
# Also Bad
curl https://example.com/login -d '{"session_id": "123456"}'
```
