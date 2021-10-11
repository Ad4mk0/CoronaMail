FROM node:14.12.0-alpine

WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
# RUN yarn install && yarn build && yarn cache clean
RUN npm install
COPY . ./

# RUN rm -rf .prisma/generated-client

# RUN npm run build

# RUN npm run generate-prisma-client

EXPOSE 4000
# CMD ["npm", "run", "dev"]
CMD ["npm", "start"]