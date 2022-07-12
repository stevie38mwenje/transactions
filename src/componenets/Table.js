import React from "react";
import PropTypes from "prop-types";
import { CDataTable, CCard, CCardBody, CCardHeader } from "@coreui/react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

const useStyles = makeStyles({
    root: {
        width: "50%",
        margin: "10em auto",
        textAlign: "center",
    },
});

const Table = ({
                   items,
                   fields,
                   scopedSlots = {},
                   loading = false,
                   header,
                   backBtn = false,
               }) => {
    const classes = useStyles();
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    };

    const fixNull = (data) => {
        return data.filter((val) => {
            return Object.keys(val).map((v) => {
                if (val[v] == null) {
                    val[v] = "-";
                    return val;
                }
            });
        });
    };

    return (
        <div>
            {loading ? (
                <div className={classes.root}>
                    <CircularProgress />
                    <p>Loading...</p>
                </div>
            ) : (
                <CCard>
                    {backBtn && (
                        <div style={{ width: 50 }}>
                            <IconButton onClick={handleBack} color="black">
                                <KeyboardBackspaceIcon />
                            </IconButton>
                        </div>
                    )}
                    <CCardHeader>{header}</CCardHeader>
                    <CCardBody>
                        <CDataTable
                            items={fixNull(items)}
                            fields={fields}
                            bordered
                            hover
                            itemsPerPageSelect
                            itemsPerPage={10}
                            pagination
                            loading={items.length === 0 && !loading && "Loading"}
                            scopedSlots={scopedSlots}
                            tableFilter
                        />
                    </CCardBody>
                </CCard>
            )}
        </div>
    );
};

export default Table;

Table.protoTypes = {
    tableData: PropTypes.arrayOf(PropTypes.object).isRequired,
    headingColumns: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
};
