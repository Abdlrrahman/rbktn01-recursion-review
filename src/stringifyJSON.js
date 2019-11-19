/ this is what you would do if you liked things to be easy:
// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj, i, str) {
    var i = i || 0;
        if(i === Object.keys(obj).length) {
           return '{' + str.slice(str.length - 1) + '}';
   }
   var keys = Object.keys(obj)[i];
   var values = Object.values(obj)[i];
   var str = str || '';
   str += '"' + keys + '"' + ':'+ values + ',';
   return stringifyJSON(obj, i + 1, str)
};
