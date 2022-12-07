
var x=[5,6,3,1];

let a=x.reduce(function(total,task) {
    return total+task;
},0);
console.log("summation using reduce="+a);

let b=x.reduce(function(total, task)
{
return total*task;
},1);
console.log("multiplication using reduce="+b);

let y=["Compro","Student"];
let z=y.map(reverse);

function reverse(task)
{
    let s=task.split('');
    s1= s.reverse().join("");
    return s1;
}
console.log(z);

var words=["Jack","Joe","June","Maik","Sara"];
var res=[];
function filterLongWords(words,i)
{

res=words.filter(function(check){

    return check.length>i;
});
}
filterLongWords(words,3);
console.log(res);
