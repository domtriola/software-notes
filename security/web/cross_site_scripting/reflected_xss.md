# Reflected XSS

Reflected XSS (also known as non-persistent XSS) is any XSS attack that is not stored on the server.

## Red Team

A common way to perform a reflected XSS is to create a link to a page that will display the contents of the link. For example, sometimes search pages display the searched for text of a query.

```bash
https://example.com/cats?search=%3Cscript%3Ealert(document.cookie)%3C%2Fscript%3E
```

## Blue Team

Sanitize all input before rendering it on a web page.

```go
// Good
// Use renderers that automatically escape input text
import("html/template")

// Bad
import("text/template")
```

Additional mitigations:

* Use the [HttpOnly cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Secure_and_HttpOnly_cookies) flag on cookies to prevent browser clients from accessing them
* Use the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) HTTP header to restrict page content sources
* Use the [X-XSS-Protection](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-XSS-Protection) HTTP header to tell browsers not to render the web page if an XSS attack is suspected in the page content
