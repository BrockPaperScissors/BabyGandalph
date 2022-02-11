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
let hungerInterval = "";
let evolutionLevel = "";
let charTitle = "";


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
        this.evolutionLevel = 2;
        this.charTitle = "Baby ";
    }
    
    clickFeed(){
        
        if(currentWizard.hunger > 5){
            currentWizard.hunger -= 5;
        }else {
            currentWizard.hunger = 0;
        }

        currentWizard.fatigue += 4;
        if(currentWizard.fatigue >= 10){
            addClass();
            currentWizard.age += 7;
            currentWizard.fatigue = 0;
         
        }
        if (currentWizard.age >= 100) {
            currentWizard.age = 100;
            clearInterval(hungerInterval);
            window.alert("Your skills need more work. The Wizard Sanctum's doors remain locked at this time. Try again later.");
        }
            
        // console.log(currentWizard.fatigue, "fatigue");
        // console.log(currentWizard.skill, "skill");
        // console.log(currentWizard.age, "age");
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
            if(currentWizard.level > currentWizard.evolutionLevel) {
                wizardEvolve();
                console.log("evolution success!", currentWizard); 
            }
            if(currentWizard.level > 9){
                window.alert("Wow, you made it to the status of Archmage! A real Archmage!");
                winGame();
            }
            currentWizard.level++;
            console.log("level up!");
            currentWizard.skill = 0;
         }
        currentWizard.skill += 1;
        
        if(currentWizard.fatigue >= 10){
            addClass();
            currentWizard.age += 7;
            currentWizard.fatigue = 0;
        }else{
            currentWizard.fatigue += 2;
        }

        if (currentWizard.age >= 100) {
            currentWizard.age = 100;
            clearInterval(hungerInterval);
            window.alert("Your skills need more work. The Wizard Sanctum's doors remain locked at this time. Try again later.")
        }
        // console.log(currentWizard.fatigue, "fatigue");
        // console.log(currentWizard.skill, "skill");
        // console.log(currentWizard.age, "age");
            $("#skill_bar").attr("value", currentWizard.skill);
            $("#skill").text(`Skill: ${currentWizard.level}`);
            $("#fatigue_bar").attr("value", currentWizard.fatigue);
            $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
     

    }
    
    clickSlumber(){
        console.log("slumber works");
        currentWizard.fatigue = 0;
        currentWizard.age += 1;
        currentWizard.hunger += 2;

            if(currentWizard.hunger === 10) {
                addClass();
                currentWizard.age += 7;
                currentWizard.hunger = 0;
            }
            if (currentWizard.age >= 100) {
                currentWizard.age = 100;
                window.alert("Your skills need more work. The Wizard Sanctum's doors remain locked at this time. Try again later.")
            }
        // console.log(currentWizard.fatigue, "fatigue");
        // console.log(currentWizard.skill, "skill");
        // console.log(currentWizard.age, "age");
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
            addClass()
            currentWizard.age += 7;
            currentWizard.hunger = 0;
            if (currentWizard.age >= 100) {
                currentWizard.age = 100;
                clearInterval(hungerInterval);
                window.alert("Your skills need more work. The Wizard Sanctum's doors remain locked at this time. Try again later.")
            
            }
            $("#age_bar").attr("value", currentWizard.age);
            $("#age").text(`Age: ${currentWizard.age}`);
        }
    }

    
}

//Game starts here

introduction();

function startGame() {
    $(".how_to_play").slideUp(1000);
    hungerInterval =setInterval(currentWizard.manageHunger, 1000);

}

function howToPlay() {
    $(".top").append("<div class=how_to_play><h1 class=htp_heading>First, a few instructions!</h1><p id=wizard_warning>There are a few things to learn before becoming a wizard. In order for the Wizard Sanctum to accept you into their ranks, you must reach a skill level of 10 before your 100th birthday. Careful, time flies when practicing magic! Part of the magic, is going to bed when you are tired. If you let your fatigue go unchecked, you will pass out from exhaustion! Another crucial part of success, is eating when you are hungry! If forget to eat, you will also pass out from the hunger! If you eat when you are tired, you may enter a food coma and also pass out. It is on you to manage your body so that you can train!</p><ul id=list_of_instructions><li class=tip>Eating your favorite food will decrease your hunger bar, but also increase your fatigue!</li><li class=tip>Casting your chosen spell will increase your skill bar, but also increase your fatigue bar!</li><li class=tip>Meditation will reset your fatigue bar, but increase your hunger bar!</li><p id=parting_words>You will evolve to the next level of wizarding at skill levels 3, 5 and 10! If you make it to level 10, the Wizard Sanctum just might offer you an invitation. Good luck!</p><button id=begin_button>Begin Journey</button></div>");

    
    $("#begin_button").on("click", startGame);
   
    

}
function getInput() {
    newName = window.prompt("What is your name young wizard-to-be??");
    favoriteFood = window.prompt("what is your favorite food?");
    skillClass = window.prompt("Do you choose fire ball, lightning strike, or ice blast?");
    
    
    wizardForm = [new Wizard(newName, favoriteFood, 0, 0)];
    currentWizard = wizardForm[0];
        
        $("#age").text(`Age: ${currentWizard.age}`);
        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
        $("#skill").text(`Skill: ${currentWizard.level}`);
        $("#hunger").text(`Hunger: ${currentWizard.hunger}`);
        $("#feed").text(`Eat ${favoriteFood}`);
        $("#train").text(`Cast ${skillClass} `);
        $("#sleep").text(`Meditate`);
        $(".title").text(`${currentWizard.charTitle} ${newName}`);
        $(".instructions").slideUp(1000);
        howToPlay();
        
        // $("#start_button").on("click", howToPlay);

}

