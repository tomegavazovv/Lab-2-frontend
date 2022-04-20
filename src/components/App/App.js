import React, {Component} from "react";
import Books from '../Books/BookList/books';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Manufacturers from '../Manufacturers/manufacturers';
import ProductAdd from '../Books/BookAdd/bookAdd';
import Categories from '../Categories/categories';
import Header from '../Header/header';
import BookEdit from "../Books/BookEdit/bookEdit";
import EShopService from "../../repository/eshopRepository";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            authors: [],
            selectedBook: {},
            categories: []
        }
    }

    render() {
        return (
            <Router>
                <Header/>
                <main>
                    <div className="container">
                        <Route path={"/authors"} exact render={() =>
                            <Manufacturers authors={this.state.authors}/>}/>

                        <Route path={"/categories"} exact render={() =>
                            <Categories categories={this.state.categories}/>}/>

                        <Route path={"/books/add"} exact render={() =>
                            <ProductAdd categories={this.state.categories}
                                        authors={this.state.authors}
                                        onAddBook={this.addBook}/>}/>

                        <Route path={"/books/edit"} exact render={() =>
                            <BookEdit categories={this.state.categories}
                                      authors={this.state.authors}
                                      onEditBook={this.editBook}
                                      book={this.state.selectedBook}/>}/>

                        <Route path={"/books"} exact render={() =>
                            <Books books={this.state.books}
                                   onTake={this.takeBook}
                                   onDelete={this.deleteBook}
                                   onEdit={this.getBook}/>}/>

                        <Redirect to={"/books"}/>
                    </div>
                </main>
            </Router>
        );
    }

    componentDidMount() {
        this.loadCategories();
        this.loadAuthors();
        this.loadBooks();
    }

    loadAuthors = () => {
        EShopService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    loadBooks = () => {
        EShopService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadCategories = () => {
        EShopService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }

    deleteBook = (id) => {
        EShopService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name, category, authorId, availableCopies) => {
        EShopService.addBook(name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
        EShopService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, authorId, availableCopies) => {
        EShopService.editBook(id, name, category, authorId, availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    takeBook = (id) => {
        EShopService.takeBook(id)
            .then(() => {
                this.loadBooks();
            })
            .catch(() => alert("We don't have available copies of the book at the moment."))
    }
}

export default App;
