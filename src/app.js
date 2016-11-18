import React from 'react';
import {Link} from 'react-router'

var App = React.createClass({
    render() {
        return (
            <div className='App'>
                <div className='header'>
                    <div className='header-item'>
                        <Link className='header-item-link' to='/comedies'>Комедии</Link>
                    </div>

                    <div className='header-item'>
                        <Link className='header-item-link' to='/dramas'>Драмы</Link>
                    </div>

                    <div className='header-item'>
                        <Link className='header-item-link' to='/horrors'>Ужасы</Link>
                    </div>

                    <div className="menu"></div>

                    <div className="content"></div>
                </div>

            </div>
        );
    }
});

export default App;