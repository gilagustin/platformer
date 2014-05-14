#pragma strict

var velocity : float;
var falling : boolean;

function Start () {

}

function pls() {
	falling = true;
}

function Update () {
	if (falling) {
		velocity += 0.01;
		transform.localPosition.y -= velocity;
	}
}