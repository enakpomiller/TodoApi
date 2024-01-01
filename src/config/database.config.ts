import { Sequelize } from 'sequelize';

//import mysql  from "mysql2";


const db = new Sequelize(
    'typescript_API',
    'root',
     '',{
        dialect:'mysql',
        'host':'localhost'
    
      }
     );



     export default db;



    //  const connectionDB = async() =>{
    //    try{
    //       await db.authenticate();
    //       console.log(" success ");
    //    }catch(error){
    //      console.log({message:error});
    //     }
    
    // }

    // module.exports = {db, connectionDB }

   
  