require('dotenv').config()

const db = require('./db')
const Review = require('./review')

const dummyReviews = [
    {title: 'Goddess Back for More' , author: 'banksStan1993', subject: 'Banks - III', content: 'Yet another incredible album by the Goddess herself...'},
    {title: 'Shedding Some Layers', author: 'banksStan1993', subject: 'Banks - Serpentina', content: 'A sleek album that sees BANKS changing up her style and moving forward at the same time...'},
    {title: 'Classic Dirtbag Music' , author: 'someHipster', subject: 'The 1975 - Being Funny...', content: 'Being Funny in a Foreign Language feels like a return to the roots of The 1975...'},
    {title: 'Coke Rap Royalty', author: 'idkHonestly', subject: 'Freddie Gibbs - $oul $old $eparately', content: 'Yet again, Freddie shows us his consistency in releasing incredible tracks...'}
]

Review.create(dummyReviews).then((createdReviews) => {
    console.log('Created reviews: ', createdReviews)
    db.close()
}).catch(error => {
    console.log(error)
    db.close()
})