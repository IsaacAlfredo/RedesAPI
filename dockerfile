FROM node:latest
WORKDIR /app
COPY package.json .
RUN yarn install --production
COPY . .
CMD ["node", "App/index.js"]
EXPOSE 3000
