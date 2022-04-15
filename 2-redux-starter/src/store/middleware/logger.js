// MIDDLEWARE
/* Dispatching actions -> single entry point -> root reducer -> child reducers 
- Calling APIs
- Error reporting 
- Analytics 
- Authorization
*/
const logger = (param) => (store) => (next) => (action) => {
  // action is the action that was dispatched, next is the next middleware function
  console.log('Logging', param);
  //   Call next and pass in the action else the action will not be processed further
  next(action);
};

export default logger;