function winGame() {
        clearInterval(hungerInterval);
        window.alert("The Wizard Sanctum approaches, and offers you a position amongst the scribes. GG");
}

function addClass(){
    console.log("suffer");
    $(".display").addClass("animatedPic");
             
}

function removeClass() {
    $(".display").removeClass("animatedPic")
 
}

function wizardEvolve() {
    wizardForm = [new Wizard(newName, favoriteFood, 0, 0), new MatureWizard(newName, favoriteFood, age, skill, fatigue, hunger, level), new GrandWizard(newName, favoriteFood, age, skill, fatigue, hunger, level), new Archmage(newName, favoriteFood, age, skill, fatigue, hunger, level)];
    
    k += 1;

    currentWizard = wizardForm[k];
    $(".title").text(`${currentWizard.charTitle} ${newName}`);
    //Image below from https://pixabay.com/photos/lego-wizard-gandalf-gray-grey-4603354/ submitted by user: aitoff.
    if (k === 1) {
    $(".display").attr("src", "https://cdn.pixabay.com/photo/2019/11/05/12/02/lego-4603354_960_720.jpg");
    }else if (k === 3){
    $(".display").attr("src", "https://images.squarespace-cdn.com/content/v1/50710c28c4aa65eb3b63d154/1355874855192-OWHO2WBZZA6R6YTXYW04/Gandalf_Hobbit_ChristmasGift.jpg?format=1000w");
    $(".display").css("height", "525");
    $(".display").css("width", "525");

    }
}

class MatureWizard extends Wizard {
    constructor(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle){
        super(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle);
    }
    evolutionLevel = 5;
    charTitle = "Adept ";
    // castFirestorm(){
    //     console.log("train works");
    //    currentWizard.skill += 1;
       
    //    if(currentWizard.fatigue >= 10){
    //        currentWizard.age += 7;
    //        currentWizard.fatigue = 0;
    //    }else{
    //        currentWizard.fatigue += 2;
    //    }
    //    console.log(currentWizard.fatigue, "fatigue");
    //    console.log(currentWizard.skill, "skill");
    //    console.log(currentWizard.age, "age");
    //        $("#skill_bar").attr("value", currentWizard.skill);
    //        $("#skill").text(`Skill: ${currentWizard.level}`);
    //        $("#fatigue_bar").attr("value", currentWizard.fatigue);
    //        $("#fatigue").text(`Fatigue: ${currentWizard.fatigue}`);
    //        $("#age_bar").attr("value", currentWizard.age);
    //        $("#age").text(`Age: ${currentWizard.age}`);
    
    //    if(this.skill > 10) {
    //       currentWizard.level++;
    //       console.log("level up!");
    //       if(this.level > 9){
    //           currentWizard = new MatureWizard
    //       }
    //    }

    // }
    
}

class GrandWizard extends MatureWizard {
    constructor(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle){
        super(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle);
    }

    evolutionLevel = 9;
    charTitle = "Grand Master "

}

class Archmage extends GrandWizard {
    constructor(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle){
        super(name, favoriteFood, age, skill, fatigue, hunger, level, evolutionLevel, charTitle);
    }

    evolutionLevel = 12;
    charTitle = "Archmage ";

}

currentWizard = new Wizard("", "", 0, 0);


$("#feed").on("click", currentWizard.clickFeed);
$("#feed").on("click", removeClass);
$("#train").on("click", currentWizard.clickTrain);
$("#train").on("click", removeClass);
$("#sleep").on("click", currentWizard.clickSlumber);
$("#sleep").on("click", removeClass);


