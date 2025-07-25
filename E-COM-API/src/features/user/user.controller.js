import UserModel from './user.model.js';
import jwt from 'jsonwebtoken';

export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
    const user=UserModel.signUp(name,email,password,type);
    res.status(201).send(user);
}

  signIn(req, res) {
    const result=UserModel.signIn(
        req.body.email,
        req.body.password,
    );
    if(!result){
        res.status(400).send('Incorrect credentials');
    }else{
      //1. create token
      const token=jwt.sign({
        userId:result.id,
        email:result.email
      },
        'iUevf0jKhT',
        {
         expiresIn:'1h' 
        }
      )
        return res.status(200).send(token);
    }
  }
}
