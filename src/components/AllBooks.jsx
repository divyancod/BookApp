import React from "react";
import { Col, Row } from "reactstrap";
import BookCard from "./BookCard";
import { connect } from "react-redux";
class AllBooks extends React.Component {
  render() {
    return (
      <Row>
        {this.props.books.map((val) => (
          <Col md="3" key={val.id} className="d-flex justify-content-center">
            <BookCard book={val} />
          </Col>
        ))}
      </Row>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};
export default connect(mapStateToProps)(AllBooks);
