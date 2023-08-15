import "./style.css";
const Client = () => {
  return (
    <>
      <div className="client container-fluid">
        <div className="containe py-5">
          <div className="row justify-content-center gap-3">
            <div className="col-md-2 client-col">
              <div className="client-icon">
                <i className="fa fa-user" />
              </div>
              <div className="counter-content d-flex">
                <h2 className="counter-number">15</h2>
                <span className="counter-suffix">K</span>
              </div>
              <div className="counter-title">
                <h5 className="text-white fw-bold">Happy Clients</h5>
              </div>
            </div>
            <div className="col-md-2 client-col">
              <div className="client-icon">
                <i className="fas fa-hand-holding-usd" />
              </div>
              <div className="counter-content d-flex">
                <h2 className="counter-number">12</h2>
                <span className="counter-suffix">+</span>
              </div>
              <div className="counter-title">
                <h5 className="text-white fw-bold">Account Number</h5>
              </div>
            </div>
            <div className="col-md-2 client-col">
              <div className="client-icon">
                <i className="fas fa-thumbs-up fa-lg" />
              </div>
              <div className="counter-content d-flex">
                <h2 className="counter-number">10</h2>
                <span className="counter-suffix">K</span>
              </div>
              <div className="counter-title">
                <h5 className="text-white fw-bold">Finished Projects</h5>
              </div>
            </div>
            <div className="col-md-2 client-col">
              <div className="client-icon">
                <i className="fas fa-award fa-4x" />
              </div>
              <div className="counter-content d-flex">
                <h2 className="counter-number">992</h2>
                <span className="counter-suffix">+</span>
              </div>
              <div className="counter-title">
                <h5 className="text-white fw-bold">Win Awards</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Client;
