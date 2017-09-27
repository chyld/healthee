FROM ruby:2.4.1

# JSON API ONLY RAILS SERVER DOES NOT NEED JAVASCRIPT OR ASSETS
RUN apt-get update && apt-get install vim postgresql-client -y
RUN gem install rails
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN bundle install
