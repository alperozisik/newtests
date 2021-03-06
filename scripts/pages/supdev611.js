const extend = require('js-base/core/extend');
const Supdev611Design = require('ui/ui_supdev611');
const Http = require("sf-core/net/http");
var http = new Http();

const Supdev611 = extend(Supdev611Design)(
  // Constructor
  function(_super) {
    // Initalizes super class for this page scope
    _super(this);
    // overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

  });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  superOnLoad();

  this.btn.onPress = () => {
    http.request({
      'url': 'http://example.com',
      'method': 'GET',
      onError: () => {}
    });
  };
}

module && (module.exports = Supdev611);
