import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { makeData } from "./utils";

class TableTest extends Component {
  constructor() {
    super();
    this.renderEditable = this.renderEditable.bind(this);
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
            accessor: "firstName",
            Cell: this.renderEditable
          },
          {
            Header: "Last Name",
            id: "lastName",
            accessor: d => d.lastName,
            Cell: this.renderEditable
          }
        ]
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
            Cell: this.renderEditable
          },
          {
            Header: "Status",
            accessor: "status",
            Cell: this.renderEditable
          }
        ]
      },
      {
        Header: "Stats",
        columns: [
          {
            Header: "Visits",
            accessor: "visits",
            Cell: this.renderEditable
          }
        ]
      }
    ];
  }

  renderEditable(cellInfo) {
    const { tableData } = this.state;
    if (tableData == null) {
      return null;
    }

    const isReadOnly = false;

    return (
      <input
        type="text"
        className="form-control"
        disabled={isReadOnly}
        onChange={e => {
          if (this.state.tableData != null) {
            const tableData2 = [...this.state.tableData];
            tableData2[cellInfo.index][cellInfo.column.id] = e.target.value;
            this.setState({ tableData: tableData2 });
          }
        }}
        value={
          tableData[cellInfo.index][cellInfo.column.id] != null
            ? tableData[cellInfo.index][cellInfo.column.id]
            : ""
        }
      />
    );
  }

  render() {
    const { tableData } = this.state;
    return (
      <div>
        This is tabletest
        <ReactTable
          data={tableData}
          columns={this.getColumns()}
          defaultPageSize={15}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default TableTest;
