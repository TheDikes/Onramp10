// Write a function to translate an array of commands provided as integers to strings. YOu will be given an array of integers, each integer in the array translates to a command in English, your task is to translate the integer commands to their equivalent text commands. Here is how each command maps to a string. 
// 1 : 'UP'
// -1 : 'DOWN'
// -5 : 'Left'
// 5 : 'Right'

function mapCommands(commands){
    let mapping = [];

    for(i=0; i<commands.length; i++){
        const command = commands[i];

        switch(command){
            case 1: 
                mapping.push('UP');
                break;
            case -1:
                mapping.push("DOWN");
                break;
            case -5:
                mapping.push("Left");
                break;
            case 5:
                mapping.push("Right");
                break;
            default:
                mapping.push(command);
                break;
        }
    }

    return mapping;
}

// OR

function mapCommands(commands){

    let mapping = [];

    for (i=0;i<commands.length;i++){
        const command = commands[i]
    
        if(command === 1){
            mapping.push("UP");
        }else if (command === -1){
            mapping.push("DOWN");
        }else if (command === -5){
            mapping.push("Left");
        }else if (command === 5){
            mapping.push("Right");
        }else{
            mapping.push(command);
        }
    }
    return mapping;
}