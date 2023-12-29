console.log("connected...");

//UL stat info
var userN = document.getElementById("user");
var hitPoint = document.getElementById("hitpoint");
var lvl = document.getElementById("level");

//buttons
var combat = document.getElementById("fight");
var shop = document.getElementById("store");
var run = document.getElementById("escape");

//dialoge section
var spk = document.getElementById("speaker");

//monsters to fight
var monsters = [
    { "name" : "Vampire", "level" : 5, "health" : 25, "damage": 5, "exp": 15},
    { "name" : "Rat", "level" : 2, "health" : 10, "damage": 2, "exp": 8 },
    { "name" : "Zombie", "level" : 4, "health" : 15, "damage": 3, "exp": 5 }
]

//player information
var player = {"name" : "Pirate_King", "level" : 3, "health" : 25, "damage": 5, "exp": 0};


function opponent(){
    var rNum = 0;
    var damageM = 0;
    var damageP = 0;
    var exp = 0;
    var healthM = 0;
    var healthP = 0;
    var enemy = 0;
    var hit = 0;
    var status = false;

    rNum = Math.floor(Math.random() * 3);

    hit = Math.floor(Math.random() * 1);

    if( rNum == 0){
        
        spk.innerText = "You encounter a " + monsters[rNum].name + "! \nLevel: " + monsters[rNum].level + "\n Health: " + monsters[rNum].health + "\n\n";
        
        healthM = monsters[rNum].health;
        
        healthP = player.health;

        console.log("you're in the if");
        do{
           
            //generates damage done based on the current max hit under "damage" in character objects.
            damageM = Math.floor(Math.random()* monsters[rNum].damage); 

            damageP = Math.floor(Math.random()* player.damage);

            healthM = healthM - damageP;

            healthP = healthP - damageM;

            spk.innerText += "\n " + monsters[rNum].name + " has done: " + damageM + " damage to the player.\n";

            spk.innerText += "\n " + player.name + " has done: " + damageP + " damage to the " +  monsters[rNum].name + ".\n";

            console.log("youre in the loop");
            if( healthM == 0){
                console.log("youre in the if/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster was defeted.\n";
                spk.innerText += "you gain " + monsters[rNum].exp + " experience from this encounter.\n "
                spk.innerText += "Your total exp is " + player.exp + "\n";
                status = true;
            }
            else if(healthP == 0){
                console.log("youre in the elseif/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster defeted you.\nYou're dead...";
                spk.innerText += "Your total exp is this run was" + player.exp + "\n";
                status = true;
            }
            console.log("");
        }while(status == false);
      
    }


    else if(rNum == 1){
        spk.innerText = "You encounter a Rat!";
        
        spk.innerText = "You encounter a " + monsters[rNum].name + "! \nLevel: " + monsters[rNum].level + "\n Health: " + monsters[rNum].health + "\n\n";
        
        healthM = monsters[rNum].health;
        
        healthP = player.health;

        console.log("you're in the if");
        do{
           
            //generates damage done based on the current max hit under "damage" in character objects.
            damageM = Math.floor(Math.random()* monsters[rNum].damage); 

            damageP = Math.floor(Math.random()* player.damage);

            healthM = healthM - damageP;

            healthP = healthP - damageM;

            spk.innerText += "\n " + monsters[rNum].name + " has done: " + damageM + " damage to the player.\n";

            spk.innerText += "\n " + player.name + " has done: " + damageP + " damage to the " +  monsters[rNum].name + ".\n";

            console.log("youre in the loop");
            if( healthM == 0){
                console.log("youre in the if/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster was defeted.\n";
                spk.innerText += "you gain " + monsters[rNum].exp + " experience from this encounter.\n "
                spk.innerText += "Your total exp is " + player.exp + "\n";
                status = true;
            }
            else if(healthP == 0){
                console.log("youre in the elseif/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster defeted you.\nYou're dead...";
                spk.innerText += "Your total exp is this run was" + player.exp + "\n";
                status = true;
            }
            console.log("");
        }while(status == false);
    }


    else if(rNum == 2){
        spk.innerText = "You encounter a Zombie!";
        
        spk.innerText = "You encounter a " + monsters[rNum].name + "! \nLevel: " + monsters[rNum].level + "\n Health: " + monsters[rNum].health + "\n\n";
        
        healthM = monsters[rNum].health;
        
        healthP = player.health;

        console.log("you're in the if");
        do{
           
            //generates damage done based on the current max hit under "damage" in character objects.
            damageM = Math.floor(Math.random()* monsters[rNum].damage); 

            damageP = Math.floor(Math.random()* player.damage);

            healthM = healthM - damageP;

            healthP = healthP - damageM;

            spk.innerText += "\n " + monsters[rNum].name + " has done: " + damageM + " damage to the player.\n";

            spk.innerText += "\n " + player.name + " has done: " + damageP + " damage to the " +  monsters[rNum].name + ".\n";

            console.log("youre in the loop");
            if( healthM == 0){
                console.log("youre in the if/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster was defeted.\n";
                spk.innerText += "you gain " + monsters[rNum].exp + " experience from this encounter.\n "
                spk.innerText += "Your total exp is " + player.exp + "\n";
                status = true;
            }
            else if(healthP == 0){
                console.log("youre in the elseif/loop");
                exp = monsters[rNum].exp;
                player.exp = player.exp + exp;
                spk.innerText += "The monster defeted you.\nYou're dead...";
                spk.innerText += "Your total exp is this run was" + player.exp + "\n";
                status = true;
            }
            console.log("");
        }while(status == false);
    }
    

}

function heal(){
    
}
