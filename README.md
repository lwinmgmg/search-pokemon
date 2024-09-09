# Search Pokemon
Implemented CI/CD github action and vercel deployment. 100% code coverage for utility functions.
1. Features
2. Developer Guide

## 1. Features
UI Link
https://search-pokemon-lmm.vercel.app/

### Pages
 1. Pokemon kanban view "/"
 2. Pokemon detail view "/pokemons/<id: string>"
 3. Pokemon search view "/pokemons/search"
 4. Pokemon favorite view "/pokemons/favorites"

### Search Feature
Pokemon can be search using search bar. It exist in every pages.
It support both blind search and hint search.

### Dark Mode
Dark mode and light mode can easily be switch through a button in navigation bar.
### Others
 - Used cookie to save theme data(dark or light mode)
 - Also used cookie for saving favorite pokemons
 - React Context, Reducer, State, Effect are also used to data manipulation.
 - Mock Test for fetch function and cookie.

## 2. Developer Guide
This project is setup using dev container and so you will need the following requirements. Not recommand to use local setup.
### Requirements
    1. Container Service (eg. Docker)
    2. VsCode Extension (Dev Containers[ms-vscode-remote.remote-containers])
Once you have setup the above requiements, you can run the following steps.

### Configurations
Please setup **.env.local** file in the same directory with **package.json** for **BACK_END_URL** environment variable.


For example,
```
BACK_END_URL=https://graphql-pokemon2.vercel.app/
```

### Testing
```
cd seaarch-pokemon/
npm run test
```

### Linting
```
npm run lint
```

### Dev Deployment
```
npm run dev
```

### Production Deployment
I would prefer to use Docker Deployment using Docker image.
```
npm run build && npm run start
```

______
