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
3. Sensitive Data Exposure
4. XML External Entities (XXE)
5. Broken Access Control
6. Security Misconfiguration
7. [Cross-Site Scripting (XSS)](./cross_site_scripting)
    * [Reflected XSS](./cross_site_scripting/reflected_xss.md)
    * [Stored XSS](./cross_site_scripting/stored_xss.md)
8. Insecure Deserialization
9. Using Components with Known Vulnerabilities
10. Insufficient Logging & Monitoring
