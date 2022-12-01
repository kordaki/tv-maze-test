# TV-Maze

I initialized the project with a basic command `npm init vue@latest` (without any special boilerplate). It's used **Vue 3** with composition api, **TypeScript**, **Axios**, **Vitest** and **Pinia**.

- [API and data](#api-and-data)
- [Logic](#logic)
- [Sort and search](#sort-and-search)
- [Test](#test)
- [For the future](#for-the-future)
- [Project setup](#project-setup)

## API and data
I used **Axios** and put the configuration file into `/config` path. API calls are defined into `/services/api`. The response for ech API includes many details. Since I didn't want to keep the extra fields into the store, I transformed the response with new limited fields in `/services/transformed` path.

> `responseTransformations` can be models and effect on the response of get method on axios, But I put them in `interceptors` because of **Lighter cached data** in memory.

I wanted to cache API response with [TanStack](https://tanstack.com/query/v4/docs/adapters/vue-query) (Vue-Query). In that case I had to keep the whole response in cache and transform it to an smaller object each time. But with transforming response in the interceptor level, the response will be sanitized before caching. In the case of using 

## Logic
I put logic into Pinia because I found it very performant with memoization on `computed` method. and the value can be shared with other parts. In addition, logic and components are separated.

## Video list
For showing videos in their genres,  I need a list of genres then load the relevant videos under that genre. I used **hashmap** for this to reduce the complexity to `O(n)` with one loop.

## Sort and search
I used query params in URL to store values of search and sort in order to have: 
1. keeping the history and having the ability of checking the previous results with the back button of browser,
2. user can share the result of his search with others with sharing the URL with query params.

## Test
In order to covering a wide range of test cases, I created a **MockBuilder** in `/mock` path (I really liked that :D ). Each time it generates new objects then tests will be more efficient specially in pipeline after each Push/PR. I tried to cover with unit tests for Pinia stores and logic plus ui component tests. I hope I could increase the test-coverage till the moment you're checking this project.

Test coverage **87%** for `/stores` including logics.

## For the future
- Pipeline and ci for Tests, Test coverage, lint and build
- Cache API responses with [TanStack](https://tanstack.com/query/v4/docs/adapters/vue-query) (Vue-Query)
- Lazy load for the videoList API and loading the new chunk of response when user scrolls to the end of the list. (I couldn't find pagination as a parameter of videoList API)
- Render elements which are only visible in the viewport. I know a tool for it in React [Rect-Window](https://github.com/bvaughn/react-window). (new generation: react-vtree, old generation: react-virtualized)
- Add an UI-Kit and make a better UI
- Breadcrumbs for showing the current route in the page
## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
