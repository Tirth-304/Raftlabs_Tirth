// Make 8X8 Board
const board = [];
for (let i = 0; i < 8; i++) {
	board[i] = [];
}

// Check whether this move is visited or not
const addMove = (x, y, level) => {
	if (x >= 0 && x <= 7 && y >= 0 && y <= 7 && board[x][y] == null) {
		board[x][y] = level;
	}
};

// Check for all posisible moves
const addAllMoves = (x, y, level) => {
	addMove(x + 1, y + 2, level);
	addMove(x + 2, y + 1, level);
	addMove(x + 2, y - 1, level);
	addMove(x + 1, y - 2, level);
	addMove(x - 1, y - 2, level);
	addMove(x - 2, y - 1, level);
	addMove(x - 2, y + 1, level);
	addMove(x - 1, y + 2, level);
};

// Find All Possible moves
const addAllPossible = (level) => {
    console.log(`------------------${level}------------------------`);
    var str = '';
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (board[i][j] === level) {
                str = str + i + ',' + j + ' ';
				addAllMoves(i, j, level + 1);
			}
		}
	}
    console.log(str);
};

const findPath = (startX, startY, endX, endY) => {
	addMove(startX, startY, 0);
	let index = 0;
	do {
		addAllPossible(index++);
	} while (board[endX][endY] == null);
	return board[endX][endY];
};

console.log(`Moves Required to move knight from Scr to Dest are ${findPath(3, 3, 3, 4)}`);