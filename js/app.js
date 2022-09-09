
var pgb = $('#pgb');
pgb.ariaProgressbar();
var i = 0;
var int = setInterval(function() {
    if (i < 100) {
      i = i + 5;
      pgb.ariaProgressbar('update', i);
    } else {
      clearInterval(int);
    }
  }, 600);
  pgb.ariaProgressbar({
    progressClass: 'progress',
    progressBarClass: 'progress__bar',
    minVal: 0,
    maxVal: 100,
    textLabel: '{X} percent completed',
    destroyDelay: 300,
    destroyFadeOutSpeed: 300
  });
  


  var typed = new Typed('.container', {
    strings: ['<i>jQuery</i> Script.', 'A jQuery Plugin Website']
});


var typed = new Typed('.container', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'These are the default values...',
    ' And Im a Programmer||',
    'And Im a Designer|',
    'And Im a Freelancer|',
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 0,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 0,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html'
});
var typed = new Typed('.container', {
  /**
   * Before it begins typing
   * @param {Typed} self
   */
  onBegin: (self) => {},

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
});
// toggle the typing animation
typed.toggle();

// start the typing animation
typed.start();

// stop the typing animation
typed.stop();

// reset the typing animation


// destroy the instance
typed.de


// The document page (body)
$("html").niceScroll();  


$("#selector").niceScroll({
  // options here
}); 


$("#selector").niceScroll({

  // z-index
  zindex: "auto",

  // opacity when cursor is inactive
  cursoropacitymin: 0,

  // opacity when cursor is active
  cursoropacitymax: 1,

  // cursor color
  cursorcolor: "#424242",

  // cursor width
  cursorwidth: "6px",

  // cursor border properties
  cursorborder: "1px solid #fff",
  cursorborderradius: "5px",

  // animation speed of smooth scroll
  scrollspeed: 60,

  // scrolling speed with mouse wheel
  mousescrollstep: 8 * 3,

  // enable touch behavior
  touchbehavior: false,

  // use hardware accelerated scroll if supported
  hwacceleration: true,

  // use CSS transitions if supported
  usetransition: true,

  // enable zoom feature
  boxzoom: false,

  // double click to zoom
  dblclickzoom: true,

  // zoom via gestures
  gesturezoom: true,

  // displays "grab" icon
  grabcursorenabled: true,

  // true: hide when no scrolling
  // "cursor":only cursor hidden
  // false:do not hide,
  // "leave":hide only if pointer leaves content
  // "hidden":hide always
  // "scroll":how only on scroll       
  autohidemode: true,

  // background
  background: "",

  // auto resize iframe
  iframeautoresize: true,

  // min height of cursor
  cursorminheight: 32,

  // preserve native scroll behavior
  preservenativescrolling: true,

  // offset top/left for rail position
  railoffset: false,
  railhoffset: false,

  // enable scroll bouncing at the end of content as mobile-like
  bouncescroll: true,

  // enable page down scrolling when space bar has pressed
  spacebarenabled: true,

  // padding for rail bar
  railpadding: {
    top: 0,
    right: 0,
    left: 0,
    bottom: 0
  },

  // disable outline
  disableoutline: true,

  // enable horizontal scrolling
  horizrailenabled: true,

  // alignment of rail bar
  railalign: "right",
  railvalign: "bottom",

  // enable <a href="https://www.jqueryscript.net/tags.php?/3D/">3D</a> transforms
  enabletranslate3d: true,

  // enable mouse wheel
  enablemousewheel: true,

  // enable keyboard
  enablekeyboard: true,

  // enable smooth scroll
  smoothscroll: true,

  // click on rail make a scroll
  sensitiverail: true,

  // enable mouse caption lock API
  enablemouselockapi: true,

  // fixed height of cursor
  cursorfixedheight: false,

  // dead zone in pixels for direction lock activation
  directionlockdeadzone: 6,

  // set the delay in microseconds to fading out scrollbars
  hidecursordelay: 400,

  // detect bottom of content and let parent to scroll, as native scroll does
  nativeparentscrolling: true,

  // enable auto-scrolling of content when selection text
  enablescrollonselection: true,

  // overlow
  overflowx: true,
  overflowy: true,

  // drag speed
  cursordragspeed: 0.3,

  // RTL mode
  rtlmode: "auto",

  // drag cursor in touch / touchbehavior mode
  cursordragontouch: false,

  // it permits horizontal scrolling with mousewheel on horizontal only content, 
  // if false (vertical-only) mousewheel don't scroll horizontally, if value is auto detects two-axis mouse
  oneaxismousemode: "auto",

  // define custom path for boxmode icons
  scriptpath: getScriptPath(),

  // prevent scrolling on multitouch events
  preventmultitouchscrolling: true,

  // force MutationObserver disabled
  disablemutationobserver:false

}); 


// Get nicescroll object
$("#selector").getNiceScroll();

// Hide scrollbar
$("#selector").getNiceScroll().hide();

// Check for scrollbars resize
$("#selector").getNiceScroll().resize();

// Scroll to a position:
$("#selector").getNiceScroll(0).doScrollLeft(x, duration); // Scroll X Axis
$("#selector").getNiceScroll(0).doScrollTop(y, duration); // Scroll Y Axis