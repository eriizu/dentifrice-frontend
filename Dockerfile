FROM node:alpine as build

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

FROM node:alpine

COPY --from=build /app/build /html

EXPOSE 9000

CMD [ "yarn", "serve", "/html" ]
