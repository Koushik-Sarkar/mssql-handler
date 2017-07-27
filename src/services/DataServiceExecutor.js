import sql from 'mssql';
import DataService from './DataService';
import SimpleQueryExecutor from './SimpleQueryExecutor';

class StoreProcExecutor {
  constructor(connection) {
    this.dataService = new DataService(connection);
    this.storeProcArgs = {
      storeProcName: '',
      storeProcInputArgs: [],
      storeProcOutputArgs: []
    };
  }
  setProcName(storeProcName) {
    if (storeProcName) {
      if (this.storeProcArgs.storeProcName === '') {
        this.storeProcArgs.storeProcName = storeProcName;
      }
    }
    return this;
  }
  setInputArgs(paramName, paramType, paramValue) {
    const inputArgsObj = {};
    inputArgsObj.inputName = paramName;
    switch (paramType.toLowerCase()) {
      case 'int':
        inputArgsObj.inputType = sql.Int;
        break;
      case 'nvarchar':
        inputArgsObj.inputType = sql.NVarChar;
        break;
      case 'bit':
        inputArgsObj.inputType = sql.Bit;
        break;
      case 'char':
        inputArgsObj.inputType = sql.Char;
        break;
      case 'datetime':
        inputArgsObj.inputType = sql.DateTime;
        break;
      case 'date':
        inputArgsObj.inputType = sql.Date;
        break;
      case 'time':
        inputArgsObj.inputType = sql.Time;
        break;
      case 'float':
        inputArgsObj.inputType = sql.Float;
        break;
      case 'Real':
        inputArgsObj.inputType = sql.Real;
        break;
      case 'udt':
        inputArgsObj.inputType = sql.UDT;
        break;
      case 'uniqueidentifier':
        inputArgsObj.inputType = sql.UniqueIdentifier;
        break;
      case 'datetime2':
        inputArgsObj.inputType = sql.DateTime2;
        break;
      default:
        inputArgsObj.inputType = sql.VarChar;
    }
    inputArgsObj.inputValue = paramValue;
    this.storeProcArgs.storeProcInputArgs.push(inputArgsObj);
    return this;
  }
  setOutputArgs(paramName, paramType) {
    const outputArgsObj = {};
    outputArgsObj.outputName = paramName;
    switch (paramType.toLowerCase()) {
      case 'int':
        outputArgsObj.outputType = sql.Int;
        break;
      case 'nvarchar':
        outputArgsObj.outputType = sql.NVarChar;
        break;
      case 'bit':
        outputArgsObj.outputType = sql.Bit;
        break;
      case 'char':
        outputArgsObj.outputType = sql.Char;
        break;
      case 'datetime':
        outputArgsObj.outputType = sql.DateTime;
        break;
      case 'date':
        outputArgsObj.outputType = sql.Date;
        break;
      case 'time':
        outputArgsObj.outputType = sql.Time;
        break;
      case 'float':
        outputArgsObj.outputType = sql.Float;
        break;
      case 'Real':
        outputArgsObj.outputType = sql.Real;
        break;
      case 'udt':
        outputArgsObj.outputType = sql.UDT;
        break;
      case 'uniqueidentifier':
        outputArgsObj.outputType = sql.UniqueIdentifier;
        break;
      case 'datetime2':
        outputArgsObj.outputType = sql.DateTime2;
        break;
      default:
        outputArgsObj.outputType = sql.VarChar;
    }
    this.storeProcArgs.storeProcOutputArgs.push(outputArgsObj);
    return this;
  }
  execute() {
    return this.dataService.runStoreProc(this.storeProcArgs.storeProcName,
      this.storeProcArgs.storeProcInputArgs,
      this.storeProcArgs.storeProcOutputArgs);
  }
}

class DataServiceExecutor {
  constructor(connection) {
    this.connection = connection;
    this.storeProcExecutor = new StoreProcExecutor(connection);
    this.simpleQueryExecutor = new SimpleQueryExecutor(connection);
  }
  getStoreProcExecutor() {
    return this.storeProcExecutor;
  }
  getSimpleQueryExecutor() {
    return this.simpleQueryExecutor;
  }
}
export default DataServiceExecutor;
