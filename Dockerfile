FROM node:24-slim

# Install Chromium dependencies
RUN apt-get update && \
    apt-get install -y \
        ca-certificates \
        fonts-liberation \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libcups2 \
        libdbus-1-3 \
        libdrm2 \
        libgbm1 \
        libnspr4 \
        libnss3 \
        libx11-xcb1 \
        libxcomposite1 \
        libxdamage1 \
        libxrandr2 \
        xdg-utils \
        libu2f-udev \
        libvulkan1 \
        chromium \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser
ENV PORT=8080

CMD ["node","index.js"]
