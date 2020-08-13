const _Node = require("./Node")

class Stack {
    constructor(){
        this.top = null;
    }

    push(data){
        if(this.top === null){
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top);
        this.top = node;
    }

    pop(){
        if(this.top === null){
            return null
        }

        const node = this.top;
        this.top = this.top.next;

        return node.data;
    }
}

module.exports = Stack;