var _gaq = null;


/**
 * Implements hook_deviceready().
 */
function google_analytics_deviceready() {
  try {
    if (typeof drupalgap.settings.google_analytics === 'undefined') {
      var msg = 'You must add Google Analytics to your settings.js file! ' +
        'See the module README file for more info.';
      drupalgap_alert(msg);
      return;
    }
    _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-XXXXX-X']);
    _gaq.push(['_trackPageview']);
  
    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }
  catch (error) { console.log('google_analytics_deviceready - ' + error); }
}

/**
 * Implements hook_drupalgap_goto_post_process().
 */
function google_analytics_drupalgap_goto_post_process(path) {
  dpm(path);
}

