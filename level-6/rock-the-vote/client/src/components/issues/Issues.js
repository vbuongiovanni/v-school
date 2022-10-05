import { useState, useContext, useEffect} from "react";
import IssueCard from "./IssueCard";
import {IssueContext} from "../../context/IssueContext";
import { AppContext } from "../../context/AppContext";

const Issues = props => {
  const {getIssues} = useContext(IssueContext);
  const {useLocation, navToSpecificIssue, prettyDate} = useContext(AppContext);
  const {pathname} = useLocation();

  const {username} = JSON.parse(localStorage.getItem("user"));

  const greetingText = pathname.substring(0, 3) === "/my" ? `Issues raised by ${username}` : "Community Issues";

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
  }, [pathname, issues.filter(issue => issue._id !== 0).length]);

  const handleIssueSelect = (e) => {
    const {id} = e.target;
    navToSpecificIssue(id);
  }

  return (
    <main className="issues-container">
        <h1 className="issue-list-greeting">{greetingText}</h1>
        <div className="issue-card-container">
          {issues.length > 0 && issues[0]._id !== 0 ? 
            issues.map((issue, index) => <IssueCard key={index} issueDetails={issue} prettyDate={prettyDate} handleIssueSelect={handleIssueSelect}/>)
            :
            <div className="empty-list-container">
              <p className="empty-list-text">There doesn't seem to be any issues posted yet...</p>
              <p className="empty-list-text">Create a post to raise awareness about an issue!</p>
            </div>
          }
        </div>
    </main>
  )
}

export default Issues;  