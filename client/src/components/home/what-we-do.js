import "./style.css";
const WhatWeDo = () => {
  return (
    <>
      <div className="container mb-5" style={{ marginTop: 150 }}>
        <div className="row justify-content-center gap-5">
          <div className="col-md-3 do-col">
            <i className="fas fa-database icon hov-icon" />
            <h2 className="text-center">AV Detection Bypass</h2>
            <p className="global-text text-center" style={{ fontSize: 14 }}>
              This tool can able to bypass antivirus, and provide you shell with
              all access, and data. 30 Days Trail for now*
            </p>
          </div>
          <div className="col-md-3 do-col">
            <i
              className="fas fa-user-ninja icon hov-icon"
              style={{ backgroundColor: "#eb6b3d" }}
            />
            <h2>Red Teaming Assessment</h2>
            <p className="global-text text-center" style={{ fontSize: 14 }}>
              This tool can able to preform Exploit level VAPT on given targets.
              30 Days Trail for now*
            </p>
          </div>
          <div className="col-md-3 do-col">
            <i
              className="fas fa-user-shield icon hov-icon"
              style={{ backgroundColor: "#c216db" }}
            />
            <h2>Data Breach</h2>
            <p className="global-text text-center" style={{ fontSize: 14 }}>
              This tool can able to provide you info about your server's data
              breach and details. 30 Days Trail for now*
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
