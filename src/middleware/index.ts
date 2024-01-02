import {Request,Response,NextFunction} from 'express';
import {validationResult} from 'express-validator';



class Middleware{
    handlevalidationErrors(req:Request,res:Response,next: NextFunction){
        
        const error = validationResult(req);
            if(!error.isEmpty()){
                return res.json(error); 
            }
            next(); // if no error it will execyte the next line of code that is below
       
    }
    


}


export default new Middleware();