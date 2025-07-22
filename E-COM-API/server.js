import express from 'express';
import productRouter from './src/features/product/product.route.js';
import bodyParser from 'body-parser';
import userRouter from './src/features/user/user.route.js';
import cartRouter from './src/features/cart/cartItems.routes.js';
// import basicAuthorizer from "./src/middlewares/basicAuth.middleware.js"
import jwtAuth from './src/middlewares/jwt.middleware.js';
const server=express();

server.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"http://localhost:5500")
    res.header('Access-Control-Allow-Headers','*');
    res.header('Access-Control-Allow-Methods','*');
    if(req.method==='OPTIONS'){
        return res.sendStatus(200);
    }   
    next();
})

server.use(express.json());
server.use('/api/cartItems',jwtAuth,cartRouter);
server.use('/api/products',jwtAuth,productRouter);
server.use('/api/users',userRouter);

server.get('/',(req,res)=>{
    res.send("Welcome to Ecommerce APIs");
});

server.listen(3300,()=>{
    console.log('server is listening at 3300');
});
