import React from "react";
import PropTypes from "prop-types";
import {CDataTable} from "@coreui/react"

const Table = ({ items, fields, scopedSlots = {}, loading = false }) => {
    return (
        <div>
            <CDataTable
                items={items}
                fields={fields}
                bordered
                hover
                itemsPerPageSelect
                itemsPerPage={10}
                pagination
                loading={loading}
                scopedSlots={scopedSlots}
                tableFilter
            />
        </div>
    );
};

export default Table;

Table.protoTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
};
