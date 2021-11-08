var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let product=[
    {
        
        name:"Araian Palace",
        description: "Arabian",
        place:"edappally, Kochi",
        prize :"Rs.700",
        image:"https://b.zmtcdn.com/data/pictures/0/901910/1cd2068e159274d012df23db06830714_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"MRA Restaurant",
        description: "Arabian",
        place:"edappally, Kochi",
        prize :"Rs.300",
        image:"https://b.zmtcdn.com/data/pictures/0/19356040/bcf4e285b8690f26a0fa10246ed8c8df_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"Al-sheba Kuzhimandi",
        description: "Arabian",
        place:"Palarivattom, Kochi",
        prize :"Rs.400",
        image:"https://b.zmtcdn.com/data/pictures/9/19479379/b2868b36d100cec91cbc99ccc83c5577_featured_v2.jpg?output-format=webp"
      },

      {
        
        name:"Tasty Hut",
        description: "Arabian",
        place:"Palarivattom, Kochi",
        prize :"Rs.500",
        image:"https://b.zmtcdn.com/data/pictures/4/903234/9fa4f2cb02f2800f519718b02e2cef7b_featured_v2.jpg"
      },
  ]

  let product1=[
    {
        
        name:"Jeff Biriyani",
        description: "Biriyani",
        place:"Thoppumpady, Kochi",
        prize :"Rs.300",
        image:"https://b.zmtcdn.com/data/pictures/chains/1/901151/596c1da2fb0fdec46d8f56178571b26c_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"Kayees Hotel",
        description: "Biriyani",
        place:"Pallimukku, Kochi",
        prize :"Rs.200",
        image:"https://b.zmtcdn.com/data/pictures/3/95293/38a35ee4bd8af369328f2eb1085869f2_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"Aha! Biryani",
        description: "Biriyani",
        place:"Pallimukku, Kochi",
        prize :"Rs.200",
        image:"https://b.zmtcdn.com/data/pictures/7/903137/1daa76ad6785c134d28f1430924aa39c_featured_v2.jpg"
      },

      {
        
        name:"New Harsh Dhaba",
        description: "Biriyani",
        place:"Kochi, Kochi",
        prize :"Rs.300",
        image:"https://b.zmtcdn.com/data/pictures/chains/8/18153238/8179facbd0444e986bf1b77aa4cec527_featured_v2.jpg"
      },
  ]

  let product2=[
    {
        
        name:"Punjab House",
        description: "North Indian",
        place:"Thoppumpady, Kochi",
        prize :"Rs.300",
        image:"https://b.zmtcdn.com/data/pictures/2/900162/5eba5a7f627960664dc4a6b798bf75d1_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"Hyderabad Kitchen",
        description: "North Indian",
        place:"Edapally, Kochi",
        prize :"Rs.200",
        image:"https://b.zmtcdn.com/data/pictures/3/19594913/12ff4dcee874ee24e721182b01734257_featured_v2.jpg?output-format=webp"
      },
  
      {
        
        name:"Sardrji Ka Dhaba",
        description: "North Indian",
        place:"Kacheripady, Kochi",
        prize :"Rs.600",
        image:"https://b.zmtcdn.com/data/pictures/chains/2/902142/a596e0e79b707b7d8710b4b169e4d21a_featured_v2.jpg?output-format=webp"
      },

      {
        
        name:"Punjabi Tadka",
        description: "North Indian",
        place:"Tevera, Kochi",
        prize :"Rs.500",
        image:"https://b.zmtcdn.com/data/pictures/6/900166/f703e8dfdf587747121a49f917781e42_featured_v2.jpg?output-format=webp"
      },
  ]

  res.render('third', { product,product1,product2, third:true});
});

module.exports = router;
