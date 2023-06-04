var matrix = [

    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],

    [0, 1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],

    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],

    [0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 1, 0, 0, 3, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 3],

    [0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 3, 0, 0, 0, 1, 0, 0, 0, 0, 2, 1, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],

    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 0, 2, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],

    [0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 4, 0, 0, 0, 2, 0, 4, 0, 3, 0, 0, 2, 0, 5, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0],

    [0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, , 0, 0, 0, 3, 0, 2, 0, 4, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 5, 0],

    [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0],

    [0, 2, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 3, 0, 0, 0, 0],

    [0, 0, 0, 1, 1, 1, 4, 0, 0, 2, 0, 0, 0, 1, 0, 0, 0, 0, 4, 1, 0, 3, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],

    [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 0, 0, 0, 0, 1, 0, 4, 0, 1, 2, 0, 0, 0, 1, 1, 1, 0, 0, 2, 0, 1, 0, 4, 0, 0],

    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 3, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],

    [0, 0, 1, 1, 1, 1, 1, 0, 0, 4, 0, 3, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],

    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],

    [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],

    [0, 0, 1, 1, 1, 1, 1, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

];

var side = 20;
var grassArr = [];
var grassEaterArr = [];
var predotarArr = [];
var stoneArr = [];
var ironeArr = [];

function setup() {
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var grEater = new GrassEater(x, y, 2);
                grassEaterArr.push(grEater);
            }
            else if (matrix[y][x] == 3) {
                var predator = new Predotar(x, y, 3);
                predotarArr.push(predator);
            }
            else if (matrix[y][x] == 4) {
                var stone = new Stone(x, y, 4);
                stoneArr.push(stone);
            }
            else if (matrix[y][x] == 5) {
                var irone = new Irone(x, y, 5);
                ironeArr.push(irone);
            }
        }
    }

}


function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("#00BB2D");
            }
            else if (matrix[y][x] == 0) {
                fill("#BEBD7F");
            }
            else if (matrix[y][x] == 2) {
                fill("#F8F32B");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
            }

            rect(x * side, y * side, side, side);


        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].die();
    }

    for (var i in predotarArr) {
        predotarArr[i].mul();
        predotarArr[i].move();
        predotarArr[i].eat();
        predotarArr[i].die();
    }
    for (var i in stoneArr) {
        stoneArr[i].move();
        stoneArr[i].eat();
        stoneArr[i].die();
    }
    for (var i in ironeArr) {
        ironeArr[i].move();
        ironeArr[i].eat();
        ironeArr[i].die();
    }

    if (grassArr.length == 0) {
        for (var i = 0; i < 40; i++) {
            var x = floor(random(matrix[0].length - 1))
            var y = floor(random(matrix.length - 1))
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
}

