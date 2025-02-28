
// const canvas = document.getElementById('graphCanvas');
// // getContext('2d') is a built-in method that returns a drawing context — basically, an object containing all the 
// // methods and properties you need to draw shapes, lines, text, and more on the canvas.
// const ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 500;

// let nodes = [];
// let edges = [];
// let isDirected = true;



// // Graph generation.
// // The goal of this function is to:
// // Generate nodes and edges for a graph (small or large).
// // Randomly position the nodes on the canvas.
// // Randomly create edges between nodes.
// // Draw the graph using the drawGraph() function.
// function generateGraph(size) {
//     nodes = [];
//     edges = [];
//     const nodeCount = size === 'small' ? 5 : 10;

//     // Generate nodes
//     // Genrating Node each having unique id and random x,y Coordinates.
//     for (let i = 0; i < nodeCount; i++) {
//         nodes.push({
//             id: i,
//             x: Math.random() * (canvas.width - 100) + 50,
//             y: Math.random() * (canvas.height - 100) + 50
//         });
//     }

//     // Ensure at least a connected component
//     for (let i = 0; i < nodeCount - 1; i++) {
//         edges.push([i, i + 1]); // Connect node i to i+1
//         if (!isDirected) {
//             edges.push([i + 1, i]); // Undirected edge
//         }
//     }
//     //Generating Edges.
//     for (let i = 0; i < nodeCount; i++) {
//         let target = Math.floor(Math.random() * nodeCount);
//          //This target!=i ensure ki khud hi node na connect ho.
//         if (target !== i && !edges.some(e => (e[0] === i && e[1] === target))) {
//             edges.push([i, target]);
//              //If the grapg is Undirected add Reverse edge too.
//             if (!isDirected) {
//                 edges.push([target, i]);
//             }
//         }
//     }

//     drawGraph();
// }












// function drawGraph() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawEdges();
//     drawNodes();
// }

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

// function drawEdges() {
//     edges.forEach(edge => {
//         const nodeA = nodes[edge[0]];
//         const nodeB = nodes[edge[1]];

//         ctx.beginPath();
//         ctx.moveTo(nodeA.x, nodeA.y);
//         ctx.lineTo(nodeB.x, nodeB.y);
//         ctx.strokeStyle = 'gray';
//         ctx.stroke();

//         if (isDirected) {
//             drawArrow(nodeA, nodeB);
//         }
//     });
// }

// function drawArrow(nodeA, nodeB) {
//     const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
//     const arrowSize = 10;

//     ctx.beginPath();
//     ctx.moveTo(nodeB.x, nodeB.y);
//     ctx.lineTo(
//         nodeB.x - arrowSize * Math.cos(angle - Math.PI / 6),
//         nodeB.y - arrowSize * Math.sin(angle - Math.PI / 6)
//     );
//     ctx.stroke();
// }

// // BFS Traversal
// async function bfsTraversal(startNode) {
//     if (startNode < 0 || startNode >= nodes.length) {
//         alert('Invalid start node!');
//         return;
//     }

//     let visited = new Array(nodes.length).fill(false);
//     let queue = [startNode];
//     let result = [];

//     visited[startNode] = true;

//     while (queue.length > 0) {
//         let current = queue.shift();
//         result.push(current);
//         highlightNode(current, 'blue');
//         await sleep(1000); 

//         edges.forEach(edge => {
//             if (edge[0] === current && !visited[edge[1]]) {
//                 visited[edge[1]] = true;
//                 queue.push(edge[1]);
//                 highlightEdge(current, edge[1]);
//             }
//         });
//     }

//     document.getElementById('bfsResult').textContent = 'Traversal Order: ' + result.join(' → ');
// }

// // Highlight node during traversal
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

// // Highlight edge during traversal
// function highlightEdge(nodeAId, nodeBId) {
//     const nodeA = nodes[nodeAId];
//     const nodeB = nodes[nodeBId];

//     ctx.beginPath();
//     ctx.moveTo(nodeA.x, nodeA.y);
//     ctx.lineTo(nodeB.x, nodeB.y);
//     ctx.strokeStyle = 'yellow';
//     ctx.lineWidth = 3;
//     ctx.stroke();
//     ctx.lineWidth = 1;
// }

