const fs = require('fs')
const chalk = require("chalk");

const getNotes = function (){
    return('Your notes are..')
}

const addNotes = function(title,body){
   const notes = loadNotes()
const duplicatesNotes= notes.filter(function (){
    return notes.title === title;
//     it should return the duplicates

})
    if (duplicatesNotes.length===0){
        notes.push({
            //after checking for duplicates, if there are none then add it to the file
            title: title,
            body:body,
        })
        savedNotes(notes)
        // saved notes here is a function that now changes the javascript object into json format so it can be stored
        console.log(chalk.green.bold('New note added'))
    }else{
        console.log(chalk.red.bold('title taken'))
    //   else if it is a duplicate, tell them it is already taken
    }
    }


const savedNotes= function(notes){
    // the notes here is what has been read from the command line
    const dataJson= JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes= function(){

    try{
        const dataBuffer = fs.readFileSync('notes.json' )
        // readFile returns the content of the file(what is being typed in). It does that in binary
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    //     this changes Json format to a javascript object so you can access the body and title separately.

    }catch (e){
        return []
    //     catches the error so if there's no file to write to it returns an empty array and creates the file
    }

}

const removeNotes= function (title){
    const notes = loadNotes()
    const  notesToKeep = notes.filter(function (note){
        // notes.filter goes through each and every note. and then keep those whose titles don't match what has been asked
        // to be removed
        return note.title!== title;
    //     this will return the non-duplicates


    })

    if (notes.length > notesToKeep.length){
        console.log(chalk.bold.green('notes removed'))
        savedNotes(notesToKeep)

    //     if what you are keeping is same number as what was there already then it was not removed 

    }else {
        console.log(chalk.red.bold('no note found'))
    }


}

module.exports = {
getNotes:getNotes,
    addNotes:addNotes,
    removeNotes:removeNotes
}