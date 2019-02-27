import React, {Component} from 'react';

class Pages extends Component {

    createPages = (page, title) => {
        let div = [];
        let countIteration = 3;
        page = parseInt(page);
        for (let i = page - countIteration; i !== page + 1; i++) {
            if (i > 0) {
                if (i === page) {
                    div.push(<li>
                        <form onSubmit={this.props.search}>
                            <input name='searchInput' type="text" value={title} hidden/>
                            <input name='page' type="text" value={i} hidden/>
                            <button className='checkPage'>{i}</button>
                        </form>
                    </li>)
                } else {
                    div.push(<li>
                        <form onSubmit={this.props.search}>
                            <input name='searchInput' type="text" value={title} hidden/>
                            <input name='page' type="text" value={i} hidden/>
                            <button>{i}</button>
                        </form>
                    </li>)
                }
            }
        }
        for (let i = page, countIteration = 3; countIteration > 0; countIteration--) {

            div.push(<li>
                <form onSubmit={this.props.search}>
                    <input name='searchInput' type="text" value={title} hidden/>
                    <input name='page' type="text" value={++i} hidden/>
                    <button>{i}</button>
                </form>
            </li>)
        }
        return div;
    };

    render() {
        return (
            <div className='pages'>
                <ul className='menu-pages'>
                    {this.props.hasElse && this.createPages(this.props.currencyPage, this.props.title)}
                </ul>
            </div>
        )
    }
}

export default Pages;