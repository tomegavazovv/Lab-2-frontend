import React from 'react';
import {Link} from 'react-router-dom';

const header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-light navbar-fixed font-weight-bold border-bottom">
                <div className={"container"}>
                <a className="navbar-brand" href="/books">Book Store</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link text-da" to={"/books"}>Books</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to={"/categories"}>Categories</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className={"nav-link"} to={"/authors"}>Authors</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
            <p className={"text-center mt-1 h5"}>Lab 2 - 191140</p>
        </header>
    )
}

export default header;