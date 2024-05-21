# Template next <a href="" target="_blank">![Tweet]</a>

![version](https://img.shields.io/badge/version-1.1.0-blue.svg) ![license](https://img.shields.io/badge/license-MIT-blue.svg)

![Template NextJS](https://github.com/creativetimofficial/public-assets/blob/master/notus-nextjs/notus-nextjs.jpg?raw=true)

### A beautiful UI Kit and Admin for Tailwind CSS and NextJS.

Start your development with a Free Tailwind CSS and NextJS UI Kit and Admin. Let Notus NextJS amaze you with its cool features and build tools and get your project to a whole new level.

Notus NextJS is Free and Open Source. It features multiple HTML and NextJS elements and it comes with dynamic components for NextJS.

It is based on [Tailwind Starter Kit] by jusish, and it is build with both presentation pages, and pages for an admin dashboard.


If you like bright and fresh colors, you will love this Free Tailwind CSS Template! It features a huge number of components that can help you create amazing websites.

### Get Started

- Install NodeJS **LTS** version from <a href="https://nodejs.org">NodeJs Official Page</a>
- Download the product on this page
- Unzip the downloaded file to a folder in your computer
- Open Terminal
- Go to your file project (where you’ve unzipped the product)
- (If you are on a linux based terminal) Simply run `npm run install:clean`
- (If not) Run in terminal `npm install`
- (If not) Run in terminal `npm run build:tailwind` (each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to run this command)
- (If not) Run in terminal `npm run dev`
- Navigate to https://localhost:3000
- Check more about [Tailwind CSS](https://tailwindcss.com/)

### Pages

If you want to get inspiration or just show something directly to your clients,
you can jump start your development with our pre-built example pages. You will be able
to quickly set up the basic structure for your web project.

Here are all the page from the project:
- [Presentation]
- Admin Samples
  - [Dashboard]
  - [Settings]
  - [Tables]
  - [Maps]
- Authentication Samples
  - [Login]
  - [Register]
- Presentation Samples
  - [Landing]
  - [Profile]


### Fully Coded Components

Notus NextJS is built with over frontend 120 components, giving you the freedom of choosing and combining. All components can take variations in colors, that you can easily modify using Tailwind CSS classes (NOTE: each time you add a new class, a class that does not exist in `src/assets/styles/tailwind.css`, you will need to compile again tailwind).

You will save a lot of time going from prototyping to full-functional code, because all elements are implemented.
This Free Tailwind CSS Template is coming with prebuilt examples, so the development process is seamless, switching from our pages to the real website is very easy to be done.

Every element has multiple states for colors, styles, hover, focus, that you can easily access and use.



### NextJS Components

We also feature the following 18 dynamic components:
- [Alerts]
- [Popper for Menus]
- [Menus]
- [Modals]
- [Navbars]
- [Popper for popover content]
- [Tabs]
- [Popper for tooltips content]


## Table of Contents

* [Versions](#versions)
* [Documentation](#documentation)
* [Quick Start](#quick-start)
* [Files and folders](#files-and-folders)
* [Browser Support](#browser-support)
* [Reporting Issues](#reporting-issues)
* [Licensing](#licensing)
* [Useful Links](#useful-links)
* [Resources](#resources)


## Files and Folder

This is the project structure that you will get upon the download:
```
template-nextjs
.
├── CHANGELOG.md
├── ISSUE_TEMPLATE.md
├── LICENSE.md
├── README.md
├── assets
│   ├── img
│   │   ├── brand
│   │   │   └── favicon.ico
│   │   ├── github.svg
│   │   └── google.svg
│   └── styles
│       ├── index.css
│       └── tailwind.css
├── components
│   ├── Cards
│   │   ├── CardBarChart.js
│   │   ├── CardLineChart.js
│   │   ├── CardPageVisits.js
│   │   ├── CardProfile.js
│   │   ├── CardSettings.js
│   │   ├── CardSocialTraffic.js
│   │   ├── CardStats.js
│   │   └── CardTable.js
│   ├── Dropdowns
│   │   ├── IndexDropdown.js
│   │   ├── NotificationDropdown.js
│   │   ├── PagesDropdown.js
│   │   ├── TableDropdown.js
│   │   └── UserDropdown.js
│   ├── Footers
│   │   ├── Footer.js
│   │   ├── FooterAdmin.js
│   │   └── FooterSmall.js
│   ├── Headers
│   │   └── HeaderStats.js
│   ├── Maps
│   │   └── MapExample.js
│   ├── Navbars
│   │   ├── AdminNavbar.js
│   │   ├── AuthNavbar.js
│   │   └── IndexNavbar.js
│   ├── PageChange
│   │   └── PageChange.js
│   └── Sidebar
│       └── Sidebar.js
├── layouts
│   ├── Admin.js
│   └── Auth.js
├── next.config.js
├── package.json
├── pages
│   ├── 404.js
│   ├── _app.js
│   ├── _document.js
│   ├── _error.js
│   ├── admin
│   │   ├── dashboard.js
│   │   ├── maps.js
│   │   ├── settings.js
│   │   └── tables.js
│   ├── auth
│   │   ├── login.js
│   │   └── register.js
│   ├── index.js
│   ├── landing.js
│   └── profile.js
└── tailwind.config.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

| Chrome | Firefox | Edge | Safari | Opera |
|:---:|:---:|:---:|:---:|:---:|
| <img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> | <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64"> |

## Reporting Issues

We use GitHub Issues as the official bug tracker for the Notus NextJS. Here are some advices for our users that want to report an issue:

1. Make sure that you are using the latest version of the Notus NextJS. Check the CHANGELOG from your dashboard on our <a href="https://www.creative-tim.com/?ref=nnjs-readme" target="_blank">website</a>.
2. Providing us reproducible steps for the issue will shorten the time it takes for it to be fixed.
3. Some issues may be browser specific, so specifying in what browser you encountered the issue might help.

## Licensing

- Copyright 2021 <a href="https://www.creative-tim.com/?ref=nnjs-readme" target="_blank">Creative Tim</a>

- Licensed under <a href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md" target="_blank">MIT</a>

## Useful Links

- <a href="https://www.youtube.com/channel/UCVyTG4sCw-rOvB9oHkzZD1w" target="_blank">Tutorials</a>
- <a href="https://www.creative-tim.com/affiliates/new?ref=nnjs-readme" target="_blank">Affiliate Program</a> (earn money)
- <a href="http://blog.creative-tim.com/?ref=nnjs-readme" target="_blank">Blog Creative Tim</a>
- <a href="https://www.creative-tim.com/templates/free?ref=nnjs-readme" target="_blank">Free Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/premium?ref=nnjs-readme" target="_blank">Premium Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/react?ref=nnjs-readme" target="_blank">React Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/angular?ref=nnjs-readme" target="_blank">Angular Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates/vuejs?ref=nnjs-readme" target="_blank">VueJS Products</a> from Creative Tim
- <a href="https://www.creative-tim.com/templates?ref=nnjs-readme" target="_blank">More products</a> from Creative Tim
- Check our Bundles <a href="https://www.creative-tim.com/bundles?ref=nnjs-readme" target="_blank">here</a>
- Check our awesome builder <a href="https://www.creative-tim.com/builder/argon?ref=nnjs-readme" target="_blank">here</a>
- Check Tailwind Starter Kit, the project behind this product <a href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation?ref=nnjs-readme" target="_blank">here</a>

### Social Media

Twitter: <a href="https://twitter.com/CreativeTim" target="_blank">https://twitter.com/CreativeTim</a>

Facebook: <a href="https://www.facebook.com/CreativeTim" target="_blank">https://www.facebook.com/CreativeTim</a>

Dribbble: <a href="https://dribbble.com/creativetim" target="_blank">https://dribbble.com/creativetim</a>

Instagram: <a href="https://www.instagram.com/creativetimofficial/" target="_blank">https://www.instagram.com/creativetimofficial/</a>


## Resources
- Demo: <a href="https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-readme" target="_blank">https://demos.creative-tim.com/notus-nextjs/?ref=nnjs-readme</a>
- Download Page: <a href="https://www.creative-tim.com/product/notus-nextjs?ref=nnjs-github-readme" target="_blank">https://www.creative-tim.com/product/notus-nextjs</a>
- Documentation: <a href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus?ref=nnjs-readme</a>
- License Agreement: <a href="https://www.creative-tim.com/license?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/license?ref=nnjs-readme</a>
- Support: <a href="https://www.creative-tim.com/contact-us?ref=nnjs-readme" target="_blank">https://www.creative-tim.com/contact-us?ref=nnjs-readme</a>
- Issues: <a href="https://github.com/creativetimofficial/notus-nextjs/issues" target="_blank">Github Issues Page</a>
