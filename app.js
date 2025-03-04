const fastify = require('fastify');

const {db} = require('./models/index')

const app = fastify();

const userRoutes = require('./userRoutes')

app.get('/', (request, reply)=>{
  reply.send('First Route')
})

app.register(userRoutes)


db.sequelize.sync().then(()=>{
  app.listen({ port: 3000 }, (err, address) => {
    if (err) {
      console.log(err);
    } else {
      console.log('The server is running on port', address);
    }
  })
  

}).catch((error)=>{
console.log(error);
console.log('unable to connect to database');

})
