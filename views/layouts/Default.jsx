const React = require('react')

class Default extends React.Component {
    render () {
        const { title } = this.props
        return (
        <html>
            <head>
                <link rel="stylesheet" href="/app.css" />
                <title>{title}</title>
            </head>
            <body>
                <nav>
                    {title == "Write a New Review!" ? '' : <a href="/we-review/reviews/new">Post a New Review</a>}
                    {title == "Check Out The Reviews!" ? '' : <a href="/we-review/reviews/">Browse All Reviews</a>}
                    {title == "Account" ? '' : <a href="/we-review/account/">Account</a>}
                </nav>
                {this.props.children}
            </body>
        </html>
        )
    }
}

module.exports = Default
