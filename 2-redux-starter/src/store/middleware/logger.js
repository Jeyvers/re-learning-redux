// MIDDLEWARE
/* Dispatching actions -> single entry point -> root reducer -> child reducers 
- Calling APIs
- Error reporting 
- Analytics 
- Authorization
*/
const logger = (store) => (next) => (action) => {
  // action is the action that was dispatched, next is the next middleware function
  console.log('Store', store);
  console.log('next', next);
  console.log('action', action);
  //   Call next and pass in the action else the action will not be processed further
  next(action);
};

export default logger;
