var myApp=angular.module('myApp',[]);

myApp.controller('mainController',function($scope) {
    $scope.hotels = [
     {
    id:1,
    name:'Ivolga',
    description:'Описание',
    price:48,
    src:'http://chitatravel.ru/img/news/924-61ef964b093f9758c91d6035894fca26.jpg'
  },
  {
    id:2,
    name:'Hostel in Black Sea',
    description:'Описание',
    price:58,
    src:'https://sft.by/upload/iblock/007/007118b81543791975a5ab94be28aa8b.jpg'
  },
  {
    id:3,
    name:'Hostel little France',
    description:'Описание',
    price:68,
    src:'https://images.wallpaperscraft.com/image/maldives_tropical_beach_resort_evening_90628_1920x1080.jpg'
  },
  {
    id:4,
    name:'Hotel Grand Prix',
    description:'Описание',
    price:78,
    src:'https://magazinturov.by/wp-content/uploads/2019/02/болгария.jpg'
  },
    ]
})

