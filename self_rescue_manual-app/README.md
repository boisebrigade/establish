# Self Rescue App
This repository contains the code the [self rescue manual](http://www.selfrescuemanual.com/)


## Relevant Links
[Website](http://www.boisebrigade.org)  
[Mockups](https://sketch.cloud/s/lKP8e/all/pages/landing-page-small-combined)  
[Group Email](boisebrigade@gmail.com)
[Establish App Dev Server](https://establish-rescuemanual.firebaseapp.com/)


## Dev env

This app uses the backend-as-a-service [contentful.com](https://www.contentful.com/) for content management.
Contact the [Group Email](boisebrigade@gmail.com) for a .env file to access, or if forking this app, create your own account and load your own data following the schema in [this file](contentful.json)  

### Hosting

To use firebase for hosting, install firebase-tools cli, and issue `firebase deploy` command


#### Project setup
```
yarn install
```

#### Compiles and hot-reloads for development
```
yarn run serve
```

#### Compiles and minifies for production
```
yarn run build
```

#### Run your tests
```
yarn run test
```

#### Lints and fixes files
```
yarn run lint
```

#### Run your unit tests
```
yarn run test:unit
```
