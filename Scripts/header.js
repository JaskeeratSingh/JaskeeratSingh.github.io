const media = [
"data:image/png;base64,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",
"data:image/png;base64,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",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABjCAYAAABt56XsAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAORJREFUeJzt2LFJBFEUheF/1hIMLEBTk63ADkSwAVFsxXbsQBNzBUuwA8012BUVFKP1jez3wUnmJQcuzMy7BQAAAAAAAAAAAAAAAAAAAMBmLKrL6q56lY3mqbqqdn8axkH1OIOi25bn6rSaPg9jf30wutw257yapvVkHqrDGG25U521+m4w3t5U3VRHg4uwNrV6fzETi9EF+MpAZsZAZmZR3Y4uwYedVkM5Hl2Eqq5dDOdluWj123tSvQwus+0uqvvPDywXx+Tb5eI76/e/y6/rdwAAAAAAAAAAAAAAAAAAAOCfeQNG9tskFlTYigAAAABJRU5ErkJggg==",
"data:image/png;base64,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",
"data:image/png;base64,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",
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+nhxg7wAAAzhJREFUeJzt3b1vjVEAx/Fvq61WExLhLkwaIgxisEnEQqyGDgYSk1hNYrHwH+ggMUj8BWKQSAyNlMRkIpGiBmnRiqqXvug1nPJ4bk/rufec2/tL/D5JI3l6z3nO9fXct0oPmJSuyLFRYGijF/IfGgGuNR7sidzwCNDf9uXYntjB7sixiTYvxILp2MFYEOsgBxHjIGIcRIyDiHEQMQ4ixkHEOIgYBxHjIGJiQWIfOFp+0Ysh9pf/GZgHFitM2gUMrDV5BcvAj5U/O60b2JIwfolwX6roA77HvhH7ech2oBeoV5h4ELgHHKi4kEavgWHgbYvjczoM3E8Yfwe4VPG2XcBXYK7xG7ErZKaJRfRQ7UpayyLwDnifMEcuk4nj58hwP1Kf1AeIX2XNnH9z4hpySV1Hludev8oS4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOIsZBxDiIGAcR4yBiHESMg4hxEDEOUqjye4rbzkEKPxPHZwnqIIWlxPH+vb2ZpQbJsjuqgxTmE8f3k+EqcZDCAmlXSQ3YmroIByksEbbqaNVeYGfqIhykkBqkBuxKXYSDFBaAqcQ5jqUuwkEKOYIMAztSJnCQwjxhc5kU+4ELKRM4SGEZGM8wzxXgfKuDHaTsZYY5+oFbwA3gaIXbl14qe4u8sgnCc0lfhrkuAueAR4TNz2aBL4QN17atfNUIF8Wp34McpGwSeA4cyjTfIHDyH7cpbRnoh6yyD8CTDpzzDwcpqxMeYjrGQVZ7TPqehi1zkNXGgbudOrmDxI0QXhFtOAeJewbc7MSJcwRJec3eS9rWre10FRjd6JOmvg+pA58Ib3paMYPG1t0xc8BZ4DYZPsVdR6lB6r/ObmCIsElxs//rYhPwDXhDeHesqgZcB84Q7mdus4R37dak08ADwg+x6hm+poCHwOW/T6L6+K3sOHACOAjsA3YTPiJZzzTwkfBZ2SvgBTAGPG3fMi2LX/RDdLgNJiRBAAAAAElFTkSuQmCC"].
map(m => PIXI.Texture.fromImage(m));


class Waaave {
  constructor() {
    this.container = null;
    this.sprite = null;
    this.app = null;
    this.bunny = null;
    this.interval = null;
    this.particles = [];
    this.init();
  }

  init() {
    clearInterval(this.interval);
    this.particles = [];

    this.app = new PIXI.Application($(window).width(), $(window).height()/1.4, {
      antialias: true,
      backgroundColor: 0xE4EAF1 });


    let amount = this.app.renderer instanceof PIXI.WebGLRenderer ? 100 : 5;
    if (amount == 5) {
      this.app.renderer.context.mozImageSmoothingEnabled = false;
      this.app.renderer.context.webkitImageSmoothingEnabled = false;
    }

    document.body.appendChild(this.app.view);
    var container = new PIXI.Container();
    this.app.stage.addChild(container);
    this.app.view.style['transform'] = 'translatez(0)';

    this.interval = setInterval(function () {
      this.particles.push(
      new Particle(this.app, container, {
        speed: 1 + Math.random() * 5 }));


    }.bind(this), 20);

  }
  update() {
    this.particles = this.particles.filter(function (p) {
      return p.move();
    });
    //requestAnimationFrame(this.update.bind(this));
    setTimeout(this.update.bind(this), (1/80)*1000);
  }


  resize() {
    $("canvas").remove();
    this.init();
  }}




class Particle {
  constructor(app, container, options) {
    this.app = app;
    this.container = container;
    this.destroy = false;
    this.a = [0.5, 1, 2, 0.3, 3][Math.floor(Math.random() * 4)];
    this.steps = $(window).width() / 8;
    this.rotation = Math.random() > 0.5 ? "-" : "+";
    this.scale = 0.5 * Math.random();
    this.siner = 100 * Math.random();
    this.speed = options.speed;
    this.progress = 0;
    this.texture = media[Math.floor(Math.random() * 8)];
    this.bounding = {
      x: $(window).width(),
      y: $(window).height() };


    this.behaviours();
    this.render();
  }

  behaviours() {
    $(window).on("resize", function () {
      this.destroy = true;
    }.bind(this));
  }

  render() {
    let x = this.progress;
    let y = this.app.renderer.height / 2 + this.siner + this.a * Math.sin(this.progress / this.steps) * 60;
    // Create a 5x5 grid of bunnies
    this.bunny = new PIXI.Sprite(this.texture);
    this.bunny.anchor.set(0.5);
    this.bunny.x = -50 + x;
    this.bunny.y = y;
    this.container.addChild(this.bunny);
  }

  move() {
    let x = this.progress;
    let y = this.app.renderer.height / 2 + this.siner + this.a * Math.sin(this.progress / this.steps) * 60;

    this.bunny.x = -50 + x;
    this.bunny.y = y;
    this.bunny.scale.x = this.scale;
    this.bunny.scale.y = this.scale;
    this.progress = this.progress + this.speed;
    this.bunny.rotation = this.rotation + this.radians(this.progress);
    //Destroy
    if (x > this.app.renderer.width + 100 || this.destroy == true) {
      this.container.removeChild(this.bunny);
      return false;
    } else {
      return true;
    }
  }

  radians(degrees) {
    return degrees * Math.PI / 180;
  }}


function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
    args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


let wave = new Waaave();
wave.update();

$(window).on("resize", debounce(function () {
  wave.resize();
}.bind(this), 200));