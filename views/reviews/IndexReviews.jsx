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
                                <a href={`/reviews/${_id}`}>{title}</a><br />
                                <p>{author}</p>
                                <p>{subject}</p>
                            </li>
                        )
                    }))}
                </ul>
            </Default>
        )
    }
}

module.exports = IndexReviews
