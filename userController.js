

const {Users} = require('./models/definitions/users')

const createList= async  (request, reply)=>{
    const { title, description } = request.body;

try {
  
    const users = await Users.create({ title, description });
      reply.send(users);
   
    
} catch (error) {
    console.log(error);
    
}
}




const updateList=async (request, reply)=>{
    const { id } = request.params;
    const { title, description, isDone } = request.body;
    try {
      const users = await Users.findByPk(id);
      if (users) {
        users.title = title;
        users.description = description;
        users.isDone = isDone;
        await users.save();
        reply.send(users);
      } else {
        reply.send({ error: 'Todo not found' });
      }
    } catch (error) {
     console.log(error);
     
    }
    }


const getOneList= async (request, reply)=>{
    const { id } = request.params;
    try {
      const users = await Users.findByPk(id);
      if (users) {
        reply.send(users);
      } else {
        reply.send({ error: 'Todo not found' });
      }
    } catch (error) {
        console.log(error);
        
    }
    
}

const getAllList= async (request, reply)=>{
    const users = await Users.findAll();
    reply.send(users);
    }

const deleteList= async (request, reply)=>{
    const { id } = request.params;
    try {
      const users = await Users.findByPk(id);
      if (users) {
        await users.destroy();
        reply.send({ message: 'Todo deleted' });
      } else {
        reply.send({ error: 'Todo not found' });
      }
    } catch (error) {
    console.log(error);
    
    }
    }
    
    module.exports = {createList, updateList, getAllList, getOneList, deleteList}








