const IssueCard = props => {

  return (
    <div className="issue-card">
      <h1>props.title</h1>
      <h4>props.author</h4>
      <h4>props.createdDate</h4>
    </div>
  )

}
export default IssueCard;