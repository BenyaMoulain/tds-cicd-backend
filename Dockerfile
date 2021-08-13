FROM node:14-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
COPY package*.json ./
RUN npm install
ARG MONGOURI
RUN echo "mongoUri: ${MONGOURI}"
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