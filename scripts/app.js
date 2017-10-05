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

// Define routes and go to initial page of application
Router.add("supdev576", require("./pages/supdev576"));
Router.add("supdev564", require("./pages/supdev564"));
Router.add("supdev541", require("./pages/supdev541"));
Router.add("page2", require("sf-extension-oracle-jet/samples/samplePage"));
Router.add("page3", require("sf-extension-oracle-jet/samples/samplePageWithOfficalCharts"));
Router.go("page2");

var rau = require("sf-extension-utils").rau;
rau.checkUpdate();


