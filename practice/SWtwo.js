function SW(){
    let curr, duration = undefined;
    Object.defineProperties(this, "curr", {
        
    });
}

SW.prototype.start = function(){
    if(this.curr !== undefined){
        console.log(typeof(this.curr));
        throw new Error("stopwatch is already started");
    }
    this.curr = Date.now();
}

SW.prototype.stop = function() {
    if(this.curr === undefined){
        throw new Error("please start the stopwatch");
    }
    this.duration = (Date.now()- this.curr)/1000;
    this.curr = undefined;
}

SW.prototype.reset =function() {
    this.curr = undefined;
    this.duration = 0;
}

const t1 = new SW();







