# Security

This is a compilation of notes on software and web related security.

## OWASP Top Ten

The [OWASP Top Ten](https://owasp.org/www-project-top-ten/) is a list of the 10 most critical security risks to web applications.

### Top 10 as of 2020

1. [Injection](./injection)
    * [SQL Injection](./injection/sql_injection.md)
    * [Command Injection](./injection/command_injection)
2. [Broken Authentication](./broken_authentication)
    * [Session Fixation](./broken_authentication/session_fixation.md)
    * [Insufficiently Random Values](./broken_authentication/insufficiently_random_values.md)
3. [Sensitive Data Exposure](./sensitive_data_exposure)
    * [Authentication Credentials in URL](./sensitive_data_exposure/authentication_credentials_in_url.md)
    * [Session Exposure in URL](./sensitive_data_exposure/session_exposure_in_url.md)
    * [User Enumeration](./sensitive_data_exposure/user_enumeration.md)
4. XML External Entities (XXE)
5. [Broken Access Control](./broken_access_control)
    * [Horizontal Access Control](./broken_access_control/horizontal_access_control.md)
    * [Vertical Access Control](./broken_access_control/vertical_access_control.md)
6. [Security Misconfiguration](./security_misconfiguration)
    * [Privileged Interface Exposure](./security_misconfiguration/privileged_interface_exposure.md)
    * [Residual Debug Code](./security_misconfiguration/residual_debug_code.md)
7. [Cross-Site Scripting (XSS)](./cross_site_scripting)
    * [Reflected XSS](./cross_site_scripting/reflected_xss.md)
    * [Stored XSS](./cross_site_scripting/stored_xss.md)
    * [DOM XSS](./cross_site_scripting/dom_xss.md)
8. Insecure Deserialization
9. [Using Components with Known Vulnerabilities](./using_components_with_known_vulnerabilities.md)
10. Insufficient Logging & Monitoring

## More Vulnerabilities

* [Path (Directory) Traversal](./path_traversal)
* [Cross Site Request Forgery](./cross_site_request_forgery)
  * [CSRF POST](./cross_site_request_forgery/csrf_post.md)
  * [CSRF GET](./cross_site_request_forgery/csrf_get.md)
  * [Clickjacking](./cross_site_request_forgery/clickjacking.md)
* [Unvalidated Redirects and Forwards](./unvalidated_redirects_and_forwards)
  * [Insecure URL Redirect](./insecure_url_redirect.md)
* [Insecure TLS Validation](./insecure_tls_validation)
  * [TLS Misconfigurations](./insecure_tls_validation/tls_misconfigurations.md)
* [Insecure Caching](./insecure_caching)
  * [Cache Poisoning](./insecure_caching/cache_poisoning.md)
  * [Web Cache Deception](./insecure_caching/web_cache_deception.md)
