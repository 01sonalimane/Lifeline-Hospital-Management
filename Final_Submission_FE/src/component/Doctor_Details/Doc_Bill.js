// import React, { useState, useEffect, useRef, useContext } from 'react'; 
// import axios from 'axios';
// import './Doc_Bill.css';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Ct from '../Ct';

// const Doc_Bill = () => {
//     const [bills, setBills] = useState([]);
//     const [message, setMessage] = useState('');
//     const componentRef = useRef();
//     let obj = useContext(Ct)

//     useEffect(() => {
//         axios.get('http://localhost:5000/get_all_bill',{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}})
//             .then((res) => {
//                 if (res.data.data && res.data.data.length > 0) {
//                     setBills(res.data.data);
//                 } else {
//                     setMessage('No bill data found.');
//                 }
//             })
//             .catch(() => setMessage('Error fetching billing details.'));
//     }, []);

    
//     const handleDownloadPDF = (bill) => {
//         const doc = new jsPDF();
    
//         // Set document title and style
//         doc.setFontSize(18);
//         doc.setFont("helvetica", "bold");
//         doc.text("Patient Billing Details", 105, 15, { align: "center" });
    
//         // Set patient information
//         doc.setFontSize(12);
//         doc.setFont("helvetica", "normal");
//         doc.text(`Patient ID: ${bill._id}`, 14, 25);
//         doc.text(`Appointment Date: ${new Date(bill.appointment_date).toLocaleDateString()}`, 14, 32);
    
//         // Add a horizontal line for separation
//         doc.setLineWidth(0.5);
//         doc.line(14, 38, 200, 38);
    
//         // Prepare table data
//         const tableData = bill.billing_entries.map((entry) => [
//             `${entry.sr_no}. ${entry.particular}`,
//             `₹ ${entry.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`
//         ]);
    
//         // Add table header and content with styling
//         doc.autoTable({
//             startY: 45,
//             head: [['Billing Entries', 'Amount (₹)']],
//             body: tableData,
//             theme: 'grid',
//             headStyles: { fillColor: [0, 102, 204], textColor: [255, 255, 255], fontSize: 12 },
//             bodyStyles: { fontSize: 10, cellPadding: 4 },
//             columnStyles: {
//                 0: { cellWidth: 120 },
//                 1: { cellWidth: 50, halign: 'right' }
//             },
//             margin: { left: 14, right: 14 },
//         });
    
//         // Calculate total amount
//         const totalAmount = bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        
//         // Display the total amount
//         doc.setFontSize(13);
//         doc.setFont("helvetica", "bold");
//         doc.text(`Total Amount: ₹ ${totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 
//                  200, doc.autoTable.previous.finalY + 10, { align: "right" });
    
//         // Add a footer note
//         doc.setFontSize(10);
//         doc.setFont("helvetica", "italic");
//         doc.text("Thank you for choosing our service.", 105, doc.autoTable.previous.finalY + 20, { align: "center" });
    
//         // Save the file with patient ID as the filename
//         doc.save(`patient_bill_${bill._id}.pdf`);
//     };
    

//     return (
//         <div className="bill-container" ref={componentRef}>
//             <div className="header">
//                 <FontAwesomeIcon icon={faClinicMedical} className="medical-icon" />
//                 <h1 className="bill-title">Patient Billing Details</h1>
//             </div>

//             {message && <p className="error-message">{message}</p>}

//             {bills.length > 0 && (
//                 <div className="bill-section">
//                     {bills.map((bill) => (
//                         <div key={bill._id} className="bill-details">
//                             <div className="bill-header">
//                                 <h2>Patient ID: {bill._id}</h2>
//                                 <p>Appointment Date: {new Date(bill.appointment_date).toLocaleDateString()}</p>
//                             </div>

//                             <table className="bill-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Billing Entries</th>
//                                         <th>Amount</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {bill.billing_entries.map((entry, index) => ( // Ensure unique key
//                                         <tr key={`${bill._id}-${index}`}>
//                                             <td>{`${entry.sr_no}. ${entry.particular}`}</td>
//                                             <td>₹ {entry.amount}</td>
//                                         </tr>
//                                     ))}
//                                     <tr className="total-row">
//                                         <td>Total</td>
//                                         <td>₹ {bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <div className="button-container">
//                                 <button className="download-button" onClick={() => handleDownloadPDF(bill)}>Download PDF</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Doc_Bill;




// import React, { useState, useEffect, useRef, useContext } from 'react'; 
// import axios from 'axios';
// import './Doc_Bill.css';
// import { jsPDF } from 'jspdf';
// import 'jspdf-autotable';
// import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Ct from '../Ct';

// const Doc_Bill = () => {
//     const [bills, setBills] = useState([]);
//     const [message, setMessage] = useState('');
//     const componentRef = useRef();
//     let obj = useContext(Ct)

