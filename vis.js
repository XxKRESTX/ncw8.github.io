
const strawHatIQ = [
    { name: "Robin", value: 98, color: "#6c5ce7" },
    { name: "Chopper", value: 92, color: "#6c5ce7" },
    { name: "Nami", value: 89, color: "#00cec9" },
    { name: "Franky", value: 85, color: "#00cec9" },
    { name: "Sanji", value: 80, color: "#00cec9" },
    { name: "Usopp", value: 72, color: "#fab1a0" },
    { name: "Brook", value: 64, color: "#fab1a0" },
    { name: "Luffy", value: 20, color: "#ff7675" },
    { name: "Zoro", value: 10, color: "#ff7675" }
];

const config = {
    width: 600,
    height: 450,
    margin: { top: 40, right: 50, bottom: 40, left: 120 },
    barHeight: 30,
    barGap: 10,
    maxValue: 100
};

function createBarChart(containerId, data, chartConfig) {
    const { width, height, margin, barHeight, barGap, maxValue } = chartConfig;
    const chartWidth = width - margin.left - margin.right;
    

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
    

    const yAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    yAxis.setAttribute("x1", margin.left);
    yAxis.setAttribute("y1", margin.top);
    yAxis.setAttribute("x2", margin.left);
    yAxis.setAttribute("y2", height - margin.bottom);
    yAxis.setAttribute("stroke", "#333");
    yAxis.setAttribute("stroke-width", "2");
    svg.appendChild(yAxis);
    

    const xAxis = document.createElementNS("http://www.w3.org/2000/svg", "line");
    xAxis.setAttribute("x1", margin.left);
    xAxis.setAttribute("y1", height - margin.bottom);
    xAxis.setAttribute("x2", width - margin.right);
    xAxis.setAttribute("y2", height - margin.bottom);
    xAxis.setAttribute("stroke", "#333");
    xAxis.setAttribute("stroke-width", "2");
    svg.appendChild(xAxis);
    
    const xLabels = [0, 50, 100];
    xLabels.forEach(val => {
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
        const xPos = margin.left + (val / maxValue) * chartWidth;
        label.setAttribute("x", xPos);
        label.setAttribute("y", height - margin.bottom + 20);
        label.setAttribute("text-anchor", "middle");
        label.textContent = val;
        svg.appendChild(label);
    });
    
    data.forEach((item, index) => {
        const y = margin.top + index * (barHeight + barGap);
        const barWidth = (item.value / maxValue) * chartWidth;
        
        const nameLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        nameLabel.setAttribute("x", margin.left - 10);
        nameLabel.setAttribute("y", y + barHeight / 2 + 5);
        nameLabel.setAttribute("text-anchor", "end");
        nameLabel.textContent = item.name;
        svg.appendChild(nameLabel);
        
        const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bar.setAttribute("x", margin.left + 2);
        bar.setAttribute("y", y);
        bar.setAttribute("width", barWidth);
        bar.setAttribute("height", barHeight);
        bar.setAttribute("fill", item.color);
        bar.setAttribute("rx", "4");
        bar.style.transition = "width 0.5s ease";
        svg.appendChild(bar);
        
        const valueLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        valueLabel.setAttribute("x", margin.left + barWidth + 8);
        valueLabel.setAttribute("y", y + barHeight / 2 + 5);
        valueLabel.textContent = item.value;
        svg.appendChild(valueLabel);
    });
    
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(svg);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    createBarChart("bar-chart", strawHatIQ, config);
});
