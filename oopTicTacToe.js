$(function() {

  // A starter Player constructor.
  function Player(sym) {
    // `this.mark` stores the X or O depending which
    // player it is.
    this.mark = sym;
  };

  // A starter Player constructor.
  function Board() {

    _Board = this; 
    // `this.player1` is a new instance of a Player object.
    // note that `this.player1.mark` is 'X'.
    this.player1 = new Player('X');

    // `this.player1` is a new instance of a Player object.
    // note that `this.player2.mark` is 'O'.
    this.player2 = new Player('O');

    // `this.$boxes` stores the jQuery object of
    // DOM elements with `class='box'`.
    this.$boxes = $('.box');

    // `this.$reset` stores the jQuery object of
    // DOM elements with `id='reset'`.
    this.$reset = $('#reset');

    // `this.currentPlayer` is the current player.
    // As the game goes on, this value should
    // toggle between `this.player1` and 
    // `this.player2`. (we'll use the `nextPlayer` method
    // to make that toggling happen)
    this.currentPlayer = this.player1;

    // `this.counter` tracks how many moves have been made
    // so far. We use this attribute in the `nextPlayer`
    // method to toggle `this.currentPlayer`.
    this.counter = 1;
  };

  // `Board.prototype.nextPlayer` toggles the state
  // of `this.currentPlayer` between `this.player1`
  // and `this.player2`.
  Board.prototype.nextPlayer = function() {
    // Check to see if `this.counter` is even
    if (this.counter % 2 === 0) {

      // If it is, set `this.currentPlayer` to be
      // `this.player1`.
      this.currentPlayer = this.player1;
    } else {

      // If it is, set `this.currentPlayer` to be
      // `this.player1`.
      this.currentPlayer = this.player2;
    }

    // Increment `this.counter`.
    this.counter += 1;
  };

  // `Board.prototype.init` initializes our event listeners
  Board.prototype.init = function() {

    var _this = this;

    this.$boxes.click(function(evnt) {

        if(this.classList.contains('box')){
          evnt.target.setAttribute("class",_this.currentPlayer.mark)
          evnt.target.innerHTML = _this.currentPlayer.mark
          _this.nextPlayer();

        }
      });

    // I'll leave it to you to implement reset
    this.$reset.click(function(evnt) {
      _Board.counter = 1;

      for(var i =0; i<_Board.$boxes.length; i++){
        _Board.$boxes[i].innerHTML = '&nbsp'
        _Board.$boxes[i].className = 'box'
      }

    });

  };

  var board = new Board();
  board.init();
});

