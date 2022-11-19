FROM node:19-alpine3.15 As development

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install --only=development

COPY . .

RUN npm run build

FROM node:19-alpine3.15 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/api

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/api/dist ./dist

CMD ["node", "dist/main"]