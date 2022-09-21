import { useState, useContext } from "react"; 
import { AppContext } from "../../context/AppContext"

const NewIssue = () => {
  const {inputHandler} = useContext(AppContext);

  const initFormInputs = {
    title : "",
    description : ""
  }
  const [issueInputs, setIssueInputs] = useState(initFormInputs);

  return (
    <form>
      <input
        placeholder="Issue Title"
        name="title"
        value={issueInputs.title}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
      />
      <textarea
        placeholder="Description of issue"
        name="description"
        value={issueInputs.description}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
        cols="100" rows="3"></textarea>
    </form>
  )
};

export default NewIssue;