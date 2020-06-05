import Graph from './graph.js';

const graph = new Graph({containerSelector: '.graph__container', cellSize: 10, gap: 3});
graph.render();