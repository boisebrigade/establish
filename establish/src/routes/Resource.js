import React from 'react';

import '../App.css';
import categories from '../categories.json';

class Resource extends React.Component {
    render() {
        const category = categories.find(category => category.name === this.props.match.params.categoryName);
        const subcategory = category.subcategories.find(subcategory => subcategory.name === this.props.match.params.subcategoryName);
        const resource = subcategory.resources.find(resource => resource.name === this.props.match.params.resourceName);

        return (
            <>
                <div className="listScreen">
                    <div className="titleBar navbar">
                        <div className="title">
                            {category.name}
                        </div>
                    </div>
                    <div className="topPadding resourcePage">
                        <div className="resourceTitle">
                            {resource.name}
                        </div>
                        <div className="address">
                            {resource.address}
                        </div>
                        <div className="phone">
                            <div>{resource.phone}</div>
                            <div>{resource.tollNum}</div>
                        </div>
                        <div className="urls">
                            <div>{resource.url}</div>
                            <div>{resource.link}</div>
                        </div>
                        <hr />
                        <div className="description">
                            {resource.description}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Resource
