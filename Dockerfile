FROM node:18
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"] 
RUN npm install --production
COPY . .
CMD npm run build


