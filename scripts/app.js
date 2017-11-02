/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};


const Router = require("sf-core/ui/router");
const stylerBuilder = require("library/styler-builder");
const settings = require("./settings.json");
stylerBuilder.registerThemes(settings.config.theme.themes || "Defaults");
stylerBuilder.setActiveTheme(settings.config.theme.currentTheme);
const pages = ["supdev576", "supdev564", "supdev541", "supdev611"];
pages.forEach(item => Router.add(item, require(`./pages/${item}`)));
// Define routes and go to initial page of application
Router.add("page2", require("sf-extension-oracle-jet/samples/samplePage"));
Router.add("page3", require("sf-extension-oracle-jet/samples/samplePageWithOfficalCharts"));
Router.go("supdev576");

var rau = require("sf-extension-utils").rau;
rau.checkUpdate();
