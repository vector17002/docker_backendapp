FROM node:current-alpine

WORKDIR /app

COPY . .

RUN npm install typescript
RUN npm install
RUN npx tsc --init
RUN npm run build

EXPOSE 3000

CMD ["npm", "run" , "start"]