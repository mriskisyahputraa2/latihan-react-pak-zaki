import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-700">
        {/* Title */}
        <div>
          <h1 className="text-7xl font-bold text-center text-white font-poppins">
            TO DO LIST
          </h1>
        </div>
        {/* end Title */}

        <Todo />
      </div>
    </>
  );
}

export default App;
