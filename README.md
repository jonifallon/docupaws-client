[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Capstone Project - Docu-Paws

## Description

Docu-Paws is a single-page application that allows users to add and track pet health information including prescriptions (medication).  Upon login, users create, edit, view and delete pets or their meds/vaccines.  The app is designed to allow users to have information readily available when health questions arise, such as making a veterinarian appointment for an illness.

## Application Links

-   Front End Repo: https://github.com/jonifallon/docupaws-client
-   Back End Repo: https://github.com/jonifallon/docupaws-api
-   Deployed Front End Client:
-   Heroku Site:  FILL THIS IN




## ERD

Link to ERD: http://imgur.com/XXXXXXX



## API

I used Express/Mongo to create the backend.  I needed two resources in addition to users:

- pets
- prescriptions

## Screenshot

Screenshot of the app:






## Client

I used bootstrap as a tool for creating a clean, user-friendly interface with the browser template.  Modals are used for all authentication.  The interface is responsive and can be used on mobile devices.  VERIFY THIS

Pet forms are CREATED WITH (EXPLAIN)

## User Stories

As a user, I want to be able to:
- add a pet so I can track their medical history.
- keep track of these things for my pet:  species, name, DOB, age, spayed/neutered, gender, breed, color, purchase date, microchip #, weight, vaccine history, Veterinarian contact info, and prescription information.
- make changes to any of the information concerning my pet, their medications or vaccines.
- delete a pet.

## Wireframes

Link to Wireframe: http://imgur.com/a/XXXX
ADD THIS

### Challenges
-   Completing the project within the given timeframe.

## Approach
I chose this as my capstone because, within the past month, both of my pets at home have been in the emergency room and vets office for urgent health issues.  Because I wasn't at home, I didn't have information about their prescription meds, last shot dates, etc.  It would have been much easier to have their medical info available by using a site/app like this!

I decided that I would create two resource tables in addition to user, one for the pet and one for the pet's prescription meds.

I felt like Express/Mongo would be a good choice for a back end, and I wanted more experience using that framework.  Taking into consideration the timeframe in which we have to develop the app, I chose the browser template rather than using a front end framework.

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

To deploy the SPA, run `grunt deploy`.

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Move into the new project and `git init`.
1.  Install dependencies with `npm install`.

## [License](LICENSE)

1.  All content is licensed under a CCBYNCSA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
