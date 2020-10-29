//Define the state for our application 
let currentScene = 0
const scenes = [
    {   //Scene 0
        description: "Det är en grå och trist måndag morgon, matlådan är packad och klar. Det är dags att åka till jobbet.Har du nycklarna till ytterdörren?",
        choices:["Ja", "Nej"], 
        nextScene: [1, 7]  
    }, 
    {   //Scene 1
        description: "Låser du dörren?",
        choices: ["Ja", "Nej"], 
        nextScene: [2, 8] 
    }, 
    {   //Scene 2
        description: " Toppen, hoppa in i bilen så kör vi! Du inser att det behövs tankas. Vill du åka till St1 eller Circle K?",
        choices: ["St1", "Circle K" ], 
        nextScene: [3, 3,]
    }, 

    {   //Scene 3
        description: "Bilen är tankad och klar. Nu raka vägen till jobbet. Du parkerar bilen och kollar upp mot kontoret. Går du in eller åker du hem till sängen igen? ",
        choices: ["Går in", "Åker hem"], 
        nextScene: [4, 5]
    }, 
    
    { //Scene 4
        description: "Du är nu på jobbet. Vill du dricka kaffe eller te? ",
        choices: ["Kaffe", "Te"], 
        nextScene: [6, 6]
    }, 

    { //Scene 5
        description: "Skönt att vara hemma. Sätt på tvn och njut!",
        choices: [],
        nextScene: []
    }, 
    { //Scene 6
        description: "Gott! Dags att jobba några timmar innan det är dags att åka hem igen. Ska det bli skönt att åka hem?",
        choices: ["Ja", "Nej"], 
        nextScene: [5, 9]  
    },
    { //Scene 7
        description: "Kolla i lådan. Ok?",
        choices: [],
        nextScene: [1] 
    
    }, 
    { //Scene 8
        description: "Dörren måste vara låst, annars kan någon gå in. Ok?",
        choices: [],
        nextScene: [1] 
    
    }, 
    { //Scene 9
        description: "Du måste åka hem nångång. Ok?",
        choices: [],
        nextScene: [5] 
    
    }, 
]; 

//Run our application 
window.onload = presentScene; 

//Define the actions for our application 
function presentScene() {
    const scene = scenes[currentScene];

    
    if (scene.nextScene.length === 1) {
        alert(scene.description)
        currentScene = scene.nextScene[0]
        presentScene()
    } else if (scene.nextScene.length > 1) {
        const answer = prompt(scene.description) 
        handleUserChoice(answer)
    } else {
        alert(scene.description)
    }
    
}

function handleUserChoice(answer) {
    console.log(answer)

    const scene = scenes[currentScene];

    if(answer === scene.choices[0]) { 
        currentScene = scene.nextScene [0]  
    }

    if(answer === scene.choices[1]) {
        currentScene = scene.nextScene [1] 
    } 

    presentScene(); 
}


