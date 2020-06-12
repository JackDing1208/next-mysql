/// <reference types="next" />
/// <reference types="next/types/global" />
declare module "*.png" {
  const value: any
  export default value
}

declare module "*.jpg" {
  const value: any
  export default value
}

declare interface IUser {
  id: number
  name: string
  age: number
}
