# Vendora 🛒

A full-stack ecommerce platform built with **NestJS**, **Prisma**, and **PostgreSQL** on the backend, designed for scalable, production-ready online retail.

## API Documentation

📄 Full API reference is available **[here](https://achiranadeeshan.github.io/vendora/api-docs.html)**

## Tech Stack

| Layer      | Technology          |
| ---------- | ------------------- |
| Backend    | NestJS (TypeScript) |
| ORM        | Prisma              |
| Database   | PostgreSQL          |
| Auth       | JWT                 |
| Validation | class-validator     |

## Features

- User authentication & authorization (JWT)
- Product & inventory management
- Cart & checkout flow
- Order lifecycle management (create, update, cancel)
- Admin panel endpoints
- Payment integration support

## Getting Started

```bash
# Go into backend
cd backend

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Start the development server
npm run start:dev
```

## Environment Variables

```env
# Server Configuration
PORT=3000

# Neon PostgreSQL Connection
# Replace <user>, <password>, <host>, and <dbname> with your Neon dashboard values
# Or you can find your prebuilt link on neon dashboard
DATABASE_URL="postgresql://<user>:<password>@<host>/<dbname>?sslmode=require"

# JWT Authentication
# Generate a strong secret (e.g., using: openssl rand -base64 32)
JWT_SECRET="your_ultra_secure_access_token_secret_2026"
JWT_REFRESH_SECRET="your_ultra_secure_refresh_token_secret_2026"

# Token Expiry 
# Use only seconds (900) not string formats (15m, 1h, 7d)
JWT_EXPIRES_IN=900

# Stripe Payments
# Use your Test Key (sk_test_...) for development
STRIPE_SECRET_KEY="sk_test_51Pxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

## License

MIT
