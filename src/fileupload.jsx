import React, { useState } from 'react';
import csvtojson from 'csvtojson';
import Orders from './orders.jsx';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [jsonOrders, setJsonOrders] = useState(null);
  const [error, setError] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  const handleFileUpload = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    setJsonOrders(null);
    setError(null);

    const reader = new FileReader();

    reader.onload = async function (e) {
      const csvData = e.target.result;

      try {
        const jsonArray = await csvtojson().fromString(csvData);
        setJsonOrders(jsonArray);
      } catch (error) {
        console.error('Error parsing CSV:', error);
        setError('Error parsing CSV. Please make sure the file is in the correct format.');
      }
    };

    reader.onerror = function (e) {
      console.error('Error reading file:', e.target.error);
      setError('Error reading file. Please try again.');
    };

    reader.readAsText(selectedFile);
  };

  return (
    <div className="container mt-5 mb-5">
      <h3 className="text-center">Upload your trades from Interactive Brokers</h3>
      
      <div className="input-group mt-2">
        <input type="file" className="form-control" onChange={handleFileUpload} />
      </div>
	<div className="d-flex align-items-center">
        <div>
          <small className="form-text text-muted">Choose a CSV file to upload</small>
        </div>
        <div className="ms-2">
          <OverlayTrigger
            placement="bottom"
            overlay={<Tooltip id="tooltip">DateTime should be as YYYY-MM-DDT00:00:00</Tooltip>}
            show={showTooltip}
          >
            <span onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}>
              <i className="bi bi-info-circle"></i>
            </span>
          </OverlayTrigger>
        </div>
      </div>

      {error && <div className="alert alert-danger mt-3">{error}</div>}

      {jsonOrders && <Orders jsonOrders={jsonOrders} />}
    </div>
  );
};

export default FileUpload;
