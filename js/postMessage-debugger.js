console.debug("postMessageDebugger activated");
addEventListener("message", function(event) {
  console.debug(
    "postMessage received by '" +
      document.title +
      "' from '" +
      event.origin +
      "' with data:",
    event.data
  );
});
