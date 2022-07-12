import React, { Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import { useHistory } from "react-router-dom";
import Table from "./Table";
import { errorNotification } from "./notification";

import { utils } from "../utils/utility";
import DateRange from "../utils/range";
import {getAllTransactions, getTransactions, getUserTransactions} from "./interface";

export function Transactions(props) {
  const history = useHistory();
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [state, setState] = useState({
    from: "",
    to: "",
  });

  let Profile = {
    name:"steve",
    id:"2"
  }

  useEffect(() => {
    const showTransaction = async () => {
      setIsLoading(true);
      const payload = {
        date_from: format(new Date(state.from), "yyy-MM-dd"),
        date_to: format(new Date(state.to), "yyyy-MM-dd"),
        user_Id:Profile.id
      };
      console.log(payload)
      try {
        let transactionsRes = await getAllTransactions(payload);
        console.log("TRANSACTION DATA...", transactionsRes)
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




  // useEffect(() => {
  //   const showEmployee = async () => {
  //     setIsLoading(true);
  //     try {
  //       // let transactionResponse = await getUserTransactions(id);
  //        let transactionResponse = await getTransactions(id);
  //       //let {dataRes:transactionResponse} = await  getUserTransactions();
  //       console.log("TRANSACTION DATA...", transactionResponse )
  //       if (transactionResponse) {
  //         setIsLoading(false);
  //         transactionResponse = utils.insertSerialNumberId(transactionResponse);
  //         setTransactions(transactionResponse);
  //       }
  //     } catch (error) {
  //       errorNotification('Error processing request');
  //     }
  //   };
  //   showEmployee();
  // },[]);

  const fields = [
    { key: "_id", label: "ID" },
    { key: "name", label: "name" },
    { key: "amount" },
    { key: "date", label: "Date", _style: { width: "20%" } },
  ];


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
                </div>
              </div>

              <Table
                  items={transactions}
                  fields={fields}
                  loading={isLoading}
              />
            </div>
          </div>
        </div>
      </Fragment>
  );
}

export default Transactions;

