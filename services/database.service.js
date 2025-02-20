const mongoose = require("mongoose");
const config = require("../config");
const logger = require("./logger.service")(module);

/**
 * Базовый класс сервиса работы с базой данных
 */
class Database {
  #uri;

  #id;

  #user;

  #password;

  #db_name;

  #connection;

  #mongoose;

  constructor() {
    this.#uri = config.dbs.sample_db.uri;
    this.#id = config.dbs.sample_db.id;
    this.#user = config.dbs.sample_db.user;
    this.#password = config.dbs.sample_db.password;
    this.#db_name = config.dbs.sample_db.db_name;
  }

  /**
   * Открывает соединение с БД.
   * @return {Promise<void>}
   */
  async connect() {
    try {
      logger.info(`Connecting to ${this.#uri}`);
      mongoose.connect(this.#uri);
      logger.info(`Connected to ${this.#id}`);
    } catch (error) {
      logger.error(`Unable to connect to ${this.#id}:`, error.message);
      throw error;
    }
  }

  /**
   * Закрывает соединение с БД.
   * @return {Promise<void>}
   */
  async disconnect() {
    if (this.#mongoose) {
      try {
        // todo: метод закрытия соединения с БД
        await this.#mongoose.disconnect();
        logger.info(`Disconnected from ${this.#id}`);
      } catch (error) {
        logger.error(`Unable to disconnect from ${this.#id}:`, error.message);
      }
    }
  }

  /**
   * Возвращает объект соединения с БД,
   * @return {Object}
   */
  get connection() {
    return this.#mongoose;
  }
}

const sampleDB = new Database();

module.exports = { sampleDB };
