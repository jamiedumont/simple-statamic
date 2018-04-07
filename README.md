# Simple Statamic Theme

This is a quick copy taken of my website that I use for blogging. It's meant to serve as a purposefully simple example of how a Statamic site/theme can be laid out. There are a few templates, a few partials and a few interesting fieldsets. Just enough to get you started building Statamic sites.

The styling uses [TailwindCSS](https://tailwindcss.com) which is becoming very popular within the Statamic community, and rightly so! It's a very simple utility-first framework that allows for easy customisation. Feel free to customise the markup (swapping out colours, spacing, etc) or editing Tailwind's variables (using `tailwind.js` in the theme folder).

The newsletter subscription form is left without an action to allow you to create a Statamic form to capture people's address, or send it to your choice of mailing list software (e.g. Mailchimp).

## Getting started

1. Install Statamic following the instructions in the [docs](https://docs.statamic.com/installing)
2. Replace the `/site` and `/assets` folders with the ones from this repo.

To customise the theme's styling:

1. Navigate to the theme's folder in the terminal `/site/themes/simple`
2. Run `yarn` or `npm install` to install the dependencies.
3. If you don't have Brunch (the build tool of choice for this theme), install that globally. `yarn global brunch` `npm install brunch -g`
4. Run `brunch build` or `brunch watch` to compile the CSS and JS from `/site/themes/simple/src` to `/site/themes/simple/[css,js]`

## Support
For any help installing or customising the theme, please just [email me](mailto:jamiedumont@icloud.com)
