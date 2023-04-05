declare module 'strapi-sdk-javascript' {
    export default class Strapi {
      constructor(baseUrl: string);
      query(contentType: string): Query;
    }
  
    export interface Query {
      find(params?: FindParams): Promise<any[]>;
      findOne(params?: FindOneParams, populate?: string[] | string): Promise<any>;
      count(params?: CountParams): Promise<number>;
      create(data: any): Promise<any>;
      update(params?: UpdateParams, data?: any): Promise<any>;
      delete(params?: DeleteParams): Promise<any>;
    }
  
    export interface FindParams {
      _q?: string;
      _sort?: string;
      _start?: number;
      _limit?: number;
      [key: string]: any;
    }
  
    export interface FindOneParams {
      id: string;
      [key: string]: any;
    }
  
    export interface CountParams {
      [key: string]: any;
    }
  
    export interface UpdateParams {
      id: string;
      [key: string]: any;
    }
  
    export interface DeleteParams {
      id: string;
      [key: string]: any;
    }
  }
  