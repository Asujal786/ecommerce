import React, { useState, useEffect } from "react";
import axios from "axios";

function ADashboard(props) {
  const [data, setData] = useState(null);
  const [products, setProducts] = useState(true);
  const [createItem, setCreateItem] = useState(false);
  const [userData, setUserData] = useState(null);
  const [seeUsers, setSeeUsers] = useState(false);
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    quantity: 0,
    size: "",
    category: "",
    color: "",
    collection: [],
    image: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await axios.get("http://localhost:5000/users/admin/data");
        setData(productData.data);
        const userData = await axios.get("http://localhost:5000/users/");
        setUserData(userData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, files, checked } = e.target;

    if (type === "file") {
      setProductData({ ...productData, [name]: files[0] });
    } else if (type === "checkbox") {
      const updatedCollection = [...productData.collection];
      if (checked) {
        updatedCollection.push(value);
      } else {
        const index = updatedCollection.indexOf(value);
        if (index !== -1) {
          updatedCollection.splice(index, 1);
        }
      }
      setProductData({ ...productData, collection: updatedCollection });
    } else {
      setProductData({ ...productData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {


      let apiUrl = "";
      if (productData.collection.includes("men")) {
        apiUrl = "http://localhost:5000/men/product/add";
      } else if (productData.collection.includes("kids")) {
        apiUrl = "http://localhost:5000/kid/product/add";
      } else if (productData.collection.includes("women")) {
        apiUrl = "http://localhost:5000/women/product/add";
      } else {
       
        console.error("No collection selected");
        return;
      }
  
     
      await axios.post(apiUrl, productData);
      setProductData({
        name: "",
        description: "",
        price: 0,
        quantity: 0,
        size: "",
        category: "",
        color: "",
        collection: [],
        image: null
      });
    } catch (err) {
      console.log("Error:", err);
    }
  };

  const handleDelete = async (productId) => {
    try {
     
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="a-dash">
      <div className="a-child-1">
        <div className="a-button">
          <ul className="none">
            <li className="none">
              <button onClick={() => {setProducts(true); setSeeUsers(false); setCreateItem(false);}} className="btn btn-primary">Products</button>
            </li>
            <li className="none">
              <button onClick={() => {setProducts(false); setSeeUsers(false); setCreateItem(true);}} className="btn btn-primary">Create Item</button>
            </li>
            <li className="none">
              <button onClick={() => {setProducts(false); setSeeUsers(true); setCreateItem(false);}} className="btn btn-primary">Users</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="a-child-2">
        <div className="a-main-dash">
          {products && (
            <div>
              <h4 className="page-heading">Products</h4>
              <div className="admin-table mx-4">
                {data && (
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Size</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.keys(data).map((category) =>
                        data[category].map((dataItem, index) => (
                          <tr className="product-list-li" key={index}>
                            <td>{dataItem.name}</td>
                            <td>{dataItem.price}</td>
                            <td>{dataItem.quantity}</td>
                            <td>{dataItem.size}</td>
                            <td><img style={{ width: "13px", height: "13px", cursor: "pointer" }} onClick={() => { handleDelete(dataItem._id) }} src="/delete.png" alt="Delete" /></td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
          {seeUsers && (
            <div>
              <h4 className="page-heading">Users</h4>
              {userData && (
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
                    {userData.map((user) => (
                      <tr key={user._id}>
                        <td>{user.fName}</td>
                        <td>{user.lName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.city}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
          {createItem && (
  <div>
    <h4 className="page-heading">Create Item</h4>
    <form onSubmit={handleSubmit}>
    <div className="form-row mx-4">
  <div className="form-group my-1 col-md-6">
    <label htmlFor="collection">Collection:</label>
    <div className="collection-checkboxes my-1">
      <label>Men <input type="checkbox" name="collection" value="men" className="mx-2" checked={productData.collection.includes("men")} onChange={handleChange} /></label>
      <label>Kids <input type="checkbox" name="collection" value="kids" className="mx-2" checked={productData.collection.includes("kids")} onChange={handleChange} /></label>
      <label>Women <input type="checkbox" name="collection" value="women" className="mx-2" checked={productData.collection.includes("women")} onChange={handleChange} /></label>
    </div>
  </div>
  <div className="form-group my-1 col-md-6">
    <label>Choose Image:</label>
    <input type="file" accept="image/*" name="image" onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-6">
    <label htmlFor="name">Name:</label>
    <input type="text" name="name" className="form-control" value={productData.name} onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-6">
    <label htmlFor="description">Description:</label>
    <textarea name="description" className="form-control" value={productData.description} onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-3">
    <label htmlFor="price">Price:</label>
    <input type="number" name="price" className="form-control" value={productData.price} onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-3">
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" name="quantity" className="form-control" value={productData.quantity} onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-3">
    <label htmlFor="size">Size:</label>
    <input type="text" name="size" className="form-control" value={productData.size} onChange={handleChange} />
  </div>
  <div className="form-group my-1 col-md-3">
    <label htmlFor="category">Category:</label>
    <input type="text" name="category" className="form-control" value={productData.category} onChange={handleChange} />
  </div>
  
</div>
<div className="form-group my-1 col-md-12">
  <button type="submit" className="btn btn-primary mx-4">Submit</button>
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
