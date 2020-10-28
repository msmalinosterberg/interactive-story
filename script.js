//Define the state for our application 
let currentScene = 0
const scenes = [
    {
        description: "Du befinner dig i vardagsrummet, du ser en trasig stol och två dörrar. Vill du öppna dörren eller sätta dig på stolen?",
        choices:["Sitt på stolen", "Öppna dörren"], 
        nextScene: [2, 1]

    }, 
    {
        description: "Du står utanför huset och det är superkallt. solen är på väg att gå upp. Vill du titta på soluppgången?",
        choices: ["Ja", "Nej"], 
        nextScene: [2, 0]

    }
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
    }
    if(answer === scenes[currentScene].choices[1]) {
        currentScene = scenes[currentScene].nextScene [1] 
    }

    presentScene(); 
}