function details()
{
  let myname = document.getElementById("name");
  let mynamevalue= myname.value;
  let mypname = document.getElementById("p_name");
  let mypnamevalue= mypname.value;
  let mylocation = document.getElementById("location");
  let mylocationvalue= mylocation.value;
  let mydesignation = document.getElementById("designation");
  let mydesignationvalue= mydesignation.value;
  let mycompany = document.getElementById("company");
  let mycompanyvalue= mycompany.value;
  document.write("<p>Hi! I'm " + mynamevalue + " and my partner's name is " + mypnamevalue + ". I stay in "+mylocationvalue +". I am working as " + mydesignationvalue +" in "+mycompanyvalue +"."+" </p>")
}