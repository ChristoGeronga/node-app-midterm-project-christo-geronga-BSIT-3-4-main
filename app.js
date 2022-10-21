const write = require ('./write')
const add = require ('./add')
const read = require ('./read')


const cmd = process.argv

if (cmd[2]=="add"){
    const note = {
        "id":cmd[3],
        "title":cmd[4],
        "body":cmd[5]

    }
    const oldNote = read()
    add(note,oldNote)
}
if (cmd[2] == 'read'){
    console.log(read())
}