// // Utility for delays
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Event listeners
// document.getElementById('runBFS').addEventListener('click', () => {
//     const startNode = parseInt(document.getElementById('startNode').value);
//     bfsTraversal(startNode);
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

// generateGraph('small');


















// const canvas = document.getElementById('graphCanvas');
// // getContext('2d') is a built-in method that returns a drawing context — 
// // basically, an object containing all the methods and properties you need to draw shapes, lines, text, and more on the canvas.
// const ctx = canvas.getContext('2d');

// canvas.width = 800;
// canvas.height = 500;

// let nodes = []; // Array to store all nodes in the graph
// let edges = []; // Array to store all edges in the graph
// let isDirected = true; // Boolean to check if graph is directed or undirected

// // Utility function for delays — used for animations during traversal
// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// // Graph generation.
// // The goal of this function is to:
// // 1. Generate nodes and edges for a graph (small or large).
// // 2. Randomly position the nodes on the canvas.
// // 3. Randomly create edges between nodes.
// // 4. Draw the graph using the drawGraph() function.
// function generateGraph(size) {
//     nodes = [];
//     edges = [];
//     const nodeCount = size === 'small' ? 5 : 10;

//     // Generate nodes
//     // Each node has a unique id and random (x, y) coordinates
//     for (let i = 0; i < nodeCount; i++) {
//         nodes.push({
//             id: i,
//             x: Math.random() * (canvas.width - 100) + 50,
//             y: Math.random() * (canvas.height - 100) + 50
//         });
//     }

//     // Ensure at least a connected component (basic path from node 0 to nodeCount - 1)
//     for (let i = 0; i < nodeCount - 1; i++) {
//         edges.push([i, i + 1]); // Connect node i to i+1
//         if (!isDirected) {
//             edges.push([i + 1, i]); // Add reverse edge if graph is undirected
//         }
//     }

//     // Add additional random edges
//     for (let i = 0; i < nodeCount; i++) {
//         let target = Math.floor(Math.random() * nodeCount);
//         // Ensure self-loops are not allowed and edges are not duplicated
//         if (target !== i && !edges.some(e => e[0] === i && e[1] === target)) {
//             edges.push([i, target]);
//             if (!isDirected) {
//                 edges.push([target, i]);
//             }
//         }
//     }

//     drawGraph();
// }

// // Draw the entire graph: calls both node and edge drawing functions
// function drawGraph() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
//     drawEdges();
//     drawNodes();
// }

// // Draw the nodes (circles with labels)
// function drawNodes() {
//     nodes.forEach(node => {
//         ctx.beginPath();
//         ctx.arc(node.x, node.y, 20, 0, Math.PI * 2); // Draw a circle for each node
//         ctx.fillStyle = 'white'; // Node background color
//         ctx.fill();
//         ctx.stroke(); // Node border
//         ctx.fillStyle = 'black'; // Node text color
//         ctx.fillText(node.id, node.x - 5, node.y + 5); // Display node id in the center
//     });
// }

// // Draw edges between nodes
// function drawEdges() {
//     edges.forEach(edge => {
//         const nodeA = nodes[edge[0]];
//         const nodeB = nodes[edge[1]];
//         drawLineWithArrow(nodeA, nodeB, isDirected); // Draw lines with or without arrows based on graph type
//     });
// }

// // Draw lines for edges — with or without arrowheads depending on graph type
// function drawLineWithArrow(nodeA, nodeB, directed = false) {
//     const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x); // Calculate angle between nodes
//     const arrowSize = 10; // Arrow size

//     // Adjust line to stop at the node's edge (circle radius is 20)
//     const startX = nodeA.x + 20 * Math.cos(angle);
//     const startY = nodeA.y + 20 * Math.sin(angle);
//     const endX = nodeB.x - 20 * Math.cos(angle);
//     const endY = nodeB.y - 20 * Math.sin(angle);

//     // Draw the edge (line)
//     ctx.beginPath();
//     ctx.moveTo(startX, startY);
//     ctx.lineTo(endX, endY);
//     ctx.strokeStyle = 'gray';
//     ctx.stroke();

//     // Draw arrowhead if the graph is directed
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
//         ctx.fill(); // Arrowhead fill
//     }
// }

