import { useContext, useState } from "react";
import axios from "axios";
import Ct from "./Ct";

const BillComponent = () => {
  const [bill, setBill] = useState(null);
  const [patientId, setPatientId] = useState("");
  const [message, setMessage] = useState("");
  let obj = useContext(Ct)
  // Function to update patientId
  const handleInputChange = (e) => {
    setPatientId(e.target.value);
  };

  // Function to fetch the bill
  const fetchBill = () => {
    axios
      .get(`http://localhost:5000/get_bill/${patientId}`,{"headers":{"Authorization":obj.state.token}})
      .then((res) => {
        if (res.data.data) {
          setBill(res.data.data);
          setMessage("");
        } else {
          setMessage("No bill found for this patient.");
          setBill(null);
        }
      })
      .catch(() => {
        setMessage("Error fetching bill.");
        setBill(null);
      });
  };

  return (
    <div>
      <h1>Billing Details</h1>

      {/* Input and Search Button */}
      <div>
        <input
          type="text"
          placeholder="Enter Patient ID"
          value={patientId}
          onChange={handleInputChange}
        />
        <button onClick={fetchBill}>Fetch Bill</button>
      </div>

      {/* Display Message if Any */}
      {message && <p style={{ color: "red" }}>{message}</p>}

      {/* Render Bill Data If Available */}
      {bill && (
        <div>
          <h2>Patient Details</h2>
          <table border="1">
            <tbody>
              <tr>
                <th>Patient ID</th>
                <td>{bill._id}</td>
              </tr>
              <tr>
                <th>Appointment Date</th>
                <td>{new Date(bill.appointment_date).toLocaleDateString()}</td>
              </tr>
            </tbody>
          </table>

          <h2>Billing Entries</h2>
          {bill.billing_entries.length > 0 ? (
            <table border="1">
              <thead>
                <tr>
                  <th>Sr. No</th>
                  <th>Particular</th>
                  <th>Amount</th>
                  {/* <th>Entry ID</th> */}
                </tr>
              </thead>
              <tbody>
                {bill.billing_entries.map((entry, index) => (
                  <tr key={entry._id || index}>
                    <td>{entry.sr_no}</td>
                    <td>{entry.particular}</td>
                    <td>{entry.amount}</td>
                    {/* <td>{entry._id}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No billing entries found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BillComponent;