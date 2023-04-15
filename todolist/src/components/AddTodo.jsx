import { useState } from "react";

function AddTodo({ Todo, setTodo }) {
  // data task sementara
  const [newTask, setNewTask] = useState("");

  const AddTask = () => {
    if (newTask) {
      let num = Todo.length + 1;
      let newTodo = { id: num, title: newTask, status: false };
      setTodo([...Todo, newTodo]);
      setNewTask("");
    }
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
          className="rounded-md mr-1 p-2 w-[26rem] font-poppins"
          placeholder="Add Task..."
          type="text"
        />
        <button
          onClick={AddTask}
          className="bg-green-500 hover:bg-green-600 hover:text-white rounded-lg px-7 font-poppins">
          Add
        </button>
      </div>
    </>
  );
}
export default AddTodo;
