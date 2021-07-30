function hello() {
     player1_name = document.getElementById("player1_name").value;
     player2_name = document.getElementById("player2_name").value;

     localStorage.setItem("player1_name", player1_name);
     localStorage.setItem("player2_name", player2_name);

     window.location.replace("math-quix.html");
}
function hi() {
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>"+ number_1 +"X"+ number_2 +"</h4>";
    input_box = "<br> Answer :<input type='text' id='input_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}