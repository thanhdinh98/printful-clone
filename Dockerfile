FROM node:11-alpine
ENV API_URI=https://api-kingify.tvtprod.com
RUN apk --update add git
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
