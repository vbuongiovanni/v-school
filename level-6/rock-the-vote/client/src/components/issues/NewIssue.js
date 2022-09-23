import { useState, useContext } from "react"; 
import { AppContext } from "../../context/AppContext";

const NewIssue = () => {
  const {inputHandler, postNewIssue} = useContext(AppContext);

  const initFormInputs = {
    title : "",
    description : ""
  }
  const [issueInputs, setIssueInputs] = useState(initFormInputs);

  const handleFormSubmit = e => {
    e.preventDefault();
    postNewIssue(issueInputs);
  }

  return (
    <form className="new-issue-form" onSubmit={handleFormSubmit}>
      <input
        className="issue-name-title"
        placeholder="Issue Title"
        name="title"
        value={issueInputs.title}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
      />
      <p>Provide a clear and concise summary of the issue you want to raise attention to: </p>
      <textarea
        className="issue-description"
        placeholder="Description of issue"
        name="description"
        value={issueInputs.description}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
        cols="100" rows="3"></textarea>
        <button>Submit Issue</button>
    </form>
  )
};

export default NewIssue;