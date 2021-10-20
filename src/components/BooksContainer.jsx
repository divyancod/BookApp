import React from "react";
import BookSearch from "./BookSearch";
import { Container, Row, Spinner } from "reactstrap";
import AllBooks from "./AllBooks";
import { connect } from "react-redux";

class BooksContainer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <BookSearch />
          {this.props.isLoading ? (
            <div>
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
            </div>
          ) : (
            <AllBooks />
          )}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
export default connect(mapStateToProps)(BooksContainer);
