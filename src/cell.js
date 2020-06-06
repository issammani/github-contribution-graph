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
    }

    createElement(){
        const _rect = this.svgContainer.rect(this.x, this.y, this.width, this.height, this.id, this.class);
        // Add date and count dataset attributes
        _rect.dataset.date = this.date;
        _rect.dataset.count = this.count;
    }
}