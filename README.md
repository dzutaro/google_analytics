google_analytics
================

The Google Analytics module for DrupalGap.

Setup
=====

1 - Get a Google Analytics Tracking ID for your app:

      https://support.google.com/analytics/answer/2614741?hl=en&ref_topic=2587085

2. Set up the Google Analytics SDK for your desired platform, e.g. Android:

      https://developers.google.com/analytics/devguides/collection/android/v4/

3 - Enable this module as usual in DrupalGap.

4 - Add this snippet to your settings.js file: 

```

/**
 * Google Analytics Settings
 */
drupalgap.settings.google_analytics = {
  account: 'UA-XXXXX-X'
};

```

5 - Replace the account string value mentioned above with your Google Analytics
   account's id.

