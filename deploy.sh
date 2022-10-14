# This file is only configured for the rockhacks.dev web server
NC='\033[0m' # No Color

# 1) Build static files
echo -e "\033[0;36Building project files for production...${NC}"
npm run build
echo -e "\033[0;32Successfully built project files for production!${NC}"

# 2) Remove pre-existing files from the web directory
echo -e "\033[0;31Cleaning out the web dir folder...${NC}"
sudo rm -rf /var/www/html
echo -e "\033[0;32Successfully cleaned out the web dir folder!${NC}"

# 3) Copy static files to web directory, which our nginx server is setup to serve
echo -e "\033[0;34Copying static prod files to web dir...${NC}"
sudo cp -r dist /var/www/html
echo -e "\033[0;32Successfully copied static files to web dir!${NC}"

# 4) Reload nginx, just in case
if sudo nginx -s reload; then
        echo -e "\033[1;32✓Nginx reloaded successfully! See your changes at https://rockhacks.dev/${NC}"
else
        echo -e "\033[0;31❌Nginx failed to reload! Something's wrong :(${NC}"
fi
