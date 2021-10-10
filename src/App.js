import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beranda from './components/Beranda';
import Navbar from './components/Navbar';
import ManajemenBuku from './components/ManajemenBuku';
import { useState } from 'react';

function App() {
  const [books, setBooks] = useState([
    { _id: 1, judul: "Laskar Pelangi", pengarang: "Andrea Hirata", harga: 80000, stok: 7 },
    { _id: 2, judul: "Bumi", pengarang: "Tere Liye", harga: 85000, stok: 5 },
  ]);
  function storeData(inputBook){
    console.log(inputBook);
    alert("Data Berhasil Ditambahkan");
  }
  function updateData(inputBook) {
    console.log(inputBook);
    alert("Data Berhasil diperbaharui!")
  }
  function deleteData(book) {
    console.log(book);
    alert("Data Berhasil Dihapus!")
  }
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact>
            <Beranda bookList={books}/>
          </Route>

          <Route path="/manajemen-buku" exact>
            <ManajemenBuku 
            bookList={books} 
            store={storeData} 
            update={updateData}
            remove={deleteData}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
