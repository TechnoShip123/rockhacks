# This file is only configured for the rockhacks.dev web server

# 1) Build static files
npm run build

# 2) Remove pre-existing files from the web directory
sudo rm -rf /var/www/html && echo "Removed old /var/www/html directory, copying new files..."

# 3) Copy static files to web directory, which our nginx server is setup to serve
sudo cp -r dist /var/www/html && echo "Sucessfully copied new files to /var/www/html directory, reloading nginx..."

# 4) Reload nginx, just in case
sudo nginx -s reload && echo "Nginx has been reloaded! See the changes at https://rockhacks.dev/"
