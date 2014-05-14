#pragma strict

function Start () {
	
}

function Update () {

}



function OnTriggerEnter(trig: Collider){
	gameObject.SendMessage("pls");
}