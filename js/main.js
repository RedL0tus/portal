/*
* The Salted Fish Console
* Copyright 2018 (c) KayMW <RedL0tus@noreply.github.io>
* Licensed under WTFPL
*/

/* The function to find response from given input. */
function response(line, config) {
  if (line === '') { // Return nothing if there is no input
    return '';
  }
  for (let i = 0; i < config.commands.length; i += 1) {
    if (line === config.commands[i].command) { // Read every elements in the array.
      return config.commands[i].response.join('\n');
    }
  }
  return 'Command not found: '.concat(line); // When a command can't be found
}

/* Main */
$.getJSON('info.json', (json) => { // Read information form JSON, using jQuery
  document.title = json.title; // Set title
  /* Mostly sample code from jQuery-console */
  $(document).ready(() => {
    const container = $('<div class="console">');
    $('body').append(container);
    const controller = container.console({
      promptLabel: json.promptLabel,
      commandHandle(line, report) {
        report(response(line, json)); // Get response
      },
      autofocus: true,
      animateScroll: true,
      promptHistory: true,
      welcomeMessage: json.welcomeMessage, // Set welcome message
    });
  });
});
