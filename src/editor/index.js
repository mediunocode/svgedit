//  TO BUILD AN IIFE VERSION OF THIS FILE (AS CAN WORK ON OLDER BROWSERS),
//   RUN THE FOLLOWING ON THE COMMAND LINE FROM THE PROJECT ROOT:
//   `npm run build-by-config`. REPEAT AFTER ANY MODIFICATIONS
//   TO svgedit-config-es.js.

/*
The svgedit-config-es.js file is intended for the setting of configuration
  or preferences which must run early on; if this is not needed, it is
  recommended that you create an extension instead (for greater
  reusability and modularity). This file needs to be in the parent
  folder of the editor folder. It is referenced in the code as
  '../svgedit-config-es.js'.
*/

// CONFIG AND EXTENSION SETTING
/*
For default config and extensions (and available options) available to
`setConfig()`, see the file `docs/tutorials/ConfigOptions.md`
*/

// import 'core-js/stable/index.js';
// import 'regenerator-runtime/runtime.js';
import svgEditor from './svgedit.js';

// URL OVERRIDE CONFIG
svgEditor.setConfig({
  /* To override the ability for URLs to set URL-based SVG content,
  uncomment the following: */
  // preventURLContentLoading: true,
  /* To override the ability for URLs to set other configuration (including
    extension config), uncomment the following: */
  // preventAllURLConfig: true,
  /* To override the ability for URLs to set their own extensions, uncomment the
  following (note that if `setConfig()` is used in extension code, it will still
  be additive to extensions, however): */
  // lockExtensions: true,
});

svgEditor.setConfig({
  /*
  Provide default values here which differ from that of the editor but
    which the URL can override
  */
}, {allowInitialUserOverride: true});

// EXTENSION CONFIG
svgEditor.setConfig({
  extensions: [],
  noDefaultExtensions: false
});

// OTHER CONFIG
svgEditor.setConfig({
  // canvasName: 'default',
  // canvas_expansion: 3,
  // initFill: {
  //   color: 'FF0000', // solid red
  //   opacity: 1
  // },
  // initStroke: {
  //   width: 5,
  //   color: '000000', // solid black
  //   opacity: 1
  // },
  // initOpacity: 1,
  // colorPickerCSS: null,
  // initTool: 'select',
  // exportWindowType: 'new', // 'same'
  // wireframe: false,
  // showlayers: false,
  // no_save_warning: false,
  // PATH CONFIGURATION
  // imgPath: 'images/',
  // extPath: 'extensions/',
  /*
  Uncomment the following to allow at least same domain (embedded) access,
  including `file:///` access.
  Setting as `['*']` would allow any domain to access but would be unsafe to
  data privacy and integrity.
  */
  // May be 'null' (as a string) when used as a `file:///` URL
  // allowedOrigins: [location.origin || 'null'],
  // DOCUMENT PROPERTIES
  // dimensions: [640, 480],
  // EDITOR OPTIONS
  // gridSnapping: false,
  // gridColor: '#000',
  // baseUnit: 'px',
  // snappingStep: 10,
  // showRulers: true,
  // EXTENSION-RELATED (GRID)
  // showGrid: false, // Set by ext-grid.js
  // EXTENSION-RELATED (STORAGE)
  // Some interaction with `ext-storage.js`; prevent even the loading of
  //  previously saved local storage
  // noStorageOnLoad: false,
  // Some interaction with `ext-storage.js`; strongly discouraged from
  //  modification as it bypasses user privacy by preventing them from
  //  choosing whether to keep local storage or not
  // forceStorage: false,
  // Used by `ext-storage.js`; empty any prior storage if the user
  //  declines to store
  // emptyStorageOnDecline: true,
});

// PREF CHANGES
/*
setConfig() can also be used to set preferences in addition to
  configuration (see defaultPrefs in svg-editor.js for a list of
  possible settings), but at least if you are using ext-storage.js
  to store preferences, it will probably be better to let your
  users control these.
As with configuration, one may use allowInitialUserOverride, but
  in the case of preferences, any previously stored preferences
  will also thereby be enabled to override this setting (and at a
  higher priority than any URL preference setting overrides).
  Failing to use allowInitialUserOverride will ensure preferences
  are hard-coded here regardless of URL or prior user storage setting.
*/
svgEditor.setConfig({
  // Set dynamically within locale.js if not previously set
  // lang: '',
  // Will default to 's' if the window height is smaller than the minimum
  //  height and 'm' otherwise
  // iconsize: '',
  /**
  * When showing the preferences dialog, svg-editor.js currently relies
  * on `curPrefs` instead of `svgEditor.pref`, so allowing an override for
  * `bkgd_color` means that this value won't have priority over block
  * auto-detection as far as determining which color shows initially
  * in the preferences dialog (though it can be changed and saved).
  */
  // bkgd_color: '#FFF',
  // bkgd_url: '',
  // img_save: 'embed',
  // Only shows in UI as far as alert notices
  // save_notice_done: false,
  // export_notice_done: false
});
svgEditor.setConfig(
  {
    // Indicate pref settings here if you wish to allow user storage or URL
    //   settings to be able to override your default preferences (unless
    //   other config options have already explicitly prevented one or the
    //   other)
  },
  {allowInitialUserOverride: true}
);
