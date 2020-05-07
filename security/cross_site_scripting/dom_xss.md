# DOM XSS

DOM XSS attacks are similar to [Reflected XSS](./reflected_xss.md) and [Stored XSS](./stored_xss.md) attacks, but they happen client-side rather than server-side.

## Red Team

You've noticed that a site is susceptable to DOM XSS attacks, so you craft a link that looks legit, because it does go to the real domain, but since the code is rendered it will immediately redirect to your own fake lookalike domain.

```txt
https://signup.example.com/specialoffer#<script>window.location='https://signup.examplé.com/specialoffer';</script>
```

## Blue Team

HTML-encode then JavaScript-encode all user input data.

Preventing DOM based XSS is complex, because there are so many potential ways for it to happen. Refer to the [OWASP Cheatsheet](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html) for more tips.

```js
// Good
const value = document.location.hash.slice(1);
const valueEncodedForHTML = encodeForHTML(value);
const valueEncodedForJS = encodeForJS(valueEncodedForHTML);
const element = document.createElement('div');
element.innerText = valueEncodedForJS; // prefer innerText over innerHtml
document.body.appendChild(element);

// Bad
const value = document.location.hash.slice(1);
document.write(value);
```

Take special care with these DOM values and functions:

```js
// Global Values
// (many of these will be encoded automatically by newer browsers, but don't
// assume all users will be on newer browsers)
window.name
document.referrer
document.URL
document.documentURI
location
location.href
location.search
location.hash

// Functions
eval
setTimeout
setInterval
document.write
document.writeIn

// Element Attributes
innerHTML
outerHTML
```
