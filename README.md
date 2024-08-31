# **Frontend Mentor Challenge - Fylo dark theme landing page**

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd "https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Input change event](#input-change-event)

- [Resources](#resources)

## Overview

Links:

- GitHub Repo: <https://github.com/xup60521/Fylo-dark-theme-landing-page>

- Website: <https://xup60521.github.io/Fylo-dark-theme-landing-page/>

```bash
# install dependencies
bun install
# start vite dev server
bun run dev
# build (output path /dist)
bun run build
```

## My process

### Built with

- vite

- typescript

- tailwindcss

- zod (for email validation)

### What I learned

#### Input change event

In react, we often use `onChange` to interact between state and UI. However in semantic HTML, the binding is different. We need to use `input` instead of `change`.

```ts
emailInput.addEventListener("input", (event) => {
    // fix typescript error
    const { value: email } = event.target as HTMLInputElement;
    validateEmail()
});
```

## Resources

- Google Fonts - <https://fonts.google.com>