//     useEffect(() => {
//         axios.get('http://localhost:5000/get_all_bill',{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}})
//             .then((res) => {
//                 if (res.data.data && res.data.data.length > 0) {
//                     setBills(res.data.data);
//                 } else {
//                     setMessage('No bill data found.');
//                 }
//             })
//             .catch(() => setMessage('Error fetching billing details.'));
//     }, []);

    
//     const handleDownloadPDF = (bill) => {
//         const doc = new jsPDF();
    
//         // Set document title and style
//         doc.setFontSize(18);
//         doc.setFont("helvetica", "bold");
//         doc.text("Patient Billing Details", 105, 15, { align: "center" });
    
//         // Set patient information
//         doc.setFontSize(12);
//         doc.setFont("helvetica", "normal");
//         doc.text(`Patient ID: ${bill._id}`, 14, 25);
//         doc.text(`Appointment Date: ${new Date(bill.appointment_date).toLocaleDateString()}`, 14, 32);
    
//         // Add a horizontal line for separation
//         doc.setLineWidth(0.5);
//         doc.line(14, 38, 200, 38);
    
//         // Prepare table data
//         const tableData = bill.billing_entries.map((entry) => [
//             `${entry.sr_no}. ${entry.particular}`,
//             `₹ ${entry.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`
//         ]);
    
//         // Add table header and content with styling
//         doc.autoTable({
//             startY: 45,
//             head: [['Billing Entries', 'Amount (₹)']],
//             body: tableData,
//             theme: 'grid',
//             headStyles: { fillColor: [0, 102, 204], textColor: [255, 255, 255], fontSize: 12 },
//             bodyStyles: { fontSize: 10, cellPadding: 4 },
//             columnStyles: {
//                 0: { cellWidth: 120 },
//                 1: { cellWidth: 50, halign: 'right' }
//             },
//             margin: { left: 14, right: 14 },
//         });
    
//         // Calculate total amount
//         const totalAmount = bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        
//         // Display the total amount
//         doc.setFontSize(13);
//         doc.setFont("helvetica", "bold");
//         doc.text(`Total Amount: ₹ ${totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 
//                  200, doc.autoTable.previous.finalY + 10, { align: "right" });
    
//         // Add a footer note
//         doc.setFontSize(10);
//         doc.setFont("helvetica", "italic");
//         doc.text("Thank you for choosing our service.", 105, doc.autoTable.previous.finalY + 20, { align: "center" });
    
//         // Save the file with patient ID as the filename
//         doc.save(`patient_bill_${bill._id}.pdf`);
//     };
    

//     return (
//         <div className="bill-container" ref={componentRef}>
//             <div className="header">
//                 <FontAwesomeIcon icon={faClinicMedical} className="medical-icon" />
//                 <h1 className="bill-title">Patient Billing Details</h1>
//             </div>

//             {message && <p className="error-message">{message}</p>}

//             {bills.length > 0 && (
//                 <div className="bill-section">
//                     {bills.map((bill) => (
//                         <div key={bill._id} className="bill-details">
//                             <div className="bill-header">
//                                 <h2>Patient ID: {bill._id}</h2>
//                                 <p>Appointment Date: {new Date(bill.appointment_date).toLocaleDateString()}</p>
//                             </div>

//                             <table className="bill-table">
//                                 <thead>
//                                     <tr>
//                                         <th>Billing Entries</th>
//                                         <th>Amount</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {bill.billing_entries.map((entry, index) => ( // Ensure unique key
//                                         <tr key={`${bill._id}-${index}`}>
//                                             <td>{`${entry.sr_no}. ${entry.particular}`}</td>
//                                             <td>₹ {entry.amount}</td>
//                                         </tr>
//                                     ))}
//                                     <tr className="total-row">
//                                         <td>Total</td>
//                                         <td>₹ {bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</td>
//                                     </tr>
//                                 </tbody>
//                             </table>
//                             <div className="button-container">
//                                 <button className="download-button" onClick={() => handleDownloadPDF(bill)}>Download PDF</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Doc_Bill;


