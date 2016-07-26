import React, { Component } from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state= {term : ''}
    }
    render() {
        return (
            <div className="search-bar">
                <label className="pull-left"><strong>Search Video :</strong></label>
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
                <br />
                <br />
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}


export default SearchBar;
