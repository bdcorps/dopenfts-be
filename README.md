[![Build Status](https://travis-ci.org/bdcorps/node-mongoose-mocha.svg?branch=master)](https://travis-ci.org/bdcorps/node-mongoose-mocha)

# node-mongoose-mocha-demo

> Super simple CRUD web application for saving and retrieving books related data. Illustrates the best practices for unit, integration, and end-to-end testing for a database centric application.

## Tools

- Node.js
- Mongoose
- Mocha
- Chai
- Sinon

## Usage

```js
npm install
npm run test
```

## Best Practices Used

- The model (./book.model.js) and the service (./book.service.js) for each schema object is kept separate so they can be tested individually.
- Defined error handlers in Express to return correct error response codes.
- Explicitly injecting model into the service (./book/index.js) so a MockModel can be passed for testing(./test/book.service.test.js).
- Using a separate testing DB from the production DB.

## Acknowledgments

Inspired by [Integration testing with Node and Mongoose video](https://www.youtube.com/watch?v=ACzMbQEq_tw) by [Fredrik Christenson](https://github.com/fChristenson)

## License

ISC
# dopenfts-be
