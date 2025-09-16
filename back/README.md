## Project setup

```bash
Rename ./back/docker/.env.example to ./env

# Use docker!
# Run scripts only in root directory (with package.json)

# Setup database
$ npm run prisma:migrate

#Add basic info (flowers)
$ npm run prisma:seed

# Start backend in docker
$ npm run start:docker
```
