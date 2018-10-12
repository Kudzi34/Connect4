(function() {
    var curPlayer = "player1";
    var allSlots = $(".slot");

    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        //switchPlayers();
        for (var i = 5; i >= 0; i--) {
            if (!slotsInColumn.eq(i).hasClass("player1")) {
                if (!slotsInColumn.eq(i).hasClass("player2")) {
                    break;
                }
            }
        }
        function showVictoryMessage() {
            $(".modal").show();
        }

        function checkForVictory(slots) {
            var victoryCounter = "";

            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(curPlayer)) {
                    victoryCounter += "y";
                } else {
                    victoryCounter += "n";
                }
            }

            if (victoryCounter.indexOf("yyyy") > -1) {
                $(".modal").show();
                allSlots.removeClass("player1 player2");
                //alert("Yeah baby you won!");
            }
        }

        slotsInColumn.eq(i).addClass(curPlayer);
        if (checkForVictory(slotsInColumn)) {
            return showVictoryMessage();
        } else {
            var slotsInRow = $(".row" + i);
            if (checkForVictory(slotsInRow)) {
                return showVictoryMessage();
            } else {
                if (checkForDiagonalWin()) {
                    return showVictoryMessage();
                }
            }
        }

        switchPlayers();
        function checkForDiagonalWin() {
            var diagonalWin = [
                [0, 7, 14, 21],
                [1, 8, 15, 22],
                [2, 9, 16, 23],
                [3, 8, 13, 18],
                [4, 9, 14, 19],
                [5, 10, 15, 20],
                [6, 13, 20, 27],
                [7, 14, 21, 28],
                [8, 15, 22, 29],
                [9, 14, 19, 24],
                [10, 15, 20, 25],
                [11, 16, 21, 26],
                [12, 19, 26, 33],
                [13, 20, 27, 34],
                [14, 21, 28, 35],
                [15, 20, 25, 30],
                [16, 21, 26, 31],
                [17, 22, 27, 32],
                [18, 25, 32, 39],
                [19, 26, 33, 40],
                [20, 27, 34, 41],
                [21, 26, 31, 36],
                [22, 27, 32, 37],
                [23, 28, 33, 38]
            ]; // array of posibilites
            for (var i = 0; i < diagonalWin.length; i++) {
                var playCounter = 0;
                for (var j = 0; j < 4; j++) {
                    if (allSlots.eq(diagonalWin[i][j]).hasClass(curPlayer)) {
                        playCounter++;
                    }
                }
                if (playCounter == 4) {
                    return true;
                }
            }
        }
    });

    function switchPlayers() {
        if (curPlayer == "player1") {
            curPlayer = "player2";
        } else {
            curPlayer = "player1";
        }
    }
})();

(function win() {
    $(".modal").hide();
    setTimeout(function() {
        $(".modal").show();
    }, 1000);
    $(".buttons").on("click", function(e) {
        console.log("working");
        $(".modal").hide();
    });
})();
