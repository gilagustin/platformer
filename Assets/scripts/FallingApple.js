#pragma strict

var velocity : float;
var falling : boolean;
var Player : GameObject;
var spawnPoint : Transform;

function Start () {

}

function Update () {
	if (falling) {
		velocity += 0.01;
		transform.localPosition.y -= velocity;
	}
	
}
