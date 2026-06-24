FROM nginx:alpine

# Verwijder de standaard Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Kopieer onze custom config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Kopieer de HTML file
COPY index.html /usr/share/nginx/html/

# Expose poort 80 (eis van de opdracht)
EXPOSE 80