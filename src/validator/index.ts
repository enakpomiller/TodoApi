
import {body} from 'express-validator';
class Todovalidator{

    checkCreateTodo(){
      return [
        body('id')
           .optional()
           .isUUID(4)
           .withMessage('the value should be uuid'),
        body('title')
           .notEmpty()
           .withMessage('the title should not be empty'),
        body('completed')
           .optional()
           .isBoolean()
           .withMessage('the value should be boolean')
           .isIn([0,false])
           .withMessage('the value should be zero or false'),
    
       ];



    }

}


export default  new  Todovalidator(); 