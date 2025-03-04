const {createList, updateList, getAllList, getOneList, deleteList} = require('./userController')


const userRoutes=   (app)=> {
    app.post('/create-todo', createList)
    
    
    app.put('/update-todo', updateList)
    
    app.get('/get-all-todos', getAllList)
    
    app.get('/get-one-todo', getOneList)
    
    app.delete('/delete-todo', deleteList)
  }
  
  module.exports = userRoutes; 
  