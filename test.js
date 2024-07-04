const f = (a, b, c) => {
  // a=+a
  // b=b==='true'
  // c=c==='true'
  // console.log(b?a+c:a-c)
  // for (j = 0; console.log(j++), j < 10;);
  for (j = 0;j < 10;console.log(j++));
}
f('3', 'true', 'true');

const g = (a, b, c) => {
  console.log((+a+1)*(+b+1)*(+c+1));
}
g('3', '4', '5');

const h = (d) => {
  console.log({'NORTH':'*\n|','SOUTH':'|\n*','EAST':'----*','WEST':'*----','NORTHEAST':' *\n/','SOUTHWEST':' /\n*','NORTHWEST':'*\n \\','SOUTHEAST':'\\\n *'}[d])
}
h('NORTH');

