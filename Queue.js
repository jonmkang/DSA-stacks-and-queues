const _Node = require('./Node')

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
            return null;
        }

        const node = this.first;
        this.first = this.first.next;
        if(node === this.last){
            this.last = null;
        }

        return node.data;
    }
}

module.exports = Queue;