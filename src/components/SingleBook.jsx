import React, { Component } from "react";
import { fetchBook, setLoading } from "../reducer/mainaction";
import { connect } from "react-redux";
import { Spinner, Row, Col } from "reactstrap";

class SingleBook extends Component {
  componentDidMount() {
    this.props.setLoading();
    this.props.fetchBook(this.props.match.params.id);
  }
  render() {
    const { book } = this.props;
    return (
      <div>
        {this.props.isLoading ? (
          <Spinner
            style={{
              width: "4rem",
              height: "4rem",
              position: "fixed",
              top: "50%",
              left: "50%",
            }}
            children=""
            color="primary"
          />
        ) : (
          <Row>
            <Col md="4">
              <div className="d-flex justify-content-center mt-3">
                <img
                  src={book.volumeInfo?.imageLinks?.thumbnail}
                  alt="Thumbnail"
                  height="400px"
                />
              </div>
            </Col>
            <Col md="8">
              <h1>{book.volumeInfo?.title}</h1>
              <p>Author - {book.volumeInfo?.authors}</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: book.volumeInfo?.description,
                }}
              />
            </Col>
          </Row>
        )}
      </div>
    );
  }
}
const mapPropsToState = (state) => {
  return {
    book: state.book,
    isLoading: state.isLoading,
  };
};
export default connect(mapPropsToState, { fetchBook, setLoading })(SingleBook);
