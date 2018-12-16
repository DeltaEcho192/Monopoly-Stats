function game(){
    game_position = 0;
    total_role = 0;
    game_position_check = 0;
    i = 0;
    max = 6;
    min = 1;
    var monopoly_game = [];
    var a = [], b = [], c = [],prev;
    total_moves = 10000;

    while(i < total_moves)
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

    monopoly_game.sort();
    for ( var i = 0; i < monopoly_game.length; i++ ) {
        if ( monopoly_game[i] !== prev ) {
            a.push(monopoly_game[i]);
            b.push(1);
        } else {
            b[b.length-1]++;
        }
        prev = monopoly_game[i];
    }

    for(var z = 0; z < a.length; z++)
    {
        perc_pos = Math.round((b[z]/total_moves) * 100,1);
        c[z] = perc_pos;
    }
    console.log(a,b,c);
    return(monopoly_game);
}
