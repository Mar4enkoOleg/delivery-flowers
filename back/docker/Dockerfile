FROM node:24.6-alpine as builder

#For Apple silicon / arm64 machines
#FROM node:lts

WORKDIR /app

COPY / .

RUN npm install
RUN npx prisma generate
RUN npm run build

FROM node:24.6-alpine

USER node

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder --chown=node:node /app/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /app/src/ ./src/
COPY --from=builder --chown=node:node /app/dist/ ./dist/
COPY --from=builder /app/tsconfig.build.json ./
COPY --from=builder /app/tsconfig.json ./

EXPOSE 3000

CMD ["node", "dist/main"]
