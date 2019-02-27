import React, {Component} from 'react';

class SearchForm extends Component {
    render() {
        return (
            <div>
                <h3>Поиск</h3>
                <form onSubmit={this.props.search}>
                <input name='searchInput' type="text"/>
                    <button>искать</button>
                </form>
            </div>
        )
    }
}

export default SearchForm;