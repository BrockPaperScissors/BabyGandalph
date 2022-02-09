console.log("testing");
let currentWizard = "";
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

        if(this.skill === 100) {

        }
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

currentWizard = new Wizard("Baby Gandalph", "pizza", 0, 0);


class MatureWizard extends Wizard {
    constructor(){

    }
}



$("#feed").on("click", currentWizard.clickFeed);
$("#train").on("click", currentWizard.clickTrain);
$("#sleep").on("click", currentWizard.clickSlumber);

