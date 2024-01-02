

import express, { Request, Response, NextFunction } from  'express';
import db from './config/database.config';
import { v4 as uuidv4 } from 'uuid';
import { TodoInstance } from './model/index';
import Todovalidator from './validator';
// import {validationResult} from 'express-validator';
import Middleware  from './middleware';

 

const app = express();
app.use(express.json()); // body parser

       

 app.post('/create',Todovalidator.checkCreateTodo(),
    Middleware.handlevalidationErrors, 

    async(req:Request,res:Response) => { 
    const id = uuidv4();
    try{
    const record = await TodoInstance.create({ ...req.body, id}); 
    return res.json({record,msg:' succssfully created'});
    }catch(error){
    return res.json({msg:' cannot create ', status:201,route: '/create'});
    }

}); 


 app.get('/read',async (req:Request,res:Response)=>{
     try{
       const records = await TodoInstance.findAll({});
       return res.json({records});

     }catch(error){
        console.log(error);
       return res.json({msg:'cannot read record from database', status:500,route: '/read'});
      }

});


app.get('/pagination',async (req:Request,res:Response)=>{
    try{
    // pagination
            //const limit = req.query?.limit  as number | undefined;
       const limitQueryParam = req.query?.limit as string | undefined;
       const limit = limitQueryParam ? parseInt(limitQueryParam, 10) : undefined;
   // end pagination
      const records = await TodoInstance.findAll({ where: {}, limit });
      return res.json({records});

    }catch(error){
       console.log(error);
      return res.json({msg:'cannot read record from database', status:500,route: '/read'});
     }

});










// test database connection
db.sync().then(() =>{
    console.log('connected to database was  successfully');
  });



const port = 5300;


app.listen(port, () => {
  console.log(' server running at port '+port);
})