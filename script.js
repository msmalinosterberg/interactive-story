//Define the state for our application 
let currentScene = 0
const scenes = [
    {   //Scene 0 
        description: "Det är måndag morgon, matlådan är packad och klar. Det är dags att åka till jobbet.Har du nycklarna till ytterdörren?",
        choices:["Ja", "Nej"], 
        nextScene: [1, 0] // Ja, vidare till scene 1. Nej, alert - kolla i lådan! 
    }, 
    {   //Scene 1 
        description: "Låser du dörren?",
        choices: ["Ja", "Nej"], 
        nextScene: [2, 1] // Ja, öppnar dörren. Nej, behöver en alert här! Fråga David! 
    }, 
    {   //Scene 2 
        description: " Toppen, hoppa in i bilen så kör vi! Du inser att det behövs tankas. Vill du åka till St1, Circle K eller Shell",
        choices: ["St1", "Circle K", "Shell"], 
        nextScene: [, 2]
        
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