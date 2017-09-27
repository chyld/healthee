# healthee

```
INSTALL PG GEM ON MACOS
brew install pgcli
gem install pg -- --with-pg-include=/usr/local/Cellar/libpq/9.6.5/include/
bundle install

DOCKER COMPOSE
dc build
dc up -d
dc down
dc down --rmi all
dc down --rmi all -v

CLONE DEV DATABASE TO PRODUCTION
SELECT pg_terminate_backend(pg_stat_activity.pid) FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'health_development' AND pid <> pg_backend_pid();
CREATE DATABASE health_production WITH TEMPLATE health_development OWNER postgres;

CREATE PRODUCTION VERSION OF REACT APPLICATION
npm run build
npm install -g serve
serve -s build
```
