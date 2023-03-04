// var company = new Object();
// company.name = "Facebook";
// company.ceo = new Object();
// company.ceo.firstname = "Mark";
// company.ceo.favcolor="blue";

// console.log(company);
// console.log("Company CEO name is : " + company.ceo.firstname);

// console.log(company["name"]);
// var stockPropName = "Stock of company";
// company[stockPropName]= 100;

// console.log("Stock price is :" + 
// company[stockPropName]);

// Better way : object literal
var Facebook = {
name : "facebook",
ceo: {
    FirstName : "Mark",
    FavColor : "Blue"
},
"stock of company": 200
};
console.log(Facebook.ceo.FirstName)