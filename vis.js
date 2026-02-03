
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

function createStrawHat(containerId, size = 100) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", "0 0 100 100");
    
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "50");
    circle.setAttribute("cy", "50");
    circle.setAttribute("r", "40");
    circle.setAttribute("fill", "yellow");
    svg.appendChild(circle);
    
    const topRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    topRect.setAttribute("x", "30");
    topRect.setAttribute("y", "20");
    topRect.setAttribute("width", "40");
    topRect.setAttribute("height", "10");
    topRect.setAttribute("fill", "brown");
    svg.appendChild(topRect);
    
    const leftRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftRect.setAttribute("x", "20");
    leftRect.setAttribute("y", "30");
    leftRect.setAttribute("width", "10");
    leftRect.setAttribute("height", "30");
    leftRect.setAttribute("fill", "brown");
    svg.appendChild(leftRect);
    
    const rightRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightRect.setAttribute("x", "70");
    rightRect.setAttribute("y", "30");
    rightRect.setAttribute("width", "10");
    rightRect.setAttribute("height", "30");
    rightRect.setAttribute("fill", "brown");
    svg.appendChild(rightRect);
    
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(svg);
    }
}

function createGundam(containerId, size = 200) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("viewBox", "0 0 200 250");
    
    // Head
    const head = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    head.setAttribute("x", "80");
    head.setAttribute("y", "20");
    head.setAttribute("width", "40");
    head.setAttribute("height", "30");
    head.setAttribute("fill", "#2c3e50");
    head.setAttribute("stroke", "#34495e");
    head.setAttribute("stroke-width", "2");
    svg.appendChild(head);
    
    // Head antenna
    const antenna = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    antenna.setAttribute("x", "95");
    antenna.setAttribute("y", "10");
    antenna.setAttribute("width", "10");
    antenna.setAttribute("height", "15");
    antenna.setAttribute("fill", "#e74c3c");
    svg.appendChild(antenna);
    
    // Eyes
    const leftEye = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftEye.setAttribute("x", "85");
    leftEye.setAttribute("y", "30");
    leftEye.setAttribute("width", "12");
    leftEye.setAttribute("height", "8");
    leftEye.setAttribute("fill", "#3498db");
    svg.appendChild(leftEye);
    
    const rightEye = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightEye.setAttribute("x", "103");
    rightEye.setAttribute("y", "30");
    rightEye.setAttribute("width", "12");
    rightEye.setAttribute("height", "8");
    rightEye.setAttribute("fill", "#3498db");
    svg.appendChild(rightEye);
    
    // Torso
    const torso = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    torso.setAttribute("x", "75");
    torso.setAttribute("y", "50");
    torso.setAttribute("width", "50");
    torso.setAttribute("height", "60");
    torso.setAttribute("fill", "#ecf0f1");
    torso.setAttribute("stroke", "#bdc3c7");
    torso.setAttribute("stroke-width", "2");
    svg.appendChild(torso);
    
    // Chest detail
    const chestDetail = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    chestDetail.setAttribute("x", "90");
    chestDetail.setAttribute("y", "60");
    chestDetail.setAttribute("width", "20");
    chestDetail.setAttribute("height", "25");
    chestDetail.setAttribute("fill", "#e74c3c");
    svg.appendChild(chestDetail);
    
    // Left shoulder
    const leftShoulder = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftShoulder.setAttribute("x", "50");
    leftShoulder.setAttribute("y", "50");
    leftShoulder.setAttribute("width", "25");
    leftShoulder.setAttribute("height", "20");
    leftShoulder.setAttribute("fill", "#3498db");
    leftShoulder.setAttribute("stroke", "#2980b9");
    leftShoulder.setAttribute("stroke-width", "2");
    svg.appendChild(leftShoulder);
    
    // Right shoulder
    const rightShoulder = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightShoulder.setAttribute("x", "125");
    rightShoulder.setAttribute("y", "50");
    rightShoulder.setAttribute("width", "25");
    rightShoulder.setAttribute("height", "20");
    rightShoulder.setAttribute("fill", "#3498db");
    rightShoulder.setAttribute("stroke", "#2980b9");
    rightShoulder.setAttribute("stroke-width", "2");
    svg.appendChild(rightShoulder);
    
    // Left arm
    const leftArm = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftArm.setAttribute("x", "55");
    leftArm.setAttribute("y", "70");
    leftArm.setAttribute("width", "15");
    leftArm.setAttribute("height", "50");
    leftArm.setAttribute("fill", "#ecf0f1");
    leftArm.setAttribute("stroke", "#bdc3c7");
    leftArm.setAttribute("stroke-width", "1");
    svg.appendChild(leftArm);
    
    // Right arm
    const rightArm = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightArm.setAttribute("x", "130");
    rightArm.setAttribute("y", "70");
    rightArm.setAttribute("width", "15");
    rightArm.setAttribute("height", "50");
    rightArm.setAttribute("fill", "#ecf0f1");
    rightArm.setAttribute("stroke", "#bdc3c7");
    rightArm.setAttribute("stroke-width", "1");
    svg.appendChild(rightArm);
    
    // Waist
    const waist = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    waist.setAttribute("x", "85");
    waist.setAttribute("y", "110");
    waist.setAttribute("width", "30");
    waist.setAttribute("height", "20");
    waist.setAttribute("fill", "#3498db");
    waist.setAttribute("stroke", "#2980b9");
    waist.setAttribute("stroke-width", "1");
    svg.appendChild(waist);
    
    // Left leg
    const leftLeg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftLeg.setAttribute("x", "80");
    leftLeg.setAttribute("y", "130");
    leftLeg.setAttribute("width", "18");
    leftLeg.setAttribute("height", "70");
    leftLeg.setAttribute("fill", "#ecf0f1");
    leftLeg.setAttribute("stroke", "#bdc3c7");
    leftLeg.setAttribute("stroke-width", "2");
    svg.appendChild(leftLeg);
    
    // Right leg
    const rightLeg = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightLeg.setAttribute("x", "102");
    rightLeg.setAttribute("y", "130");
    rightLeg.setAttribute("width", "18");
    rightLeg.setAttribute("height", "70");
    rightLeg.setAttribute("fill", "#ecf0f1");
    rightLeg.setAttribute("stroke", "#bdc3c7");
    rightLeg.setAttribute("stroke-width", "2");
    svg.appendChild(rightLeg);
    
    // Left foot
    const leftFoot = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    leftFoot.setAttribute("x", "75");
    leftFoot.setAttribute("y", "200");
    leftFoot.setAttribute("width", "25");
    leftFoot.setAttribute("height", "15");
    leftFoot.setAttribute("fill", "#2c3e50");
    leftFoot.setAttribute("stroke", "#34495e");
    leftFoot.setAttribute("stroke-width", "2");
    svg.appendChild(leftFoot);
    
    // Right foot
    const rightFoot = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rightFoot.setAttribute("x", "100");
    rightFoot.setAttribute("y", "200");
    rightFoot.setAttribute("width", "25");
    rightFoot.setAttribute("height", "15");
    rightFoot.setAttribute("fill", "#2c3e50");
    rightFoot.setAttribute("stroke", "#34495e");
    rightFoot.setAttribute("stroke-width", "2");
    svg.appendChild(rightFoot);
    
    const container = document.getElementById(containerId);
    if (container) {
        container.appendChild(svg);
    }
}

const config = {
    width: 600,
    height: 450,
    margin: { top: 40, right: 50, bottom: 40, left: 120 },
    barHeight: 30,
    barGap: 10,
    maxValue: 100
};

document.addEventListener("DOMContentLoaded", () => {
    createBarChart("bar-chart", strawHatIQ, config);
    createStrawHat("straw-hat", 150);
    createGundam("gundam", 200);
});
