function addUser(){
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;
    
    player1_password = document.getElementById("password1").value;
    player2_password = document.getElementById("password2").value;
     
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    
    localStorage.setItem("player1_password", player1_password);
    localStorage.setItem("player_password", player2_password);
    
    
    window.location =" index1.html";
}
