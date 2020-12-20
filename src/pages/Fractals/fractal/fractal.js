export const drawCanvas = (canvas, context, depth, color, animationActive) => {
  context.strokeStyle = color;
  console.log(depth);
  const center = {
    x: canvas.width / 2.0,
    y: canvas.height / 2.0,
  };

  // constants
  const sqrt2 = Math.sqrt(2);
  const len = canvas.width / sqrt2 / sqrt2;

  // recursive func
  const hTree = (point, len, depth) => {
    if (depth === 0) {
      return;
    }

    // draw horizontal line
    const h1 = { x: point.x - len / 2.0, y: point.y };
    const h2 = { x: point.x + len / 2.0, y: point.y };
    drawLine(h1, h2);

    // draw vertical lines
    len = len / sqrt2;

    const v1 = { x: h1.x, y: h1.y - len / 2.0 };
    const v2 = { x: h1.x, y: h1.y + len / 2.0 };
    drawLine(v1, v2);

    const v3 = { x: h2.x, y: h2.y - len / 2.0 };
    const v4 = { x: h2.x, y: h2.y + len / 2.0 };
    drawLine(v3, v4);

    // compute new length, depth
    depth--;
    len = len / sqrt2;

    // recurse recurse recurse recurse
    hTree(v1, len, depth);
    hTree(v2, len, depth);
    hTree(v3, len, depth);
    hTree(v4, len, depth);
  };

  // line helper
  const drawLine = (from, to) => {
    if (animationActive) {
      setTimeout(() => {
        context.beginPath();
        context.moveTo(from.x, from.y);
        context.lineTo(to.x, to.y);
        context.stroke();
      }, 2000);
    } else {
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(to.x, to.y);
      context.stroke();
    }
  };

  // paint helper
  const paint = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);

    hTree(center, len, depth);
  };

  // fire away
  paint();
};

let depth = 2;

export const drawCanvas2 = (
  canvas1,
  context1,
  depth1,
  color,
  animationActive
) => {
  context1.strokeStyle = "#00386B";

  const center1 = {
    x: canvas1.width / 2.0,
    y: canvas1.height / 2.0,
  };

  const len1 = canvas1.height / 2;

  const paint1 = () => {
    // if (animationActive) {
    //   setTimeout(() => {
    //     context1.clearRect(0, 0, canvas1.width, canvas1.height);
    //     tSquare(center1, len1, depth1);
    //   }, 4000);
    // } else {
    //   context1.clearRect(0, 0, canvas1.width, canvas1.height);
    //   tSquare(center1, len1, depth1);
    // }

    context1.clearRect(0, 0, canvas1.width, canvas1.height);
    tSquare(center1, len1, depth1);
  };

  const tSquare = (point, length1, depth) => {
    if (depth === 0) {
      return;
    }

    // draw central square
    context1.fillStyle = color;
    if (animationActive) {
      setTimeout(() => {
        context1.fillRect(
          point.x - length1 / 2,
          point.y - length1 / 2,
          length1,
          length1
        );
      }, 2000);
    } else {
      context1.fillRect(
        point.x - length1 / 2,
        point.y - length1 / 2,
        length1,
        length1
      );
    }
    depth--;
    length1 = length1 / 2;

    var v1 = { x: point.x - length1, y: point.y - length1 };
    var v2 = { x: point.x + length1, y: point.y + length1 };

    var v3 = { x: point.x - length1, y: point.y + length1 };
    var v4 = { x: point.x + length1, y: point.y - length1 };
    // recurse recurse recurse recurse

    tSquare(v1, length1, depth);
    tSquare(v2, length1, depth);
    tSquare(v3, length1, depth);
    tSquare(v4, length1, depth);
  };
  // window.requestAnimationFrame();
  paint1();

  // setTimeout(() =>, 2000);
};
