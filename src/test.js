const obj = {
  name: "obj"
}
const cb = () => {
  console.log(this);
}
function cba() {
  console.log(this);
}
cb.call(obj)
cba.call(obj)