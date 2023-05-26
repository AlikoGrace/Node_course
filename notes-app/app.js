const notes = require('./notes');
const yargs = require('yargs');
const chalk =require('chalk');
yargs.version('1.1.0')

yargs.command(
    {
        command:'add',
        describe: 'Adds a new note',
        builder:{
           title:{
               describe:'Note title',
               demandOption:true,
               //this is to make it required
               type:'string'
               //default is a boolean
           },

            body:{
                describe:'Note body',
                demandOption:true,
                //this is to make it required
                type:'string'
                //default is a boolean
            }
        },
        handler:function (argv){
            notes.addNotes(argv.title, argv.body)
        //     this is what actually does the job

        }
    }
)

yargs.command(
    {
        command:'remove',
        describe: 'removes a note',
        builder:{
            title:{
                describe:'removes a note',
                demandOption:true
            }
        },
        handler:function (argv){
            notes.removeNotes(argv.title)

        }

    }
)


yargs.command(
    {
        command:'list',
        describe: 'list all notes you have',
        handler:function (){
            console.log('list notes')
        }

    }
)

yargs.command(
    {
        command:'read',
        describe: 'read notes',
        handler:function (){
            console.log()
        }

    }
)





// console.log(yargs.argv)
//without this all wont work. you can use this instead
yargs.parse()