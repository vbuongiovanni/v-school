import { useState, useContext, useEffect} from "react"; 
import {useParams} from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { IssueContext } from "../../context/IssueContext";

const NewIssue = (props) => {

  const {isEdit} = props;
  let { issueId } = useParams();
  const {inputHandler, navToUserIssues, navToSpecificIssue} = useContext(AppContext);
  const {getIssue, postNewIssue, deleteIssue, editIssue} = useContext(IssueContext);

  const initFormInputs = {
    title : "",
    description : ""
  };

  const [issueInputs, setIssueInputs] = useState(initFormInputs);
  
  useEffect(() => {
    if (isEdit) {
      getIssue(issueId, setIssueInputs);
    }
  }, []);

  // conditional - either send PUT request if isEdit is true, otherwise send POST request:
    const handleFormSubmit = e => {
      e.preventDefault();
      if (isEdit) {
        editIssue(issueId, issueInputs, navToSpecificIssue);
      } else {
        postNewIssue(issueInputs, navToSpecificIssue);
      }
      navToUserIssues();
    }

  // handle DELETE request - will only render if isEdit is true
    const handleDeleteRequest = e => {
      e.preventDefault();
      deleteIssue(issueId);
      navToUserIssues();
    }

  return (
    <form className="new-issue-form" onSubmit={handleFormSubmit}>
      <input
        className="issue-form-title"
        placeholder="Issue Title"
        name="title"
        value={issueInputs.title}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
      />
      <p>Provide a clear and concise summary of the issue you want to raise attention to: </p>
      <textarea
        className="issue-form-description"
        placeholder="Description of issue"
        name="description"
        value={issueInputs.description}
        onChange={e => inputHandler(e, setIssueInputs)}
        required
        cols="100" rows="3"></textarea>
        <button className="color-btn clickable">{isEdit ? "Submit Edited Issue" : "Submit Issue"}</button>
        {isEdit && <button className="caution-btn clickable" onClick={handleDeleteRequest}>Delete Issue</button>}
    </form>
  );
};

export default NewIssue;