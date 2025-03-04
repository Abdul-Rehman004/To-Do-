
const {v4:uuid} = require('uuid')

const createList=  (request, reply)=>{
try {
   console.log(request.body);
   
   
    
} catch (error) {
    console.log(error);
    
}
}


const updateList= (request, reply)=>{
        reply.send('update Route')
    }


const getOneList=  (request, reply)=>{
        reply.send('get  one Route')
    
}

const getAllList= (request, reply)=>{
        reply.send('get alls Route')
    }

const deleteList= (request, reply)=>{
        reply.send('delete Route')
    }
    
    module.exports = {createList, updateList, getAllList, getOneList, deleteList}
