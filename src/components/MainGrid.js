import React, { Component } from 'react';
import axios from 'axios';

class MainGrid extends Component {
    constructor() {
        super();
        this.state = {
            user_input: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(text) {
        this.setState({
            user_input: text
        })
    }
    search(term) {
        axios.get('https://api.nytimes.com/svc/search/v2/articlesearch.json')
        .then(response => {
            console.log(response)
        })
    }
    render() {
        return (
            <div className='main_container'>
                <span className='search_holder'>
                    <input className='search_input' onChange={(e)=> this.handleChange(e.target.value)}></input>
                    <button className='search_button'>find...</button>
                </span>
            </div>
        )
    }
}
export default MainGrid;