if( typeof Array.prototype.checkLength !== 'function'){
    Array.prototype.checkLength = function(){
        return this.length;
    }

}




let a = [1,2,3,4,5,6,7,8,9];

console.log(a.checkLength());