import React from 'react';

class SearchBar extends React.Component {
    state ={ term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term); 
    };
    
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onInputSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            value={this.state.term} 
                            onChange={this.onInputChange} 
                            type="text"
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;