import React, { useState, useEffect, useRef, useContext } from 'react'; 
import axios from 'axios';
import './Doc_Bill.css';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import { faClinicMedical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ct from '../Ct';

const Doc_Bill = () => {
    const [bills, setBills] = useState([]);
    const [filteredBills, setFilteredBills] = useState([]);
    const [message, setMessage] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [totalRevenue, setTotalRevenue] = useState(0);
    const componentRef = useRef();
    let obj = useContext(Ct);

    useEffect(() => {
        axios.get('http://localhost:5000/get_all_bill', {
            headers: { "Authorization": obj.state.token, "doct_id": obj.state._id, "insu_id": obj.state._id }
        })
        .then((res) => {
            if (res.data.data && res.data.data.length > 0) {
                console.log(res.data.data)
                setBills(res.data.data);
                setFilteredBills(res.data.data);
            } else {
                setMessage('No bill data found.');
            }
        })
        .catch(() => setMessage('Error fetching billing details.'));
    }, []);

    // Function to filter bills based on selected date range
    const filterBillsByDate = () => {
        if (!fromDate || !toDate) return;
    
        // Convert input dates to timestamps for accurate comparison
        const from = new Date(fromDate).setHours(0, 0, 0, 0);
        const to = new Date(toDate).setHours(23, 59, 59, 999);
    
        const filtered = bills.filter(bill => {
            if (!bill.appointment_date) return false;
            
            // Convert MongoDB ISO date to Date object
            const billDate = new Date(bill.appointment_date).setHours(0, 0, 0, 0);
            
            return billDate >= from && billDate <= to;
        });
    
        console.log("Filtered Bills:", filtered);  // Debugging step
        setFilteredBills(filtered);
    
        if (filtered.length === 0) {
            setMessage("No bill data found.");
        } else {
            setMessage("");
            calculateTotalRevenue(filtered);
        }
    };
    

    // Function to calculate total revenue in the selected date range
    const calculateTotalRevenue = (bills) => {
        const total = bills.reduce((sum, bill) => {
            return sum + bill.billing_entries.reduce((entrySum, entry) => entrySum + entry.amount, 0);
        }, 0);
        setTotalRevenue(total);
    };

    const handleDownloadPDF = (bill) => {
        const doc = new jsPDF();
        doc.setFontSize(18).setFont("helvetica", "bold");
        doc.text("Patient Billing Details", 105, 15, { align: "center" });

        doc.setFontSize(12).setFont("helvetica", "normal");
        doc.text(`Patient ID: ${bill._id}`, 14, 25);
        doc.text(`Appointment Date: ${new Date(bill.appointment_date).toLocaleDateString()}`, 14, 32);
        doc.line(14, 38, 200, 38);

        const tableData = bill.billing_entries.map((entry) => [
            `${entry.sr_no}. ${entry.particular}`,
            `₹ ${entry.amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`
        ]);

        doc.autoTable({
            startY: 45,
            head: [['Billing Entries', 'Amount (₹)']],
            body: tableData,
            theme: 'grid',
            headStyles: { fillColor: [0, 102, 204], textColor: [255, 255, 255], fontSize: 12 },
            bodyStyles: { fontSize: 10, cellPadding: 4 },
            columnStyles: { 0: { cellWidth: 120 }, 1: { cellWidth: 50, halign: 'right' } },
            margin: { left: 14, right: 14 },
        });

        const totalAmount = bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        doc.setFontSize(13).setFont("helvetica", "bold");
        doc.text(`Total Amount: ₹ ${totalAmount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}`, 200, doc.autoTable.previous.finalY + 10, { align: "right" });

        doc.setFontSize(10).setFont("helvetica", "italic");
        doc.text("Thank you for choosing our service.", 105, doc.autoTable.previous.finalY + 20, { align: "center" });

        doc.save(`patient_bill_${bill._id}.pdf`);
    };

    return (
        <div className="bill-container" ref={componentRef}>
            <div className="header">
                <FontAwesomeIcon icon={faClinicMedical} className="medical-icon" />
                <h1 className="bill-title">Patient Billing Details</h1>
            </div>

            {/* Filter Section */}
            <div className="filter-section" style={{
    display: "flex",
    alignItems: "center",
    marginLeft:"0px",
    gap: "10px",
    padding: "15px",
    // backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "700px",
    margin: "20px auto",
  }}>
                <label style={{ paddingLeft: "10px", paddingRight: "5px" }}>From Date:</label>
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}style={{
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      flex: "1",
    }} />
                <label>To Date:</label>
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)}style={{
      padding: "8px",
      borderRadius: "4px",
      border: "1px solid #ccc",
      flex: "1",
    }} />
                <button className="filter-button" onClick={filterBillsByDate} style={{
      padding: "8px",
      borderRadius: "4px",
      backgroundColor: "#4CAF50",
      color: "white",
      border: "none",
      cursor: "pointer",
    }}>Filter</button>
            </div>

            {/* Total Revenue Display */}
            <div className="revenue-section">
                <h2>Total Revenue: ₹ {totalRevenue.toLocaleString("en-IN", { minimumFractionDigits: 2 })}</h2>
            </div>

            {message && <p className="error-message">{message}</p>}

            {filteredBills.length > 0 && (
                <div className="bill-section">
                    {filteredBills.map((bill) => (
                        <div key={bill._id} className="bill-details">
                            <div className="bill-header">
                                <h2>Patient ID: {bill._id}</h2>
                                <p>Appointment Date: {new Date(bill.appointment_date).toLocaleDateString()}</p>
                            </div>

                            <table className="bill-table">
                                <thead>
                                    <tr>
                                        <th>Billing Entries</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bill.billing_entries.map((entry, index) => (
                                        <tr key={`${bill._id}-${index}`}>
                                            <td>{`${entry.sr_no}. ${entry.particular}`}</td>
                                            <td>₹ {entry.amount}</td>
                                        </tr>
                                    ))}
                                    <tr className="total-row">
                                        <td>Total</td>
                                        <td>₹ {bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="button-container">
                                <button className="download-button" onClick={() => handleDownloadPDF(bill)}>Download PDF</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Doc_Bill;
