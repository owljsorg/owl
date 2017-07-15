import {EventEmitter} from './owl.EventEmitter';
import {Collection} from './owl.Collection';

/**
 * Model options
 */
export interface IModelOptions {
    collection: Collection;
    collectionIndex: number;
}

/**
 * owl.Model
 */
export class Model extends EventEmitter {
    constructor(data: Object, options: IModelOptions);
    /**
     * Gets attribute by name
     */
    get(name: string): any;

    /**
     * Sets attribute value by name
     */
    set(name: string, value: any): void;

    /**
     * Gets data from the server
     */
    fetch(query?: Object): Promise<Object>;

    /**
     * Removes all attributes from the model
     */
    clear(): void;

    /**
     * Saves a model to database
     */
    save(query?: Object): Promise<Object>;

    /**
     * Updates local data and saves model
     */
    update(data: Object, query?: Object): Promise<Object>;

    /**
     * Partially updates model
     */
    patch(data: Object, query?: Object, path?: String): Promise<Object>;

    /**
     * Removes a model
     */
    destroy(query?: Object): Promise<Object>;

    /**
     * Gets models data
     */
    getData(): Object;

    /**
     * Gets model collection
     */
    getCollection(): Collection;

    /**
     * Gets model collection index
     */
    getCollectionIndex(): number;
}
