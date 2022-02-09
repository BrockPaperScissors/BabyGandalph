console.log("testing");

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
        
        console.log(babyGandalph.fatigue, "fatigue");
        console.log(babyGandalph.age, "age");
        if(babyGandalph.hunger >= 50){
            babyGandalph.hunger -= 50;
        }else {
            babyGandalph.hunger = 0;
        }
        console.log(babyGandalph.skill, "hunger");



        
    }
    
    clickTrain(){
        // console.log("train works");
        babyGandalph.skill += 1;
        console.log(babyGandalph.fatigue, "fatigue");
        console.log(babyGandalph.skill, "skill");
        if(babyGandalph.fatigue >= 98){
            babyGandalph.age += 3;
            babyGandalph.fatigue = 0;
        }else{
            babyGandalph.fatigue += 2;
        }
        console.log(babyGandalph.age, "hunger");
    }
    
    clickSlumber(){
        // console.log("slumber works");
        babyGandalph.fatigue = 0;
        babyGandalph.age += 1;
        console.log(babyGandalph.fatigue, "fatigue");
        console.log(babyGandalph.age, "skill");
        console.log(babyGandalph.skill, "hunger");
    }


}



const babyGandalph = new Wizard("BabyGandalph", "pizza", 0, 0);
$("#skill_bar").attr("value", 10);



$("#feed").on("click", babyGandalph.clickFeed);
$("#train").on("click", babyGandalph.clickTrain);
$("#sleep").on("click", babyGandalph.clickSlumber);

