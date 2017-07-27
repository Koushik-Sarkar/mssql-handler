class ConfigBuilder {
  constructor() {
    this.config = {
      user: '',
      password: '',
      server: 'localHost',
      port: 1433,
      database: '',
      connectionTimeout: 15000,
      driver: 'tedious',
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      }
    };
  }
  setUserName(userName) {
    this.config.user = userName;
    return this;
  }
  setPassword(password) {
    this.config.password = password;
    return this;
  }
  setServer(server) {
    this.config.server = server;
    return this;
  }
  setDataBase(database) {
    this.config.database = database;
    return this;
  }
  setPort(port) {
    this.config.port = port;
    return this;
  }
  setDriver(driver) {
    this.config.driver = driver;
    return this;
  }
  setConnectionTiomout(connectionTimeOut) {
    this.config.connectionTimeOut = connectionTimeOut;
    return this;
  }
  setPoolMax(poolMax) {
    this.config.pool.max = poolMax;
    return this;
  }
  setPoolMin(poolMin) {
    this.config.pool.min = poolMin;
    return this;
  }
  setidleTimeoutMillis(poolIdleTimeoutMillis) {
    this.config.pool.idleTimeoutMillis = poolIdleTimeoutMillis;
    return this;
  }
  build() {
    return this.config;
  }
}

export default ConfigBuilder;
