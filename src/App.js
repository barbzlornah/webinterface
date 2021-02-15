import React, { useMemo,useState,useEffect } from "react";
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Characters from "./components/Characters";
import Houses from "./components/Houses";
import Home from "./components/Home"

function App() {

  const [data, setData] = useState([]);
  

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  
  
  const columns = useMemo(
    () => [
      {
        // first group - Books
        Header: "Books",
        // First group columns
        columns: [
          {
            Header: "Name",
            accessor: "show.name"
          },
          {
            Header: "Isbn",
            accessor: "show.type"
          }
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Authors",
            accessor: "show.language"
          },
          {
            Header: "Publisher",
            accessor: "show.genres"
          },
          {
            Header: "Media Type",
            accessor: "show.runtime"
          },
          {
            Header: "Released",
            accessor: "show.status"
          }
        ]
      }
    ],
    []
  );

return (
    <div className = "app">
      <Navbar/>
      <Home/>
      <Houses/>
      <Characters/>
      <Books columns={columns} data={data} />
    </div>
    )
}

export default App;
