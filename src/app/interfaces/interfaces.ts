export interface Post {
  "id": string,
  "userId": string,
  "picture": string,
  "title": string,
  "content": string
}

export interface User {
  "id": string,
  "title": string,
  "isActive": boolean,
  "picture": string,
  "age": string,
  "gender": string,
  "company": string,
  "email": string,
  "phone": string,
  "address": string
}
export interface Customer {
  "id": string,
  "first_name": string,
  "last_name": string,
  "picture": string,
  "age": string,
  "gender": string,
  "email": string,
  "phone": string,
}

export interface Product {
  "id": string,
  "title": string,
  "price": string,
  "picture": string,
  "brand": string,
  "gender": string,
}

export interface Sale {
  "id": string,
  "customer_id": string,
  "title": string,
  "products": string,
  "total": string,
  "payment_method": string,
  "company": string,
  "shipping_address": string
}
