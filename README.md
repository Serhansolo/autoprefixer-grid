# Simple CSS Grid implementation with Autoprefixer
For our corporate website we wanted to test out the possibilities of the [autoprefixer][autoprefixer] plugin used in combination with CSS Grid. 

## To run the project
simply open the `./dest/index.html` file in your browser(s).

## To see the autoprefixer in action
and to play around with it.
1. Do an `npm install` in the project root folder, make sure you have gulp installed on your computer.
1. Once the npm install is done, run `gulp watch` in your terminal.
1. After that go ahead and open `./src/scss/grid.scss` file in your IDE, after saving this file, it will recreate the prefixed css, which is found in `./dest/css/grid.css`.

[autoprefixer]: https://github.com/postcss/autoprefixer