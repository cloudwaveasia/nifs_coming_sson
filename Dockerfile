FROM nginx:alpine

# Copy all static web files to Nginx web root directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/
COPY particles.js /usr/share/nginx/html/
COPY nifs_logo.png /usr/share/nginx/html/

# Expose standard HTTP port
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
