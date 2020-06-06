import Svg from './svg.js';
import Cell from './cell.js';
import {getDayShortName, getMonthShortName} from './date.js';
import generateMockContributions from './contribution.js';

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

        // Set width to fit graph (+2 to account for the weekday column)
        _width = (_numberOfCells + 2)  * (this.cellCize + this.gap);

        // Create a new svg
        const _svg = new Svg({parentSelector: this.containerSelector, width: _width, height: _height, class: 'graph__svg'});

        let i = 0, j = 0;
        let contributionCountMax = 100;

        // Create cells
        for(let contribution of generateMockContributions(7* _numberOfCells, contributionCountMax, 4)){
            // Render cells column-wise
            new Cell({
                svgContainer: _svg, 
                x: (i + 2) * (this.cellCize + this.gap),  // +2 to account for weekday text
                y: j * (this.cellCize + this.gap), 
                date: contribution.day.toLocaleDateString('en-GB'), 
                count: contribution.count, 
                class: `graph__cell contribution__level__${contribution.chunkIndex}`
            });

            if(j != 0 && (j+1) % 7 === 0 ){
                i++;
            }
            
            j = (j + 1) % 7;  
        }

        return _svg;
    }

    render(){
        this.DOMELement.render();
    }
}