var Application;

Application = (function() {
  var ctx, flickering, imgData, init, pix;
  ctx = void 0;
  imgData = void 0;
  pix = void 0;
  init = function() {
    var HEIGHT, WIDTH, canvas, flickerInterval;
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = WIDTH = window.outerWidth;
    canvas.height = HEIGHT = window.outerHeight;
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, WIDTH, HEIGHT);
    ctx.fill();
    imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT);
    pix = imgData.data;
    flickerInterval = setInterval(flickering, 30);
  };
  flickering = function() {
    var color, i;
    i = 0;
    while (i < pix.length) {
      color = Math.random() * 355 + 50;
      pix[i] = color;
      pix[i + 1] = color;
      pix[i + 2] = color;
      i += 6;
    }
    ctx.putImageData(imgData, 0, 0);
  };
  return {
    init: init
  };
})();

Application.init();
