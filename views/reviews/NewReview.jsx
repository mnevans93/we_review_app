const React = require('react')
const Default = require('../layouts/Default.jsx')

class NewReview extends React.Component {
    render() {
        return (
            <Default title="Write a New Review!">
                <div className="reviewEdit">
                    <form action="/we-review/reviews" method="post">
                        Title:<input type="text" name="title" placeholder='Review Title' />
                        Subject: <input type="text" name="subject" placeholder='Review Subject (Artist, album, etc)' />
                        Review By: <input type="text" name="author" placeholder='Review Author' />
                        <br />
                        <textarea cols="30" rows="10" name="content" placeholder='Tell us what you think!'></textarea>
                        <br />
                        <input type="submit" value="Submit Review" className="submit"/>
                    </form>
                </div>
            </Default>
        )
    }
}

module.exports = NewReview
