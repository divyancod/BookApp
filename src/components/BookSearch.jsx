import React from "react";
import {connect} from "react-redux";
import {Form, Input, Button, InputGroup, InputGroupAddon} from "reactstrap";
import {fetchBooks, setLoading} from "../reducer/mainaction";
import {ImBooks} from "react-icons/im";
import {FcGoogle} from 'react-icons/fc'

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
            <div>
                <h2 className="text-center mt-2"><ImBooks className="me-2"/>Find your book here</h2>
                <p className="text-center"><FcGoogle className="me-2"/>By Google books API</p>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state,
    };
};
export default connect(mapStateToProps, {fetchBooks, setLoading})(BookSearch);
