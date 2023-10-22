
var json = [{
    "Name" : "Subhashini", 
    "Age"   : "23",
    "mail": "tjsubha2000@gmail.com"
},
{
    "Name" : "Saravanan", 
    "Age"   : "25",
    "mail": "Saravanan0610@gmail.com"
}];
//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.Name);
    console.log(obj.Age);
    console.log(obj.mail);

}
//for Each
json.forEach(function(obj) { console.log(obj.mail); });

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].Name);
  //console.log(json[key].mail);
 
}
}
//for Of
let text = "";
for (let x of json[key].Name) {
 text += x; 
}
 console.log(text);