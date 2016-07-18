## Babel Starter Kit
Based on the '[Babel on the Client](http://code.tutsplus.com/courses/start-coding-es6-with-babel/lessons/babel-on-the-client)' - Tutorial

https://github.com/tutsplus/start-coding-es6-with-babel

### Modules
- babel
- babelify
- gulp
- vinyl-source-stream

Optionally you can install 'babel' globally so you can use it on the command line

'babelify' is a transform that allows browserify to package together all the code, but also convert it using babel on the way in

'vinyl-source-stream'
allows us to use modules such as browserify which are not strictly set up out of the box to work with gulp

### gulpfile
write a gulp file which will resolve dependencies, stitch it all together.. and convert to ES5 using babel.

use standard js for gulpfile

run build task with: `gulp build` in command line.

with default task defined in gulpfile, run with `gulp` in command line. This will run copy, build & watch tasks. See comments in gulpfile.
