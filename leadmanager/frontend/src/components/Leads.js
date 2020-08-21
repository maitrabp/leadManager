import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import propTypes from "prop-types";
import { getLeads, DeleteLead } from "../actions/leads";

export class Leads extends Component {
  //to make sure appropriate prop is passed
  static propTypes = {
    leads: propTypes.array.isRequired,
    getLeads: propTypes.func.isRequired,
    DeleteLead: propTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

  render() {
    return (
      <Fragment>
        <div className="card card-body mt-4 mb-4">
          <h2>List of Leads:</h2>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.leads.map((lead) => (
                <tr key={lead.id}>
                  <td>{lead.id}</td>
                  <td>{lead.name}</td>
                  <td>{lead.email}</td>
                  <td>{lead.message}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={this.props.DeleteLead.bind(this, lead.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  leads: state.leads.leads,
});

export default connect(mapStateToProps, { getLeads, DeleteLead })(Leads);