// // BFS Traversal
// // The goal of this function is to:
// // 1. Perform BFS starting from a given node.
// // 2. Highlight visited nodes and edges.
// // 3. Display the order of traversal.
// async function bfsTraversal(startNode) {
//     if (startNode < 0 || startNode >= nodes.length) {
//         alert('Invalid start node!');
//         return;
//     }

//     let visited = new Array(nodes.length).fill(false); // Track visited nodes
//     let queue = [startNode]; // BFS queue
//     let result = []; // Store traversal order

//     visited[startNode] = true; // Mark start node as visited

//     while (queue.length > 0) {
//         let current = queue.shift(); // Dequeue the first node
//         result.push(current); // Add to traversal result
//         highlightNode(current, 'blue'); // Highlight current node
//         await sleep(1000); // Wait for 1 second

//         // Explore all neighbors (edges) of the current node
//         edges.forEach(edge => {
//             if (edge[0] === current && !visited[edge[1]]) {
//                 visited[edge[1]] = true;
//                 queue.push(edge[1]); // Add neighbor to queue
//                 highlightEdge(current, edge[1]); // Highlight edge
//             }
//         });
//     }

//     // Display traversal order
//     document.getElementById('bfsResult').textContent = 'Traversal Order: ' + result.join(' → ');
// }

// // Highlight nodes during traversal
// function highlightNode(nodeId, color) {
//     const node = nodes[nodeId];
//     ctx.beginPath();
//     ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
//     ctx.fillStyle = color; // Change node color
//     ctx.fill();
//     ctx.stroke();
//     ctx.fillStyle = 'white';
//     ctx.fillText(node.id, node.x - 5, node.y + 5); // Keep node id visible
// }

// // Highlight edges during traversal
// function highlightEdge(nodeAId, nodeBId) {
//     const nodeA = nodes[nodeAId];
//     const nodeB = nodes[nodeBId];

//     drawLineWithArrow(nodeA, nodeB, isDirected); // Redraw edge with highlight
// }

// // Event listeners
// document.getElementById('runBFS').addEventListener('click', () => {
//     const startNode = parseInt(document.getElementById('startNode').value);
//     bfsTraversal(startNode);
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












// Get the canvas element and its 2d drawing context
const canvas = document.getElementById('graphCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 500;

// Initialize empty arrays for nodes and edges, and a flag for directed graph
let nodes = [];
let edges = [];
let isDirected = true;
let animationSpeed = 1000; // Default speed for animation (in milliseconds)

// Utility function for delays — used for animations during traversal
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Graph generation function
function generateGraph(size) {
    nodes = [];
    edges = [];
    const nodeCount = size === 'small' ? 5 : 10; // Set number of nodes based on size parameter

    // Generate nodes with random positions
    for (let i = 0; i < nodeCount; i++) {
        nodes.push({
            id: i,
            x: Math.random() * (canvas.width - 100) + 50,
            y: Math.random() * (canvas.height - 100) + 50
        });
    }

    // Ensure at least a connected component (basic path from node 0 to nodeCount - 1)
    for (let i = 0; i < nodeCount - 1; i++) {
        edges.push([i, i + 1]); // Connect node i to i+1
        if (!isDirected) {
            edges.push([i + 1, i]); // Add reverse edge if graph is undirected
        }
    }

    // Add additional random edges
    for (let i = 0; i < nodeCount; i++) {
        let target = Math.floor(Math.random() * nodeCount);
        if (target !== i && !edges.some(e => e[0] === i && e[1] === target)) {
            edges.push([i, target]);
            if (!isDirected) {
                edges.push([target, i]);
            }
        }
    }

    drawGraph(); // Draw the graph on the canvas
}

// Draw the entire graph (nodes and edges)
function drawGraph() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas before redrawing
    drawEdges(); // Draw edges between nodes
    drawNodes(); // Draw the nodes
}

// Draw the nodes as circles with labels
function drawNodes() {
    nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 20, 0, Math.PI * 2); // Draw a circle for each node
        ctx.fillStyle = 'white'; // Node background color
        ctx.fill();
        ctx.stroke(); // Node border
        ctx.fillStyle = 'black'; // Node text color
        ctx.fillText(node.id, node.x - 5, node.y + 5); // Display node id in the center
    });
}

// Draw edges between nodes
function drawEdges() {
    edges.forEach(edge => {
        const nodeA = nodes[edge[0]];
        const nodeB = nodes[edge[1]];
        drawLineWithArrow(nodeA, nodeB, isDirected); // Draw lines with or without arrows based on graph type
    });
}

