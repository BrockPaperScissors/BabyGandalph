console.log("testing");
let currentWizard = "";
let newName = 'joe schmoe'
let favoriteFood = '' 
let skillClass = ""
let age = 0;
let level = 0;


function introduction() {
    $(".top").append("<div class=instructions><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudpptioH1OVkp0Ai8NyTCoB3GNAgkDyY0Pg&usqp=CAU alt=wizard-meme class=intro_image><h1 class=instructions_heading>You look like you were born yesterday!</h1><h3 class=make_pet>So... you want to be a great wizard eh? Fill out this form:</h3><button id=start_button>Take form</button></div>");

    $("#start_button").on("click", getInput);

};


class Wizard {
    constructor(name, favoriteFood, skill, age) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        this.age = age;
        this.skill = skill;
        this.fatigue = 0;
        this.hunger = 0;
        this.level = 0;
    }
    
    clickFeed(){
        
        
        currentWizard.fatigue += 4;
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);

        
    }
    
    clickTrain(){
         console.log("train works");
         if(currentWizard.skill >= 10) {
            currentWizard.level++;
            console.log("level up!");
            currentWizard.skill = 0;
         }
        currentWizard.skill += 1;
        
        if(currentWizard.fatigue >= 10){
            currentWizard.age += 7;
            currentWizard.fatigue = 0;
        }else{
            currentWizard.fatigue += 2;
        }
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        $("#skill_bar").attr("value", currentWizard.skill);
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
        $("#skill").text(`Skill: ${currentWizard.level}`);

        
        
        if(this.skill > 10) {
           currentWizard.level++;
           console.log("level up!");
        }
    }
    
    clickSlumber(){
         console.log("slumber works");
        currentWizard.fatigue = 0;
        currentWizard.age += 1;
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
    }   
    
}

//Game starts here

introduction();
// currentWizard = new Wizard(newName, favoriteFood, skill, 0);
function getInput() {
    newName = window.prompt("What is your name young wizard-to-be??");
    favoriteFood = window.prompt("what is your favorite food?");
    skillClass = window.prompt("Do you choose fire ball, lightning strike, or ice blast?");

        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
        $("#skill").text(`Skill: ${currentWizard.level}`);
        $("#feed").text(`Eat ${favoriteFood}`);
        $("#train").text(`Cast ${skillClass} `);
        $("#sleep").text(`Meditate`);
        $(".title").text(`Baby ${newName}`);
    // currentWizard = new Wizard(newName, favoriteFood, 0, 0);
    $(".instructions").slideUp(1000);
}

class MatureWizard extends Wizard {
    constructor(){
        
    }
}



// function buttonClicked() {
//     console.log("click!");
// }


currentWizard = new Wizard("name", "pizza", 0, 0);


$("#feed").on("click", currentWizard.clickFeed);
$("#train").on("click", currentWizard.clickTrain);
$("#sleep").on("click", currentWizard.clickSlumber);


