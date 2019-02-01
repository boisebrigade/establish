import React from 'react';
import { Link } from 'react-router-dom';

import categories from '../categories.json';

import '../App.css';

const Ideas = props => props.ideas.map((idea, i, ideas) => (
    i === ideas.length - 1
        ? <span className="ideas" key={i}>{idea}</span>
        : <span className="ideas" key={i}>{idea} | </span>
));

// /category?name=housing
const Categories = props => props.categories.map((category, i, categories) => {
    let className;
    if (i === 0) {
        className = "card firstCard";
    } else if (i === categories.length - 1) {
        className = "card lastCard";
    }
    else {
        className = "card";
    }
    return (
        <Link to={`/category/${category.name}`} className={className} key={i}>
            <img className="icons" src={`icons/${category.icon}`} alt={category.icon}></img>
            <div className="category">
                <div >
                    {category.name}
                </div>
                <div className="ideas">
                    <Ideas ideas={category.ideas} />
                </div>
            </div>
        </Link>
    )
});

class Main extends React.Component {
    constructor() {
        super();

        this.state = {
            filteredCategories: categories
        };
    }

    handleChange = event => this.setState({
        filteredCategories: categories.filter(category => category.name.toLowerCase().includes(event.target.value.toLowerCase()))
    });

    render() {
        return (
            <React.Fragment>
                <div className="header navbar">
                    <div className="search">
                        <img src="icons/search.svg" className="searchIcon" alt="search"></img>
                        <input className="searchInput" placeholder="Search" onChange={this.handleChange} />
                    </div>
                </div>
                <Categories categories={this.state.filteredCategories} />
            </React.Fragment>
        )
    }
}

export default Main