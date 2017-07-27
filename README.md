mssql-handler

MSSQL Handler Library

Installation Process :

npm install mssql-handler


Usage :

Below process need to follow to use this package

Import the package : 
================
import Handler from 'mssql-handler';

 then create handler object:

const handler = new Handler();

Create configuration item :
================================= 
const config = handler.getConfigBuilder() 
   .setServer(<server_Name>)
   .setPort(<Port_No>)
   .setUserName(<user_name>)
   .setPassword(<user_password>)
   .setDataBase(<db_name>)
   .build();

Set Connection :
============================ 

handler.setConnection(config);

[Note: for each handler obj only once connection can be set]

Simple Query : (This can be call multiple times for a single Handler Obj)
=================================================

handler.getExecutor()
 .getSimpleQueryExecutor()
 .setSelect(<param to select 1>, <param to select 2>,....) 
 .setTable(<Table_Name>)
 .setWhere() 
 .execute() 
 .then(result => console.log(result)) 
 .catch(err => console.log(err));
 
//for setSelect function, if it is not mention it will select all param like (select *)
//setWhere is optional 

Result will be in below format : 
{ recordsets : [object],
  recordset : [{row 1},{row 2},....], output : {}, 
  rowsAffected : [<affected_row_count>]
}

Calling Store Procedure : (This can be call multiple times for a single Handler Obj)
========================================================
handler.getExecutor()
 .getStoreProcExecutor()
 .setProcName(<Store_Proc_Name>)
 .setInputArgs(<Input_Param_Name>, <Input_Param_Type>, <Input_Value>)
 .setOutputArgs(<Output_param_name>, <Output_param_type>)
 .execute()
 .then(result => { console.log(result); })
 .catch(err => console.log(err));

// setInputArgs and setOutArgs can be call multiple time for multiple input and output