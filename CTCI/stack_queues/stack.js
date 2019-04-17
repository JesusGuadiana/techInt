class Stack {
  constructor() {
    this.items = [];
  }

  push(item){
    this.items.push(item);
  }
  pop(){
    if(this.items.length == 0){
      return "The stack is empty";
    }
    this.items.pop();
  }
  peek(){
    return this.items[this.items.length - 1];
  }
  isEmpty(){
    return this.items.length == 0;
  }
  printStack(){
    var stack ="";
    for(var i = this.items.length - 1; i > 0; i--){
      stack += ths.items[i] + "|";
    }
    return stack;
  }
}
