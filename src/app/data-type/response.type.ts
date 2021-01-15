


export enum ResponseCode {
  SUCCESS=200,
  ERROR=400,
  FAIL=500
}


export interface ResponseData {
  code:ResponseCode,
  message:string,
  data:any
}
