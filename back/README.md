## Project setup

```bash

Create .env file ./back/docker/.env
back -> docker -> .env
This file should contain ---->
DATABASE_URL=postgresql://master:secret@database:5432/df

Example:
DATABASE_URL=postgresql://master:secret@database:5432/df

# Use docker!

# Start backend in docker
$ npm run start:docker
# If it fails, repeat the command

# Setup database
# When server is running, open separate terminal
# In separate terminal use command
$ npm run prisma:migrate

#Add basic info (flowers)
# In separate terminal use command
$ npm run prisma:seed
# !!!!!
# Run scripts only in root directory (with package.json)
```
