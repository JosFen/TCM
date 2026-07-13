#!/bin/sh
set -e

echo "Waiting for database..."
until npx prisma migrate deploy > /dev/null 2>&1; do
  echo "Database not ready yet, retrying in 2s..."
  sleep 2
done

echo "Migrations applied."

PLANT_COUNT=$(npx ts-node scripts/check-db-count.ts 2>/dev/null || echo "0")

if [ "$PLANT_COUNT" = "0" ]; then
  echo "Database is empty. Running seed..."
  npm run seed
else
  echo "Database already has data ($PLANT_COUNT plants). Skipping seed."
fi

echo "Starting backend..."
exec "$@"
