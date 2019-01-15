import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import categories from '../categories.json';

const Resources = props => props.resources.map((resource, j) =>
    <React.Fragment key={j}>
        <Link to={`/resource/${props.category.name}/${props.subcategory.name}/${resource.name}`} className="resourceList">
            <div className="resources">
                {resource.name}
            </div>
            <img src="/icons/back.svg" alt={resource.name} className="gotoPage"></img>
        </Link>
    </React.Fragment>
);

const Subcategories = props => props.subcategories.map((subcategory, i) =>
    <React.Fragment key={i}>
        <div className="subcategoryList">
            <div className="subcategories">
                {subcategory.name}
            </div>
            <div>
                <Resources subcategory={subcategory} category={props.category} resources={subcategory.resources}></Resources>
            </div>
        </div>
    </React.Fragment>
);

const Category = props => {
    const category = categories.find(category => category.name === props.match.params.name);

    return (
        <React.Fragment>
            <div className="listScreen">
                <div className="titleBar navbar">
                    <div className="title">
                        {category.name}
                    </div>
                </div>
                <div className="topPadding">
                    <Subcategories category={category} subcategories={category.subcategories}></Subcategories>
                </div>
            </div>
        </React.Fragment>
    )
};

export default Category