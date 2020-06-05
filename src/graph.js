import Svg from './svg.js';
import Cell from './cell.js';

// Represents the contribution graph
export default class Graph{
    constructor(props){
        
        this.containerSelector = props.containerSelector || 'body';
        this.cellCize = props.cellSize || 10;

        this.gap = props.gap || 10;

        this.DOMELement = this.createElement();
    }

    createElement(){
        // Calculate width and height
        let _width = document.querySelector(this.containerSelector).clientWidth;
        const _height = 7 * (this.cellCize + this.gap);

        // Get number of possible cells
        const _numberOfCells = Math.floor(_width / (this.cellCize + this.gap));

        // Set width to fit graph
        _width = _numberOfCells * (this.cellCize + this.gap);

        // Create a new svg
        const _svg = new Svg({parentSelector: this.containerSelector, width: _width, height: _height, class: 'graph__svg'});
        
       
        
        // Create cells
        for(let i = 0; i < 7; i++){
            for(let j = 0; j < _numberOfCells; j++){
                new Cell({svgContainer: _svg, x: j * (this.cellCize + this.gap) , y: i * (this.cellCize + this.gap), date: '2020-02-03', count: 5, class: 'graph__cell'})
            }
        }

        return _svg;
    }

    render(){
        this.DOMELement.render();
    }
}