//user click to play Xs and Os
var currentPlayer='X';
var gamesLeft=3;
var gamesWonX=0;
var gamesWonO=0;
$('.clear').click(function(){
	$('td').removeClass('O X');
	$('#playerx').removeClass('boldPlayer');
	$('#playero').removeClass('boldPlayer');

});

$('td').click(function(){
 		//whose turm is it?
 		// is the td taken? if it is return nothing
 		// hasclass() method determines if a selector has a class
 		//pass the classname (without dot) it may or may not have
 		if($(this).hasClass('X')||$(this).hasClass('o')){
 				return;
 		   }

 		if(currentPlayer==='X'){

 			//its player X's turn
 			//put an x in td
 			$(this).addClass('X');
 			//set current player to O
 			currentPlayer='O';
 			//dont write span or both become bold
 			// player x title becomes bold while player o 
 			//title becomes original size
 			$('#playerx').addClass('boldPlayer');
 			$('#playero').removeClass('boldPlayer');
 			
 			if(playerWon('X')){
 				alert('X wins!');
 				gamesWonX++;
 				gamesLeft--;
 			}
 		}else{
 			$(this).addClass('O');
 			//put an O in the td
 			//set current player back to X
 			currentPlayer='X';
 			$('#playero').addClass('boldPlayer');
 			$('#playerx').removeClass('boldPlayer');
             if(playerWon('O')){
 				alert('O wins!');
 				gamesWonO++;
 				gamesLeft--;
 			}
 		}
 		if( gamesLeft===0){
 			alert(" player  X " +" won "+ gamesWonX+ " out of 3");
 			alert(" player  O " +" won "+ gamesWonO+ " out of 3");
 		}
       
});
// nested array boxes counted from zero

var solution=[[0,1,2], 
              [3,4,5],
             [6,7,8],
             [0,4,8],
             [2,4,6],
             [0,3,6],
             [1,4,7],
             [2,5,8]];
   // returns true if the player that is passed in has
   //three squares in a row, column or diagonal
   //paramters: with X or O
   // returns boolean true or false
   // has an input is the player which is the current
   // player string variable 'x' or 'o'
   //returns true if player or currentplayer won
function playerWon(player){

	for( var i=0; i<solution.length;i++){
		// current solution is a mini array of 3 numbers
		//or places on the board
		// when i=0 it looks at mini array [0,1,2]
		var currentSolution=solution[i];
		//if the player has 3 squares
		if(checksolution(player,currentSolution)){
           //asking if player won
           return true;
		}
		
	}
	// after no winner then return false
	return false;
}


//takes player, and mini arrays in solution[i]
//return true if 3 squares belong to player
function checksolution(player,solution){
	//checks true if whole row , cloumn or diagonal belongs to player
	//checks  3 boxes in each mini arrays
	//solution[0], solution[1] and solution[2] is position 0,1,2 in
	//all miniarrays that are row , cloumn or diagonal
	return squareBelongsToPlayer(player,solution[0])&&
		squareBelongsToPlayer(player,solution[1])&&
		squareBelongsToPlayer(player,solution[2])
}

//eq(index) gives you an index at a particular num
//returns true if the  one square at this index
// belongs to this player
//player is srting current player and index is the var i
// does td, or square have class x or o?
function squareBelongsToPlayer(player,index){
	return $('td').eq(index).hasClass(player);
	//does the  td have a class 
	//player, is either O or X
	// ex: does box 5 belong to player x
}



             