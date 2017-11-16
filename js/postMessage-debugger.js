var postMessageDebugger = {
  init: function() {
    console.log("postMessageDebugger activated");
    addEventListener("message", function(event) {
      console.log(document.title + " received '" + JSON.stringify(event.data) + "'")
    });
  }
};

postMessageDebugger.init();
