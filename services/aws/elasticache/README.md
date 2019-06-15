# ElastiCache

* Create a (free tier) cluster: `aws elasticache create-cache-cluster --engine redis --security-group-ids SECURITYGROUP --cache-node-type cache.t2.micro --num-cache-nodes 1 --cache-cluster-id CLUSTERNAME`
* Delete cluster: `aws elasticache delete-cache-cluster --cache-cluster-id CLUSTERNAME`
