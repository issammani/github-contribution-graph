// Represents a graph cell
export default class Cell{

    constructor(props){

        // svgContainer is supposed to be an instance of Svg
        this.svgContainer = props.svgContainer;
        this.width = props.width || 10;
        this.height = props.height || 10;
        this.x = props.x || 0;
        this.y = props.y || 0
        this.id = props.id || '';
        this.class = props.class || '';
        
        // Contribution date
        this.date = props.date || undefined;
        
        // Contribution count (#commits)
        this.count =  props.count || 0;

        this.DOMELement = this.createElement();

        // Keep track of tooltip
        this.toolTip = null;
    }

    createElement(){
        const _rect = this.svgContainer.rect(this.x, this.y, this.width, this.height, this.id, this.class);
        // Add date and count dataset attributes
        _rect.dataset.date = this.date;
        _rect.dataset.count = this.count;

        // Add event listeners to show/hide tooltip
        _rect.addEventListener('mouseover', this.showToolTip.bind(this));

        _rect.addEventListener('mouseleave', this.hideToolTip.bind(this));

        return _rect;
    }

    showToolTip(){
        // Create empty div
        this.toolTip = document.createElement('div');
        this.toolTip.classList.add('graph__tooltip', 'graph__tooltip__one__line')

        // Create strong element for the count text
        const count = document.createElement('strong');
        count.innerText = this.count == 0 ? 'No' : new Intl.NumberFormat('en-US').format(this.count);
        count.innerText += this.count === 1 ? ' contribution' : ' contributions';

        // Add count and date to toolTip
        this.toolTip.append(count, ` on ${this.date}`);

        // Append toolTip to body
        document.body.appendChild(this.toolTip);
        
        // Move the tooltip
        const boundingBox = this.DOMELement.getBoundingClientRect();
        let top = boundingBox.top + window.pageYOffset - this.toolTip.clientHeight - boundingBox.height;
        let left = boundingBox.left + window.pageXOffset - this.toolTip.clientWidth / 2 + boundingBox.width ;
        console.log(top, left);
        this.toolTip.style.top = `${top}px`;
        this.toolTip.style.left = `${left}px`;
    }

    hideToolTip(){
        // Remove tooltip
        this.toolTip.remove();
    }

    
}