export interface IRegister {
    username: string;
    password: string;
    password2: string;
    email: string;
}

export interface ILogin {
    username: string;
    password: string;
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    avatar: null | string
}

export interface IProduct {
    id:number;
    title: string;
    description: string;
    image: string;
    rating: number;
    price: string;
    quantity: null | number
}