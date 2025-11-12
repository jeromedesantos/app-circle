# Circle App

This is a social media application that allows users to post threads, reply to threads, like threads, and follow other users.

## Project Structure

The project is divided into two main parts:

-   `frontend`: Contains the React-based user interface.
-   `backend`: Contains the Node.js API server and database logic.

## Features

-   **User Authentication**: Register, login, and manage user profiles.
-   **Threads**: Create, read, and delete threads.
-   **Replies**: Add replies to threads.
-   **Likes**: Like and unlike threads.
-   **Followers**: Follow and unfollow other users.
-   **Search**: Search for users.
-   **Real-time Updates**: Uses Socket.IO for real-time communication.

## Tech Stack

**Frontend:**

-   React
-   Vite
-   TypeScript
-   Redux Toolkit
-   TanStack Query
-   Tailwind CSS
-   Shadcn UI
-   Socket.IO Client

**Backend:**

-   Node.js with Express
-   TypeScript
-   Prisma (with PostgreSQL)
-   Redis
-   Socket.IO
-   JWT for authentication
-   Bcrypt for password hashing

## Prerequisites

-   Node.js (v18 or higher)
-   Bun
-   PostgreSQL

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd app-circle
    ```

2.  **Install backend dependencies:**
    ```bash
    cd backend
    bun install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend
    bun install
    ```

4.  **Set up environment variables:**
    -   Create a `.env` file in the `backend` directory. See the "Environment Variables" section for details.
    -   Create a `.env` file in the `frontend` directory. See the "Environment Variables" section for details.

5.  **Run database migrations:**
    ```bash
    cd backend
    bunx prisma migrate dev
    ```

6.  **Start the backend server:**
    ```bash
    cd backend
    bun run dev
    ```

7.  **Start the frontend development server:**
    ```bash
    cd frontend
    bun run dev
    ```

## API Endpoints

The API is versioned under `/api/v1`.

### User Routes (`/users`)

| Method | Endpoint         | Description                  |
| :----- | :--------------- | :--------------------------- |
| POST   | `/register`      | Register a new user          |
| POST   | `/login`         | Login a user                 |
| GET    | `/`              | Get all users                |
| GET    | `/:id`           | Get a user by ID             |
| PUT    | `/:id`           | Update a user's profile      |
| DELETE | `/:id`           | Delete a user                |
| POST   | `/forgot`        | Request a password reset     |
| POST   | `/reset`         | Reset password               |

### Thread Routes (`/threads`)

| Method | Endpoint | Description                |
| :----- | :------- | :------------------------- |
| POST   | `/`      | Create a new thread        |
| GET    | `/`      | Get all threads            |
| GET    | `/:id`   | Get a thread by ID         |
| PUT    | `/:id`   | Update a thread            |
| DELETE | `/:id`   | Delete a thread            |

### Reply Routes (`/replies`)

| Method | Endpoint | Description              |
| :----- | :------- | :----------------------- |
| POST   | `/`      | Create a new reply       |
| GET    | `/`      | Get all replies          |
| GET    | `/:id`   | Get a reply by ID        |
| DELETE | `/:id`   | Delete a reply           |

### Like Routes (`/likes`)

| Method | Endpoint | Description              |
| :----- | :------- | :----------------------- |
| POST   | `/`      | Like a thread            |
| DELETE | `/:id`   | Unlike a thread          |

### Follow Routes (`/follows`)

| Method | Endpoint | Description              |
| :----- | :------- | :----------------------- |
| POST   | `/`      | Follow a user            |
| DELETE | `/:id`   | Unfollow a user          |

## Environment Variables

### Backend (`backend/.env`)

```
NODE_ENV=development
BASE_URL="http://localhost:3000"
CORS_URL="http://localhost:5173"
DATABASE_URL="your_postgresql_database_url"
REDIS_URL="your_redis_url"
JWT_SECRET="your_jwt_secret"
```

### Frontend (`frontend/.env`)

```
VITE_BASE_URL=http://localhost:3000/api/v1
VITE_SOCKET_URL=http://localhost:3000
```
