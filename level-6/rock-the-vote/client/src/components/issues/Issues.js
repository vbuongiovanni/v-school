import IssueCard from "./IssueCard";

const Issues = props => {
  const {isShowUserPosts} = props;
  return (
    <main className="issues-container">
      <div className="issue-card-container">
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
        <IssueCard/>
      </div>
    </main>
  )
}

export default Issues;