
function Beranda({bookList}) {
  return (
    <div className="container mt-3 w-100">
      <h1 className="text-center">Katalog Buku</h1>
      <div id="katalogBuku" className="mt-5">
        <table className="table table-hover table-bordered">
          <thead>
            <tr>
              <th>No.</th>
              <th>Judul</th>
              <th>Pengarang</th>
              <th>Harga</th>
              <th>Stok</th>
            
            </tr>
          </thead>
          <tbody>
            {bookList.map((book, index) => (
              <tr key={book._id}>
                <td>{index + 1}</td>
                <td>{book.judul}</td>
                <td>{book.pengarang}</td>
                <td>{book.harga}</td>
                <td>{book.stok}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Beranda;
