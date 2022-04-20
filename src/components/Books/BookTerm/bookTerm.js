import React from 'react';
import {Link} from 'react-router-dom';

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <button  value={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </button>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit`}>
                    Edit
                </Link>
                <button  value={"Mark As Taken"} className={"btn btn-warning ml-1"}
                         onClick={() => props.onTake(props.term.id)}>
                    Mark As Taken
                </button>
            </td>
        </tr>
    )
}

export default bookTerm;