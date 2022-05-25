import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';
import {useEffect, useState} from "react";
import axios from 'axios';

function App() {
  const [books,setBooks,] = useState([]);
  useEffect(()=>{
    retrieveData();
  }, []);

  //mengambil semua data dari database
  function retrieveData(){
    axios 
    .get("http://localhost:4000/book")
    .then((response) =>{
        setBooks(response.data);
    })
    .catch(function(error){
      console.log(error);
    });
  }
  function storeData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil Ditambahkan");
    axios
      .post('http://localhost:4000/book/add', inputBook)
      .then((res) => {
        setBooks((prevBooks) => [...prevBooks, inputBook]);
        alert('Data Berhasil ditambahkan!');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function updateData(inputBook) {
    // console.log(inputBook);
    // alert("Data Berhasil diperbaharui!");
    axios
      .put('http://localhost:4000/book/update/' + inputBook._id, inputBook)
      .then((res) => {
        retrieveData();
        alert('Data Berhasil Diperbaharui!');
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  }
  function deleteData(book) {
    axios
      .delete('http://localhost:4000/book/delete/' + book._id)
      .then(() => {
        retrieveData();
        alert('Data Berhasil Dihapus');
      })
      .catch((error) => {
        console.log(error.response.data);
      });

    // console.log(book);
    // alert("Data Berhasil Dihapus!");
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books} />
          </Route>

          <Route path="/manajemen-buku" exact>
            <ManajemenBuku bookList={books} store={storeData} update={updateData} remove={deleteData} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
