import { useEffect, useState } from "react";
import "./addProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../actions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../login/loader";
const AddProduct = () => {
  //* states
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const [name, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  const success = useSelector((state) => state.product.success);
  const error = useSelector((state) => state.product.error);
  const isLoading = useSelector((state) => state.product.loading);

  //todo useEffect for handling success and error message
  useEffect(() => {
    if (success) {
      toast.success(success);
      console.log(success);
    }
    if (error) {
      console.log(error);
      toast.error(error);
    }
  }, [success, error]);

  //! function for adding features
  const addFeature = () => {
    if (newFeature.trim() === "") {
      alert("Please Enter something to add feature");
    } else {
      setFeatures([...features, newFeature]);
      setNewFeature("");
    }
  };

  //*function for removing features
  const removeFeature = (index) => {
    let updatedFeature = [...features];
    updatedFeature.splice(index, 1);
    setFeatures(updatedFeature);
  };

  //?function for adding product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !price || features.length === 0) {
      alert("Please fill all the details!");
    } else {
      const productData = {
        name,
        price,
        features,
      };
      dispatch(addProduct(productData));
      setFeatures([]);
      setProductName("");
      setPrice("");
    }
  };
  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container my-5 form-container">
          <div className="row justify-content-center" style={{ gap: 100 }}>
            <div className="col-md-4 form-col">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={name}
                    onChange={(e) => setProductName(e.target.value)}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Product Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    style={{
                      WebkitAppearance: "none",
                      MozAppearance: "none",
                      appearance: "none",
                      margin: 0,
                    }}
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Features
                  </label>
                  <div className="d-flex gap-2">
                    {" "}
                    <input
                      type="text"
                      value={newFeature}
                      onChange={(e) => setNewFeature(e.target.value)}
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                    <button
                      type="button"
                      onClick={addFeature}
                      className="btn btn-primary"
                    >
                      <i class="fas fa-plus-circle"></i>
                    </button>
                  </div>
                </div>
                <div className="mb-3">
                  {features &&
                    features.map((feature, index) => {
                      return (
                        <>
                          <div className="d-flex gap-2">
                            <input
                              key={index}
                              class="form-control mt-2 w-75"
                              type="text"
                              value={feature}
                              aria-label="Disabled input example"
                              readonly
                              disabled
                            ></input>
                            <button
                              type="button"
                              className="btn btn-danger mt-2"
                              onClick={() => removeFeature(index)}
                            >
                              <i className="fas fa-trash"></i>
                            </button>
                          </div>
                        </>
                      );
                    })}
                  <button type="submit" className="btn btn-success w-100 mt-3">
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default AddProduct;
