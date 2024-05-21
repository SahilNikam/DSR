function HtmlElement(){
    this.click = function(){
        console.log("Clicked");
    }
}
HtmlElement.prototype.focus = function(){
    console.log("focused");
}

function HtmlSelect(item){
    this.items = (item === undefined)?[]:item,

    this.addItem = function(item){
        this.items.push(item);
    },
    this.removeItem = function(item){
        const arr2 = this.items.filter((val) => { 
            if(val != item){
                return val;
            }
         });
        this.items = arr2;
    }
    this.render = function(){
        return  `
        <select>${this.items.map(ele => `
            <options> ${ele} </options>`).join('')}
        </select>`;
    }
}

function HtmlImage(source=""){
    this.src = source;
}

HtmlImage.prototype = Object.create(HtmlSelect.prototype);

HtmlImage.prototype.render = function(){
    return `<img src="${this.src}" />`;
}


// HtmlSelect.prototype = Object.create(HtmlElement.prototype); 
// this will only copy the prototype methods
HtmlSelect.prototype = new HtmlElement;

const s1 = new HtmlSelect([1,2,3]);
const s2 = new HtmlImage("google.com");

const element = [
    s1,s2
]

for(let ele of element)
    console.log(ele.render());









