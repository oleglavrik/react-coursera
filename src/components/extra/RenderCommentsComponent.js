import React from 'react';

function RenderComments({comments}) {
    if(comments != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments</h4>
                <ul className="comments-list">
                    {comments.map((comment) => {
                        return (
                            <li key={comment.id} className="list-unstyled">
                                <p>{comment.comment}</p>
                                <p>
                                    -- { comment.author },
                                    {" " + new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default RenderComments;