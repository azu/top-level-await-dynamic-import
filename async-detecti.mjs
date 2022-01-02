const AsyncFunction = Object.getPrototypeOf(async function () {
}).constructor;
const an = new AsyncFunction("a", "b", "await new Promise(resolve => setTimeout(resolve, 1000)); return a + b");
const ret = await an(1, 2);
console.log(ret);
