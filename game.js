player1_name = localStorage.getItem("1st_name_math");
player2_name = localStorage.getItem("2nd_name_math");

player1_score = 0;
player2_score = 0;

document.getElementById("player1").innerHTML = player1_name + " :  ";
document.getElementById("player2").innerHTML = player2_name + " :  ";

document.getElementById("score_1player").innerHTML = player1_score;
document.getElementById("score_2player").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question turn - " +  player1_name;
document.getElementById("player_ans").innerHTML = "Answer turn - " +  player2_name;

function send(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "&nbsp" + "&nbsp" + "=" + "</h4>";
    input_box = "<br>Answer : <input type = 'number' id = 'input_check_box' placeholder = 'Enter your answer'";
    check_button = "<br><br><br><button class = 'btn btn-info' onclick = 'check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_ans = document.getElementById("input_check_box").value;
    if(get_ans == actual_answer){

        if(answer_turn == "player1"){
            update_player1_score = player1_score + 1;
            document.getElementById("score_1player").innerHTML = update_player1_score;
        }
        
        else{
            update_player2_score = player2_score + 1;
            document.getElementById("score_2player").innerHTML = update_player2_score;
        }

    }

    if(question_turn == "player1"){
       question_turn = "player2";
       document.getElementById("player_ques").innerHTML = "Question turn - " + player2_name;
    }

    else{
        question_turn == "player1";
        document.getElementById("player_ques").innerHTML = "Question turn - " + player1_name;
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_ans").innerHTML = "Answer turn - " + player2_name;
    }

    else{
        answer_turn = "player1";
        document.getElementById("player_ans").innerHTML = "Answer turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}    