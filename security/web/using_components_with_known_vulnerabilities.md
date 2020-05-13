# Using Components with Known Vulnerabilities

All 3rd party components (e.g. libraries, servers, services, etc.) should be kept up to date, because security patches are released all the time.

## Red Team

Search for known vulnerabilities at places like [National Vulnerability Database](https://nvd.nist.gov/) and try them out.

## Blue Team

* Update all libraries and systems regularly. This should be automated, because humans don't usually keep tabs on all software that a system uses.
* Continuously monitor vulnerability databases like the [National Vulnerability Database](https://nvd.nist.gov/) for security vulnerabilities that might affect your application.
* Automate keeping tabs on libraries that haven't published new versions in a while. If they seem unmaintained consider switching to a better maintained library.
* Minimize the use of 3rd party dependencies where reasonably possible.
