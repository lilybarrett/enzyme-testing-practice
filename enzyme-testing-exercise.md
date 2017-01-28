You've built a small tic-tac-toe game in React served on a Sinatra server and
now you want to test it! You should not need to change any of the functionality
of this exercise. Add tests to both `shallow` test individual components as well
as deep test them on the DOM with `mount`.

## Setup
While in your `challenges` folder, run the following:

```sh
# Access the challenge
$ et get enzyme-testing-exercise
$ cd enzyme-testing-exercise

# Install dependencies
$ npm install
$ gem install sinatra

# Run the code and tests
$ ruby server.rb
(open a new tab)
$ npm start
(open a new tab)
$ npm test
```

Open `localhost:4567` in your browser. You should be able to play tic-tac-toe by
selecting squares and seeing them update.

## Testing Tic Tac Toe

Your challenge is to write tests for a working React application, using
functions from Enzyme. *Enzyme* is a JavaScript Testing utility for React that
makes it easier to assert, manipulate, and traverse your React Components'
output.

Here is what you have to do:

1. Write tests using `shallow` to test how the stateless `GameTable` Component
renders based on different state being passed into it.

2. Write tests using `mount` for the stateful `Game` Component to test the user
actually clicking on the DOM and how the page updates while playing the game.


### Notes:
This exercise comes with `.babelrc`, `karma.conf.js`, `package.json` and
`webpack.config.js` files already set up for you. Take note of these files and
how they set up your environment (and how you might need to change
them).

Your test suite doesn't stop running! Your tests will now automatically re-run
in the tab with your `npm test` running when you update or save any of your .js
files. Look in that tab to see where you might have broken or fixed something.


### BONUS:
Once you've got some passing tests to verify that you can keep your
application running, can you refactor a `GameRow` Component to help reduce some
of the duplication in the `GameTable` Component?

Make sure you add a `GameRowSpec` file and tests!

Can you use TDD to add functions to the `Game` that check if the game has been
won by either player, or if it's a draw?
