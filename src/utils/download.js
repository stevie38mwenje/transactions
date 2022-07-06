// import React, {Component} from 'react';
// import {format} from 'date-fns';
// import {CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle,} from '@coreui/react';
// import generateTransactionReport from '../../services/generateTransactionReport';
// import generateTransactionReportCSV from '../../services/generateTransactionReportCSV';
// import generateNotificationReport from '../../services/generateNotificationReport';
// import generateNotificationReportCSV from '../../services/generateNotificationReportCSV';
//
// class DownloadWidget extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       name: 'DownloadWidget',
//     };
//
//     this.handleGenerateCsv = this.handleGenerateCsv.bind(this);
//     this.handleGeneratePdf = this.handleGeneratePdf.bind(this);
//   }
//
//   handleGeneratePdf() {
//     const type = this.props.type;
//     let data = this.props.data;
//
//     if (type) {
//       generateNotificationReport(
//         data.map((v) => ({
//           ...v,
//           identifier: v.tran_id,
//           reference: v.reference,
//           dateCreated: format(new Date(v.date_created), 'YYYY/MM/DD'),
//         }))
//       );
//     } else {
//       generateTransactionReport(
//         data.map((v) => ({
//           ...v,
//           identifier: v.tran_id,
//           amount: `${v.currency_code} ${Number(v.amount).toFixed(2)}`,
//           reference: v.channel_ref,
//           dateCreated: format(new Date(v.tran_date), 'YYYY/MM/DD'),
//         }))
//       );
//     }
//   }
//
//   handleGenerateCsv() {
//     let data = this.props.data;
//     let type = this.props.type;
//     if (type) {
//       generateNotificationReportCSV(data);
//     } else {
//       generateTransactionReportCSV(data);
//     }
//   }
//
//   render() {
//     return (
//       <div
//         style={{
//           display: 'flex',
//           alignItems: 'flex-end',
//         }}
//       >
//         {/*<CDropdown className="ml-2">*/}
//         {/*  <CDropdownToggle color="secondary">Download As</CDropdownToggle>*/}
//         {/*  <CDropdownMenu>*/}
//         {/*    <CDropdownItem onClick={this.handleGeneratePdf}>PDF</CDropdownItem>*/}
//         {/*    <CDropdownItem onClick={this.handleGenerateCsv}>CSV</CDropdownItem>*/}
//         {/*  </CDropdownMenu>*/}
//         {/*</CDropdown>*/}
//       </div>
//     );
//   }
// }
//
// export default DownloadWidget;
