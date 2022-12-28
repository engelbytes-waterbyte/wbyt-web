FROM node:lts AS dependencies
WORKDIR /wbyt-web
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /wbyt-web
COPY . .
COPY --from=dependencies /wbyt-web/node_modules ./node_modules
RUN yarn build

CMD ["yarn", "start"]