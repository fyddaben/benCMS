
var _ = require('lodash')
// 根据manifest.json 获取所有的地址
exports.getPathObj = function() {
  var manifest = require('../../config/manifest.json') 
  var appJs = _.get(manifest['app']['js'], '') 
  _.get(manifest, 'manifest[app][js]', '');
  var preloadJs = [];
  if (_.get(manifest, 'app[js]', '')) {
    preloadJs.push(_.get(manifest, 'app[js]', ''))
  }
  if (_.get(manifest, 'chunk-vendors[js]', '')) {
    preloadJs.push(_.get(manifest, 'chunk-vendors[js]', ''))
  }
  var preloadCss = [];
  if (_.get(manifest, 'app[css]', '')) {
    preloadCss.push(_.get(manifest, 'app[css]', ''))
  }
  if (_.get(manifest, 'chunk-vendors[css]', '')) {
    preloadCss.push(_.get(manifest, 'chunk-vendors[css]', ''))
  }
  var preFetchJs = [];
  if (_.isArray(_.get(manifest, ['','js'], ''))) {
    preFetchJs = _.get(manifest, ['','js'], '')
  } else {
    if (_.get(manifest, ['','js'], '')) {
      preFetchJs.push(_.get(manifest, ['','js'], ''))
    }
  }
  var newPreFetchJs = [];
  preFetchJs.map(function(val) {
    if (val.indexOf('/lib/') == -1) {
      newPreFetchJs.push(val)
    } 
  })
  var preFetchCss = [];
  if (_.isArray(_.get(manifest, ['','css'], ''))) {
    preFetchCss = _.get(manifest, ['','css'], '')
  } else {
    if (_.get(manifest, ['','css'], '')) {
      preFetchCss.push(_.get(manifest, ['','css'], ''))
    }
  }
  
  var newPreFetchCss = [];
  newPreFetchCss.map(function(val) {
    if (val.indexOf('/lib/') == -1) {
      newPreFetchCss.push(val)
    } 
  })

  return {
    preloadJs, 
    preloadCss, 
    preFetchCss: newPreFetchCss, 
    preFetchJs: newPreFetchJs
  }

} 
