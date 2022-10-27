import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getDataByDistrictName } from "./util";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const handleClose = () => setShow(false);

  const onDistrictClick = (district_name) => {
    const filtered_data = getDataByDistrictName(district_name);
    console.log(filtered_data);
    setData(filtered_data);
    setShow(true);
  };

  const data_component = () => {
    return (
      <>
        {data.map((item) => (
          <div
            className="mb-2 border-bottom"
            key={Math.floor(Math.random() * 1000000)}
          >
            <p>{item.Province}</p>
            <p>{item.Province_ENg}</p>
            <p>{item.Province_Num}</p>
            <p>{item.Constituent_Assembly}</p>
            <p>{item.Pratinidhi_Sabha}</p>
            <p>{item.RepresentativeGroup}</p>
            <p>{item.Nominee}</p>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="">
      {/* Add onClick method for the each district vector image  */}
      <button onClick={() => onDistrictClick("Jhapa")}>Jhapa</button>
      <button onClick={() => onDistrictClick("Udayapur")}>Udayapur</button>
      <button onClick={() => onDistrictClick("Morang")}>Morang</button>
      {show && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>{data_component()}</Modal.Body>
        </Modal>
      )}
    </div>
  );
}

export default App;
