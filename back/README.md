## Project setup

```bash

Create .env file ./back/docker/.env
OR
rename ./back/docker/.env.example to ./env
back -> docker -> .env
This file should contain ---->
DATABASE_URL=postgresql://master:secret@database:5432/df

Example:
DATABASE_URL=postgresql://master:secret@database:5432/df

# Use docker!
# Run scripts only in root directory (with package.json)


# Setup database
$ npm run prisma:migrate

#Add basic info (flowers)
$ npm run prisma:seed

# Start backend in docker
$ npm run start:docker
```
