const React = require('react')
const Default = require('../layouts/Default.jsx')

class IndexReviews extends React.Component {
    render() {
        const { reviews } = this.props
        return (
            <Default title='Check Out The Reviews!'>
                <ul>
                    {reviews.map((review => {
                        const { title, author, subject, _id } = review
                        return (
                            <li key={_id}>
                                <a href={`/we-review/reviews/${_id}`}>{title}</a><br />
                                <p>Album: {subject}</p>
                                <p>Author: {author}</p>
                                <br />
                            </li>
                        )
                    }))}
                </ul>
            </Default>
        )
    }
}

module.exports = IndexReviews
