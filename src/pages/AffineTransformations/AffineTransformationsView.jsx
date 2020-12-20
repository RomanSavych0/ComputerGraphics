import React, {useState, useRef, useEffect, useContext} from 'react';
import {AffineTransformationsContext} from '../../contexts/AffineTransformationsContext';
import {axisBottom, axisLeft, line, max, min, scaleLinear, select} from 'd3';
import {scale, rotate, compose, applyToPoint} from 'transformation-matrix';

const AffineTransformationsView = () => {
  const {properties} = useContext(AffineTransformationsContext);
  const ref = useRef();
  const requestId = useRef(0);
  const [points, setPoints] = useState([[0, 0], [0, 0], [0, 0], [0, 0]]);
  const [animating, setAnimating] = useState(false);
  const rotationPoint = useRef([0, 0]);
  const xScale = useRef(1);
  const yScale = useRef(1);
  const rotationInRadians = useRef(0);
  const startAnimationTime = useRef(0);
  const initialPoints = useRef([[0, 0], [0, 0], [0, 0], [0, 0]]);
  const animationTime = 3000;
  const pointsName = ['A', 'B', 'C'];

  const stopAnimation = () => {
    window.cancelAnimationFrame(requestId.current);
  };

  useEffect(() => {
    const {
      points: entryPoints,
      rotationInDegrees,
      rotationPoint: rp,
      xScale: xsc,
      yScale: ysc
    } = properties;

    rotationPoint.current = entryPoints[rp];
    rotationInRadians.current = rotationInDegrees / 180 * Math.PI;
    initialPoints.current = [...entryPoints, entryPoints[0]];
    xScale.current = xsc;
    yScale.current = ysc;

    setPoints(initialPoints.current);

    if (entryPoints.flat(2).filter(p => p !== 0).length) {
      if (animating) {
        setAnimating(false);
        stopAnimation();
      }

      if (rotationInRadians.current === 0 && xScale.current === 1 && yScale.current === 1) {

      } else {
        const timerId = setTimeout(() => {
          startAnimationTime.current = performance.now();

          setAnimating(true);
        }, 1000);

        return () => {
          clearTimeout(timerId);
        };
      }
    }
  }, [properties]);

  useEffect(() => {
    const svg = select(ref.current);

    const width = 600, height = 600;

    const x = points.map(p => p[0]);
    const y = points.map(p => p[1]);

    const xScale = scaleLinear().domain([min(x) - 3, max(x) + 3]).range([0, width]);
    const yScale = scaleLinear().domain([min(y) - 3, max(y) + 3]).range([height, 0]);

    const xAxis = axisBottom(xScale);
    const yAxis = axisLeft(yScale);

    const myLine = line()
      .x(([x, y]) => xScale(x))
      .y(([x, y]) => yScale(y));

    svg
      .style('overflow', 'visible')
      .attr('width', width)
      .attr('height', height)
      .selectAll('path')
      .data([points])
      .join('path')
      .attr('d', myLine)
      .attr('fill', 'none')
      .attr('stroke', 'blue');

    svg
      .select('.x-axis')
      .style('transform', `translateY(${height}px)`)
      .call(xAxis);

    svg
      .select('.y-axis')
      .call(yAxis);

    svg
      .select('.pointsLabels')
      .selectAll('text')
      .data(points)
      .join('text')
      .attr('x', (d) => xScale(d[0] + 0.2))
      .attr('y', (d) => yScale(d[1] - 0.2))
      .text((d, i) => pointsName[i]);

    const pos = [[width + 10, height], [0, -10]];
    const axesNames = ['X', 'Y'];

    svg
      .select('.axesLabels')
      .selectAll('text')
      .data(pos)
      .join('text')
      .attr('x', (d) => d[0])
      .attr('y', (d) => d[1])
      .text((d, i) => axesNames[i]);

  }, [points]);

  useEffect(() => {
    if (animating) {
      requestId.current = requestAnimationFrame(() => {
        let timeDifference = performance.now() - startAnimationTime.current;

        const rp = rotationPoint.current;
        const initPoints = initialPoints.current;
        const rotation = rotationInRadians.current;

        if (timeDifference > animationTime) {
          setAnimating(false);
          timeDifference = animationTime;
        }

        const partTime = timeDifference / animationTime;

        setPoints(prevPoints => (
          prevPoints.map((p, i) => {
            const initPoint = {
              x: initPoints[i][0],
              y: initPoints[i][1]
            };
            const matrix = compose(
              rotate(rotation * partTime, rp[0], rp[1]),
              scale((xScale.current - 1) * partTime + 1, (yScale.current - 1) * partTime + 1)
            );
            const {x, y} = applyToPoint(
              matrix, initPoint
            );

            return [x, y];
          })
        ));
      });

      return () => {
        stopAnimation();
      };
    }
  });

  return (
    <svg ref={ref} style={{padding: 40}}>
      <path/>
      <g className={'x-axis'}/>
      <g className={'y-axis'}/>
      <g className={'pointsLabels'}/>
      <g className={'axesLabels'}/>
    </svg>
  );
};

export default AffineTransformationsView;