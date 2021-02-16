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
      const result = await axios("https://www.anapioficeandfire.com/api/books");
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
          }
          
        ]
      },
      {
        // Second group - Details
        Header: "Details",
        // Second group columns
        columns: [
          {
            Header: "Isbn",
            accessor: "show.isbn"
          },
          {
            Header: "Authors",
            accessor: "show.authors"
          },
          {
            Header: "Publisher",
            accessor: "show.publisher"
          },
          {
            Header: "Media Type",
            accessor: "show.mediaType"
          },
          {
            Header: "Released",
            accessor: "show.released"
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
