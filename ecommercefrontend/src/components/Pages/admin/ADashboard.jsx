import React, { useState, useEffect } from "react";
import axios from "axios";

function ADashboard(props) {
  const [Data, SetData] = useState(null);
  const [Products, SetProducts] = useState(true);
  const [CreateItem, SetCreateItem] = useState(false);
  const [UserData, SetUserData] = useState(null);
  const [SeeUsers, SetSeeUsers] = useState(false);
  const [ProductData, SetProductData] = useState("");
  const [collection, SetCollection] = useState("men");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch products data
        const ProductData = await fetch(
          "http://localhost:5000/users/admin/data"
        );
        const productJson = await ProductData.json();
        SetData(productJson);

        // Fetch users data
        const userData = await fetch("http://localhost:5000/users/");
        const userJson = await userData.json();
        SetUserData(userJson);

        console.log(UserData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    SetProductData({ ...ProductData, [name]: value });
  }

  

  function handleSubmit(e) {
    try {
      axios
        .post(`http://localhost:5000/${collection}/product/add`)
        .then((res) => console.log(res));
    } catch(err) {
        console.log(err)
    }
  }

function handledelete(productId){
   


}

  return (
    <div className="a-dash">
      <div className="a-child-1">
        <div className="a-button">
          <ul className="none">
            <li className="none">
              <button
                onClick={() => {
                  SetProducts(true);
                 
                  SetSeeUsers(false);
                  SetCreateItem(false);
                }}
                className="btn btn-primary"
              >
                Products
              </button>
            </li>
            <li className="none">
              <button
                onClick={() => {
                  SetProducts(false);
                  
                  SetSeeUsers(false);
                  SetCreateItem(true);
                }}
                className="btn btn-primary"
              >
                Create Item
              </button>
            </li>
            <li className="none">
              <button
                onClick={() => {
                  SetProducts(false);
                 
                  SetSeeUsers(true);
                  SetCreateItem(false);
                }}
                className="btn btn-primary"
              >
                Users
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="a-child-2">
        <div className="a-main-dash">
          {Products && (
            <div>
              <h4 className="page-heading">Products</h4>
              <div className="admin-table mx-4">
                {Data && (
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th> Delete </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(Data).map((category) =>
                        Data[category].map((dataItem, index) => (
                          <tr className="product-list-li" key={index}>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.price}</td>
                            <td>{dataItem.quantity}</td>
                            <td>{dataItem.size}</td>
                            <td> <img style={{width:"13px ", height:"13px", cursor:"pointer"}} onClick={()=>{handledelete(dataItem._id)}} src="/delete.png"></img></td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
          {SeeUsers && (
            <div>
              <h4 className="page-heading">Users</h4>
              {UserData && (
                <table>
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Phone Number</th>
                      <th>City</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UserData.map((User) => (
                      <tr key={User._id}>
                        <td>{User.fName}</td>
                        <td>{User.lName}</td>
                        <td>{User.email}</td>
                        <td>{User.phoneNumber}</td>
                        <td>{User.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {CreateItem && (
            <div>
              <h4 className="page-heading">Products</h4>

              <form onSubmit={handleSubmit}>
                <div className="form-row mx-4">
                  <div className="form-group my-1 col-md-12">
                    <label htmlFor="name">Product Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Product Name"
                      name="name"
                      value={ProductData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      placeholder="Description"
                      name="description"
                      value={ProductData.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12 ">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      placeholder="Price"
                      name="price"
                      value={ProductData.price}
                      onChange={handleChange}
                    />

                    <label htmlFor="quantity">Quantity</label>
                    <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      placeholder="Quantity"
                      name="quantity"
                      value={ProductData.quantity}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12">
                    <label htmlFor="size">Size</label>
                    <input
                      type="text"
                      className="form-control"
                      id="size"
                      placeholder="Size"
                      name="size"
                      value={ProductData.size}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      className="form-control"
                      id="category"
                      placeholder="Category"
                      name="category"
                      value={ProductData.category}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12">
                    <label htmlFor="color">Color</label>
                    <input
                      type="text"
                      className="form-control"
                      id="color"
                      placeholder="Color"
                      name="color"
                      value={ProductData.color}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group my-1 col-md-12">
                    <label>Collection:</label>
                    <div className="collection-checkboxes my-1">
                      <label>
                        Men
                        <input
                          type="checkbox"
                          name="collection"
                          value="men"
                          className="mx-2"
                          checked={ collection==="men"}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Kids
                        <input
                          type="checkbox"
                          name="collection"
                          value="kids"
                          className="mx-2"
                          checked={ collection==="kid"}
                          onChange={handleChange}
                        />
                      </label>
                      <label>
                        Women
                        <input
                          type="checkbox"
                          name="collection"
                          className="mx-2"
                          value="women"
                          checked={ collection==="women"
                            }
                          onChange={handleChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group my-1 col-md-12">
                  <button type="submit" className="btn btn-primary mx-4">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ADashboard;
