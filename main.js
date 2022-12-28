// Exercise 1 : ///////*********The World Translator***********
// Instructions
// Hint: Use Switch Case

// Create a few conditions :
// Ask the user which language they speak.
langue=prompt("what language do you speak")
// Convert the user’s answer to lowercase, so that all the user’s inputs will be accepted in the if statement. For example “english” or “English” or “ENGlish” ect…”
choice=langue.toLowerCase()
switch (choix) {
// If the user speaks French : display “Bonjour”
    case "french":
            console.log("Bonjour")
        break;
// If the user speaks English : display “Hello”
    case "english":
            console.log("Hello")
        break; 
// If the user speaks Hebrew : display “Shalom” 
    case "hebrew":
            console.log("Shalom")
        break;     
// If the user doesn’t speak any of these 3 languages: display ‘01110011 01101111 01110010 01110010 01111001’
    default: console.log("01110011 01101111 01110010 01110010 01111001")
        break;
}



// Exercise 2 : *********The Grade Assigner****
// Instructions
// Ask the user for their grade.
grade=prompt("what language do you speak")
// If the grade is bigger than 90, console.log “A”
if (grade > 90) {
    console.log("A")
// If the grade is between 80 and 90 (included), console.log “B”
} else if ( grade < 90 && grade >= 80 ) {
    console.log("B")
// If the grade is between 70(included) and 80 (included), console.log “C” 
} else if ( grade <=  80 && grade >= 70 ) {
    console.log("C")
    // If the grade is lower than 70, console.log “D”
}else if (grade < 70){
    console.log("D")
}



//****** */ Exercise 3 : Verbing**********
// Instructions
// Prompt the user for a string. It must be a verb.
let verb = prompt("entrez un verbe")
taille=verb.length
if (taille >= 3 && !verb.endsWith("ing")) {
    console.log(verb.concat("ing"))
} else if (taille >= 3 && verb.endsWith("ing") ) {
    console.log(verb.concat("ly"))
    
}else {console.log(verb)}
