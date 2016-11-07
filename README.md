# Front-End Code Overview

## Project Tree

    dist/craft    # The Craft CMS lives here
                  # You must add the 'app' folder to this directory
      - config    # The Craft configuration files live here
    dist/public   # This will be your webroot
      - assets   
        - css     # The compiled CSS files
        - img     # Optimized image files
        - js      # Concatenated Javascript files
        - webfonts # Locally-hosted webfont files
    src
      - img       # Unoptimized image files, as exported from Photoshop, etc.
      - js        # All custom scripts for the theme
        - modules # Individual components providing site-specific functionality
        - plugins # Self-contained generic plugins (not site-specific)
        - site    # Custom-written plugins to perform specific tasks
        - vendor  # 3rd-party vendor script libraries
        - app.js  # Entry-point for the site's JS -
                  # you should import everything else from here
      - scss      # SCSS source files
                  # Autoprefixer will add browser support as appropriate
      - templates # HTML/PHP/Twig templates
      - webfonts  # Any webfont files here will be copied verbatim to the dist folder

## Front-End Build Process

### Initial Setup

The front-end build process requires Node v4.0.0 or higher. Once Node is installed, run the following command from the project root to install all the build-process dependancies:

    npm install

### Building Front-End Assets

Use Gulp to compile SASS source files to CSS, minify JS and CSS, and optimize images. Use `npm run [command]` to run the Gulp scripts. To start, run:

    npm run build

While actively developing, watch source files and rebuild as needed. This command will open a new browser tab using BrowserSync, which will automatically update to reflect changes you make to the source files.

    npm run watch

To generate minified copies of all the assets without sourcemaps for production, run the following command:

    npm run build --production

## Update Apache Virtual Hosts file

Add the new site to your Apache Virtual Hosts file so it knows where it lives on your machine. Assuming you have Sublime Text's command line shortcut installed, run:

	subl /etc/apache2/extra/httpd-vhosts.conf

Duplicate one of the Virtual Host blocks (Starting at <VirtualHost *:80> and closing with </VirtualHost>). Update the DocumentRoot, ServerName and logs with the appropriate settings for the new site.

Once that is done, run the following to restart Apache, which will load the new site configuration:

	sudo apachectl -k restart

## Update Hosts file

You'll need to add the new development URL for the site to your /etc/hosts file so the browser will look for the development site on your local machine.

	subl /etc/hosts

Add a new line using the following format:

	127.0.0.1	new-site-domain.dev

## Add Development Database

You will need to add a new database to your local MySQL server, which can be done using [Sequel Pro](http://sequelpro.com). Connect to your MySQL localhost, then click "Choose Database..." -> "Add Database..." from the drop-down menu in the upper-left. Make a note of what you name the database.

## Install PHP Environment Configuration Package

To manage running Craft in multiple environments and keep sensitive passwords out of the repository, we run phpdotenv. To install, run the following commands from the project root:

    curl -s http://getcomposer.org/installer | php
    php composer.phar require vlucas/phpdotenv

Once installed, copy `dist/.env.example` to `dist/.env` and edit the new file for your developemnt environment.

## Normal Development Process

The following outlines the normal development workflow for this project:

1. Open a terminal window and navigate to the project directory
2. Run the initial build process to get everything in place:

    npm run build

3. Kick off the watch build process to start watching the src files and open the dev site in a browser window

    npm run watch

4. Start making your edits to the styles, javascript or templates.
5. If the watch process errors out, check the terminal output for what caused the error. Correct the error and restart the watch process.
6. When done, hit `CTL - C` in the terminal window to stop the watch process.


## Specific Notes

Most project-specific build configuration can be accomplished via the `gulpfile.babel.js/config.js` file.

### Required Files and Folders Not In This Repository

If you just initialized this project using the `craftBrowserify` script, you should have your `craft` folder ready to go inside of `dist`. This Git repository excludes the Craft CMS `apps` folder, as well as the public `images` and `files` folders. If you have downloaded this project from Bitbucket or Github, you will need to download the current version of Craft, extract the `craft/apps` folder and move it to `dist/craft`. Download the `images` and `files` public folders from the production server and move them to `dist/public`.

### CSS

We run Autoprefixer on the compiled CSS files to add additional browser support wherever possible.

### Scripts

Javascript files will be compiled from the `src/js` folder. Any ES6 features will be transcoded to their ES5 equivalent. Use ES2015-style module imports.

### SVGs

SVG files saved to `assets/src/images` will be compressed and output to `assets/dist/images`.
