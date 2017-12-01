var arrTankPosition = [];
var arrKey = [];

var PositionX = 50;
var PositionY = 50;
var letX = 0;
var letY = 0;


var map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,

    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2,

    2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0,

    2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2,

    2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0,

    2, 2, 1, 1, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 1, 1, 2, 2, 0,

    0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2,

    0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0,

    0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2,

    0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0,

    0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2,

    1, 1, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0,

    0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2,

    2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0,

    0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0,

    2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0

    , 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0

    , 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 2, 2

    , 0, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0

    , 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2

    , 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var arrLetX = [];
var arrLetY = [];

function maps() {
    var n = 0;

    map.forEach(function (item, i, arr) {

        if (item == 0) {
            //	ctx.drawImage(ImgLeftTank, letX , letY, 20, 20 );
            letX += 20;
            n++;
            console.log(n + " ---- " + letX + " ---- " + letY);

            if (n == 26) {
                letY += 20;
                letX = 0;
                n = 0;

            }
        }
        else if (item == 1) {
            //Wool();

            ctx.drawImage(fireShot, letX, letY, 20, 20);
            letX += 20;
            n++;
            console.log(n + " oooo " + letX + " oooo " + letY);
            if (n == 26) {
                letY += 20;
                letX = 0;
                n = 0;
            }
        }

        else if (item == 2) {

            //Wool();
            ctx.drawImage(BB, letX, letY, 20, 20);
            letX += 20;
            n++;


            console.log(n + " Wool " + letX + " Wool " + letY);
            if (n == 26) {
                letY += 20;
                letX = 0;
                n = 0;
            }
        }


    });

}

var c = letX;
var z = letY;

function Wool() {


    for (var i = 0; i < 50; i++) {
        arrLetX.push(c);
        c++;
        i++;
    }

    for (var j = 0; j < 50; j++) {
        arrLetY.push(z);
        z++;
        j++;
    }

}


var sizeImgTank = 40;
var battleField = document.getElementById("canvas");
ctx = battleField.getContext('2d');
var ImgLeftTank = document.getElementById("ImgLeftTankId");
var ImgRightTank = document.getElementById("ImgRightTankId");
var ImgUpTank = document.getElementById("ImgTankUp");
var ImgDownTank = document.getElementById("ImgTankDown");
var fireShot = document.getElementById('shotId');
var Tank = document.getElementById('Tank');
var BB = document.getElementById('BBid');
var Base = document.getElementById('base');
var tankPositionX = null;
var steep = 5;
var arrTankPositionX = [];
var arrTankPositionY = [];
var SIZECLEAR = 40;
var SIZECLEARSHOT = 2;
var arrAllEnimiesCordsX = [];
var arrAllEnimiesCordsY = [];
var arrShotX = [];
var arrShotY = [];
//var positionEnemiesX = Math.floor(Math.random() * 10) * 20;
//var positionEnemiesY = Math.floor(Math.random() * 10) * 20;
var positionEnemiesX = 0
var positionEnemiesY = 0
var arrEnemiesPositionX = [];
var arrEnemiesPositionY = [];
var baise8 = 2
var shellSize = 2;
var speedShell = 10;
var m = positionEnemiesX;
var n = positionEnemiesY;
var tankPlayerPints = [];

//ctx.drawImage(fireShot, letX , letY, 20, 20 );
//ctx.drawImage(fireShot, letXB , letYB, 20, 20 );


var A = null;
var B = null;

//ctx.drawImage(fireShot, 100 , 120, 20, 20 );
//ctx.drawImage(fireShot, 120 , 100, 20, 20 );
//ctx.drawImage(fireShot, 120 , 120, 20, 20 );

PushKey = {
    name: null,
}

Player = {
    X: 160,
    Y: 480,

}


var a = 0;
var b = 1;


function smash() {
    console.log(L);
    /*
        if (Player.X<=125 && Player.Y<=125){
            if(Player.X >=80 && Player.Y >=80){
                console.log("+");
            }

        } */


}

//	A = Player.X ;
//B = Player.Y + 40;
/* arrLetX.forEach(function(item, i, arr) {
arrLetY.forEach(function(item2, i, arr) {
if (item == Player.X && item2 == Player.Y){
    CONSOLE.LOG("DD");
} */
/*
    else if (PushKey.name=="U"){
    Player.Y +=1;

    ctx.drawImage(ImgUpTank, Player.X , Player.Y -1 , sizeImgTank, sizeImgTank );
    }

    // else if (PushKey.name=="D"){
    // Player.Y +=1;
    // console.log("D");
    // ctx.drawImage(ImgUpTank, Player.X , Player.Y -1 , sizeImgTank, sizeImgTank );
    // }
    /* else if (PushKey.name=="R"){
    Player.Y -=1;
    console.log("R");
    ctx.drawImage(ImgUpTank, Player.X , Player.Y -1 , sizeImgTank, sizeImgTank );
    }

}
*/

