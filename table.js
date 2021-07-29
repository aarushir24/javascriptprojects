var array = [
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
var rep = '<tbody id="b1">'
for(i = 0;i < array.length; i++){
   rep+= '<tr >';
  rep+= '<td >' + array[i].name + '</td>';
  
   rep+= '<td >' + array[i].gender + '</td>';
   
   rep+= '<td >' + array[i].mobile + '</td>';
  rep+= '<td >' + array[i].email+ '</td>';
  rep+= '<td >' + '<button type="button" onclick="edit(this)">EDIT</button>' + '</td>';
  rep+= '<td>' + '<button type="button" onclick="del(this)">DELETE</button>' + '</td>';
  rep+= '</tr>';
}
rep+='</tbody>';
document.getElementById('tab').innerHTML = rep;

function del(td){
  row=td.parentElement.parentElement;
  document.getElementById("demo").deleteRow(row.rowIndex);
}

// var table = document.getElementById("tab"),rIndex;
              
//   for(var i = 0; i < table.rows.length; i++)
//   {
//       table.rows[i].onclick = function()
//       {
//           rIndex = this.rowIndex;
//           //console.log(rIndex);
          
//           document.getElementById("fname").value = this.cells[0].innerHTML;
//           document.getElementById("fgender").value = this.cells[1].innerHTML;
//           document.getElementById("fmobile").value = this.cells[2].innerHTML;
//           document.getElementById("femail").value = this.cells[3].innerHTML;
//       };
//   }

var table = document.getElementById("tab"),rIndex;
              
  for(var i = 0; i < table.rows.length; i++)
  {
      table.rows[i].onclick = function()
      {
          rIndex = this.rowIndex;
          //console.log(rIndex);
          
          document.getElementById("fname").value = this.cells[0].innerHTML;
          document.getElementById("fgender").value = this.cells[1].innerHTML;
          document.getElementById("fmobile").value = this.cells[2].innerHTML;
          document.getElementById("femail").value = this.cells[3].innerHTML;
      };
  }

 //save
  function final()
  {   rIndex-=1;
      //console.log(document.getElementById("fname").value);
     // console.log(rIndex);
      table.rows[rIndex].cells[0].innerHTML = document.getElementById("fname").value;
      table.rows[rIndex].cells[1].innerHTML = document.getElementById("fgender").value;
      table.rows[rIndex].cells[2].innerHTML = document.getElementById("fmobile").value;
      table.rows[rIndex].cells[3].innerHTML = document.getElementById("femail").value;
  }
