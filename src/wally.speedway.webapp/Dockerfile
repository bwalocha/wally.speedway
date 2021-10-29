ARG PROJECT_NAME \
    VERSION

#
FROM nginx:mainline-alpine AS final
ARG PROJECT_NAME \
    VERSION

LABEL Maintainer="wally"

EXPOSE 80
EXPOSE 443

#WORKDIR /src

COPY ./src/${PROJECT_NAME}/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./src/${PROJECT_NAME}/dist /usr/share/nginx/html

#ARG USERNAME
#ARG PASSWORD
#RUN apk add --no-cache --virtual .build-deps apache2-utils && \
#    htpasswd -Bbn "$USERNAME" "$PASSWORD" > /etc/nginx/.htpasswd && \
#        apk del .build-deps
