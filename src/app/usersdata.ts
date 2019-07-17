export interface Users{
  userId:number,
  username:string,
  email:number,
  addresses: Array<{
    line1: string, 
    locality: string,
         state: string,
          pin: number,
}>;
}