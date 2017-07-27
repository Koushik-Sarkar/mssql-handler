import sql from 'mssql';

class Connection {
  constructor() {
    this.currentConnection = null;
  }
  setConnection(config) {
    if (!this.currentConnection) {
      this.currentConnection = sql.connect(config);
    }
  }
  getConnection() {
    if (this.currentConnection) {
      return this.currentConnection;
    }
    return null;
  }
}

export default Connection;
