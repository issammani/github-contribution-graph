export default class Svg{
    static SVG_NS = 'http://www.w3.org/2000/svg';

    constructor(props){
        this.parentSelector = props.parentSelector || 'body';
        this.width = props.width || 500;
        this.height = props.height || 500;
        this.viewBox = this.viewBox || '';
        this.id = props.id || '';
        this.class = props.class || ''; 
        
        this.DOMELement = this.createElement();
        
    }

    createElement(){
        const _svg = document.createElementNS(Svg.SVG_NS, 'svg');
        
        _svg.setAttribute('width', this.width);
        _svg.setAttribute('height', this.height);
        _svg.setAttribute('id', this.id);
        _svg.setAttribute('class', this.class);
        _svg.setAttributeNS(Svg.SVG_NS, 'viewBox', this.viewBox);

        return _svg;
    }

    render(){
        document.querySelector(this.parentSelector).appendChild(this.DOMELement);
    }

    remove(child){
        this.DOMELement.removeChild(child);
    }

    // Appends and returns an svg rect element
    rect(x,y,width,height,id,className){
        let _rect = document.createElementNS(Svg.SVG_NS, 'rect');
        _rect.setAttribute('x', x);
        _rect.setAttribute('y', y);
        _rect.setAttribute('width', width);
        _rect.setAttribute('height', height);
        _rect.setAttribute('id',id);
        _rect.setAttribute('class',className);

        // Append it to the DOM
        _rect = this.DOMELement.appendChild(_rect);
        return _rect;
    }
}