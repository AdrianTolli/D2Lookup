import React from 'react';
import './searchBar.css';

class searchBar extends React.Component {

    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.keyPressed = this.keyPressed.bind(this);
    };

    onChange(event){
        this.props.setName(event.target.value);
    };

    keyPressed(event){
        if(event.key == 'Enter'){

            this.props.history.push('/searchUser/' + event.target.value);
        };
    };

    render() {
        return <input onKeyPress={this.keyPressed} onChange={this.onChange} className='searchBar' type='text' placeholder='Displayname Search' />
    }
}