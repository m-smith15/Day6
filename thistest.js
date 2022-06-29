// this refers to something (obj in this example) in the scope
// key value pairs = object
var x = 123;
var y = 456;
var z = 687;


const pets = {
    cat1:'Finn',
    cat2:'Duncan',
    cats:function(){
        return this.cat1 + " " + this.cat2;
    }
}


console.log(pets.cats());