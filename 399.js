// https://www.reddit.com/r/dailyprogrammer/comments/onfehl/20210719_challenge_399_easy_letter_value_sum/
// 1st solution
l=s=>{for(i=0,m=0;i<s.length;m+=s.charCodeAt(i++)-96);return m}
// 2nd solution
l=s=>[...s].reduce((m,c)=>m+c.charCodeAt()-96,0)
console.log(l('abc'))

// bonus challenges
f=require('fs').readFileSync('1.txt','utf8').split`\n`;

// 1.
console.log(f.find(s=>l(s)==319))

// 2.
// 1st solution
console.log(f.reduce((a,c)=>l(c)%2==1?a+1:a,0))
// 2nd solution
console.log(f.filter(s=>l(s)%2==1).length)

// 3.
d={}
for(s of f){m=l(s);d[m]?d[m]++:d[m]=1}
// 1st solution ending
m=0;for([s,c] of Object.entries(d))c>m?(m=c,x=s):1;console.log(x,m)
// 2nd solution ending
console.log(Object.entries(d).sort((a,b)=>b[1]-a[1])[0])

// 4.
d={}
for(s of f){m=l(s);d[m]?d[m].push(s):d[m]=[s]}
for(k in d){for (s of d[k]){for (c of d[k])Math.abs(s.length-c.length)==11?console.log(s,c):1}}

// 5.
d={}
for(s of f){m=l(s);d[m]?d[m].push(s):d[m]=[s]}
for(k in d)if(k>188)for(s of d[k])for(c of d[k])if(!(new Set(s)).intersection(new Set(c)).size)console.log(s,c)