import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import { useLoaderData } from "react-router-dom";


const AllToys = () => {
  const toysData = useLoaderData();
  useTitle("All Toys");
    let i = 1;
    
  const [searchedText, setSearchedText] = useState(" ");

  const [toys, setToys] = useState(toysData);

  // search toy
    const search = (event) => {
      console.log(event.target.value);
      const matchedName = toysData.filter((name) => {
        console.log("Name: ", name);
        return name.toyName
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });
      console.log("matched data: ", matchedName);
      setToys(matchedName);
      setSearchedText(event.target.value);
    };

 

  return (
    <div className="container">
      <div className="p-5">
        <h1 className="text-center text-color fw-bold mb-5">
          All <span className="text-danger">TOY</span> Collection
        </h1>
        <div className="p-2 text-center ">
          <form>
            <div className="form-control mx-auto">
              <div>
                <p className="text-center fw-bold fs-5 text-color">Search Toy Here</p>
              </div>
              <input
                type="text"
                placeholder="Search"
                id="SearchToy"
                className=""
                value={searchedText}
                onChange={search}
              />
            </div>
          </form>
        </div>
        <div className="table-responsive">
          <table className="table text-center">
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Seller</th>
                <th>Toy Name</th>
                <th>Sub-category</th>
                <th>Price</th>
                <th>Available Quantity</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {toys.slice(0,20).map((data) => (
                <tr key={data.id}>
                  <td>{i++}</td>
                  <td>{data.sellerName}</td>
                  <td>{data.toyName}</td>
                  <td>{data.subCategory}</td>
                  <td>{data.price}</td>
                  <td>{data.availableQuantity}</td>
                  <td>
                    {/* {console.log("on map :", data)} */}
                    <button
                      type="button"
                      className="btn w-75 btn-info"
                      onClick={() => setModalShow(true)}
                    >
                      View Details
                    </button>
                    {/* <AllToysDetails
                      show={modalShow}
                      onHide={() => setModalShow(false)}
                      data={data}
                    /> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
