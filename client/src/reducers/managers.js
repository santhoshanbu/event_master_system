export default (managers = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
        return action.payload;
    case 'CREATE':
        return [...managers, action.payload];

    
    default:
      return managers;
  }
}
