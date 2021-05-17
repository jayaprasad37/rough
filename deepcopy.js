

const person = {
    username: 'Hello',
    lastname: 'there',
    inner:{
        inner1: 'Inner',
        deepInner:{
            deepInner1:'DeepInner'
        }
    }
}



function deepCopy(source){

    const temp = {};
    Object.keys(source).forEach(key=>{
        if(typeof source[key] != "object")
            temp[key] = source[key]
        else 
            temp[key] = deepCopy(source[key])

    })
    return temp;
}

const newPerson =  deepCopy(person)


// const newPerson = JSON.parse(JSON.stringify(person))


console.log(newPerson.username)

newPerson.username = "hi"
 newPerson.inner.inner1 = "Changed inner"
 newPerson.inner.deepInner.deepInner1="Deep Inner changed"

console.log(newPerson)

console.log(person.username)
console.log(person.inner.inner1)
console.log(newPerson.username)
console.log(newPerson.inner.inner1)
console.log(person.inner.deepInner.deepInner1)
console.log(newPerson.inner.deepInner.deepInner1)
