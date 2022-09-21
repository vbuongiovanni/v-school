const Issue = props => {

  return (
    <article className="issue-article">
      <h1>props.title</h1>
      <h4>props.author</h4>
      <h4>props.createdDate</h4>
      <p>props.description</p>
    </article>
  )
}

export default Issue;