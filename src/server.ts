

import express, { Request, Response } from  'express';
import db from './config/database.config';

 
// test database connection
db.sync().then(() =>{
  console.log('connected to database was  successfully');
});



const app = express();



const port = 5300;
app.get('/',(req: Request, res: Response) => {
  return res.send('hello'); 
});






app.listen(port, () => {
  console.log(' server running at port '+port);
})