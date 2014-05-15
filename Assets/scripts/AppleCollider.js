#pragma strict
var FA = gameObject.GetComponent(FallingApple);
function Start () {
	
}

function Update () {
	
}
function OnTriggerEnter(other : Collider){
		if(other.tag == "Player"){
			FA.falling = true;
			}
}