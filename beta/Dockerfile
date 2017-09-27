# DEVELOPMENT DOCKERFILE

FROM ruby:2.4.1

RUN apt-get update && apt-get install vim postgresql-client -y

RUN gem install rails

RUN cd /usr/local                                                      \
  && wget https://nodejs.org/dist/v8.5.0/node-v8.5.0-linux-x64.tar.xz  \
  && tar -xvf node-v8.5.0-linux-x64.tar.xz                             \
  && mv node-v8.5.0-linux-x64 node                                     \
  && rm node-v8.5.0-linux-x64.tar.xz

ENV PATH "/usr/local/node/bin:$PATH"
ENV RAILS_ENV "development"

RUN npm i -g yarn
COPY . /usr/src/app
WORKDIR /usr/src/app

RUN bundle install
