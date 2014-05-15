var bounceAmount : float;
function OnTriggerEnter(other : Collider){
	if(other.tag == "Player"){
		var P = GameObject.FindGameObjectWithTag("Player");
		P.GetComponent("CharacterMotor").movement.velocity.y = bounceAmount;
	}
}