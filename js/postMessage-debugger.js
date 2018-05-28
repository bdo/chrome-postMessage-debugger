var postMessageDebugger = {
  hashCode: function(s){
      return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);              
  },
  init: function() {
    var id = this.hashCode(window.location.href);
    console.log("[" + id + "] postMessageDebugger activated on " + window.location.href);
    addEventListener("message", function(event) {
      console.log("[" + id + "]" + event.data )
    });
  }
};

postMessageDebugger.init();
