
function Comments({comments}) {
  return(
    <div>
      <h2>Comments</h2>
        {comments.length === 0 ? (<p>No comments yet. Be the first to comment!</p>
        ) : (
            <ul>
                {comments.map((comment, index) => (
                    <li key={comment.id || index}>
                        <strong>{comment.name}</strong>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        )}
    </div>
  );
}

export default Comments;