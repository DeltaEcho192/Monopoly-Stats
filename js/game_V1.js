function game(){
    game_position = 0;
    total_role = 0;
    game_position_check = 0;
    i = 0;
    max = 6;
    min = 1;
    var monopoly_game = [];

    while(i < 75)
    {
        dice1 = Math.round(Math.random() * (max-min) + min);
        dice2 = Math.round(Math.random() * (max-min) + min);

        total_role = dice1 + dice2;
        game_position_check = game_position + total_role;
        if(game_position_check>40)
        {
            game_position = game_position_check - 40;
        }
        else
        {
            game_position = game_position + total_role;
        }
        monopoly_game.push(game_position);
        i += 1;
    }
    return(monopoly_game);
}
var x = game();
average_calculator(x);

function average_calculator(monopoly_game){
    var b = [], prev;

    monopoly_game.sort();
    for ( var i = 0; i < monopoly_game.length; i++ ) {
        if ( monopoly_game[i] !== prev ) {
            monopoly_game.push(monopoly_game[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = monopoly_game[i];
    }
    console.log(monopoly_game,b);

}