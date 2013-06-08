var script = "self.on('click', function (node, data) {" +
               "self.postMessage()" +
             "});";
 
var cm = require("sdk/context-menu");
var tabs = require('sdk/tabs')
 
cm.Item({
  label: "Pin Tab",
  context: cm.PageContext(),
  contentScript: script,
  onMessage: function() {
    tabs.activeTab.pin();
  }
});
