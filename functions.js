const sayHello = (name) =>{
    if(name === 'Alice'){
        return "Hello Alice!"
    }else if(name === "Bob"){
        return 'Hello Bob!'
    }else if(name === undefined){
        return "Please input name"
    }else{
        return "You're not Bob or Alice, but Hello!"
    }
}

const greeting =(name) =>{
    return `Hello ${name}!`
}

const addSums = (num1, num2) => {
    return num1 + num2
}

console.log(sayHello("Alice"))
console.log(sayHello('Bob'))
console.log(sayHello('Dan'))
console.log(sayHello())
console.log(greeting("Alice"))
console.log(greeting('Bob'))
console.log(addSums(1,5))
console.log(addSums(10,5))
console.log(addSums(1,50))