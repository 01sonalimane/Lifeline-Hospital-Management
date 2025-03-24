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
    const [message, setMessage] = useState('');
    const componentRef = useRef();
    let obj = useContext(Ct)

    useEffect(() => {
        axios.get('http://localhost:5000/get_all_bill',{"headers":{"Authorization":obj.state.token,"doct_id":obj.state._id,"insu_id":obj.state._id}})
            .then((res) => {
                if (res.data.data && res.data.data.length > 0) {
                    setBills(res.data.data);
                } else {
                    setMessage('No bill data found.');
                }
            })
            .catch(() => setMessage('Error fetching billing details.'));
    }, []);

    const handleDownloadPDF = (bill) => {
        const doc = new jsPDF();

        // Set document title
        doc.text("Patient Billing Details", 10, 10);
        doc.text(`Patient ID: ${bill._id}`, 10, 20);
        doc.text(`Appointment Date: ${new Date(bill.appointment_date).toLocaleDateString()}`, 10, 30);

        // Prepare table data
        const tableData = bill.billing_entries.map(entry => [
            `${entry.sr_no}. ${entry.particular}`,
            `₹ ${entry.amount}`
        ]);

        // Add table to the PDF
        doc.autoTable({
            head: [['Billing Entries', 'Amount']],
            body: tableData,
            startY: 40,
        });

        // Calculate total amount
        const totalAmount = bill.billing_entries.reduce((sum, entry) => sum + entry.amount, 0);
        doc.text(`Total Amount: ₹ ${totalAmount}`, 10, doc.autoTable.previous.finalY + 10);

        // Save file with patient ID
        doc.save(`patient_bill_${bill._id}.pdf`);
    };

    return (
        <div className="bill-container" ref={componentRef}>
            <div className="header">
                <FontAwesomeIcon icon={faClinicMedical} className="medical-icon" />
                <h1 className="bill-title">Patient Billing Details</h1>
            </div>

            {message && <p className="error-message">{message}</p>}

            {bills.length > 0 && (
                <div className="bill-section">
                    {bills.map((bill) => (
                        <div key={bill._id} className="bill-details">
                            <div className="bill-header">
                                <h2>Patient ID: {bill._id}</h2>
                                <p>Appointment Date: {new Date(bill.appointment_date).toLocaleDateString()}</p>
                            </div>

                            <table className="bill-table">
                            <thead>
                                    <tr>
                                        <th>Sr. No.</th> {/* Added Serial Number Column */}
                                        <th>Billing Entries</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bill.billing_entries.map((entry, index) => ( // Ensure unique key
                                        <tr key={`${bill._id}-${index}`}>
                                            <td>{index + 1}</td> {/* Serial Number starts from 1 */}
                                            <td>{entry.particular}</td>
                                            <td>₹ {entry.amount}</td>
                                        </tr>
                                    ))}
                                    <tr className="total-row">
                                        <td colSpan="2">Total</td> {/* Updated colspan for alignment */}
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
