const _arr = new WeakMap();

class Stack{
    constructor(){
        _arr.set(this, []); // encapsulation
        this.count = 0;
    }
    push(value){
        this.count++;
        _arr.get(this).push(value);
    }
    pop(){
        if(this.count === 0){
            throw new Error ("Stack is Empty");
        }
        this.count--;
        return _arr.get(this).pop();
    }
    peek(){
        if(this.count === 0){
            throw new Error ("Stack is Empty");
        }
        return _arr.get(this)[this.count-1];
    }
    get count(){
        return _arr.get(this).length; // instead of adding count as a saperate property 
    }
}

const stack = new Stack();