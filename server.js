// imports
const express = require("express") //importing express package
const app = express() // creates an express application
app.use(express.static('public')) // serves all static files from public folder
require('dotenv').config() // allows us to use the .env variables




const RESTAURANT = {
  name: 'The Green Byte Bistro',
  isOpen: true,
  address: '742 Evergreen Rd, Mapleview, OS 45502',
  phone: '555-321-9876',
  menu: [
    { 
      id: 1,
      name: 'Quantum Quinoa Mushroom Burger',
      price: 13.00,
      rating: 4,
      category: 'mains',
      details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
    },
    { 
      id: 2,
      name: 'Binary Berry Cheesecake',
      price: 10.11,
      rating: 3,
      category: 'desserts',
      details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
    },
    { 
      id: 3,
      name: 'Recursive Rigatoni',
      price: 17.00,
      rating: 5,
      category: 'mains',
      details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
    },
    { 
      id: 4,
      name: 'Pumpkin Pi Squared',
      price: 3.14,
      rating: 5,
      category: 'desserts',
      details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
    },
    { 
      id: 5,
      name: 'Fibonacci String Bean Fries',
      price: 11.23,
      rating: 5,
      category: 'sides',
      details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
    }
  ]
}

//ex1 : create the homepage

//2

app.get('/',(req,res)=>{  
    console.log('home')
    //let resturant = RESTAURANT.menu
    res.render('home.ejs',{RESTAURANT:RESTAURANT})     
})  



//3 - 5
/*app.get('/restaurant',(req,res)=>{   
   //  console.log('RESTAURANT route')
     res.render('resturant.ejs',{RESTAURANT:RESTAURANT})

}) */

/*

app.get('/RESTAURANT/:resturant',(req,res)=>{   
   //  console.log('RESTAURAnt rout')
     //res.render('resturant.ejs',{RESTAURANT:RESTAURANT})
     console.log(req.params)

     const foundItem = RESTAURANT.find((oneItem)=>{
    return oneItem === req.params
    }) // this returns the student with id same as req.params.id
     res.render('item.ejs',foundItem)
})

 */


    



// Routes go here:












app.listen(3000,()=>{
    console.log('App is running on port 3000')
}) // app will be waiting for requests on port 3000












