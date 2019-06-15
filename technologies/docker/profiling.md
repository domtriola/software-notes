# Application Profiling

* Display app stats: `docker stats CONTAINERNAMEA CONTAINERNAMEB ETC`

Helpful tool for profiling: https://github.com/William-Yeh/docker-wrk

* Find IP address (Mac): `ifconfig | grep inet`
* Run wrk: `docker run --rm williamyeh/wrk -t10 -c50 -d10s http://IPADDRESS:APPPORT`
