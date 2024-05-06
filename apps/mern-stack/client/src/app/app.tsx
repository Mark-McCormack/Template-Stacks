// Importing components from their folders
import CreateComponent from './components/createComponent';
import GetComponent from './components/getComponent';
import UpdateComponent from './components/updateComponent';
import DeleteComponent from './components/deleteComponent';

function App() {
  return (
    <div className="App">
      {/* List of Components for CRUD Activities */}
      <CreateComponent></CreateComponent>
      <GetComponent></GetComponent>
      <UpdateComponent></UpdateComponent>
      <DeleteComponent></DeleteComponent>
    </div>
  );
}

export default App;
