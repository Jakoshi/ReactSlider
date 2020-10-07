import React, { ReactNode } from 'react';
import './Slider.css';
import './Animations';
import arrowLeft from './../../assets/img/arrow-left.png'
import arrowRight from './../../assets/img/arrow-right.png'


interface Props {
numberOfCols: number;
}

interface State {
isSticky: boolean;
}

export default class Slider extends React.Component <Props, State>{

    constructor (props){
    super(props);
    this.state = {
        isSticky: false, 
    }
    }

    getCssRules() {
        let cssResult = '';
        let cssValue = 100 / this.props.numberOfCols;

        var counter = 0;
        React.Children.forEach(this.props.children, function(child) {
          if (child) counter++;
        });

        for(var x = 0; x < counter; x++){
            cssResult += cssValue + '%';
           
        }
        console.log(cssValue);
        return String(cssResult);
      }

      numberOfChildren(){
       
        var counter = 0;
        React.Children.forEach(this.props.children, function(child) {
          if (child) counter++;
        });

        return counter;
      }

    render(){

        document.documentElement.style.setProperty('--grid-template-jk-slider', this.getCssRules());

        const items: ReactNode[] = [];

        const childs = React.Children.map(this.props.children, child => {
            items.push(
                <div className="jk-slider-single-wrapper">
                    {child}
                </div>
                
            );
        });


       
        return(
            <div data-visiblecols={this.props.numberOfCols} data-numberoftotalcols={this.numberOfChildren()} className="jk-slider-wrapper">
                <img src={arrowLeft} className="jk-slider-arrow-left jk-slider-arrow"></img>
              <div className="jk-slider-wrapper-inner">
              {items}
              </div>
              <img src={arrowRight} className="jk-slider-arrow-right jk-slider-arrow"></img>
            </div>
        )
    }

}
