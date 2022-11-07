const arr = [1,2,2,4,4,4,4,5]

const s = {};
arr.map((x)=>{
    s[x]= s[x] + 1 || 1 ;
    
});
let k = Object.keys(s);
let v = Object.values(s);
let max = Math.max(...v);
let min = Math.min(...v);
let i = v.findIndex((x)=>{ return x==max});
let mini = v.findIndex((x) => { return x == min })

console.log(k[i]);
console.log(k[mini]);