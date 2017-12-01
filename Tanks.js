var arrTankPosition=[];
var arrKey = [];

var PositionX = 0;
var PositionY = 0;
MyObject = {
    id : 1,
    name : "Sample",
    boolval : true,
    getName : function(x)
    {	(function() {
			for (var i = 0; i < 5; i++ ){
				console.log(i);
			}
			setTimeout(arguments.callee, 1000)
	})();
    }
} 











var sizeImgTank = 20;
var battleField = document.getElementById("canvas");
ctx = battleField.getContext('2d');
var ImgLeftTank = document.getElementById("ImgLeftTankId");
var ImgRightTank = document.getElementById("ImgRightTankId");
var ImgUpTank = document.getElementById("ImgTankUp");
var ImgDownTank = document.getElementById("ImgTankDown");
var fireShot = document.getElementById('shotId');
var Tank = document.getElementById('Tank');
var TankD = document.getElementById('TankDid');
var tankPositionX = null;
var steep = 5;
var arrTankPositionX = [];
var arrTankPositionY = [];
var SIZECLEAR = 20;
var SIZECLEARSHOT = 2;
var arrAllEnimiesCordsX =[];
var arrAllEnimiesCordsY =[];
var arrShotX = [];
var arrShotY = [];
//var positionEnemiesX = Math.floor(Math.random() * 10) * 20;
//var positionEnemiesY = Math.floor(Math.random() * 10) * 20;
var positionEnemiesX = 100
var positionEnemiesY = 360
var arrEnemiesPositionX =[];
var arrEnemiesPositionY =[];
var baise8 = 2
var shellSize = 2;
var speedShell =10;
var m = positionEnemiesX;
var n = positionEnemiesY;
function Start(){
	moveEnemies ();
	
	ctx.drawImage(ImgRightTank, PositionX, PositionY, sizeImgTank, sizeImgTank );
}

function Key(e){
	
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
		ctx.clearRect(arrTankPositionX[0], PositionY, SIZECLEAR , SIZECLEAR);	
		arrTankPositionX.splice(0);
		arrTankPositionY.splice(0);
		ctx.drawImage(ImgLeftTank, PositionX, PositionY, sizeImgTank, sizeImgTank );
		arrTankPositionX.push(PositionX);
		arrTankPositionY.push(PositionY);		
		PositionX -= steep;
		
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
				ShotDownSide()
		}
		
		break;
	
		
	}
}
function ShotLeftSide(){
	 
var fireShotPosX = PositionX + 15 ;
var fireShotPosY = PositionY + 10  ;

		(function () {	
			if(fireShotPosX>400)
			{	
			ctx.clearRect(fireShotPosX-shellSize, fireShotPosY,shellSize,shellSize);
			}
			else{
				ctx.drawImage(fireShot,fireShotPosX,fireShotPosY,shellSize,shellSize);
				ctx.clearRect(fireShotPosX-shellSize, fireShotPosY,shellSize,shellSize);
				fireShotPosX+=shellSize;
			}
				setTimeout(arguments.callee, speedShell);
		})();	
}
function ShotRightSide(){
	 
var fireShotPosX = PositionX  ;
var fireShotPosY = PositionY + 8  ;

		(function () {
			
			if(fireShotPosX<-10)
			{	
			ctx.clearRect(fireShotPosX-shellSize, fireShotPosY,shellSize,shellSize);
			}	
			else{
				ctx.drawImage(fireShot,fireShotPosX,fireShotPosY,shellSize,shellSize);
				ctx.clearRect(fireShotPosX+shellSize, fireShotPosY,shellSize,shellSize);
				fireShotPosX-=shellSize;			
			}
				setTimeout(arguments.callee, speedShell);
		})();		
}
function ShotDownSide(){
	 
var fireShotPosX = PositionX + 8 ;
var fireShotPosY = PositionY + 15  ;
	(function () {	
			if(fireShotPosY<500&&baice3==3) 
			{
			    arrShotX.splice(0);
				arrShotY.splice(0);
				ctx.drawImage(fireShot,fireShotPosX,fireShotPosY,shellSize,shellSize);
				
		
				ctx.clearRect(fireShotPosX, fireShotPosY-shellSize,shellSize,shellSize);
				
				arrShotX.push(fireShotPosX);
				arrShotY.push(fireShotPosY);
				fireShotPosY+=shellSize;	
				inspectionDestruction();
			}
			else { 
				ctx.clearRect(fireShotPosX, fireShotPosY-shellSize + 2,shellSize,shellSize);
				//console.log("pp");
				return ;
			}
				setTimeout(arguments.callee, speedShell);	
		})();
		
}
var baice3=3;
function ShotUpSide(){
	 
var fireShotPosX = PositionX + 8 ;
var fireShotPosY = PositionY   ;

		(function () {
			if(fireShotPosY<-10)
			{	
			ctx.clearRect(fireShotPosX-shellSize, fireShotPosY,shellSize,shellSize);
			}
			else{
				ctx.drawImage(fireShot,fireShotPosX,fireShotPosY,shellSize,shellSize);
				ctx.clearRect(fireShotPosX, fireShotPosY+shellSize,shellSize,shellSize);
				fireShotPosY-=shellSize;
			}
				setTimeout(arguments.callee, speedShell);
		})();		
}
function moveEnemies (){
 
		

		(function() {
			if (baice3==3){
	//	arrAllEnimiesCordsX.splice(0,21);
		arrAllEnimiesCordsY.splice(0,21);
		baise8=2;
		ctx.clearRect(positionEnemiesX , arrEnemiesPositionY[0], SIZECLEAR , SIZECLEAR);
		arrEnemiesPositionX.splice(0);
		arrEnemiesPositionY.splice(0);
		ctx.drawImage(Tank, positionEnemiesX , positionEnemiesY , sizeImgTank, sizeImgTank );
		arrEnemiesPositionX.push(positionEnemiesX);
		arrEnemiesPositionY.push(positionEnemiesY);	
		allEnemiesCords();	
		allEnemiesCords2();
		positionEnemiesY -= steep;
		//console.log(arrAllEnimiesCordsX);
		//console.log(arrAllEnimiesCordsY);
		
			}
			
			else {
				//ctx.drawImage(TankD, positionEnemiesX , positionEnemiesY -10 , sizeImgTank, sizeImgTank );
				ctx.clearRect(positionEnemiesX , arrEnemiesPositionY[0], SIZECLEAR , SIZECLEAR);
				return;
				
			
			}
		setTimeout(arguments.callee, 500);

		
		
			
		
		})();	
		
} 

function allEnemiesCords(){
var i = 0;	
while (i<10){
	
	
	arrAllEnimiesCordsY.push(n);

	n++;
	i++;
}	
	
	
	 
}
function allEnemiesCords2(){
	if (baise8==1){

	
}	
	else{
		var i = 0;	
while (i<21){
	
	arrAllEnimiesCordsX.push(m);
	
	m++;
	
	i++;
	}
	
	 
}
}
function inspectionDestruction(){
	
	arrAllEnimiesCordsX.forEach(function(item, i, arr) {	
		arrShotX.forEach(function(item3, i, arr) {
			arrAllEnimiesCordsY.forEach(function(item2, i, arr) {	
				arrShotY.forEach(function(item4, i, arr) {
			
		if(item2==item4 && item==item3){
		
		
		baice3=2;
		
	}
		});
	});
	
		
		});
	});
	
	
		
}
addEventListener("keydown", Key);