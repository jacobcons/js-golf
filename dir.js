import getStdin from 'get-stdin';
d=await getStdin();
console.log({'NORTH':'*\n|','SOUTH':'|\n*','EAST':'----*','WEST':'*----','NORTHEAST':' *\n/','SOUTHWEST':' /\n*','NORTHWEST':'*\n \\','SOUTHEAST':'\\\n *''}[d])
