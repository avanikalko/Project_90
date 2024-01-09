function addUser(){
    user_1 = document.getElementById("player1_input_login").value;
    user_2 = document.getElementById("player2_input_login").value;

    localStorage.setItem("user_1", user_1 );
    localStorage.setItem("user_2", user_2 );

    window.location = "quiz_game_page.html";
}