const {createList, updateList, getAllList, getOneList, deleteList} = require('./userController')


const userRoutes=   (app)=> {
    app.post('/create-todo', createList)
    
    
    app.put('/update-todo/:id', updateList)
    
    app.get('/get-all-todos', getAllList)
    
    app.get('/get-one-todo/:id', getOneList)
    
    app.delete('/delete-todo/:id', deleteList)
  }
  
  module.exports = userRoutes; 
  