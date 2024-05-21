function SW(){
    let curr = undefined;
    this.duration = 0,
    this.start = function(){
        if(curr !== undefined){
            console.log(typeof(curr));
            throw new Error("stopwatch is already started");
        }
        curr = Date.now();
    },
    this.stop = function(){
        if(curr === undefined){
            throw new Error("please start the stopwatch");
        }
        this.duration = (Date.now()- curr)/1000;
        curr = undefined;
    },
    this.reset = function(){
        curr = undefined;
        this.duration = 0;
    }
}

const t1 = new SW();
t1.start();
// t1.stop();
// console.log(t1.duration);




