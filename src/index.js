const number = require("all-the-cities")


//////////////////////////////////
/////////////method 1/////////////
//////////////////////////////////
// const tenMillion = number.filter(city => city.population > 10000000)
// console.log("there are " + tenMillion.length + " countries with more than 10 million people")
// console.log(tenMillion)

// var theList = ""
// for(ii = 0; ii < tenMillion.length; ii++){
//     var num = ii;
//     theList += tenMillion[num].name + ", "
// }
// console.log("The cities are as following: " + theList)


//////////////////////////////////
/////////////method 2/////////////
//////////////////////////////////
var num = 0
var cityList = ""
for(ii = 0; ii < number.length; ii++){
    var city = number[ii]
    if(city.population > 10000000){
        var cityName = city.name
        cityList += cityName + ", "
        num++
    }
}
console.log("There are " + num + " city with population more than 10 million. They are: " + cityList)
