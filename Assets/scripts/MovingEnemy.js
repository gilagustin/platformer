#pragma strict
private var Xpos : float;
private var Ypos : float;
private var max : boolean;

var Hori : boolean;
var maxAmount : int;
var step : float;
var left : boolean;
var right : boolean;

function Start () {
	Xpos = transform.position.x;
	Ypos = transform.position.y;
}

function Update () {

//set max
	if(Hori){
		if(transform.position.x >= Xpos + maxAmount){
			max = true;
		}else if(transform.position.x <= Xpos){
			max = false;
		}
	}

//moving enemy
	if(Hori){
		if(!max){
			transform.position.x += step;
			right = true;
			left = false;
		}else{
			transform.position.x -= step;
			left = true;
			right = false;
		}
	}
	
	
}