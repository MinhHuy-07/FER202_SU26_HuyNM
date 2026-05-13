
import './App.css';

function App() {
  let Chao1 = (name) => console.log(`Xin chao ${name}!`);

  let person = {
    name: "Bob",
    age: 20,
    id: 1
  }
  return (
    <>
      <h1>Hello</h1>
      <button onClick={() => Chao1("Huy")}>Click</button>

      <h3>Thong tin</h3>
      <p>Ten: {person.name}</p>
      <p>Tuoi: {person.age}</p>
      <p>ID: {person.id}</p>
    </>
  );
}

export default App;
