# Insecure URL Redirect

An insecure URL redirect is one that allows an attacker to redirect a user to an unintended site using URL parameters.

## Red Team

```html
<!-- If you notice a raw URL redirect, like: -->
<a href="/redirect?url=https://example.com/login">Login</a>
<!-- Try changing the url to see if it redirects to your own site -->
<!-- curl "https://example.com/redirect?url=https://maliciousexample.com/login" -->
```

## Blue Team

```go
// Good
// Don't redirect with user supplied values
// If you need user-input to determine where to redirect use a key to look up a
// redirect destination.
// e.g.
// <a href="/redirect?url=https://example.com/login">Login</a>
// becomes ->
// <a href="/redirect?dest=login">Login</a>
// "dest=login" is used to look up the actual login path server-side

// Also Ok
// parse the url to gather its individual components
url, _ := url.Parse(r.URL.Query().Get(url))
// use the path only to redirect
http.Redirect(w, r, url.Path, 302)

// Bad
url := r.URL.Query().Get("url")
http.Redirect(w, r, url, 302)
```
