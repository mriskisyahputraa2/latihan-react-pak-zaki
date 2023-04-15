function UpdateTodo({ Todo, setTodo, UpdateData, setUpdateData }) {
  //  validasi mengubah task
  const ChangeTask = (e) => {
    let newEntry = {
      id: UpdateData.id,
      title: e.target.value,
      status: UpdateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //   updateTask
  const UpdateTask = () => {
    let filterTodo = [...Todo].filter((task) => task.id !== UpdateData.id);

    let UpdateTodo = [...filterTodo, UpdateData];

    setTodo(UpdateTodo);
    setUpdateData("");
  };

  //   Cancel Update
  const CancelUpdate = () => {
    setUpdateData("");
  };

  return (
    <>
      <div className="flex justify-center mt-10">
        <input
          value={UpdateData && UpdateData.title}
          onChange={(e) => ChangeTask(e)}
          className="rounded-md p-2 w-[21.2rem] mr-1 font-poppins"
          placeholder="Update Task..."
          type="text"
        />
        <button
          onClick={UpdateTask}
          className="bg-green-500 mr-1 rounded-md px-2 hover:bg-green-600 hover:text-white font-poppins">
          Update
        </button>
        <button
          onClick={CancelUpdate}
          className="bg-yellow-500 mr-1 rounded-md px-3 hover:bg-yellow-600 hover:text-white font-poppins">
          Cancel
        </button>
      </div>
    </>
  );
}
export default UpdateTodo;
