#!/bin/bash

echo "Connecting to RDS and creating database..."

mysql -h $RDS_HOSTNAME -u $RDS_USERNAME -p$RDS_PASSWORD -e "CREATE DATABASE IF NOT EXISTS \`$DATABASE_NAME\`;"

echo "Database $DATABASE_NAME created or already exists."
