const Queue = require('./Queue');
const Stack = require('./Stack');


function peek(stack){
    if(stack.top === null){
        return null
    }
    return stack.top.data
}

function isEmpty(stack){
    return stack.top === null
}

function display(stack){
    let toShow = stack.top
    while(toShow !== null){
        console.log(toShow.data)
        toShow = toShow.next
    }
}

function is_palindrome(s){
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let checkPalindrome = new Stack();

    for(let c of s){
        checkPalindrome.push(c)
    }

    for(let c of s){
        if(c !== checkPalindrome.pop()){
            return false;
        }
    }

    return true
}

function matching(s){
    let matching = new Stack();
    for(let c of s){
        if(c === '('){
            matching.push(c)
        }

        if(c === ')'){
            if(matching.pop() === null){
                throw new Error('You are missing a (')
            }
        }
    }

    if(matching.pop !== null){
        throw new Error('You are missing a )')
    }
}

function sort(stack){
    //create a temporary stack
    let tempStack = new Stack();
     
     //loop while stack is not empty
     while(!isEmpty(stack)){ 
       
       // pop out the first element 
       let tmp = stack.pop(); 
            
       // while temporary stack is not empty and 
       // top of stack is greater than temp 
       // change > to < for sorting in ascending order
       while(!isEmpty(tempStack) && peek(tempStack) < tmp){ 
          
          // pop from temporary stack and  
          // push it to the input stack 
          stack.push(tempStack.pop()); 
       } 
                
     // push temp in tempory of stack 
     tempStack.push(tmp); 
       
    } 
    
    return tempStack; 
  }
const starTrek = new Stack();
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

// peek(starTrek)
// console.log(isEmpty(starTrek))
// display(starTrek)

// starTrek.pop();
// starTrek.pop();
// display(starTrek)

const sortMe = new Stack();
sortMe.push(1)
sortMe.push(12)
sortMe.push(131)
sortMe.push(6)
sortMe.push(10)

console.log(sort(sortMe))