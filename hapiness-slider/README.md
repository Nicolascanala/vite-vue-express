Hello!

This application makes use of the following technologies and technological decisions:

- ViteJS as a bundler
- Vue version 3.2.31
- The Composition API (Vue)
- Vue Router
- Docker

## You can run this application in three different ways:

# Copy the .env.example contents in a .env file & fill in the data

1. NPM & built-in Server

   - Navigate to the application directory
   - run "npm install"
   - run:
     - npm run dev (development server)
     - npm run build (to build the application)

2. Docker Compose

- Navigate to the application directory
  - Development:
    - run docker compose up --build
    - visit http://localhost:3000
  - Production:
    - run docker compose -f docker-compose.production.yml up --build
    - visit http://localhost:8080

3. Docker CLI

   - Navigate to the application directory
   - run:
     - docker build . -t <name-this-image> -f Dockerfile.dev (to build the development image)
     - docker build . -t <name-this-image> -f Dockerfile.prod (to build the production image)
   - Once you have the Docker image
     - run:
       - Dev: docker run -v /app/src/node_modules -v $(pwd)/.:/app/src -d -p 3000:3000 -t --name <name-this-container> <name-of-dev-image>
       - Prod: docker run -d -p 3000:80 -t --name <name-this-container> <name-of-prod-image>
