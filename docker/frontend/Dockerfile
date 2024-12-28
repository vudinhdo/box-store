# Sử dụng Node.js chính thức
FROM node:20

# Set thư mục làm việc
WORKDIR /app

# Sao chép file
COPY package*.json ./
COPY . .

# Cài đặt package
RUN npm install

# Build dự án
RUN npm run build

# Expose cổng 3000 (hoặc cổng mà React dev server chạy)
EXPOSE 3000

CMD ["npm", "start"]
