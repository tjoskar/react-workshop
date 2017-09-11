# React workshop

#### Step 0:
Clone the repo:

```
$ git clone git@github.com:tjoskar/react-workshop.git
```

Install the dependencies

```
$ npm install
```

Run the app to see that everything is working as expected

```
$ npm start
```

#### Step 1 (optional):

Convert the project to typescript by renaming all `.jsx` files to `.tsx`.

And create an interface for the state in `TodoApp` and a prop type for `TodoForm`. Not sure how to do it? Check the `typescript.patch` file or even apply it:

```bash
$ git apply typescript.patch
```

#### Step 2:

Create a new button that mark all items as completed

#### Step 3:

Add test case for `TodoItem` and `TodoList`, and for the new functionality added in step 2.

#### Step 4:

Rewrite `TodoItem` to a class. Is it better?

#### Step 5:

Is it possible to only use stateless functions? (no use of `setState`)

#### Step 6:

Surprise me 🦄

#### Step 7:

[Use redux](https://s3.amazonaws.com/marquee-test-akiaisur2rgicbmpehea/R7x3FamR2K1LHtgwZURc_Screen%20Shot%202015-11-17%20at%204.01.11%20PM.png)

#### Step 8:

Replace redux with mobx
