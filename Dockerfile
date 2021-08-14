FROM node:14-alpine
ARG MONGOURI
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json ./
RUN npm install
ENV NODE_ENV=production
ENV PORT=3001
ENV APP_ID=TDS-Tarea
ENV LOG_LEVEL=debug
ENV SESSION_SECRET=SECRET
ENV CONNECT_TO_MONGO=true
ENV MONGOURI=${MONGOURI}
RUN touch .env
EXPOSE 3001
RUN npm run compile
COPY /public /usr/src/app/dist/public
CMD ["npm", "start"]