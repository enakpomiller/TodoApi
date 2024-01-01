import {Model } from 'sequelize';
import db from '../config/database.config';

   import {DataTypes} from 'sequelize';


interface TodoAttribute {
    id:String,
    title:String,
    completed: boolean;

}


export class TodoInstance extends Model<TodoAttribute> {}

TodoInstance.init(
        {
          id:{
             type: DataTypes.STRING,
             primaryKey:true,
             allowNull:false,
           },
           title:{
             type: DataTypes.STRING,
             allowNull:false,
           },
           completed:{
                type: DataTypes.BOOLEAN,
                allowNull:false,
                defaultValue:false,
            }


        },

        {
          sequelize:db,
          tableName:'todos',
        }


);