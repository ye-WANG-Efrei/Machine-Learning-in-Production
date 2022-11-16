import React,  { useEffect, useState } from "react";
import {getTask,updateTask,deleteTask} from "../services/task.service";

export const Task = (props) => {

  useEffect(() => {
		getTask(props.match.params.id)
	  }, []);

    
	const [currentTask, setCurrentTask] = useState({
    id: null,
    title: "",
    description: "",
    published: false
  });
	const [message, setMessage] = useState("");
 

  const onChangeTitle = (e)=> {
    const title = e.target.value;

    setCurrentTask({
        ...currentTask,
        title: title
    })
  }

  const onChangeDescription = (e) => {
    const description = e.target.value;
    setCurrentTask({
      ...currentTask,
      description: description
    })
  }

  const getTask = (id) => {
    getTask(id)
      .then(response => {
        setCurrentTask(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const updatePublished = (status) => {
    var data = {
      id: currentTask.id,
      title: currentTask.title,
      description: currentTask.description,
      published: status
    };

    updateTask(this.state.currentTask.id, data)
      .then(response => {
        this.setCurrentTask({
          ...currentTask,
            published: status
          }
        );
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  const updateTask = () => {
    updateTask(
      currentTask.id,
      currentTask
    )
      .then(response => {
        console.log(response.data);
        setMessage(
          "The task was updated successfully!"
        );
      })
      .catch(e => {
        console.log(e);
      });
  }

  const deleteTask = () => {    
    deleteTask(this.state.currentTask.id)
      .then(response => {
        console.log(response.data);
        props.history.push('/tasks')
      })
      .catch(e => {
        console.log(e);
      });
  }


    return (
      <div>
        {currentTask ? (
          <div className="edit-form">
            <h4>Task</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentTask.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentTask.description}
                  onChange={this.onChangeDescription}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentTask.published ? "Published" : "Pending"}
              </div>
            </form>

            {currentTask.published ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(false)}
              >
                UnPublish
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updatePublished(true)}
              >
                Publish
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deleteTask}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateTask}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Task...</p>
          </div>
        )}
      </div>
    );
}
