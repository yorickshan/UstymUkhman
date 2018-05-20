module.exports = {
  'minify': true,
  'filename': 'static/js/modernizr.[chunkhash].js',
  'options': [
    'addTest',
    'setClasses'
  ],
  'feature-detects': [
    // 'a/download',
    // 'ambientlight',
    // 'applicationcache',
    // 'audio',
    // 'audio/loop',
    // 'audio/preload',
    // 'audio/webaudio',
    // 'battery',
    // 'battery/lowbattery',
    // 'blob',
    'canvas',
    // 'canvas/blending',
    // 'canvas/todataurl',
    // 'canvas/winding',
    // 'canvastext',
    // 'contenteditable',
    // 'contextmenu',
    // 'cookies',
    // 'cors',
    // 'custom-elements',
    // 'crypto',
    // 'crypto/getrandomvalues',
    // 'css/all',
    // 'css/animations',
    // 'css/appearance',
    // 'css/backdropfilter',
    // 'css/backgroundblendmode',
    // 'css/backgroundcliptext',
    // 'css/backgroundposition-shorthand',
    // 'css/backgroundposition-xy',
    // 'css/backgroundrepeat',
    // 'css/backgroundsize',
    // 'css/backgroundsizecover',
    // 'css/borderimage',
    // 'css/borderradius',
    // 'css/boxshadow',
    'css/boxsizing',
    // 'css/calc',
    // 'css/checked',
    // 'css/chunit',
    // 'css/columns',
    // 'css/cssgrid',
    // 'css/cubicbezierrange',
    // 'css/displayrunin',
    // 'css/displaytable',
    // 'css/ellipsis',
    // 'css/escape',
    // 'css/exunit',
    // 'css/filters',
    // 'css/flexbox',
    // 'css/flexboxlegacy',
    // 'css/flexboxtweener',
    // 'css/flexwrap',
    // 'css/fontface',
    // 'css/generatedcontent',
    // 'css/gradients',
    // 'css/hairline',
    // 'css/hsla',
    // 'css/hyphens',
    // 'css/invalid',
    // 'css/lastchild',
    // 'css/mask',
    // 'css/mediaqueries',
    // 'css/multiplebgs',
    // 'css/nthchild',
    // 'css/objectfit',
    // 'css/opacity',
    // 'css/overflow-scrolling',
    'css/pointerevents',
    // 'css/positionsticky',
    // 'css/pseudoanimations',
    // 'css/pseudotransitions',
    // 'css/reflections',
    // 'css/regions',
    // 'css/remunit',
    // 'css/resize',
    // 'css/rgba',
    // 'css/scrollbars',
    // 'css/scrollsnappoints',
    // 'css/shapes',
    // 'css/siblinggeneral',
    // 'css/subpixelfont',
    // 'css/supports',
    // 'css/target',
    // 'css/textalignlast',
    // 'css/textshadow',
    // 'css/transforms',
    // 'css/transformslevel2',
    'css/transforms3d',
    // 'css/transformstylepreserve3d',
    // 'css/transitions',
    // 'css/userselect',
    // 'css/valid',
    // 'css/variablefonts',
    // 'css/vhunit',
    // 'css/vmaxunit',
    // 'css/vminunit',
    // 'css/vwunit',
    // 'css/will-change',
    // 'css/wrapflow',
    // 'custom-protocol-handler',
    // 'customevent',
    // 'dart',
    // 'dataview-api',
    // 'dom/classlist',
    // 'dom/createElement-attrs',
    // 'dom/dataset',
    // 'dom/documentfragment',
    // 'dom/hidden',
    // 'dom/microdata',
    // 'dom/mutationObserver',
    // 'dom/passiveeventlisteners',
    // 'elem/bdi',
    // 'elem/datalist',
    // 'elem/details',
    // 'elem/output',
    // 'elem/picture',
    // 'elem/progress-meter',
    // 'elem/ruby',
    // 'elem/template',
    // 'elem/time',
    // 'elem/track',
    // 'elem/unknown',
    // 'emoji',
    // 'es5/array',
    // 'es5/date',
    // 'es5/function',
    'es5/object',
    // 'es5/specification',
    // 'es5/strictmode',
    // 'es5/string',
    // 'es5/syntax',
    // 'es5/undefined',
    // 'es6/array',
    // 'es6/collections',
    // 'es6/contains',
    // 'es6/generators',
    // 'es6/math',
    // 'es6/number',
    // 'es6/object',
    // 'es6/promises',
    // 'es6/string',
    // 'event/deviceorientation-motion',
    // 'event/oninput',
    // 'eventlistener',
    // 'exif-orientation',
    // 'file/api',
    // 'file/filesystem',
    // 'flash',
    // 'forms/capture',
    // 'forms/fileinput',
    // 'forms/fileinputdirectory',
    // 'forms/formattribute',
    // 'forms/inputnumber-l10n',
    // 'forms/placeholder',
    // 'forms/requestautocomplete',
    // 'forms/validation',
    'fullscreen-api',
    // 'gamepad',
    // 'geolocation',
    // 'hashchange',
    // 'hiddenscroll',
    'history',
    // 'htmlimports',
    // 'ie8compat',
    // 'iframe/sandbox',
    // 'iframe/seamless',
    // 'iframe/srcdoc',
    // 'img/apng',
    // 'img/crossorigin',
    // 'img/jpeg2000',
    // 'img/jpegxr',
    // 'img/sizes',
    // 'img/srcset',
    // 'img/webp',
    // 'img/webp-alpha',
    // 'img/webp-animation',
    // 'img/webp-lossless',
    // 'indexeddb',
    // 'indexeddbblob',
    // 'input',
    // 'input/formaction',
    // 'input/formenctype',
    // 'input/formmethod',
    // 'input/formtarget',
    // 'inputsearchevent',
    // 'inputtypes',
    // 'intl',
    'json',
    // 'ligatures',
    // 'lists-reversed',
    // 'mathml',
    // 'mediaquery/hovermq',
    // 'mediaquery/pointermq',
    // 'messagechannel',
    // 'network/beacon',
    // 'network/connection',
    // 'network/eventsource',
    // 'network/fetch',
    // 'network/xhr-responsetype',
    // 'network/xhr-responsetype-arraybuffer',
    // 'network/xhr-responsetype-blob',
    // 'network/xhr-responsetype-document',
    // 'network/xhr-responsetype-json',
    // 'network/xhr-responsetype-text',
    // 'network/xhr2',
    // 'notification',
    // 'pagevisibility-api',
    // 'performance',
    // 'pointerevents',
    // 'pointerlock-api',
    // 'postmessage',
    // 'proximity',
    // 'queryselector',
    // 'quota-management-api',
    // 'requestanimationframe',
    // 'script/async',
    // 'script/defer',
    // 'serviceworker',
    // 'speech/speech-recognition',
    // 'speech/speech-synthesis',
    // 'storage/localstorage',
    // 'storage/sessionstorage',
    // 'storage/websqldatabase',
    // 'style/scoped',
    'svg',
    // 'svg/asimg',
    // 'svg/clippaths',
    // 'svg/filters',
    // 'svg/foreignobject',
    // 'svg/inline',
    // 'svg/smil',
    // 'templatestrings',
    // 'textarea/maxlength',
    // 'touchevents',
    // 'typed-arrays',
    // 'unicode',
    // 'unicode-range',
    // 'url/bloburls',
    // 'url/data-uri',
    // 'url/parser',
    // 'url/urlsearchparams',
    // 'userdata',
    // 'vibration',
    // 'video',
    // 'video/autoplay',
    // 'video/crossorigin',
    // 'video/loop',
    // 'video/preload',
    // 'vml',
    // 'web-intents',
    // 'webanimations',
    // 'webgl',
    // 'webgl/extensions',
    // 'webrtc/datachannel',
    // 'webrtc/getusermedia',
    // 'webrtc/peerconnection',
    // 'websockets',
    // 'websockets/binary',
    // 'window/framed',
    // 'workers/blobworkers',
    // 'workers/dataworkers',
    // 'workers/sharedworkers',
    // 'workers/transferables',
    // 'workers/webworkers',
    // 'xdomainrequest'
  ]
}
