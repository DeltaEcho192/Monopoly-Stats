import random
game_position = 0
total_role = 0
game_position_check = 0
i = 0
while i<75:
	dice1 = random.randint(1,6)
	dice2 = random.randint(1,6)

	total_role = dice1 + dice2

	game_position_check = game_position + total_role

	if game_position_check > 40:
		game_position = game_position_check - 40
	else:
		game_position = game_position + total_role
	i = i + 1
	print(game_position)
