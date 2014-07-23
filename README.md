lvk
===

Little Vanilla Kitchen website

Grunt Setup - Frontend
----------------------

To work on the frontend you'll need a version of Sass (and Compass) that supports source maps.
Currently this is a pain in the arse as it installs a broken version of Sass.
Run:

	gem install compass --pre
	gem uninstall sass --version 3.4.0.rc.1
	gem install sass --version 3.3.10

Then run:
	
	npm install

Then to compile files run:

	grunt

Grunt Setup - Backend
---------------------

As above but also requires

	gem install bootstrap-sass