import { useState, useContext, useEffect} from "react";
import IssueCard from "./IssueCard";
import {IssueContext} from "../../context/IssueContext";
import { AppContext } from "../../context/AppContext";

const Issues = props => {
  const {getIssues} = useContext(IssueContext);
  const {useLocation, navToSpecificIssue, navToEditUserIssue} = useContext(AppContext);
  const location = useLocation().pathname;

  const initIssue = {
    author : "",
    createdDate : "",
    description : "",
    title : "",
    voteBalance : 0,
    _id : 0,
  };

  const [issues, setIssues] = useState([initIssue]);

  useEffect(() => {
    getIssues(props.username, setIssues);
  }, [location])

  const handleIssueSelect = (e) => {
    const {id} = e.target;
    navToSpecificIssue(id);
  }

  return (
    <main className="issues-container">
        <div className="issue-card-container">
          { 
            issues.map((issue, index) => <IssueCard key={index} issueDetails={issue} handleIssueSelect={handleIssueSelect}/>)
          }
        </div>
    </main>
  )
}

export default Issues;  