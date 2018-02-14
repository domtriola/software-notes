# Elastic Load Balancer (ELB)

* Create new load balancer: `aws elb create-load-balancer --load-balancer-name LBNAME --listeners "Protocol=HTTP,LoadBalancerPort=80,InstanceProtocol=HTTP,InstancePort=80" --subnets SUBNETA SUBNETB ETC --security-groups SECURITYGROUP`
* Update attribute: `aws elb modify-load-balancer-attributes --load-balancer-name LBNAME --load-balancer-attributes "{\"ConnectionSettings\":{\"IdleTimeout\":5}}"`
* Configure a health-check: `aws elb configure-health-check --load-balancer-name LBNAME --health-check "Target=HTTP:80/health-check,Timeout=5,Interval=30,UnhealthyThreshold=2,HealthyThreshold=10"`
