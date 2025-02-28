// const canvas = document.getElementById('graphCanvas');
// const ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 500;

// let nodes = [];
// let edges = [];
// let isDirected = true;

// // Sleep function for animations
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Graph generation (same as BFS)
// function generateGraph(size) {
//     nodes = [];
//     edges = [];
//     const nodeCount = size === 'small' ? 5 : 10;

//     for (let i = 0; i < nodeCount; i++) {
//         nodes.push({
//             id: i,
//             x: Math.random() * (canvas.width - 100) + 50,
//             y: Math.random() * (canvas.height - 100) + 50
//         });
//     }

//     for (let i = 0; i < nodeCount - 1; i++) {
//         edges.push([i, i + 1]);
//         if (!isDirected) {
//             edges.push([i + 1, i]);
//         }
//     }

//     for (let i = 0; i < nodeCount; i++) {
//         let target = Math.floor(Math.random() * nodeCount);
//         if (target !== i && !edges.some(e => e[0] === i && e[1] === target)) {
//             edges.push([i, target]);
//             if (!isDirected) {
//                 edges.push([target, i]);
//             }
//         }
//     }

//     drawGraph();
// }

// // Draw graph nodes and edges
// function drawGraph() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawEdges();
//     drawNodes();
// }

// // Draw nodes as circles
// function drawNodes() {
//     nodes.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
//         ctx.fillStyle = 'white';
//         ctx.fill();
//         ctx.stroke();
//         ctx.fillStyle = 'black';
//         ctx.fillText(node.id, node.x - 5, node.y + 5);
//     });
// }

// // Draw edges
// function drawEdges() {
//     edges.forEach(edge => {
//         const nodeA = nodes[edge[0]];
//         const nodeB = nodes[edge[1]];
//         drawLineWithArrow(nodeA, nodeB, isDirected);
//     });
// }

// // Draw lines with optional arrows
// function drawLineWithArrow(nodeA, nodeB, directed) {
//     const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
//     const arrowSize = 10;

//     const startX = nodeA.x + 20 * Math.cos(angle);
//     const startY = nodeA.y + 20 * Math.sin(angle);
//     const endX = nodeB.x - 20 * Math.cos(angle);
//     const endY = nodeB.y - 20 * Math.sin(angle);

//     ctx.beginPath();
//     ctx.moveTo(startX, startY);
//     ctx.lineTo(endX, endY);
//     ctx.strokeStyle = 'gray';
//     ctx.stroke();

//     if (directed) {
//         ctx.beginPath();
//         ctx.moveTo(endX, endY);
//         ctx.lineTo(
//             endX - arrowSize * Math.cos(angle - Math.PI / 6),
//             endY - arrowSize * Math.sin(angle - Math.PI / 6)
//         );
//         ctx.lineTo(
//             endX - arrowSize * Math.cos(angle + Math.PI / 6),
//             endY - arrowSize * Math.sin(angle + Math.PI / 6)
//         );
//         ctx.closePath();
//         ctx.fillStyle = 'yellow';
//         ctx.fill();
//     }
// }

// // DFS Traversal
// async function dfsTraversal(startNode) {
//     if (startNode < 0 || startNode >= nodes.length) {
//         alert('Invalid start node!');
//         return;
//     }

//     let visited = new Array(nodes.length).fill(false);
//     let result = [];

//     async function dfs(node) {
//         if (visited[node]) return;
//         visited[node] = true;
//         result.push(node);
//         highlightNode(node, 'red');
//         await sleep(1000);

//         edges.forEach(edge => {
//             if (edge[0] === node && !visited[edge[1]]) {
//                 highlightEdge(node, edge[1]);
//                 dfs(edge[1]);
//             }
//         });
//     }

//     await dfs(startNode);
//     document.getElementById('dfsResult').textContent = 'Traversal Order: ' + result.join(' → ');
// }

// // Highlight nodes and edges
// function highlightNode(nodeId, color) {
//     const node = nodes[nodeId];
//     ctx.beginPath();
//     ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
//     ctx.fillStyle = color;
//     ctx.fill();
//     ctx.stroke();
//     ctx.fillStyle = 'white';
//     ctx.fillText(node.id, node.x - 5, node.y + 5);
// }

// function highlightEdge(nodeAId, nodeBId) {
//     const nodeA = nodes[nodeAId];
//     const nodeB = nodes[nodeBId];
//     drawLineWithArrow(nodeA, nodeB, isDirected);
// }

// // Event listeners
// document.getElementById('runDFS').addEventListener('click', () => {
//     const startNode = parseInt(document.getElementById('startNode').value);
//     dfsTraversal(startNode);
// });

