 //import {Model } from 'sequelize';
 import {DataTypes, Model} from 'sequelize';
 import db from '../config/database.config';

  


interface TodoAttributes {
    id:string,
    title:string,
    completed: boolean;

}


export class TodoInstance extends Model<TodoAttributes> {}

TodoInstance.init(  
        {
          id: {
             type: DataTypes.UUID, 
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
            },


        },

        {
          sequelize:db,
          tableName:'todos',
        }


);