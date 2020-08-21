import React, { Fragment } from "react";
import AddLeadForm from "./AddLeadForm";
import Leads from "./Leads";
export default function Dashboard() {
  return (
    <Fragment>
      <AddLeadForm />
      <Leads />
    </Fragment>
  );
}
