class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
    }

    //adds data
    enqueue(data){
        const node = new _Node(data);
        if(this.first === null){
            this.first = node;
        }

        if(this.last){
            this.last.next = node;
        }
        this.last = node;
    }

    //removes oldest data added to a queue
    dequeue(){
        if(this.first === null){
            return;
        }

        const node = this.first;
        this.first = this.first.next;
        if(node === this.last){
            this.last = null;
        }

        return node.data;
    }
}

function peek(queue){
    if(queue.first === null){
        return null
    }
    return queue.first.data
}

function isEmpty(queue){
    return queue.first === null
}

function display(queue){
    if(isEmpty(queue)){
        return null
    }

    let firstPoint = peek(queue)
    let toShow = queue.dequeue()  

    do {
        queue.enqueue(toShow); 
        console.log(toShow);
        toShow = queue.dequeue()  
    }while(toShow !== firstPoint);

    return
}

const female_dancers = new Queue();
const male_dancers = new Queue();


function dance_pair(newDancer){
    const dancer = newDancer.split(' ');
    if(dancer[0] === 'M'){
        male_dancers.enqueue(dancer[1]);
    }else{
        female_dancers.enqueue(dancer[1]);
    }

    if(!isEmpty(male_dancers) && !isEmpty(female_dancers)){
        male_dancers.dequeue();
        female_dancers.dequeue();
    }

    if(isEmpty(female_dancers)){
        return male_dancers
    }

    if(isEmpty(male_dancers)){
        return female_dancers
    }
}

function bank(queue){

    let count = 0;

    while(!isEmpty(queue) && count < 5){
        if(Math.floor(Math.random() * Math.floor(4)) < 1){
            let itemToAdd = queue.dequeue()
            queue.enqueue(itemToAdd)
            count++;
        }else{
            queue.dequeue()
        }
    }
    
    return queue
}

// const starTrekQ = new Queue();
// starTrekQ.enqueue('Kirk')
// starTrekQ.enqueue('Spock')
// starTrekQ.enqueue('Uhara')
// starTrekQ.enqueue('Sulu')
// starTrekQ.enqueue('Checkov')

// console.log(peek(starTrekQ))
// console.log(isEmpty(starTrekQ))
// display(starTrekQ)


// dance_pair('F Jane')
// dance_pair('M Frank')
// dance_pair('M John')
// dance_pair('M Sherlock')
// dance_pair('F Madonna')
// dance_pair('M David')
// console.log(dance_pair('M Christopher'))
// console.log(dance_pair('F Beyonce'))

const bankLine = new Queue();
bankLine.enqueue('First')
bankLine.enqueue('Second')
bankLine.enqueue('Third')
bankLine.enqueue('Fourth')
bankLine.enqueue('Fifth')
bankLine.enqueue('Sixth')
bankLine.enqueue('Seventh')
bankLine.enqueue('Eighth')
bankLine.enqueue('Ninth')
bankLine.enqueue('Tenth')
bankLine.enqueue('Eleventh')
bankLine.enqueue('Twelveth')
bankLine.enqueue('Thirteenth')


console.log(bank(bankLine))