import * as bent from "bent";

export function isStatusError(x: any): x is bent.StatusError {
  return (
    x.statusCode &&
    x.arrayBuffer &&
    x.text &&
    x.json &&
    x.responseBody &&
    x.headers
  );
}
