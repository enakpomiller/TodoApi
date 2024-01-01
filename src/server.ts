

import express, { Request, Response } from  'express';
import db from './config/database.config';
import { v4 as uuidv4 } from 'uuid';
import { TodoInstance } from './model/index';

 




const app = express();
app.use(express.json()); // body parser

 

        app.post('/create',async(req:Request,res:Response) => {
           const id = uuidv4();
           try{
            const record = await TodoInstance.create({ ...req.body, id}); 
            return res.json({record,msg:' succssfully created'});
          }catch(error){
            return res.json({msg:' cannot create ', status:201,route: '/create'});
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