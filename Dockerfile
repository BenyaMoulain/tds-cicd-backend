FROM node:14-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json ./
RUN yarn install
ENV NODE_ENV=production
ENV PORT=3001
ENV APP_ID=TDS-Tarea
ENV LOG_LEVEL=debug
ENV SESSION_SECRET=SECRET
ENV MONGOURI=mongodb+srv://tdsadmin:Rl7fYiEZZNtS2gWP@cluster0.69fjw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV CONNECT_TO_MONGO=true
COPY . .
RUN touch .env
EXPOSE 3001
RUN yarn compile
COPY /public /usr/src/app/dist/public
CMD ["npm", "start"]