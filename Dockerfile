FROM node:16.16
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --silent
COPY . ./
CMD ["yarn", "start"]