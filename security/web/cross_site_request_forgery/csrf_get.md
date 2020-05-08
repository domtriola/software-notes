# Cross Site Request Forgery (CSRF) GET

A GET CSRF attack is when someone makes a GET request as a user on a different site without that user knowingly prompting the request. This works if the user is already authenticated with the target site via cookies, because browsers will automatically attach a site's cookies to any requests to that site.

## Red Team

Get requests can be triggered automatically when a user visits a page by using the request as the `src` of an image tag.

```html
<!-- fake.example.com -->
<html>
  <body>
    <p>Server Error. Please try again later</p>

    <img width="0" height="0" border="" src="https://real.example.com/some/action">
  </body>
</html>
```

## Blue Team

Don't use GET methods for any Create, Update, or Delete methods. GET should only Read.
