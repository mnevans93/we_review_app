const React = require('react')
const Default = require('../layouts/Default.jsx')

class ShowReview extends React.Component {
    render() {
        const { title, author, subject, content, _id } = this.props.review
        return (
            <Default title={title}>
                <div className="reviewShow">
                    <h1>{title}</h1>
                    <h2>Subject: {subject}</h2>
                    <h2>Review By: {author}</h2>
                    <br />
                    <p>{content}</p>
                    <br /><br />
                    <a href={`/we-review/reviews/${_id}/edit`}>Edit This Review</a>
                </div>
            </Default>
        )
    }
}

module.exports = ShowReview
