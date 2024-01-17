FROM node:latest
COPY ./quiz/package*.json .
RUN npm install
COPY ./quiz/index.js .
COPY ./quiz/static ./static
CMD ["npm","run","app"]
