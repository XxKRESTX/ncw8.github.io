const chartData = [
  { percent: 0.80, color: '#ff4d4d' }, // Meat
  { percent: 0.15, color: '#ffcc00' }, // King
  { percent: 0.05, color: '#d2d2d2' }, // Logic
];

const svgEl = document.getElementById('luffyChart');
let cumulativePercent = 0;

function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

chartData.forEach(slice => {
  // 1. Calculate the start and end coordinates
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);
  cumulativePercent += slice.percent;
  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

  // 2. Decide if the arc should be "large" (more than 50%)
  const largeArcFlag = slice.percent > 0.5 ? 1 : 0;

  // 3. Create the Path String (Move, Arc, Line to center)
  const pathData = [
    `M ${startX} ${startY}`, // Move to start
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc to end
    `L 0 0`, // Line to center (0,0)
  ].join(' ');

  // 4. Create the SVG element and append it
  const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  pathEl.setAttribute('d', pathData);
  pathEl.setAttribute('fill', slice.color);
  svgEl.appendChild(pathEl);
});