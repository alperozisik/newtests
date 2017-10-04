const extend = require('js-base/core/extend');
const Supdev576Design = require('ui/ui_supdev576');
const Screen = require('sf-core/device/screen');
const Color = require('sf-core/ui/color');

const Supdev576 = extend(Supdev576Design)(
  // Constructor
  function(_super) {
    const page = this;
    _super(page);
    // overrides super.onShow method
    page.onShow = onShow.bind(page, page.onShow.bind(page));
    // overrides super.onLoad method
    page.onLoad = onLoad.bind(page, page.onLoad.bind(page));
    const svMain = page.svMain;
    const flChild = page.flChild;
    svMain.layout.flexGrow = 1;
    svMain.layout.width = Screen.width * 2;
    const backgroundColor = Color.createGradient({
      direction: Color.GradientDirection.HORIZONTAL,
      startColor: Color.BLUE,
      endColor: Color.RED
    });
    flChild.backgroundColor = backgroundColor;
    page.button1.onPress = () => {svMain.layout.width = Screen.width * 1; page.layout.applyLayout();};
    page.button2.onPress = () => {svMain.layout.width = Screen.width * 2; page.layout.applyLayout();};
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
}

module && (module.exports = Supdev576);
