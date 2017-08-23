# Stylus version of Flexboxgrid

## Why?

I love using *[Stylus](http://stylus-lang.com/ "Stylus")* as my dynamic CSS language and
*[Flexboxgrid](http://flexboxgrid.com/ "Flexboxgrid")* is my go to library for setting up a responsive
grid based on the *flex* property.

The problem: *Flexboxgrid* is written in pure CSS, which doesn't work too well to import into a *Stylus* project.

Most of the time I would end up copy-pasting *Flexboxgrid*'s CSS into my project. Not ideal!

That's why I've created this simple repository that converts the latest version of *Flexboxgrid* to a *Stylus* file,
which can then be easily imported via *NPM* into the working project.

 ## Installation

 Install using NPM

 ```
 npm install normalize-styl --save
 ```

 ## How to use it

 After installing, a file ```flexboxgrid.styl``` will be created in the ```node_modules/flexboxgrid-stylus```-folder.

All you have to do is add the following snippet to your stylus file, and you're ready to start using *Flexboxgrid*!

```
@import 'flexboxgrid-stylus'
```

## Acknowledgements

Flexboxgrid is written by [Kristoferjoseph](https://github.com/kristoferjoseph, "Kristofer Joseph").
