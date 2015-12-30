Application = do ->

  ctx = undefined
  imgData = undefined
  pix = undefined

  init = ->
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    canvas.width = WIDTH = window.outerWidth
    canvas.height = HEIGHT = window.outerHeight
    ctx.fillStyle = 'white'
    ctx.fillRect 0, 0, WIDTH, HEIGHT
    ctx.fill()
    imgData = ctx.getImageData(0, 0, WIDTH, HEIGHT)
    pix = imgData.data
    flickerInterval = setInterval(flickering, 30)
    return

  flickering = ->
    i = 0
    while i < pix.length
      color = Math.random() * 355 + 50
      pix[i] = color
      pix[i + 1] = color
      pix[i + 2] = color
      i += 6
    ctx.putImageData imgData, 0, 0
    return

  { init: init }

Application.init()
