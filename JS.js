window.onload = function () {
  var createColumns=function(){
    var columns = document.querySelectorAll(".board>div")
    for (i in columns){
      columns[i].className="column" + (i*1+1);

    }
  }

  var createID=function(){
    var cells = document.querySelectorAll('[class^=column]>div')
    for (i in cells){
      cells[i].id=i*1;
      cells[i].className="empty"
      cells[i].innerHTML=i*1;
    }
  }

  var dropCell=function(id){
    var cell = document.getElementById(id)
    cell.innerHTML='<img src='+ activePlayer.currentPlayer().img + '>';
    cell.style.top="0";
  }

  var player1={
    img:'./image/stewie.jpg',
    player: "one"
  }

  var player2={
    img:'./image/brian.jpg',
    player: "two"
  }

  var activePlayer={
    lastPlayer: player2,
    currentPlayer: function(){
      if (this.lastPlayer == player2){
        this.lastPlayer=player1;
        return player1;
      }else{
        this.lastPlayer=player2;
        return player2;
      }
    }
  }

    var findEmptyCell = function() {
    $( '[class^=column]' ).click(function() {
      var emptyCell = $(this).find(".empty").last()
      var id=emptyCell.attr("id");
      dropCell(id);
      emptyCell.attr("class", activePlayer.lastPlayer.player);
      // console.log(activePlayer.lastPlayer); 
  });
  }

  createColumns();
  createID();
  findEmptyCell();
}
