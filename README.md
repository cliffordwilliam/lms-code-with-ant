This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Stuff i did

ref is here: https://www.youtube.com/watch?v=Big_aFLmekI&t=2392s

create the next app

the init the shadcn rickamorti

npx shadcn-ui@latest init

- use ts
- default style
- base color Slate
- app/globals.css
- css var color? yes
- tailwind.config.js
- @/compo
- @/lib/u..
- react server comp? yes
- write to comps.json yes

purge the default root page

grab button from shad
ui-components-button in shadcn website, copy paste the npm i
npx shadcn-ui@latest add button

to quick import, type like this `<Butt...` then the import will come up

ok so for this proj, the root page is in dashbaord group

so NOW i make 2 group, (auth), (dashboard), ...
in each one got (routes)
in one of them its the root page
the other got dir called sign in then page
thats it for now

NAME IS sign-in, cuz later use clerk, must be like thisss

# New info

not important but u can do this faster npx create bla bla
npx create-next-app@latest app-name --typescript --tailwind --eslint

if u fukup ur shad compo tsx file, just re install it, it will overwrite fresh
npx shadcn-ui@latest add button --overwrite
use the overwrite flag ya

wrong version? just edit the config then npm i again no prob

create a group dir to group route
u can move the root page here btw no prob, it will be still root if parent is still directly app (i mean parent without the (dir like this))
then if u got layout sibling to the group dir, that layout will only apply to the grouped pages
