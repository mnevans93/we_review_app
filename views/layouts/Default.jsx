const React = require('react')

class Default extends React.Component {
    render () {
        const { loggedIn, title } = this.props
        return (
        <html>
            <head>
                <link rel="stylesheet" href="/app.css" />
                <title>{title}</title>
            </head>
            <body>
                <nav>
                    <a href="/we-review/reviews/new">Post a New Review</a>
                    <a href="/we-review/reviews/browse">Browse All Reviews</a>
                </nav>
                {this.props.children}
            </body>
        </html>
        )
    }
}

module.exports = Default
