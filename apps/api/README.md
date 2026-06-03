# Prisma Commands for NestJS API

## 📦 Installation

``` bash
# Install Prisma CLI as dev dependency
npm install -D prisma

# Install Prisma Client as regular dependency
npm install @prisma/client


# Initialize Prisma in your project (creates prisma/schema.prisma)
npx prisma init     # no need for this already done n this repo 

# Generate Prisma Client after schema changes
npx prisma generate     # first Run this command 

# Push schema changes directly to database (no migration files)
npx prisma db push  # second command 

# Open Prisma Studio (GUI to view/edit data)
npx prisma studio

# View database schema
npx prisma db pull



# Create and apply a new migration
npx prisma migrate dev --name init

# Create migration with custom name
npx prisma migrate dev --name migration_name 

# Create migration without applying (for production)
npx prisma migrate dev --create-only --name migration_name

# Apply all pending migrations to database
npx prisma migrate deploy

# Reset database and apply all migrations
npx prisma migrate reset      #Dangerous it will delete everything 

# Format schema file
npx prisma format
      
# Generate artifacts and clean cache
npx prisma generate --no-engine

# Seed database with initial data
npx prisma db seed

```