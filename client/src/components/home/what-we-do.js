import "./style.css";
const WhatWeDo = () => {
  return (
    <>
      <div className="container mb-5" style={{ marginTop: 300 }}>
        <div className="container provided-products col-md-10">
          <h5>Pentesting Products</h5>
          <h2>Products We Provide</h2>
          <p className="global-text">
            A penetration test, or pen test, is the simulation of a cyber
            attack. The goal i s to assess a network’s security to improve it
            and thus prevent exploits by real threat actors by fixing
            vulnerabilities. This critical IT security practice isn’t the same
            as a vulnerability assessment or vulnerability scanning, though, as
            pen testing involves an actual attack similar to what hackers would
            do in real-world conditions. Pen tests are often performed by third
            parties, but as these outside tests can be expensive and become
            dated quickly, many organizations perform their own tests with pen
            testing tools, using their own IT personnel for their red teams
            (attackers).
          </p>
        </div>
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
