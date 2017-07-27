import ConfigBuilder from './config/config';
import Connection from './connection/connection';
import DataServiceExecutor from './services/DataServiceExecutor';



class MSSqlHandler {
  constructor() {
    this.configBuilder = new ConfigBuilder();
    this.connection = new Connection();
    this.executor = new DataServiceExecutor(this.connection);
  }
  getConfigBuilder() {
    return this.configBuilder;
  }
  setConnection(config) {
    this.connection.setConnection(config);
  }
  getConnection() {
    return this.connection;
  }
  getExecutor() {
    return new DataServiceExecutor(this.connection);
  }
}


export default MSSqlHandler;

