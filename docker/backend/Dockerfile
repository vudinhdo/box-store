# Sử dụng image PHP chính thức với các tiện ích cần thiết
FROM php:8.1-fpm

# Cài đặt các tiện ích cần thiết
RUN apt-get update && apt-get install -y \
    curl \
    libpq-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-install pdo pdo_mysql mbstring exif pcntl bcmath gd

# Cài Composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# Set thư mục làm việc
WORKDIR /var/www

# Sao chép file
COPY . .

# Cấp quyền cho thư mục storage và bootstrap/cache
RUN chmod -R 775 storage bootstrap/cache

# Cài đặt các package PHP
RUN composer install

# Expose cổng 9000 cho PHP-FPM
EXPOSE 9000

CMD ["php-fpm"]
