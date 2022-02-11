function area()
{
  var base= parseInt(document.getElementById("base").value);
  var height= parseInt(document.getElementById("height").value);
  var area;
  area = base * height * 0.5;
document.getElementById("result_area").innerHTML = "area = " + area;
}