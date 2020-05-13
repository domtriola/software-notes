# Cache Poisoning

Cache poisoning is when a user populates a site's cache with malicious data.

## Red Team

If you notice a header that seems to affect page content, try modifying the header and sending a new request after the cache expires. Then revisit the same page incognito. If you recieve the modified response, then the poisoning worked.

## Blue Team

* Caches should only serve static content
* Don't trust data from HTTP header directives
* If an HTTP header does influence the page content it should be included in the cache key
