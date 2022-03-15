import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TableRow from "./components/TableRow";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [editItemId, setEditItemId] = useState(null);
  const [lastId, setLastId] = useState(0);

  const editItem = (id) => {
    setShowForm(true);
    setEditItemId(id);
  };

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  if (data.length) {
    return (
      <div className="m-2">
        <div
          className="md:container md:mx-auto md:px-10 sm:px-4 xl:px-16 relative m-10 max-w-3xl"

        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="button-green content-center"
          >
            Add
          </button>

          <br />
          <br />
          <table id="crud">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => {
                return (
                  <TableRow
                    key={item.id}
                    id={item.id}
                    firstname={item.firstname}
                    lastname={item.lastname}
                    editItem={editItem}
                    deleteItem={deleteItem}
                  />
                );
              })}
            </tbody>
          </table>

          {showForm ? (
            <Form
              editItemId={editItemId}
              setShowForm={setShowForm}
              showForm={showForm}
              data={data}
              setData={setData}
              editItemId={editItemId}
              setEditItemId={setEditItemId}
              lastId={lastId}
              setLastId={setLastId}
            />
          ) : null}
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-2">
        <div
          className="md:container md:mx-auto md:px-10 sm:px-4 xl:px-16 relative m-10 w-40"

        >
          <button
            onClick={() => setShowForm(!showForm)}
            className="button-green place-content-center"
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Add
          </button>
          <br />
          <br />
          <table id="crud">
            <thead>
            <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>

          {showForm ? (
            <Form
              editItemId={editItemId}
              setShowForm={setShowForm}
              showForm={showForm}
              data={data}
              setData={setData}
              editItemId={editItemId}
              setEditItemId={setEditItemId}
              lastId={lastId}
              setLastId={setLastId}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
