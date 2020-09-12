export interface IClock {
  _id?: string;
  name: string;
  start?: Date;
  end?: Date;
  count: "UP" | "DOWN";
  // author: string | any;
}

export function isClock(x: any): x is IClock {
  return !!x.name && (!!x.start || !!x.end) && !!x.count;
}
