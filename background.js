// If you need t get hold of all your extensions
// let extensions;
// chrome.management.getAll(results => (extensions = results));
// // filter them by theme
// let themes = extensions.filter(ext => ext.type === "theme");

const updateTheme = () => {
  chrome.windows.getCurrent(win => {
    chrome.tabs.getAllInWindow(win.id, tabs => {
      let tab = tabs.filter(tab => tab.active).map(tab => {
        if (tab.url.includes("tweetdeck.localhost.twitter")) {
          // set pink theme
          chrome.management.setEnabled(
            "fklljnhmbagigkninckdfeknliepoock",
            true
          );
        } else {
          // set black theme
          chrome.management.setEnabled(
            "ahifcnpnjgbadkjdhagpfjfkmlapfoel",
            true
          );
        }
      });
    });
  });
};

// update theme on tab change
chrome.tabs.onActiveChanged.addListener(e => {
  updateTheme();
});
// update theme on window focus change
chrome.windows.onFocusChanged.addListener(updateTheme);

// chrome.runtime.onInstalled.addListener(function() {
//   // get all extensions
// let extensions;
// chrome.management.getAll(results => (extensions = results));
// // filter them by theme
// let themes = extensions.filter(ext => ext.type === "theme");

//   // set pink theme
//   // chrome.management.setEnabled("fklljnhmbagigkninckdfeknliepoock", true)

//   chrome.storage.sync.set({ color: "#3aa757" }, function() {
//     console.log("The color is green.");
//   });
//   chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
//     chrome.declarativeContent.onPageChanged.addRules([
//       {
//         conditions: [
//           new chrome.declarativeContent.PageStateMatcher({
//             pageUrl: { hostEquals: "developer.chrome.com" }
//           })
//         ],
//         actions: [new chrome.declarativeContent.ShowPageAction()]
//       }
//     ]);
//   });
// });
