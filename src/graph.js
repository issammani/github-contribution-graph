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
        const _height = 8 * (this.cellCize + this.gap); // 7+1 to account for the month row

        // Get number of possible cells
        const _numberOfCells = Math.floor((_width - 2 * (this.cellCize + this.gap)) / (this.cellCize + this.gap));

        // Set width to fit graph ( +2 to account for the weekday column)
        _width = (_numberOfCells + 2) * (this.cellCize + this.gap);
        // Create a new svg
        const _svg = new Svg({parentSelector: this.containerSelector, width: _width, height: _height, class: 'graph__svg'});

        let today = new Date();
        let i = _numberOfCells, j = today.getDay() + 1;
        let contributionCountMax = 100; // Should change to take as prop
        let currentMonth = today.getMonth();

        // Create cells
        for(let contribution of generateMockContributions(7 * _numberOfCells - 7 + today.getDate() + 1 , contributionCountMax, 4)){
            // Render cells column-wise
            new Cell({
                svgContainer: _svg, 
                x: (i + 1) * (this.cellCize + this.gap),
                y: j * (this.cellCize + this.gap),
                date: contribution.day.toLocaleDateString('en-GB'), 
                count: contribution.count, 
                class: `graph__cell contribution__level__${contribution.chunkIndex}`
            });

            j = (j - 1) % 7;
            if(j === 0){
                j = 7;
                i--;
            }     
        }

        return _svg;
    }

    render(){
        this.DOMELement.render();
    }
}