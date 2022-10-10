export interface IPost{
        _id?:string | number,
        name: string,
        age?: number,
        city?: string,
        __v?: number
}

export type IPostArray = IPost[];