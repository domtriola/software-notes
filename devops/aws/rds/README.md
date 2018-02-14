# Amazon Relational Database Service (RDS)

* Creating a new (free-tier) instance: `aws rds create-db-instance --engine postgres --no-multi-az --no-publicly-accessible --vpc-security-group-ids SECURITYGROUP --db-instance-class db.t2.micro --allocated-storage 20 --db-instance-identifier INSTANCENAME --db-name DBNAME --master-username DBUSERNAME --master-user-password DBPASSWORD`
* Updating db password: `aws rds modify-db-instance --db-instance-identifier INSTANCENAME --master-user-password NEWPASSWORD`
* Delete instance: `aws rds delete-db-instance --db-instance-identifier INSTANCENAME --skip-final-snapshot`
