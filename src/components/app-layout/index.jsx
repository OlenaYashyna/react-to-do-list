import React, {Component} from 'react';
import './styles.css';
import ListComponent from './ListComponent';


class AppLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            status: false
        }

    }
    toRemove = (Id) => {
        const updated = this.state.list.filter(({ id }) => id !== Id )
        this.setState({ list: updated })
         console.log(this.state.list)
    }

    onClick = () => {
        console.log(this.input.value)
        this.setState({
            list: this.state.list.concat({ value: this.input.value, id: Date.now()})
        })
        this.input.value = ""
    }

    render() {
        console.log(this.state.list)
        const { list } = this.state;
        return (
            <div className='main'>
                <header className='header'>
                    <h1 className='title'>Welcome to React</h1>
                </header>
                <div className='container'>
                    <input ref={(node) => this.input = node} className='inputText'></input>
                    <button onClick={this.onClick}>add</button>
                </div>
                    <ul className='list'>
                        {
                            list.map((el, index) =>  <ListComponent
                                key={index}
                                handelDelete={this.toRemove}
                                el={el}
                            />)

                        }
                    </ul>
                </div>
        );
    }
}

export default AppLayout;
