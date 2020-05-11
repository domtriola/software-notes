# Web Cache Deception

Web cache deception can happen if users are redirected to cached sensitive pages instead of 404 pages in the event of a missing resource.

## Red Team

While authenticated, try making a request for a resource that doesn't exist, but would probably be cached if it did (e.g. a CSS file).

```bash
curl https://example.com/nonexistent.css
```

If you notice that you are redirected to a page with sensitive data instead of /home or /not-found, then try revisiting the link in an incognito window. If you are sent to the same page (without having authenticated), then the app is vulnerable to cache deception.

## Blue Team

* Only cache static content
* All missing resources should redirect to a 404 not found page
