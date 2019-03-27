import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import footer from './footer.json';
import Category from './routes/Category';
import Resource from './routes/Resource';
import Main from './routes/Main';

const App = props => {
    return (
        <React.Fragment><Switch>
            <Route exact path='/' component={Main} />
            <Route path='/category/:name' component={Category} />
            <Route path='/resource/:categoryName/:subcategoryName/:resourceName' component={Resource} />
            <Redirect from="/" to="/home" />
        </Switch>
            <div className="footer">
                {footer.map((navigation, n) => {
                    const className = (window.location.href.indexOf(navigation.link)) > -1 ? "footerNav activeNav" : "footerNav";
                    const imgSrc = (window.location.href.indexOf(navigation.link)) > -1 ? `/icons/${navigation.activeIcon}` : `/icons/${navigation.icon}`

                    return (
                        <React.Fragment key={n}>
                            <div className={className}>
                                <img className="footerIcon" src={imgSrc} alt={navigation.icon}></img>
                                <div>
                                    <Link to={`/${navigation.link}`}>
                                        {navigation.name}
                                    </Link>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default App