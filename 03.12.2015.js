var x = [500,1000,1500,2000,2500];
var m = [20,40,60,80,100];
var w = [0,1,2,3,4];
var h = [1,0];


function formula (x,m,w) {
    var progress = Math.max(0.3*x);
    var out = Math.max((1-m/250)*progress-50*w);
    return out;
}

console.log(formula (x[1], m[1], w[1]));