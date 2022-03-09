Vue-Vite-Express App

This application makes use of the following technologies and technological decisions:

- ViteJS as a bundler
- Vue version 3.2.31
- The Composition API (Vue)
- Vue Router
- Docker
- NodeJS
- Express

## Fullstack application can be run by following the next steps:

1. In the project root, run: npm install
2. Navigate to the frontend folder: cd hapiness-slider
3. Run: npm install
4. Copy the .env.example file, rename it to .env and fill in the backend endpoint: http://localhost:5000/api
5. Navigate back to the project root: cd ..
6. Run: npm run dev

## Frontend application (alone) can be run in three different ways:

Copy the .env.example contents in a .env file & fill in the data

1. NPM & built-in Server

   - Navigate to the frontend application directory
   - run "npm install"
   - run:
     - npm run dev (development server)
     - npm run build (to build the application)

2. Docker Compose

- Navigate to the frontend application directory
  - Development:
    - run docker compose up --build
    - visit http://localhost:3000
  - Production:
    - run docker compose -f docker-compose.production.yml up --build
    - visit http://localhost:8080

3. Docker CLI

   - Navigate to the frontend application directory
   - run:
     - docker build . -t <name-this-image> -f Dockerfile.dev (to build the development image)
     - docker build . -t <name-this-image> -f Dockerfile.prod (to build the production image)
   - Once you have the Docker image
     - run:
       - Dev: docker run -v /app/src/node_modules -v $(pwd)/.:/app/src -d -p 3000:3000 -t --name <name-this-container> <name-of-dev-image>
       - Prod: docker run -d -p 3000:80 -t --name <name-this-container> <name-of-prod-image>
