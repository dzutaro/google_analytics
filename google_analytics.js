dg.modules.google_analytics = new dg.Module();

/**
 * Implements hook_post_process_route_change().
 */
function google_analytics_post_process_route_change(route, path) {
  ga('send', 'pageview', '/' + path);
}
