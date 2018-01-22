import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "./utils";

class TableTest extends Component {
  constructor() {
    super();
    this.state = {
      tableData: makeData()
    };
  }

  getColumns() {
    return [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName"
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: d => d.lastName
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age"
          },
          {
            Header: "Status",
            accessor: "status"
          }
        ]
      },
      {
        Header: "Stats",
        columns: [
          {
            Header: "Visits",
            accessor: "visits"
          }
        ]
      }
    ];
  }

  render() {
    const { tableData } = this.state;
    console.log(tableData);
    return (
      <div>
        This is tabletest
        <ReactTable
          data={tableData}
          columns={this.getColumns()}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TableTest;
