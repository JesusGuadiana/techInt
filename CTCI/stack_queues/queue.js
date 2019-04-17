class Queue {
  constructor() {
    this.items = [];
  }
  // Functions to be implemented
  enqueue(item){
    this.items.push(item);
  }
  dequeue(){
    this.items.shift();
  }
  front(){
    if(this.items.length == 0){
      return "The queue is empty";
    }
    return this.items[0];
    }
  isEmpty(){
    return this.items.length == 0;
  }
  printQueue(){
    var queue = "";
    for(var i = 0; i < this.items.length; i++){
      queue += this.items[i] + "|";
    }
    return queue;
  }
}
