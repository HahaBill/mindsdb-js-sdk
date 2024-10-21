import { table } from 'console';
import TablesApiClient from './tablesApiClient';

/**
 * Represents a MindsDB table and all supported operations.
 */
export default class Table {
  /** API client to use for executing table operations. */
  tablesApiClient: TablesApiClient;

  /** Name of the table. */
  name: string;

  /** Integration the table is a part of (e.g. files, mindsdb). */
  integration: string;

  /**
   *
   * @param {TablesApiClient} tablesApiClient - API client to use for executing operations on this table.
   * @param {string} name  - Name of this table.
   * @param {string} integration - Integration the table is a part of.
   */
  constructor(
    tablesApiClient: TablesApiClient,
    name: string,
    integration: string
  ) {
    this.tablesApiClient = tablesApiClient;
    this.name = name;
    this.integration = integration;
  }

  /**
   * Deletes this table from its integration.
   * @throws {MindsDbError} - Something went wrong deleting this table.
   */
  async delete(): Promise<void> {
    await this.tablesApiClient.deleteTable(this.name, this.integration);
  }

   /**
   * Insert data into this table.
   * @param {Array<Array<any>> | string} data - A 2D array of values to insert, or a SELECT query to insert data from.
   * @throws {MindsDbError} - Something went wrong inserting data into the table.
   */
   async insert(data: Array<Array<any>> | string): Promise<void> {
    await this.tablesApiClient.insertTable(this.name, this.integration, data);
  }
}
