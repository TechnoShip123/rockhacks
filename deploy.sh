# This file is only configured for the rockhacks.dev web server

# 1) Build static files
npm run build

# 2) Remove pre-existing files from the web directory
sudo rm -rf /var/www/html

# 3) Copy static files to web directory, which our nginx server is setup to serve
sudo cp -r dist /var/www/html

# 4) Reload nginx, just in case
sudo nginx -s reload
