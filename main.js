function addUser(){
    name1 = document.getElementById("input1").value;
    name2 = document.getElementById("input2").value;
  
    localStorage.setItem("1st_name_math", name1);
    localStorage.setItem("2nd_name_math", name2);
  
    window.location = "game.html";
  }