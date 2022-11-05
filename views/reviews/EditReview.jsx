const React = require('react')
const Default = require('../layouts/Default.jsx')

class EditReview extends React.Component {
    render() {
        const { title, author, subject, content, _id } = this.props.review
        return (
            <Default title={title}>
                <div className="reviewEdit">
                    <form action={`/we-review/reviews/${_id}?_method=PUT`} method="post">
                        Title:<input type="text" name="title" defaultValue={title} />
                        Subject: <input type="text" name="subject" defaultValue={subject} />
                        Review By: <input type="text" name="author" defaultValue={author} />
                        <br />
                        <textarea cols="30" rows="10" name="content" defaultValue={content}></textarea>
                        <br />
                        <input type="submit" value="Submit Changes" className="submit"/>
                        <br />
                    </form>
                    <form action={`/we-review/reviews/${_id}?_method=DELETE`} method="post" className="delete">
                        <input type="submit" value="Delete Review" className="submit"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = EditReview
