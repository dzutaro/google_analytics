The Google Analytics module for DrupalGap.

## Setup

### 1. Get a Tracking ID

- https://support.google.com/analytics/answer/2614741?hl=en&ref_topic=2587085

### 2. Add configuration

Add this to your `settings.js` file:

```
dg.settings.google_analytics = {
  id: 'UA-XXXX-Y'
};
```

Replace the `UA-XXXX-Y` with your tracking id from step 1.

### 3. Add the tracking code

Add this snippet to your app's `index.html` file before the closing `</body>` tag:

```
<!-- Google Analytics -->
<script>
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', dg.config('google_analytics').id, 'auto');
ga('send', 'pageview');
</script>
<!-- End Google Analytics -->
```

If you are compiling your app, be sure to replace the `//www.google-analytics.com/analytics.js` with `https://www.google-analytics.com/analytics.js` instead.

### 4. Enable the module

Include the module in your `index.html` file:

```
<script src="modules/contrib/google_analytics/google_analytics.js"></script>
```
