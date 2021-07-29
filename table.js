var a = [
  {
      name: "Anita",
      gender:  "Female",
      mobile:"9658363736",
      email: "anita@abc.com"
  },
  {
      name: "Neha",
      gender:  "Female",
      mobile:"9793763755",
      email:"neha@abc.com"
      
  },
  {
      name: "Rohan",
      gender:  "Male",
      mobile:"8254375724",
      email: "rohit@abc.com"
  },
  {
      name: "Mansi",
      gender:  "Female",
      mobile:"9756356324",
      email: "mansi@abc.com"
  },
  {
      name: "Aman",
      gender:  "Male",
      mobile:"9876347636",
      email: "aman@abc.com"
  },
  {
      name: "Manisha",
      gender: "Female",
      mobile:"9498749827",
      email: "manisha@abc.com"
  },
  {
      name: "Aditya",
      gender:  "Male",
     mobile:"8762375768",
      email: "aditya@abc.com"
  },
  
];
var k = '<tbody>'
for(i = 0;i < a.length; i++){
   k+= '<tr>';
  k+= '<td>' + a[i].name + '</td>';
  
   k+= '<td>' + a[i].gender + '</td>';
   
   k+= '<td>' + a[i].mobile + '</td>';
  k+= '<td>' + a[i].email+ '</td>';
  k+= '<td>' + '<button type="button" >EDIT</button>' + '</td>';
  k+= '<td>' + '<button type="button"">Remove</button>' + '</td>';
  k+= '</tr>';
}
k+='</tbody>';
document.getElementById('tab').innerHTML = k;





