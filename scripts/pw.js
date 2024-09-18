import getStdin from 'get-stdin';
[a,b,c]=(await getStdin()).split` `;
console.log((+a+1)*(+b+1)*(+c+1));