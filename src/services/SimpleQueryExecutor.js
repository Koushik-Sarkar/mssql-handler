import DataService from './DataService';

class SqlQueryExecutor {
  constructor(connection) {
    this.dataService = new DataService(connection);
    this.select = 'select *';
    this.table = 'from ';
    this.where = '';
  }
  setSelect(...args) {
    if (args) {
      this.select = this.select.replace(/\*$/, '');
      args.forEach((item) => {
        this.select = this.select.concat(`${item},`);
      });
      this.select = this.select.replace(/,$/, '');
    }
    return this;
  }
  setTable(tableName) {
    if (tableName) {
      if (this.table.length > 6) {
        this.table = this.table.concat(',');
      }
      this.table = this.table.concat(tableName);
    }
    return this;
  }
  setWhere(condition) {
    if (condition) {
      if (this.where === '') {
        this.where = ' where ';
      }
      this.where = this.where.concat(condition);
    }
    return this;
  }
  execute() {
    console.log(`${this.select} ${this.table}${this.where}`);
    return this.dataService.runQuery(`${this.select} ${this.table}${this.where}`);
  }
}

export default SqlQueryExecutor;
