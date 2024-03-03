
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
