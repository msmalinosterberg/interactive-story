//Define the state for our application 
let currentScene = 0
const scenes = [
    {
        //Scene 0 
        description: "Har du nyckeln till ytterdörren?",
        choices:["Ja", "Nej"], 
        nextScene: [1, 0] // Ja, vidare till scene 1. Nej, fråga din partner om nyckeln. 

    }, 
    {   //Scene 1 
        description: "Toppen! Kan du gå till dörren och öppna?",
        choices: ["Ja", "Nej"], 
        nextScene: [2, 0] // Ja, öppnar dörren. Nej, tillbaka till scene 0. 
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
        alert ('fråga din partner!')
    }
    

    if(answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene [1] 
 }
    presentScene(); 
}