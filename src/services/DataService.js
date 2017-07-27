class DataService {
  constructor(connection) {
    this.conn = connection;
  }

  runQuery(query) {
    return new Promise((resolve, reject) => {
      if (query) {
        this.conn.getConnection()
          .then(pool => pool.request().query(query))
          .then((result) => {
            resolve(result);
          }).catch(err => reject(err));
      } else {
        reject(new Error('Invalid Query String'));
      }
    });
  }
  runStoreProc(storeProcName, storeProcInput, storeProcOutput) {
    return new Promise((resolve, reject) => {
      if (storeProcName) {
        let request;
        this.conn.getConnection()
          .then((pool) => {
            request = pool.request();
            if (storeProcInput) {
              if (storeProcInput.length > 0) {
                storeProcInput.forEach((spArg) => {
                  request.input(spArg.inputName, spArg.inputType, spArg.inputValue);
                });
              }
            }
            if (storeProcOutput) {
              if (storeProcOutput.length > 0) {
                storeProcOutput.forEach((spArg) => {
                  request.output(spArg.outputName, spArg.outputType);
                });
              }
            }
            return request.execute(storeProcName);
          }).then(result => resolve(result))
          .catch(err => reject(err));
      }
    });
  }
}

export default DataService;
