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
PORT=
DATABASE_URL=
PORT=default
JWT_SECRET=
JWT_EXPIRES_IN=
JWT_REFRESH_SECRET=
STRIPE_SECRET_KEY=
```

## License

MIT
