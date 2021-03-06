import {DecoratorTypes, UnsupportedDecoratorType} from "@tsed/core";
import {JsonEntityFn} from "../common/jsonEntityFn";

export enum OperationMethods {
  ALL = "ALL", // special key
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  HEAD = "HEAD",
  DELETE = "DELETE",
  OPTIONS = "OPTIONS",
  CUSTOM = "CUSTOM"
}

/**
 * Declare new Operation with his path and http method.
 * @param method
 * @param path
 * @decorator
 * @method
 */
export function OperationPath(method: OperationMethods | string, path: string | RegExp = "/") {
  return JsonEntityFn((store, args) => {
    if (store.decoratorType !== DecoratorTypes.METHOD) {
      throw new UnsupportedDecoratorType(OperationPath, args);
    }

    store.operation!.addOperationPath(method.toUpperCase(), path);
  });
}
