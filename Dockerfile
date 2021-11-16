FROM ubuntu:18.04

RUN     apt-get update && \
        apt-get upgrade -y && \
        apt-get install -y git curl

# Installing NodeJS
RUN     curl -fsSL https://deb.nodesource.com/setup_14.x | bash - && \
        apt-get install -y nodejs

COPY . .

WORKDIR /styleguidist

RUN npm install -y -g vue-cli && \
    npm install -y&& \
    npm install --save plugins




#CMD ["ls"]
CMD ["npm","run","styleguide"]
