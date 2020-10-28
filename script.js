//Define the state for our application 
let currentScene = 0
const scenes = [
    {   //Scene 0 
        description: "Har du nyckeln till ytterdörren?",
        choices:["Ja", "Nej"], 
        nextScene: [1, 0] // Ja, vidare till scene 1. Nej, alert - kolla i lådan! 
    }, 
    {   //Scene 1 
        description: "Toppen! Kan du gå till dörren och öppna?",
        choices: ["Ja", "Nej"], 
        nextScene: [2, 1] // Ja, öppnar dörren. Nej, behöver en alert här! Fråga David! 
    }, 
    {   //Scene 2 
        description: "Lås dörren och sätt dig i bilen. Kan du starta bilen?",
        choices: ["Ja", "Nej"], 
         
    }, 
]; 

//Run our application 
window.onload = presentScene; 

//Define the actions for our application 

function presentScene() {
    const answer = prompt(scenes[currentScene].description) 
    handleUserChoice(answer)
}

function handleUserChoice(answer) {
    console.log(answer)
     

    if(answer === scenes[currentScene].choices[0]) {
        currentScene = scenes[currentScene].nextScene [0]  
    } else {
        alert ('Kolla i lådan')
    }

    if(answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene [1] 
    } 

    if(answer === scenes[currentScene].choices[2]) {
      currentScene = scenes[currentScene].nextScene [2] 
    } 
    
    if(answer === scenes[currentScene].choices[3]) {
        currentScene = scenes[currentScene].nextScene [3] 

    } 
    presentScene(); 
}

// Fråga David hur man avslutar. 

/*
function startCar () {
    const button = document.getElementById("btn"); 
    prompt

}
*/