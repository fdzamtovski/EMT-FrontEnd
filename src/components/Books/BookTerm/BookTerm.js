import React from "react";
import { Link } from "react-router-dom";


const BookTerm = (props) => {

  return (
    <tr>
      <th scope={"col"}>{props.term.name}</th>
      <th scope={"col"}>{props.term.category}</th>
      <th scope={"col"}>
        {props.term.author.name + " " + props.term.author.surname}
      </th>
      <th scope={"col"}>{props.term.availableCopies}</th>
      <th scope={"col"} className={"text-center"}>
        <a
          title={"Delete"}
          className={"btn btn-danger mx-1"}
          onClick={() => props.onDelete(props.term.id)}
        >
          Delete
        </a>
        <Link
          className={"btn btn-info mx-1"}
          onClick={() => props.onEdit(props.term.id)}
          to={`/books/edit/${props.term.id}`}
        >
          Edit
        </Link>
        <a
          title={"Delete"}
          className={`btn btn-outline-dark mx-1 ${
            props.term.availableCopies == 0 ? "disabled" : ""
          }`}
          onClick={() => props.onTakeBook(props.term.id)}
        >
          Mark as taken
        </a>
      </th>
    </tr>
  );
};

export default BookTerm;
