import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AddTodo from "./AddTodo";
import UpdateTodo from "./UpdateTodo";

function Todo() {
  // data utama Task
  const [Todo, setTodo] = useState([]);

  // Update Data
  const [UpdateData, setUpdateData] = useState("");

  // delete Task
  const DeleteTask = (id) => {
    let newTasks = Todo.filter((task) => task.id !== id);
    setTodo(newTasks);
  };

  // complete Task
  const ComplateTask = (id) => {
    let newTask = Todo.map((task) => {
      if (task.id === id) {
        // chek statusnya jika status nya sama2 false maka valuenya akan true sehingga task akan tercoret
        return { ...task, status: !task.status };
      }
      return task;
    });
    setTodo(newTask);
  };

  return (
    <>
      {UpdateData && UpdateData ? (
        <UpdateTodo
          Todo={Todo}
          setTodo={setTodo}
          UpdateData={UpdateData}
          setUpdateData={setUpdateData}
        />
      ) : (
        <AddTodo Todo={Todo} setTodo={setTodo} />
      )}

      {Todo && Todo.length ? (
        <>
          {Todo &&
            Todo.sort((a, b) => (a.id > b.id ? 1 : -1)).map((task, index) => {
              return (
                <>
                  <div className="mt-6">
                    <div className={index.id}>
                      <div className="bg-slate-500 max-w-lg flex mx-auto mt-4 p-4 rounded-lg text-left text-white drop-shadow-lg border-b-2 border-white font-poppins">
                        <div className={task.status ? "done" : ""}>
                          <span className="w-[26px] h-[26px] border-solid border-2 rounded-full inline-block text-center mr-2 hover:bg-green-500">
                            {index + 1}
                          </span>
                          <span>{task.title}</span>
                        </div>
                        <div className="ml-auto cursor-pointer">
                          {/* icons complate */}
                          <span
                            onClick={(e) => ComplateTask(task.id)}
                            className="text-green-500 mr-2">
                            <FontAwesomeIcon
                              icon={faCircleCheck}></FontAwesomeIcon>
                          </span>

                          {/* jika icons task sudah complate maka icons edit akan null / hilang */}
                          {task.status ? null : (
                            <span
                              onClick={() => {
                                setUpdateData({
                                  id: task.id,
                                  title: task.title,
                                  status: task.status ? true : false,
                                });
                              }}
                              className="text-yellow-500 mr-2">
                              <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                            </span>
                          )}

                          {/* icons sampah */}
                          <span
                            onClick={() => DeleteTask(task.id)}
                            className="text-red-500 mr-2">
                            <FontAwesomeIcon
                              icon={faTrashCan}></FontAwesomeIcon>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </>
      ) : (
        <>
          <p className="text-center mt-6 text-white font-poppins">No Task...</p>
        </>
      )}
    </>
  );
}

export default Todo;
