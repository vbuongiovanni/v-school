import { useState, useContext, useEffect} from "react";
import IssueCard from "./IssueCard";
import Issue from "./Issue";
import {IssueContext} from "../../context/IssueContext";
import { AppContext } from "../../context/AppContext";

const Issues = props => {
  const {getIssues} = useContext(IssueContext);
  const {useLocation} = useContext(AppContext);
  const location = useLocation().pathname;

  const initIssue = {
    author : "",
    createdDate : "",
    description : "",
    title : "",
    votes : 0,
    _id : 0,
  };

  const [issues, setIssues] = useState([initIssue]);
  const [selectedIssue, setSelectedIssue] = useState();

  useEffect(() => {
    getIssues(props.username, setIssues);
  }, [location])

  const handleIssueSelect = (e) => {
    const {id} = e.target;
    setSelectedIssue(id);
  }

  const handleBack = (e) => {
    e.preventDefault();
    setSelectedIssue(undefined);
    return false;
  }

  return (
    <main className="issues-container">

      {!selectedIssue ? 
        <div className="issue-card-container">
          { 
          issues.map(issue => {
            return <IssueCard issueDetails={issue} handleIssueSelect={handleIssueSelect}/>
          })
          }
        </div>
        :
        <div className="issue-detail-container">
          <Issue  issueDetails={issues.find(issue => issue._id === selectedIssue)}/>
          <button onClick={handleBack}>See all Issues</button>
        </div>
      }

    </main>
  )
}

export default Issues;  