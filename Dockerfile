FROM node:lts AS dependencies
WORKDIR /wbyt-web
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /wbyt-web
COPY . .
RUN yarn
RUN yarn build

CMD ["yarn", "start"]
