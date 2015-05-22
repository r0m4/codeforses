/*A soldier wants to buy w bananas in the shop. He has to pay k dollars for the first banana, 2k dollars for the second one and so on (in other words, he has to pay i·k dollars for the i-th banana).

He has n dollars. How many dollars does he have to borrow from his friend soldier to buy w bananas?

Input
The first line contains three positive integers k, n, w (1  ≤  k, w  ≤  1000, 0 ≤ n ≤ 109), the cost of the first banana, initial number of dollars the soldier has and number of bananas he wants.

Output
Output one integer — the amount of dollars that the soldier must borrow from his friend. If he doesn't have to borrow money, output 0.

Sample test(s)
input
3 17 4
output
13 

*/


var k = 3;
var n = 17;
var w = 4;

var total = 0;

for ( var i = 1; i <= w; i++) {
    total += k*i ;
}

if (total < n) {
    console.log("0");
} else console.log(total-n);

/*
Colonel has n badges. He wants to give one badge to every of his n soldiers. Each badge has a coolness factor, which shows how much it's owner reached. Coolness factor can be increased by one for the cost of one coin.

For every pair of soldiers one of them should get a badge with strictly higher factor than the second one. Exact values of their factors aren't important, they just need to have distinct factors.

Colonel knows, which soldier is supposed to get which badge initially, but there is a problem. Some of badges may have the same factor of coolness. Help him and calculate how much money has to be paid for making all badges have different factors of coolness.

Input
First line of input consists of one integer n (1 ≤ n ≤ 3000).

Next line consists of n integers ai (1 ≤ ai ≤ n), which stand for coolness factor of each badge.

Output
Output single integer — minimum amount of coins the colonel has to pay.

*/


var length = 7;

var arr = [1, 2, 3, 2, 5, 2, 7];
var count = 0;


function countCoolness (badges) {

badges.sort();

    for (var i = 0; i < badges.length; i++){
        
        if (i===0 || badges[i] > badges[i-1]) {continue
        } else {
            badges[i] = badges[i]+1;
            count += 1;
            countCoolness(badges);
           }    
    };




};

countCoolness(arr);



console.log(count);