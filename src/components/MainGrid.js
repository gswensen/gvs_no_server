import React, { Component } from 'react';
import axios from 'axios';
import apiKey from './../news_api_key.js';

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
        let source = 'the-new-york-times'
        axios.get(`https://newsapi.org/v1/articles?source=the-new-york-times&sortBy=top&apiKey=c8615522df474a6ba7412fa0551ef7fd`)
        .then(response => {

            
            console.log(response.data)
        })
    }
    render() {
        return (
            <div className='main_container'>
                <span className='search_holder'>
                    <input className='search_input' onChange={(e)=> this.handleChange(e.target.value)}></input>
                    <button className='search_button' onClick={()=> this.search()} >find...</button>
                </span>
                <div className='article_holder' >
                </div>
            </div>
        )
    }
}
export default MainGrid;