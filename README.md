[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Capstone Project - Docu-Paws

## Description

Docu-Paws is a single-page application that allows users to add and track pet health information including prescriptions (medication).  Upon login, users create, edit, view and delete pets or their meds/vaccines.  The app is designed to allow users to have information readily available when health questions arise, such as making a veterinarian appointment for an illness.

## Application Links

- Front End Repo: https://github.com/jonifallon/docupaws-client
- Back End Repo: https://github.com/jonifallon/docupaws-api
- Deployed Front End Client: https://jonifallon.github.io/docupaws-client/
- Heroku Site: https://safe-mesa-23831.herokuapp.com/

## ERD

Link to ERD: http://imgur.com/a/xAnQs

## API

I used Rails to create the backend.  I have users plus one resource "Pets".

## Screenshot

Screenshot of the app:  http://imgur.com/a/Xlc6C

## Technologies Used

I used bootstrap as a tool for creating a clean, user-friendly interface with the browser template.  Modals are used for all authentication.  The interface is responsive and can be used on mobile devices.

## User Stories

As a user, I want to be able to:
- add a pet so I can track their medical history.
- keep track of these things for my pet:  species, name, DOB, age, spayed/neutered, gender, breed, color, purchase date, microchip #, weight, vaccine history, Veterinarian contact info, and prescription information.
- make changes to any of the information concerning my pet, their medications or vaccines.
- delete a pet.

## Wireframes

Link to Wireframe:
http://imgur.com/a/wNcjX
http://imgur.com/a/6mOHg

## Challenges

-   Finding a way to force carraige returns in a textarea field on a form so it renders properly in the browser.
-   Ensuring that the site is mobile-compatible.  That was a priority for me during design phase.  I believe I have achieved that goal.
-   My focus over the last stretch of the project has been on design.  I wanted a professional looking site that could be used by both desktop and mobile users.  I found that some things don't necessarily work well on mobile; for instance, I added some text to the landing page using large font that displays and fades out in a looping fashion.  I found that even though it still looked good when I previewed it using a mobile device selection in Chrome, when I tested it using a mobile phone, it looked different (not good - the font did not reduce and was distoring the landing page).  I then implemented a fix where mobile users will not see that fading/looping text.
-   I wanted to add additional images, but I ran into too many issues with rendering issues (exception being the background image).  I tried uploading inside the images directory, using an external image hosting site.  Neither produced the results I was looking for when using Heroku.

## Approach

I chose this as my capstone because, within the past month, both of my pets at home have been in the emergency room and vets office for urgent health issues.  Because I wasn't at home, I didn't have information about their prescription meds, last shot dates, etc.  It would have been much easier to have their medical info available by using a site/app like this!

## Dependencies

Install with `npm install`.

-   [Webpack](https://webpack.github.io)
-   [Bootstrap](http://getbootstrap.com)
-   [Handlebars.js](http://handlebarsjs.com)

At the beginning of each cohort, update the versions in
[`package.json`](package.json) by replace all versions with a glob (`*`) and
running `npm update --save && npm update --save-dev`. You may wish to test these
changes by deleting the `node_modules` directory and running `npm install`.
Fix any conflicts.

## Installation

1.  [Download](../../archive/master.zip) this template.
2.  Unzip and rename the template directory.
3.  Empty [`README.md`](README.md) and fill with your own content.
4.  Move into the new project and `git init`.
5.  Install dependencies with `npm install`.

## [License](LICENSE)

1.  All content is licensed under a CCBYNCSA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
