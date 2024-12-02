# Task Manager API

This is a Task Manager API built with NestJS. It provides endpoints for managing tasks and users, as well as authentication functionalities.

## Table of Contents

- [Installation](#installation)
- [Running the app](#running-the-app)
- [Test](#test)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)
- [License](#license)

## Installation

1. Clone the repository:

```bash
git clone <repo_url>
cd task-backend
```

2. Install the dependencies:

```bash
npm install
```

3. Set up the environment variables. Create a `.env` file in the root directory and add the following:

```env
DB_HOST=your_db_host
DB_PORT=your_db_port
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret
JWT_TOKEN_AUDIENCE=your_jwt_audience
JWT_TOKEN_ISSUER=your_jwt_issuer
JWT_ACCESS_TOKEN_TTL=3600
JWT_REFRESH_TOKEN_TTL=86400
```

## Running the app

If you have `Docker` installed and running first run the command and make sure it's running

```bash
docker-compose up -d
```

```bash
# development
npm run start:dev

# production
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## API Documentation

The API documentation is available at `/api` when the app is running. It is generated using Swagger.

## Environment Variables

- `DB_HOST`: Database host
- `DB_PORT`: Database port
- `DB_USERNAME`: Database username
- `DB_PASSWORD`: Database password
- `DB_NAME`: Database name
- `JWT_SECRET`: JWT secret key
- `JWT_TOKEN_AUDIENCE`: JWT token audience
- `JWT_TOKEN_ISSUER`: JWT token issuer
- `JWT_ACCESS_TOKEN_TTL`: JWT access token time-to-live
- `JWT_REFRESH_TOKEN_TTL`: JWT refresh token time-to-live
