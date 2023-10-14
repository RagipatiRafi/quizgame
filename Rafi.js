Player1_Name = localStorage.getItem("player1_name");
Player2_Name = localStorage.getItem("player2_name");

Player1_score = 0;
Player2_score = 0;

document.getElementById("Player1_Name").innerHTML = Player1_Name + " : ";
document.getElementById("Player2_Name").innerHTML = Player2_Name + " : ";

document.getElementById("Player1_score").innerHTML = Player1_score;
document.getElementById("Player2_score").innerHTML = Player2_score;

document.getElementById("Player_Question").innerHTML = "Question Turn- "+ Player1_Name;
document.getElementById("Player_Answer").innerHTML = "Answer Turn- "+Player2_Name;


function send(){
    Number1 = document.getElementById("number1").value;
   Number2 =  document.getElementById("number2").value;
    actual_answer = parseInt(Number1)*parseInt(Number2);
    console.log(actual_answer);


Question_Number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br> answer: <input type = 'text' id = 'input_check_box'>";
check_button = "<br><br> <button class = 'btn btn-info' onclick = 'check()'>Check</button>";
row = Question_Number+ input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("Number1").value=" ";
document.getElementById("Number2").value=" ";
}

Question_Turn = "Player1";
Answer_Turn = "Player2";

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer==actual_answer)
        {
            if(Answer_Turn == "Player1")
                {
                    Player1_score = Player1_score+1;
                    document.getElementById("Player1_score").innerHTML = Player1_score;
                }
            else{
                Player2_score = Player2_score+1;
                    document.getElementById("Player2_score").innerHTML = Player2_score;
                
            }
        }
    if(Question_Turn == "Player1")
        {
            Question_Turn = "Player2"
            document.getElementById("Player_Question").innerHTML = "Question Turn -" +Player2_Name;
        }
    else
    {
        Question_Turn = "Player2"
            document.getElementById("Player_Question").innerHTML = "Question Turn -" +Player1_Name;
    }
    if(Answer_Turn == "Player1")
    {
        Answer_Turn = "Player2"
            document.getElementById("Player_Answer").innerHTML = "Answer Turn -" +Player2_Name;   
    }
    else
        {
            Answer_Turn = "Player1"
            document.getElementById("Player_Answer").innerHTML = "Answer Turn -" +Player1_Name;  
        }
    document.getElementById("output").innerHTML = " ";
    
}