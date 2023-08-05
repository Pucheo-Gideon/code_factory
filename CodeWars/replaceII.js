function enough(cap, on, wait) {
//   return on + wait === cap
//     ? 0
//     : on + wait > cap
//     ? `Can't take remaining ${on + wait - cap} passengers`
//     : cap > on + wait
//     ? `we still have space for ${cap - (wait + on)}`
//     : "";
if(on + wait==cap) return 0;
else if (on + wait > cap) return `Can't take remaining ${on + wait - cap} passengers`;
else return `we still have space for ${cap - (wait + on)}`;
}

console.log(enough(10, 5, 5));