// Draw lines for edges with or without arrowheads depending on graph type
function drawLineWithArrow(nodeA, nodeB, directed = false) {
    const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x); // Calculate angle between nodes
    const arrowSize = 10; // Arrow size

    // Adjust line to stop at the node's edge (circle radius is 20)
    const startX = nodeA.x + 20 * Math.cos(angle);
    const startY = nodeA.y + 20 * Math.sin(angle);
    const endX = nodeB.x - 20 * Math.cos(angle);
    const endY = nodeB.y - 20 * Math.sin(angle);

    // Draw the edge (line)
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = 'gray'; // Color of the edge
    ctx.stroke();

    // Draw arrowhead if the graph is directed
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
        ctx.fillStyle = 'yellow'; // Arrow color
        ctx.fill(); // Fill the arrowhead
    }
}

// BFS Traversal function (Modified for better edge highlighting and animation speed)
async function bfsTraversal(startNode) {
    if (startNode < 0 || startNode >= nodes.length) {
        alert('Invalid start node!');
        return;
    }

    let visited = new Array(nodes.length).fill(false); // Track visited nodes
    let queue = [startNode]; // BFS queue
    let result = []; // Store traversal order

    visited[startNode] = true; // Mark start node as visited

    // Function to perform the BFS traversal with animation
    async function performBFS() {
        while (queue.length > 0) {
            let current = queue.shift(); // Dequeue the first node
            result.push(current); // Add to traversal result
            highlightNode(current, 'blue'); // Highlight current node
            await sleep(animationSpeed); // Wait for animation speed before moving to the next node

            // Explore all neighbors (edges) of the current node
            edges.forEach(edge => {
                if (edge[0] === current && !visited[edge[1]]) {
                    visited[edge[1]] = true;
                    queue.push(edge[1]); // Add neighbor to queue
                    highlightEdge(current, edge[1]); // Highlight edge during traversal
                }
            });
        }

        // Display traversal order after completion
        document.getElementById('bfsResult').textContent = 'Traversal Order: ' + result.join(' → ');
    }

    performBFS(); // Start BFS traversal with animation
}

// Highlight nodes during traversal
function highlightNode(nodeId, color) {
    const node = nodes[nodeId];
    ctx.beginPath();
    ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
    ctx.fillStyle = color; // Change node color
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = 'white';
    ctx.fillText(node.id, node.x - 5, node.y + 5); // Keep node id visible
}

// Highlight edges during traversal
function highlightEdge(nodeAId, nodeBId) {
    const nodeA = nodes[nodeAId];
    const nodeB = nodes[nodeBId];

    // Highlight edge by redrawing it with a distinct color
    ctx.beginPath();
    ctx.moveTo(nodeA.x, nodeA.y);
    ctx.lineTo(nodeB.x, nodeB.y);
    ctx.strokeStyle = 'yellow'; // Set highlight color for edges
    ctx.lineWidth = 3; // Make the highlighted edge thicker
    ctx.stroke();
    ctx.lineWidth = 1; // Reset line width after drawing

    // Redraw arrow if graph is directed
    if (isDirected) {
        drawArrow(nodeA, nodeB);
    }
}

// Draw arrowheads for directed graph
function drawArrow(nodeA, nodeB) {
    const angle = Math.atan2(nodeB.y - nodeA.y, nodeB.x - nodeA.x);
    const arrowSize = 10;

    ctx.beginPath();
    ctx.moveTo(nodeB.x, nodeB.y);
    ctx.lineTo(
        nodeB.x - arrowSize * Math.cos(angle - Math.PI / 6),
        nodeB.y - arrowSize * Math.sin(angle - Math.PI / 6)
    );
    ctx.lineTo(
        nodeB.x - arrowSize * Math.cos(angle + Math.PI / 6),
        nodeB.y - arrowSize * Math.sin(angle + Math.PI / 6)
    );
    ctx.closePath();
    ctx.fillStyle = 'yellow'; // Arrow color
    ctx.fill(); // Fill the arrowhead
}

// Event listeners for buttons and actions
document.getElementById('runBFS').addEventListener('click', () => {
    const startNode = parseInt(document.getElementById('startNode').value);
    bfsTraversal(startNode);
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
