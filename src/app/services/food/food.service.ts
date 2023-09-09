import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

getAll():Foods[]{
  return  [
  {
    id: 1,
    name:'Vegetable rool',
    cookTime: '10-40',
    price:10,
    origins:['Deshi'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets/food1.jpg',
    tags:['Fastfood','Lunch'],
  },
  {
    id: 2,
    name:'chicken ',
    cookTime:'20-30',
    price:250,
    origins:['indian'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets/food2.jpg',
    tags:['Fastfood','pizza','Lunch'],
  },
  {
    id: 3,
    name:'fish curry',
    cookTime: '10-20',
    price:10,
    origins:['pakisthani'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets/food3.jpg',
    tags:['Fastfood','pizza','Lunch'],
  },
  {
    id: 4,
    name:'Vegetable rool',
    cookTime: '20-40',
    price:10,
    origins:['Deshi'],
    star:4.5,
    favorite:true,
    imageUrl:'/assets/food4.jpg',
    tags:['Fastfood','pizza','Lunch'],
  },
  {
    id: 5,
    name:'Vegetable cuurry',
    cookTime: '35',
    price:10,
    origins:['Deshi'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets//food5.jpg',
    tags:['Fastfood','pizza','Lunch'],
  },
  {
    id: 6,
    name:'chicken',
    cookTime: '60',
    price:10,
    origins:['Deshi'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets/food6.jpg',
    tags:['Fastfood','chees','Lunch'],
  },
  {
    id: 7,
    name:'beef items',
    cookTime: '10-50',
    price:10,
    origins:['italy'],
    favorite:true,
    star:4.5,
    imageUrl:'/assets/food7.jpg',
    tags:['Fastfood','Lunch'],
  },
  {
    id: 8,
    name:'Vegetable rool',
    cookTime: '10-45',
    price:10,
    origins:['dobhai'],
     favorite:true,
    star:4.5,
    imageUrl:'/assets/food8.jpg',
    tags:['Fastfood','pizza','Lunch'],
  }
  ]
}
}
export { Foods };

