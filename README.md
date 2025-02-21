# Company Management API

A RESTful API for managing companies and their contacts with CRUD operations, built with Express.js and MongoDB.

## Features

- JWT-based authentication
- CRUD operations for companies
- Contact management within companies
- Image upload handling
- Pagination, filtering, and sorting
- Dockerized MongoDB setup
- Automated testing suite

## Technologies

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: JWT, Argon2 password hashing
- **Testing**: Jest, Supertest
- **Infrastructure**: Docker, Docker Compose

## Getting Started

### Prerequisites

- Node.js v18+
- Docker & Docker Compose
- MongoDB Compass (optional)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/company-management-api.git
cd company-management-api
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables (copy .env.example to .env):

```bash
cp .env.example .env
```

4. Start the MongoDB container:

```bash
docker-compose up -d
```

5. Start the development server:

```bash
npm run start-dev
```


## API Documentation

### Base URL
`http://localhost:3000/api/v1`

### Authentication
| Endpoint | Method | Description              |
|----------|--------|--------------------------|
| `/auth/login` | POST | User login (get JWT token) |
| `/auth/register` | POST | Create new user account |

### Companies
| Endpoint | Method | Description              |
|----------|--------|--------------------------|
| `/companies` | GET | List companies (with filters) |
| `/companies` | POST | Create new company |
| `/companies/:id` | GET | Get company details |
| `/companies/:id` | PATCH | Update company |

### Contacts
| Endpoint | Method | Description              |
|----------|--------|--------------------------|
| `/contacts` | POST | Add contact to company |
| `/contacts/:id` | DELETE | Remove contact from company |
| `/contacts/:id` | PATCH | Update contact |
| `/contacts/:id` | GET | Get contact details |

