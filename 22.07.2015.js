/*
A magic island Geraldion, where Gerald lives, has its own currency system. It uses banknotes of several values. But the problem is, the system is not perfect and sometimes it happens that Geraldionians cannot express a certain sum of money with any set of banknotes. Of course, they can use any number of banknotes of each value. Such sum is called unfortunate. Gerald wondered: what is the minimum unfortunate sum?

Input
The first line contains number n (1 ≤ n ≤ 1000) — the number of values of the banknotes that used in Geraldion.

The second line contains n distinct space-separated numbers a1, a2, ..., an (1 ≤ ai ≤ 106) — the values of the banknotes.

Output
Print a single line — the minimum unfortunate sum. If there are no unfortunate sums, print  - 1.

Sample test(s)
input
5
1 2 3 4 5
output
-1
*/



var input = 4;
var values = [1,1,3,4];

if (input < 5) {
    //console.log(find(values, 1)==-1);
    if (find(values, 1)== -1  || find(values, 2) == -1 ){
        console.log(-1);
    }
} else if (input >= 5 ) {
    //console.log(find(values, 5))
    
    if (!find(values, 5)){

        console.log(-1)
    };
}  

function find(arr, val) {
    
    for (var i =0; i < arr.length; i++){
        if (arr[i] == val) {
            return i
        } else if (i === arr.length) return -1; 
};
}