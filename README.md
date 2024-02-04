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

ADD CLERK

go to clerk.com

sign in with github

go add google and email

then go find API KEY in the dashboard somewhere idk in the UI whatever

go add .env to the gitignore

go read the docs: https://clerk.com/docs/quickstarts/nextjs

install this: npm install @clerk/nextjs

then grab their root layout - DO NOT COPY PASTE, HUG HTML WITH ClerkProvider from @clerk/nextjs

make middleware - copy from doc (middleware is sibling to .env)

create the sign in and sign up, copas from doc, MAKE SURE DIR IS CORRECT

`[[...sign-up]]` = so it grabs all params, if got no param it works also
WE NEED THE FOLLOWING COMPS - sign-up && sign-in = FIND IN DOC

then grab the other env file for sign in and up
they moved it here https://clerk.com/docs/references/nextjs/custom-signup-signin-pages

ok so u can actually modify the endpoint for sign in and up, just make sure u update the folder names and the .env value names later

ok last, need to be able to log out. USE THE USER BUTTON from clerk/nextjs

```tsx
<UserButton afterSignOutUrl="/" />
```

done tahts it, protected, and can login and wahtever

I USE SRC!! SO PUT MIDDLEWARE IN SRC YAA

DONE

wanna center the login register clerk formies? use layout sibling to the (routes)

BASE STYLING
go to the global css
add these
do not delete the rest wasting time
html,body,:root{height:100%;}

---

Ok now working on the dashboard layout

sidebar is fixed top0 bot0, 100height, set width,

then sidebar hugs the Logo comp and the SidebarRoutes comp

SidebarRoutes maps SidebarRoute THESE 2 ARE CLIENT COMP (PATHNAME STYLING && ROUTER)

note, if u are passing rpom, craete type in the receiver (or interface)

here i used interface to create the props type

now that sidebar is done, lets create the child (the thing on right side of sidebar)

since sidebar is fixed in position, the main need pad to push it to right

done for now the main thing

working on the navbar now - this is its own compo

inside the navbar, need to make another compo for the MobileSidebar - contains only the menu icon from lucide

NOW HOW TO MAKE THAT INTO A BTN THAT OPENS A MOBILE MENU?? SHADCN

npx shadcn-ui@latest add sheet

then just do this and ur done

```tsx
<Sheet>
  <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
    <Menu />
  </SheetTrigger>
  <SheetContent side={"left"} className="p-0 bg-white">
    <Sidebar />
  </SheetContent>
</Sheet>
```

Sidebar is being reused here, one in the pc version (fixed) - the other in here not fixed, but inside the sheet content

so later above remove the fixed class from the sidebar comp

add user button to the navbar

done, so basically there is menu (on side or on click) - on the left side
then theres burger + ur account from clerk - on navabr

thats it

in this tutorial he created a button to navifate to either dashboard or the teacher endpoint fe
when ur in the dashboard, the sidebar menu is set a, in teacher it is set b

buttt for this one i am making a diff dashboard menu items based on who is logged in instead

then I am making the create blog and services USE CLIENT

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

READ UP THERE HOW TO SETUP CLERK - BY DEFAULT IT PROTECTS EVERYTHING IF NOT LOGGED IN
can edit this so that there are other pub pages

dynamic class??
className={cn(
"flex items-center gap-2 py-4 px-6 hover:bg-slate-300/20",
isActive && "bg-sky-200/20 hover:bg-sky-200/20"
)}

      cn is from
      import { cn } from "@/lib/utils";

      this is from shadcn

navbar or items that are links

```tsx
const isActive =
  (pathName === "/" && href === "/") || // root?
  pathName === href || // other? || sub other?
  pathName?.startsWith(`${href}/`);
```

use client comp that has links colored when they r active

make a mobile menu open on click?? shadcn SHEET
see above how i did it
