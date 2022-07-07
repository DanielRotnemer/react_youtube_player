import '../SearchBar.css';
import React from 'react';

class SearchBar extends React.Component
{
    state = { term: '' };

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
        console.log(this.state.term);
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onVideoSearchSubmit(this.state.term);
    };

    render()
    {
        return (            
            <div className="search-cont">
                <div class="search-title">Search videos - YouTube App</div>
                <form className="form" onSubmit={this.onFormSubmit}>
                    <div className="search-field">
                        <input type="text" className="q"
                            placeholder="Write your serch term here"
                            onChange={this.onInputChange}
                            value={this.state.term}
                        />
                    </div>
                </form>
            </div>            
        );
    }
}

export default SearchBar;