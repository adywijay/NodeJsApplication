/*
  Greedy  quantifier	Lazy quantifier	Meaning
* *	        *?        Match its preceding element zero or more times.
* +         +?        Match its preceding element one or more times.
* ?	        ??        Match its preceding element zero or one time.
* { n }    { n }?	    Match its preceding element exactly n times.
* { n,}    { n,}?	    Match its preceding element at least n times.
* { n, m } { n, m }?	Match its preceding element from n to m times.

*/

const s = '<button type="submit" class="btn">Send</button>'
const pattern = /".+?"/g;

const result = s.match(pattern)
console.log(result);