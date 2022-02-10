console.log("testing");
let currentWizard = "";
let newName = 'joe schmoe'
let favoriteFood = '' 
let skill = ""
let age = 0;


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
    }
    
    clickFeed(){
        
        
        currentWizard.fatigue += 35;
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        
    }
    
    clickTrain(){
        // console.log("train works");
        currentWizard.skill += 1;
        if(currentWizard.fatigue >= 98){
            currentWizard.age += 3;
            currentWizard.fatigue = 0;
        }else{
            currentWizard.fatigue += 7;
        }
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        $("#skill_bar").attr("value", currentWizard.skill);
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
        
        // if(this.skill === 100) {

        
            
        // }
    }
    
    clickSlumber(){
        // console.log("slumber works");
        currentWizard.fatigue = 0;
        currentWizard.age += 1;
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
        $("#fatigue_bar").attr("value", currentWizard.fatigue);
    }
    
}

//Game starts here

introduction();
// currentWizard = new Wizard(newName, favoriteFood, skill, 0);
function getInput() {
    newName = window.prompt("What is your name young wizard-to-be??");
    favoriteFood = window.prompt("what is your favorite food?");
    skill = window.prompt("Do you choose fire, lightning, or ice?");

    currentWizard = new Wizard(newName, favoriteFood, skill, 0);
    $(".instructions").slideUp(1000);
}

class MatureWizard extends Wizard {
    constructor(){
        
    }
}



function buttonClicked() {
    console.log("click!");
}



$("#feed").on("click", currentWizard.clickFeed);
$("#train").on("click", currentWizard.clickTrain);
$("#sleep").on("click", currentWizard.clickSlumber);


