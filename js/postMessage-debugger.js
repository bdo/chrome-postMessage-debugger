function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
}

var id = "[" + this.hashCode(window.location.href) + "]";
console.debug(id + " postMessageDebugger activated");
addEventListener("message", function(event) {
  console.debug(
    "postMessage received by " +
      id +
      " from '" +
      event.origin +
      "' with data:",
    event.data
  );
});