// document.getElementById('newGraph').addEventListener('click', () => generateGraph('small'));
// document.getElementById('smallGraph').addEventListener('click', () => generateGraph('small'));
// document.getElementById('largeGraph').addEventListener('click', () => generateGraph('large'));
// document.getElementById('resetGraph').addEventListener('click', drawGraph);

// document.getElementById('directed').addEventListener('click', () => {
//     isDirected = true;
//     drawGraph();
// });

// document.getElementById('undirected').addEventListener('click', () => {
//     isDirected = false;
//     drawGraph();
// });

// // Initial graph generation
// generateGraph('small');




const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 500;

let nodes = [];
let edges = [];
let isDirected = true;

// Sleep function for animations
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Graph generation (same as BFS)
function generateGraph(size) {
    nodes = [];
    edges = [];
    const nodeCount = size === 'small' ? 5 : 10;

    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            id: i,
            x: Math.random() * (canvas.width - 100) + 50,
            y: Math.random() * (canvas.height - 100) + 50
        });
    }

    for (let i = 0; i < nodeCount - 1; i++) {
        edges.push([i, i + 1]);
        if (!isDirected) {
            edges.push([i + 1, i]);
        }
    }

    for (let i = 0; i < nodeCount; i++) {
        let target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !edges.some(e => e[0] === i && e[1] === target)) {
            edges.push([i, target]);
            if (!isDirected) {
                edges.push([target, i]);
            }
        }
    }

    drawGraph();  // Draw the initial graph
}

// Draw graph nodes and edges
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas initially
    drawEdges();  // Draw edges first
    drawNodes();  // Draw nodes after edges
}

// Draw nodes as circles
function drawNodes() {
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.fillText(node.id, node.x - 5, node.y + 5);
    });
}

// Draw edges
function drawEdges() {
    edges.forEach(edge => {
        const nodeA = nodes[edge[0]];
        const nodeB = nodes[edge[1]];
        drawLineWithArrow(nodeA, nodeB, isDirected, 'gray');  // Default edge color is gray
    });
}

// Draw lines with optional arrows
function drawLineWithArrow(nodeA, nodeB, directed, color) {
    const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
    const arrowSize = 10;

    const startX = nodeA.x + 20 * Math.cos(angle);
    const startY = nodeA.y + 20 * Math.sin(angle);
    const endX = nodeB.x - 20 * Math.cos(angle);
    const endY = nodeB.y - 20 * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;  // Set the edge color dynamically
    ctx.stroke();

    if (directed) {
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(
            endX - arrowSize * Math.cos(angle - Math.PI / 6),
            endY - arrowSize * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
            endX - arrowSize * Math.cos(angle + Math.PI / 6),
            endY - arrowSize * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fillStyle = 'yellow';
        ctx.fill();
    }
}

// DFS Traversal
async function dfsTraversal(startNode) {
    if (startNode < 0 || startNode >= nodes.length) {
        alert('Invalid start node!');
        return;
    }

    let visited = new Array(nodes.length).fill(false);
    let result = [];

    async function dfs(node) {
        if (visited[node]) return;
        visited[node] = true;
        result.push(node);
        highlightNode(node, 'red');
        await sleep(1000);  // Wait for node highlight before moving

        // Traverse edges
        for (let edge of edges) {
            if (edge[0] === node && !visited[edge[1]]) {
                highlightEdge(node, edge[1]);
                await sleep(1000);  // Wait for edge highlight before moving to next node
                await dfs(edge[1]);  // Continue DFS recursively
            }
        }
    }

    await dfs(startNode);
    document.getElementById('dfsResult').textContent = 'Traversal Order: ' + result.join(' → ');
}

// Highlight nodes during traversal
function highlightNode(nodeId, color) {
    const node = nodes[nodeId];
    ctx.beginPath();
    ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fillText(node.id, node.x - 5, node.y + 5);
}

// Highlight edges during traversal (yellow edges with arrows)
function highlightEdge(nodeAId, nodeBId) {
    const nodeA = nodes[nodeAId];
    const nodeB = nodes[nodeBId];
    drawLineWithArrow(nodeA, nodeB, isDirected, 'yellow');  // Redraw edge with yellow color
}

// Event listeners
document.getElementById('runDFS').addEventListener('click', () => {
    const startNode = parseInt(document.getElementById('startNode').value);
    dfsTraversal(startNode);
});

document.getElementById('newGraph').addEventListener('click', () => generateGraph('small'));
document.getElementById('smallGraph').addEventListener('click', () => generateGraph('small'));
document.getElementById('largeGraph').addEventListener('click', () => generateGraph('large'));
document.getElementById('resetGraph').addEventListener('click', drawGraph);

document.getElementById('directed').addEventListener('click', () => {
    isDirected = true;
    drawGraph();
});

document.getElementById('undirected').addEventListener('click', () => {
    isDirected = false;
    drawGraph();
});

// Initial graph generation
generateGraph('small');
