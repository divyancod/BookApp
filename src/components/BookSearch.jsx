import React from "react";
import { connect } from "react-redux";
import { Form, Input, Button, InputGroup, InputGroupAddon } from "reactstrap";
import { fetchBooks, setLoading } from "../reducer/mainaction";
class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
    };
    this.handleQuery = this.handleQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchBooks(this.state.query);
    this.props.setLoading();
  };
  render() {
    return (
      <Form className="mt-3" onSubmit={this.handleSubmit}>
        <InputGroup>
          <Input
            type="text"
            placeholder="Enter Book Name"
            onChange={this.handleQuery}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary">Search</Button>
          </InputGroupAddon>
        </InputGroup>
      </Form>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state,
  };
};
export default connect(mapStateToProps, { fetchBooks, setLoading })(BookSearch);
