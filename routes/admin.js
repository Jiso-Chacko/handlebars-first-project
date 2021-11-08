var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[
    {
        no:"1",
        name:"Al Reem Kuzhimandi",
        description: "Arabian, Biryani",
        place:"Nedumbassery,Kochi",
        prize :"Rs.400",
      },
  
      {
        no:"2",  
        name:"Barbeque Nation",
        description: "North Indain, Kerala",
        place:"Kacheripadi, Kochi",
        prize :"Rs.1200",
      },
  
      {
        no:"3",  
        name:"Kochi Kitchen",
        description: "Italian, North Indian",
        place:"Kochi Marriott Hotel, Edappally",
        prize :"Rs.700",
      },
  
      {
        no:"4",
        name:"Malabar Cafe",
        description: "Kerala",
        place:"Grand Hyatt Kochi Bolgatty, Kochi",
        prize :"Rs.2,400",
      },
  
      {
        no:"5",  
        name:"Nasi and Mee",
        description: "Malaysian, Thai",
        place:"MG Road,Kochi",
        prize :"Rs.1000",
      },
  
      {
        no:"6",  
        name:"AL Taza",
        description: "Lebanese, Beverage",
        place:"Kaloor, Kochi",
        prize :"Rs.400",
      },
  
      {
        no:"7",  
        name:"Arabian Palace",
        description: "Arabian",
        place:"Edappally, Kochi",
        prize :"Rs.700",
      },
  
      {
        no:"8",  
        name:"Westleys Restocafe",
        description: "cafe, Burger, Continental",
        place:"Palarivattom, Kochi",
        prize :"Rs.600",
      },
  
      {
        no:"9",  
        name:"Cafe 17",
        description: "Italian, Continental",
        place:"Ravipuram,Kochi",
        prize :"Rs.400",
      },
  
      {
        no:"10",  
        name:"Donut Factory",
        description: "Beverages, Italian",
        place:"Kakkanad, Kochi",
        prize :"Rs.500",
      },
  
      {
        no:"11",  
        name:"Tharavadu Restaurant",
        description: "Kerala, North Indian",
        place:"Casino Hotel, Wellington Island",
        prize :"Rs.1200",
      },
  
      {
        no:"12",  
        name:"Starbucks Cofee",
        description: "Cofee, Beverage",
        place:"Edappally, Kochi",
        prize :"Rs.600",
      },
  
      {
        no:"13",  
        name:"Pandhal Cafe",
        description: "Cofee, Fast Food",
        place:"Panampilly Nagar,Kochi",
        prize :"Rs.550",
      },
  
      {
        no:"14",  
        name:"Royal Food Court",
        description: "Arabian, Chinese",
        place:"Perumbavoor, Kochi",
        prize :"Rs.300",
      },
  
      {
        no:"15",  
        name:"Chicking",
        description: "Fast Food, Beverage",
        place:"Thopumpady, Kochi",
        prize :"Rs.400",
      },
  
      {
        no:"16",  
        name:"Arippa Restaurant",
        description: "South Indian, Chinese",
        place:"Palarivattom, Kochi",
        prize :"Rs.800",
      },
  
      {
        no:"17",  
        name:"D Bombay Junkiez",
        description: "Mughlai, Chinese",
        place:"Edappally, Kochi",
        prize :"Rs.400",
      },
  
      {
        no:"18",  
        name:"Taco Bell",
        description: "Mexican, Fast Food",
        place:"Edappally, Kochi",
        prize :"Rs.550",
      },
  
      {
        no:"19",
        name:"Kashi Art Cafe",
        description: "Cafe, European",
        place:"Fort Kochi, Kochi",
        prize :"Rs.700",
      },
  
      {
        no:"20",  
        name:"McDOnald's",
        description: "Burger, Fast Food",
        place:"Edappally, Kochi",
        prize :"Rs.500",
      },

  ]
  res.render('admin', { product, admin:true});
});

module.exports = router;
