#pragma strict
var numboro : UnityEngine.UI.InputField;                //took 2 and a half hours of debugging RIP
var numboro2 : int;
var current : int; //Move to other options

var group1 : int;
var group2 : int;
var group3 : int;
var group4 : int;
var group5 : int;

//All the true or false vars
var group11 : GameObject;
var group12 : GameObject;
var group13 : GameObject;
var group14 : GameObject;
var group15 : GameObject;

var group21 : GameObject;
var group22 : GameObject;
var group23 : GameObject;
var group24 : GameObject;
var group25 : GameObject;

var group31 : GameObject;
var group32 : GameObject;
var group33 : GameObject;
var group34 : GameObject;
var group35 : GameObject;

var group41 : GameObject;
var group42 : GameObject;
var group43 : GameObject;
var group44 : GameObject;
var group45 : GameObject;

var deletion;

function Start () {
	current = 1;
	group1 = 0;
	group2 = 0;
	group3 = 0;
	group4 = 0;
}

function god () {
	numboro2 = int.Parse(numboro.text);
	current = 1;
	group1 = 0;
	group2 = 0;
	group3 = 0;
	group4 = 0;
	clear();
	while (group1 < 4 || group2 < 4 || group3 < 4 || group4 < 4 && int.Parse(numboro.text) > 0) {
		if (group1 == 4) {
			group1 = 20;
		}else if (group2 == 4) {
			group2 = 20;
		}else if (group3 == 4) {
			group3 = 20;
		}else if (group4 == 4) {
			group4 = 20;
		}
		if (current == 1 &&  group11.activeSelf == false && group1 < 4) {
			checker();
			if (deletion == true) {
				group11.SetActive(true);
				deletion = false;
				group1 ++;
			}
			current ++;
		}else if (current == 2 && group12.activeSelf == false && group1 < 4) {
			checker();
			if (deletion == true) {
				group12.SetActive(true);
				deletion = false;
				group1 ++;
			}
			current ++;
		}else if (current == 3 && group13.activeSelf == false && group1 < 4) {
			checker();
			if (deletion == true) {
				group13.SetActive(true);
				deletion = false;
				group1 ++;
			}
			current ++;
		}else if (current == 4 && group14.activeSelf == false && group1 < 4) {
			checker();
			if (deletion == true) {
				group14.SetActive(true);
				deletion = false;
				group1 ++;
			}
			current ++;
		}else if (current == 5 && group15.activeSelf == false && group1 < 4) {
			checker();
			if (deletion == true) {
				group15.SetActive(true);
				deletion = false;
				group1 ++;
			}
			current ++;
		}else if (current == 6 && group21.activeSelf == false && group2 < 4) {
			checker();
			if (deletion == true) {
				group21.SetActive(true);
				deletion = false;
				group2 ++;
			}
			current ++;
		}else if (current == 7 && group22.activeSelf == false && group2 < 4) {
			checker();
			if (deletion == true) {
				group22.SetActive(true);
				deletion = false;
				group2 ++;
			}
			current ++;
		}else if (current == 8 && group23.activeSelf == false && group2 < 4) {
			checker();
			if (deletion == true) {
				group23.SetActive(true);
				deletion = false;
				group2 ++;
			}
			current ++;
		}else if (current == 9 && group24.activeSelf == false && group2 < 4) {
			checker();
			if (deletion == true) {
				group24.SetActive(true);
				deletion = false;
				group2 ++;
			}
			current ++;
		}else if (current == 10 && group25.activeSelf == false && group2 < 4) {
			checker();
			if (deletion == true) {
				group25.SetActive(true);
				deletion = false;
				group2 ++;
			}
			current ++;
		}else if (current == 11 && group31.activeSelf == false && group3 < 4) {
			checker();
			if (deletion == true) {
				group31.SetActive(true);
				deletion = false;
				group3 ++;
			}
			current ++;
		}else if (current == 12 && group32.activeSelf == false && group3 < 4) {
			checker();
			if (deletion == true) {
				group32.SetActive(true);
				deletion = false;
				group3 ++;
			}
			current ++;
		}else if (current == 13 && group33.activeSelf == false && group3 < 4) {
			checker();
			if (deletion == true) {
				group33.SetActive(true);
				deletion = false;
				group3 ++;
			}
			current ++;
		}else if (current == 14 && group34.activeSelf == false && group3 < 4) {
			checker();
			if (deletion == true) {
				group34.SetActive(true);
				deletion = false;
				group3 ++;
			}
			current ++;
		}else if (current == 15 && group35.activeSelf == false && group3 < 4) {
			checker();
			if (deletion == true) {
				group35.SetActive(true);
				deletion = false;
				group3 ++;
			}
			current ++;
		}else if (current == 16 && group41.activeSelf == false && group4 < 4) {
			checker();
			if (deletion == true) {
				group41.SetActive(true);
				deletion = false;
				group4 ++;
			}
			current ++;
		}else if (current == 17 && group42.activeSelf == false && group4 < 4) {
			checker();
			if (deletion == true) {
				group42.SetActive(true);
				deletion = false;
				group4 ++;
			}
			current ++;
		}else if (current == 18 && group43.activeSelf == false && group4 < 4) {
			checker();
			if (deletion == true) {
				group43.SetActive(true);
				deletion = false;
				group4 ++;
			}
			current ++;
		}else if (current == 19 && group44.activeSelf == false && group4 < 4) {
			checker();
			if (deletion == true) {
				group44.SetActive(true);
				deletion = false;
				group4 ++;
			}
			current ++;
		}else if (current == 20 && group45.activeSelf == false && group4 < 4) {
			checker();
			if (deletion == true) {
				group45.SetActive(true);
				deletion = false;
				group4 ++;
			}
			current ++;
		}else if (current == 21) {
			current = 1;
		}else {
			current ++;
		}
	}
}

function checker () {
	numboro2 --;
	if (numboro2 == 0) {
		deletion = true;
		numboro2 = int.Parse(numboro.text);
	}
}

function clear () {
	group11.SetActive(false);
	group12.SetActive(false);
	group13.SetActive(false);
	group14.SetActive(false);
	group15.SetActive(false);
	group21.SetActive(false);
	group22.SetActive(false);
	group23.SetActive(false);
	group24.SetActive(false);
	group25.SetActive(false);
	group31.SetActive(false);
	group32.SetActive(false);
	group33.SetActive(false);
	group34.SetActive(false);
	group35.SetActive(false);
	group41.SetActive(false);
	group42.SetActive(false);
	group43.SetActive(false);
	group44.SetActive(false);
	group45.SetActive(false);
}

function back () {
	Application.LoadLevel ("MainMenu");
}