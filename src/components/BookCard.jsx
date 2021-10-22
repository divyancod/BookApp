import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody } from "reactstrap";
import {BsPen} from 'react-icons/bs'

export default class BookCard extends Component {
  render() {
    const { book } = this.props;
    return (
      <Card className="text-center mt-3 mb-4" style={{ width: "15rem"}}>
        <CardImg
          src={book.volumeInfo?.imageLinks?.thumbnail}
          alt="Image Link Broken"
        />
        <CardBody>
          <Link to={`/book/${book?.id}`}>
            <div className="text-primary">{book.volumeInfo.title}</div>
          </Link>
          <div className="text-danger"><BsPen/> {book.volumeInfo.authors}</div>
        </CardBody>
      </Card>
    );
  }
}
