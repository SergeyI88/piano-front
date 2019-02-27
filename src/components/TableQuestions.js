import React, {Component} from 'react';
import '../index.css';

class TableQuestions extends Component {

    createTable = (questions) => {
        let table = [];

        for (let it of questions) {
            let children = [];
            children.push(<td>{it.title}</td>);
            children.push(<td>{new Date(it.creationDate * 1000).toISOString()}</td>);
            children.push(<td><a href={'https://stackoverflow.com/questions/' + it.questionId}>{it.questionId}</a> </td>);
            if (it.answered) {
                table.push(<tr className='hasAnswered'>{children}</tr>)
            } else {
                table.push(<tr className='hasntAnswered'>{children}</tr>)
            }
        }
        return table
    };


    render() {
        return (
            <div>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Time</th>
                        <th>Link</th>
                    </tr>
                        {this.createTable(this.props.questions)}
                </table>
            </div>
        )
    }
}

export default TableQuestions;