// If life was easy, we could just do things the easy way:
var getElementsByClassName = function (className) {
 return document.getElementsByClassName(className);
};
// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
    debugger;
    var i = 0;
    var array = [];
    var body = function(i) {
        array.push(document.body.childNodes)
        if(array[i].classList === className) {
            return true;
        }
        return body(i + 1);
    }
    return body(i)
};
var getElementsByClassName = function(className, i, j) {
    var j = j ||0;
    var i = i|| 0;
    //var array = [];
        if(document.body.childNodes[i].classList[j] === className) {
            return document.body.childNodes[i].classList[j];
        }
        if(j <  document.body.childNodes[i].classList) {
            return getElementsByClassName(className, i , j + 1);
        }
        return getElementsByClassName(className, i+ 1 ,j);
    };
