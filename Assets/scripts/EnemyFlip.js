#pragma strict
var X: float;

function Start () {
//gathering normal obect scale
X = transform.localScale.x;

}

function Update () {
	var ME = gameObject.GetComponent(MovingEnemy);
	
	if(ME.right){
		transform.localScale.x = X;
	}else if(ME.left){
		transform.localScale.x = -X;
		}
}