/* });
		
	
	}); 
	 */
var L = 0;

function Key(e) {
    var c = e.keyCode;
    switch (c) {

        case 37:
            arrLetX.forEach(function (item, i, arr) {
                arrLetY.forEach(function (item2, i, arr) {
                    if (item == Player.X && item2 == Player.Y) {
                        L = 1;
                        console.log(L);
                    }
                    else {

                    }
                });


            });
            MoveL();
            PushKey.name = "L";
            if (L == 0) {

            }
            else {

            }
            break;

        case 39:


            MoveR();
            PushKey.name = "R";
            smash();
            break;

        case 40:
            MoveD();
            PushKey.name = "D";
            smash();
            break;

        case 38:
            MoveU();
            PushKey.name = "U";
            smash();
            break;
    }
}

ctx.fillStyle = "#FF0000";

function MoveL() {

    smash();


    if (PushKey.name == "D" || PushKey.name == "U" || PushKey.name == "R") {
        ctx.drawImage(ImgLeftTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
    }

    else {
        Player.X -= steep;
        ctx.drawImage(ImgLeftTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
        ctx.fillRect(Player.X + 40, Player.Y, 5, 40);
    }
}

function MoveR() {
    //L = 0;
    if (PushKey.name == "D" || PushKey.name == "U" || PushKey.name == "L") {
        ctx.drawImage(ImgRightTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
    }
    else {
        Player.X += steep;
        ctx.drawImage(ImgRightTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
        ctx.fillRect(Player.X - 5, Player.Y, 5, 40);
    }
}

function MoveD() {
    if (PushKey.name == "L" || PushKey.name == "R" || PushKey.name == "U") {
        ctx.drawImage(ImgDownTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
        //ctx.clearRect(Player.X , Player.Y -40, SIZECLEAR , SIZECLEAR);
    }

    else {
        Player.Y += steep;
        ctx.drawImage(ImgDownTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
        //ctx.clearRect(Player.X , Player.Y -40, SIZECLEAR , SIZECLEAR);
        ctx.fillRect(Player.X, Player.Y - 5, 40, 5);
    }

}

function MoveU() {

    if (PushKey.name == "L" || PushKey.name == "R" || PushKey.name == "D") {
        ctx.drawImage(ImgUpTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);

    }
    else {
        Player.Y -= steep;
        ctx.drawImage(ImgUpTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);
        ctx.fillRect(Player.X, Player.Y + 40, 40, 5);
        //ctx.clearRect(Player.X , Player.Y +40, SIZECLEAR , SIZECLEAR);
    }
}

function Start() {
    maps();
    moveEnemies();
    ctx.drawImage(Base, 240, 480, sizeImgTank, sizeImgTank);
    ctx.drawImage(ImgUpTank, Player.X, Player.Y, sizeImgTank, sizeImgTank);

}


StartShot = {
    arrStartShotX: null,
    arrStartShotY: null
}


// ________________________________________________________________________________________ OLD v
/* function Key(e){
	
var c = e.keyCode;
	switch (c){
		case 37: // Move Left 1
		if (arrKey[0]==2 ){
		PositionX -= steep;	
		}
		 
		 if (arrKey[0]==4 ){
		PositionY -= steep;	
		}
		if (arrKey[0]==3 ){
		PositionY += steep;	
		}
		
		arrKey.splice(0);
		arrKey.push(1);
		ctx.clearRect(arrTankPositionX[0], arrTankPositionY[0], SIZECLEAR , SIZECLEAR);	
		arrTankPositionX.splice(0);
		arrTankPositionY.splice(0);
		ctx.drawImage(ImgLeftTank, PositionX, PositionY, sizeImgTank, sizeImgTank );
		arrTankPositionX.push(PositionX);
		arrTankPositionY.push(PositionY);	
		if(PositionX<10){
			console.log("LeftSide");
				
		}	
			else{
		PositionX -= steep; 
			}
		
		break;
		
		case 39: // Move Right 2
		if (arrKey[0]==1 ){
		PositionX += steep;	
		}
		
		if (arrKey[0]==3 ){
		PositionY += steep;	
		}	
		if (arrKey[0]==4 ){
		PositionY -= steep;	
		}
		
		arrKey.splice(0);
		arrKey.push(2);
		//console.log(arrKey[0])
		ctx.clearRect(arrTankPositionX[0], PositionY, SIZECLEAR , SIZECLEAR);
		arrTankPositionX.splice(0);
		arrTankPositionY.splice(0);
		ctx.drawImage(ImgRightTank, PositionX , PositionY, sizeImgTank, sizeImgTank );
		arrTankPositionX.push(PositionX);
		arrTankPositionY.push(PositionY);
		PositionX += steep;
		break;
		
		case 38: // Move Up 3
		
		if (arrKey[0]==4 ){
		PositionY -= steep;	
		}
		
		if (arrKey[0]==2 ){
		PositionX -= steep;	
		}
		if (arrKey[0]==1 ){
		PositionX += steep;	
		}
		
		arrKey.splice(0,1);
		arrKey.push(3);
		//console.log(arrKey[0]);
		ctx.clearRect(PositionX, arrTankPositionY[0] , SIZECLEAR , SIZECLEAR);
		arrTankPositionX.splice(0);
		arrTankPositionY.splice(0);
		ctx.drawImage(ImgUpTank, PositionX, PositionY, sizeImgTank, sizeImgTank );
		arrTankPositionX.push(PositionX);
		arrTankPositionY.push(PositionY);
		PositionY -= steep;
		break;
		
		case 40: // Move Down 4
		if (arrKey[0]==3 ){
		PositionY += steep;	
		}
		
		if (arrKey[0]==2 ){
		PositionX -= steep;	
		}
		
		if (arrKey[0]==1 ){
		PositionX += steep;	
		}
		arrKey.splice(0);
		arrKey.push(4);
		
		//console.log(arrKey[0])
		ctx.clearRect(PositionX , arrTankPositionY[0], SIZECLEAR , SIZECLEAR);
		arrTankPositionX.splice(0);
		arrTankPositionY.splice(0);
		ctx.drawImage(ImgDownTank, PositionX , PositionY , sizeImgTank, sizeImgTank );
		arrTankPositionX.push(PositionX);
		arrTankPositionY.push(PositionY);
		PositionY += steep;
		break;
		
		case 32:
		if (arrKey==2){
		ShotLeftSide();	
		}
		else if (arrKey==1){
			ShotRightSide();
		}
		
		else if (arrKey==3){
				ShotUpSide();
		}
		
		
		else if (arrKey==4){
				StartShot.arrStartShotX = PositionX + 8;
				StartShot.arrStartShotY = PositionY + 20;

				ShotDownSide();
				pauseShot =	setInterval(ShotDownSide, 10);
			
		}
		
		break;
	
		
	}
} */

// ---------------------------------------------------------------------------------

var pauseShot = null;

function ShotDownSide() {
    ctx.drawImage(fireShot, StartShot.arrStartShotX, StartShot.arrStartShotY, 5, 5);
    ctx.clearRect(StartShot.arrStartShotX, StartShot.arrStartShotY - 5, 5, 5);
    StartShot.arrStartShotY += 5;
}


EnimiesCords = {
    X: null,
    Y: null
}

var pauseEnimies = null;

function moveEnemies() {


    ctx.clearRect(positionEnemiesX, arrEnemiesPositionY[0], SIZECLEAR, SIZECLEAR);
    arrEnemiesPositionX.splice(0);
    arrEnemiesPositionY.splice(0);
    ctx.drawImage(Tank, positionEnemiesX, positionEnemiesY, sizeImgTank, sizeImgTank);
    arrEnemiesPositionX.push(positionEnemiesX);
    arrEnemiesPositionY.push(positionEnemiesY);

//		EnimiesCords.X = positionEnemiesX;
    //	EnimiesCords.Y = positionEnemiesY;


    allEnemiesCords();
    allEnemiesCords2();

    positionEnemiesY += steep;


}

pauseEnimies = setInterval(moveEnemies, 5000);

function StopEnimies() {
    clearInterval(pauseEnimies);
    ctx.clearRect(positionEnemiesX, arrEnemiesPositionY[0], SIZECLEAR, SIZECLEAR);

}

function StartEnimies() {
    positionEnemiesX = 100;
    positionEnemiesY = 360;
    pauseEnimies = setInterval(moveEnemies, 5000);
}


function allEnemiesCords() {
    var i = 0;
    while (i < 10) {


        arrAllEnimiesCordsY.push(n);

        n++;
        i++;
    }


}

function allEnemiesCords2() {
    if (baise8 == 1) {


    }
    else {
        var i = 0;
        while (i < 21) {

            arrAllEnimiesCordsX.push(m);

            m++;

            i++;
        }


    }
}

function inspectionDestruction() {

    arrAllEnimiesCordsX.forEach(function (item, i, arr) {
        arrShotX.forEach(function (item3, i, arr) {
            arrAllEnimiesCordsY.forEach(function (item2, i, arr) {
                arrShotY.forEach(function (item4, i, arr) {

                    if (item2 == item4 && item == item3) {


                        baice3 = 2;

                    }
                });
            });


        });
    });


}

addEventListener("keydown", Key);