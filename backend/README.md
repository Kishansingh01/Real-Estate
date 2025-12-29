# Real Estate Backend API

Backend server for Real Estate application with authentication using JWT cookies and bcrypt.

## Features

- ✅ User Signup with bcrypt password hashing
- ✅ User Login with JWT token in HTTP-only cookies
- ✅ User Logout
- ✅ Protected routes with authentication middleware
- ✅ MongoDB database
- ✅ CORS enabled for frontend

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/real-estate
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

3. Make sure MongoDB is running on your system

4. Start the server:
```bash
# Development mode with nodemon
npm run dev

# Production mode
npm start
```

## API Endpoints

### Authentication Routes

#### 1. Signup
- **POST** `/api/auth/signup`
- **Body**: 
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### 2. Login
- **POST** `/api/auth/login`
- **Body**: 
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

#### 3. Logout
- **POST** `/api/auth/logout`
- **Auth**: Required (Cookie)

#### 4. Get Current User
- **GET** `/api/auth/me`
- **Auth**: Required (Cookie)

#### 5. Health Check
- **GET** `/api/health`

## Security Features

- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens stored in HTTP-only cookies
- CORS configured for frontend
- Password validation (minimum 6 characters)
- Email validation
- Secure cookie settings in production

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs for password hashing
- jsonwebtoken for authentication
- cookie-parser for cookie handling
- CORS for cross-origin requests
