const React = require('react')
const Default = require('../layouts/Default.jsx')

class ShowReview extends React.Component {
    render() {
        const { title, author, subject, content } = this.props.review
        return (
            <Default title={title}>
                <div className="review">
                    <h1>{title}</h1>
                    <h2>Subject: {subject}</h2>
                    <h2>Review By: {author}</h2>
                    <br />
                    <p>{content}</p>
                </div>
                
            </Default>
        )
    }
}

module.exports = ShowReview
