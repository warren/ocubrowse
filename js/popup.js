function startWebgazer() {
  chrome.tabs.executeScript({ // Run this first so that start.js knows what webgazer is
    file: 'demo/public/javascripts/webgazer.js'
  });
  chrome.tabs.executeScript({
    file: 'js/start.js'
  });
}

document.getElementById('start-webgazer').addEventListener('click', startWebgazer);

// var isToggled = false;

function toggleReddot() {
  // if(isToggled) {
  //   isToggled = false;
  // }
  // chrome.tabs.executeScript({ // Run this first so that start.js knows what webgazer is
  //   file: 'demo/public/javascripts/webgazer.js'
  // });
  chrome.tabs.executeScript({
    file: 'js/stopdot.js'
  });
}

document.getElementById('toggle-reddot').addEventListener('click', toggleReddot);




function pauseWebgazer() {
    chrome.tabs.executeScript({
    file: 'js/pause.js'
  });
}

document.getElementById('resume-webgazer').addEventListener('click', resumeWebgazer);

function resumeWebgazer() {
  chrome.tabs.executeScript({
  file: 'js/resume.js'
});
}

document.getElementById('resume-webgazer').addEventListener('click', resumeWebgazer);
