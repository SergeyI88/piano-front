import React, {Component} from 'react';
import '../App.css';
import TableQuestions from './TableQuestions'
import SearchForm from './SearchForm'
import Pages from './Pages'
import axios from 'axios'

let fileUp;

class App extends Component {
    state = {page: undefined, loadedPage: undefined, title: undefined};

    requestToService = async (e) => {
        e.preventDefault();
        const title = e.target.elements.searchInput.value;
        let page = e.target.elements.page;
        page = page !== undefined ? page.value : '1';
        try {
            const data = new FormData();
            data.append('title', title);
            data.append('page', page);
            axios.post('http://localhost:8080/getPage', data)
                .then(response => {
                    this.setState({page: response.data, loadedPage: page, title: title});
                })
                .catch(error => {
                    console.log(error.message)
                });

        } catch (e) {
            console.log(e)
        }

    };

    render() {
        return (
            <div className='App'>
                <header className="Header">
                    <SearchForm search={this.requestToService}/>
                    {this.state.page && <TableQuestions className='table' questions={this.state.page.questions}/>}
                    {this.state.page && <Pages hasElse={this.state.page.hasMore}
                                               currencyPage={this.state.loadedPage}
                                               title={this.state.title} search={this.requestToService}/>}
                </header>
                <div>

                </div>
            </div>
        );
    }
}

export default App;
