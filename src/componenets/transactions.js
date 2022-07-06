import React, { Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import LaunchIcon from "@material-ui/icons/Launch";
import IconButton from "@material-ui/core/IconButton";
import Table from "./Table";
import { CTooltip } from "@coreui/react";
import { errorNotification } from "./notification";

import { utils } from "../utils/utility";
import DateRange from "../utils/range";
import {getAllTransactions} from "./interface";

export function Transactions(props) {
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    from: "",
    to: "",
  });

  useEffect(() => {
    const showTransaction = async () => {
      setIsLoading(true);
      const payload = {
        date_from: format(new Date(state.from), "YYYY-MM-DD"),
        date_to: format(new Date(state.to), "YYYY-MM-DD"),
      };
      try {
        let transactionsRes = await getAllTransactions(payload);
        if (transactionsRes) {
          setIsLoading(false);
          transactionsRes = utils.insertSerialNumberId(transactionsRes);
          setTransactions(transactionsRes);
        }
      } catch (error) {
        errorNotification("Error processing request");
      }
    };
    showTransaction();
  }, [state]);

  const fields = [
    { key: "_id", label: "ID" },
    { key: "name", label: "name" },
    { key: "amount" },
    { key: "date", label: "Date", _style: { width: "20%" } },
    { key: "action", label: "Action" },
  ];

  const handleView = (item) => {
    const data = JSON.stringify(item);
    history.push({
      pathname: `/transaction/${item.id}`,
      state: data,
    });
  };

  const scopedSlots = {
    action: (item) => (
      <td>
        <CTooltip content="View Transaction" placement="bottom">
          <IconButton onClick={() => handleView(item)}>
            <LaunchIcon />
          </IconButton>
        </CTooltip>
      </td>
    ),
  };

  return (
    <Fragment>
      <div className="row">
        <div className="d-flex  col-sm-12 justify-content-end"></div>
        <div className="card col-sm-12 ">
          <div className="card-body">
            <div className="row flex align-center mb-4">
              <div className="col-sm-4">
                <h4 className="card-title">Transactions</h4>{" "}
              </div>
              <div className="col-sm-8 row flex justify-content-end p-0">
                <DateRange
                  label="Filter by date"
                  state={state}
                  setState={setState}
                />
                {/*<DownloadWidget data={transactions} />*/}
              </div>
            </div>

            <Table
              items={transactions}
              fields={fields}
              scopedSlots={scopedSlots}
              loading={isLoading}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Transactions;
