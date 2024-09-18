import getStdin from 'get-stdin';

[a,b,c]=(await getStdin()).split` `
a=+a
b=b==='true'
c=c==='true'
console.log(b?a+c:a-c)