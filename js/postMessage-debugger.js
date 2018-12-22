const source = document.title || window.location.href;
console.debug(`postMessageDebugger activated on '${source}'`);
addEventListener('message', function(event) {
  console.debug(
    `postMessage received by '${source}' from '${event.origin}' with data:`,
    event.data
  );
});
