console.log("testing");
let currentWizard = "";
let newName = 'joe schmoe'
let favoriteFood = '' 
let skillClass = ""
let age = 0;
let level = 0;
let hunger = 0;
let wizardForm = [];
let k = 0;


function introduction() {
    $(".top").append("<div class=instructions><img src=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTudpptioH1OVkp0Ai8NyTCoB3GNAgkDyY0Pg&usqp=CAU alt=wizard-meme class=intro_image><h1 class=instructions_heading>You look like you were born yesterday!</h1><h3 class=make_pet>So... you want to be a great wizard eh? Fill out this form:</h3><button id=start_button>Take form</button></div>");

    
    $("#start_button").on("click", getInput);
    console.log(currentWizard, "end of introduction");

};


class Wizard {
    constructor(name, favoriteFood, age, skill) {
        this.name = name;
        this.favoriteFood = favoriteFood;
        this.age = age;
        this.skill = skill;
        this.fatigue = 0;
        this.hunger = 0;
        this.level = 0;
    }
    
    clickFeed(){
        
        if(currentWizard.hunger > 5){
            currentWizard.hunger -= 5;
        }else {
            currentWizard.hunger = 0;
        }

        currentWizard.fatigue += 4;
        if(currentWizard.fatigue >= 10){
            currentWizard.age += 7;
            currentWizard.fatigue = 0;
        }
            
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
            $("#fatigue_bar").attr("value", currentWizard.fatigue);
            $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
            $("#hunger").text(`Hunger: ${currentWizard.hunger}`);
            $("#hunger_bar").attr("value", currentWizard.hunger);
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
   
    }
    
    clickTrain(){
         console.log("train works");
         if(currentWizard.skill >= 10) {
            if(currentWizard.level > 4) {
                wizardEvolve();
                console.log("evolution success!", currentWizard); 
            }
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
            $("#skill").text(`Skill: ${currentWizard.level}`);
            $("#fatigue_bar").attr("value", currentWizard.fatigue);
            $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
     
        if(this.level > 9) {
    
            
        }
    }
    
    clickSlumber(){
        console.log("slumber works");
        currentWizard.fatigue = 0;
        currentWizard.age += 1;
        currentWizard.hunger += 2;

            if(currentWizard.hunger === 10) {
                currentWizard.age += 7;
                currentWizard.hunger = 0;
            }
        console.log(currentWizard.fatigue, "fatigue");
        console.log(currentWizard.skill, "skill");
        console.log(currentWizard.age, "age");
            $("#fatigue_bar").attr("value", currentWizard.fatigue);
            $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
            $("#hunger").text(`Hunger: ${currentWizard.hunger}`);
            $("#hunger_bar").attr("value", currentWizard.hunger);
    }   

    manageHunger() {
        currentWizard.hunger++;
        $("#hunger_bar").attr("value", currentWizard.hunger);
        $("#hunger").text(`Hunger: ${currentWizard.hunger}`);
        if(currentWizard.hunger === 10) {
            currentWizard.age += 7;
            currentWizard.hunger = 0;
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
        }
    }

    
}

//Game starts here

introduction();
// currentWizard = new Wizard(newName, favoriteFood, skill, 0);
function getInput() {
    newName = window.prompt("What is your name young wizard-to-be??");
    favoriteFood = window.prompt("what is your favorite food?");
    skillClass = window.prompt("Do you choose fire ball, lightning strike, or ice blast?");

        $("#age").text(`Age: ${currentWizard.age}`);
        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
        $("#skill").text(`Skill: ${currentWizard.level}`);
        $("#hunger").text(`Hunger: ${currentWizard.hunger}`);
        $("#feed").text(`Eat ${favoriteFood}`);
        $("#train").text(`Cast ${skillClass} `);
        $("#sleep").text(`Meditate`);
        $(".title").text(`Baby ${newName}`);
        $(".instructions").slideUp(1000);
        setInterval(currentWizard.manageHunger, 1000);

        wizardForm = [new Wizard(newName, favoriteFood, 0, 0)];
        currentWizard = wizardForm[0];
}

function wizardEvolve() {
    wizardForm = [new Wizard(newName, favoriteFood, 0, 0), new MatureWizard(newName, favoriteFood, age, skill, fatigue, hunger, level)];
    k += 1;
    currentWizard = wizardForm[k];
}

class MatureWizard extends Wizard {
    constructor(name, favoriteFood, age, skill, fatigue, hunger, level){
        super(name, favoriteFood, age, skill, fatigue, hunger, level);
    }
    castFirestorm(){
        console.log("train works");
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
           $("#skill").text(`Skill: ${currentWizard.level}`);
           $("#fatigue_bar").attr("value", currentWizard.fatigue);
           $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
           $("#age_bar").attr("value", currentWizard.age);
           $("#age").text(`Age: ${currentWizard.age}`);
    
       if(this.skill > 10) {
          currentWizard.level++;
          console.log("level up!");
          if(this.level > 9){
              currentWizard = new MatureWizard
          }
       }

    }
}


// currentWizard = new Wizard(newName, favoriteFood, 0, 0);
// function buttonClicked() {
//     console.log("click!");
// }


currentWizard = new Wizard("", "", 0, 0);


$("#feed").on("click", currentWizard.clickFeed);
$("#train").on("click", currentWizard.clickTrain);
$("#sleep").on("click", currentWizard.clickSlumber);


