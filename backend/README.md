# API

Backend APIs for Vendora E-commerce Application

Generate API Documentation

```bash
npx @redocly/cli build-docs backend/swagger.json --output docs/api-docs.html
```

To generate new classes for a new module. 

Example for category classes

```bash
npx nest g module modules/category
```

```bash
npx nest g controller modules/category
```

```bash
npx nest g service modules/category
```

If a database schema change is done

```bash
npx prisma migrate dev --name your_migration_name
```