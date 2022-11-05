# **WeReview App**

## Introduction
Hi there! Thanks for checking out this repository for my *WeReview* app. This project was started as part of the General Assembly Software Engineering Immersive bootcamp. The idea was to create a platform for user-focused music reviews.
![Screenshot](Screenshot.png)

## Resources
Trello Board: https://trello.com/b/kUfwC0eI/wereview-app

Wireframe: https://wireframepro.mockflow.com/view/MOvpXdbNvob

ERD: https://lucid.app/lucidchart/e979197d-7dee-402e-9dab-a7f8025e91a3/edit?invitationId=inv_62e0f26f-992d-4afa-9b54-1038a9e50b6c

## REST Routes for Reviews ##

 Route | Action |     URL    | HTTP Verb |  View  |     Mongoose method     |
 :---: | :----: | :--------: | :-------: | :----: | :---------------------: |
   1   | Index  | /we-review/reviews      | GET       | IndexReviews  | Review.find()              |
   2   | Show   | /we-review/reviews/:id  | GET       | ShowReview   | Review.findByID()          |
   3   | New    | /we-review/reviews/new  | GET       | NewReview    | N/A                     |
   4   | Create | /we-review/reviews      | POST      | N/A    | Review.create()            |
   5   | Edit   | /we-review/reviews/:id/edit | GET   | EditReview   | Review.findbyID()          |
   6   | Update | /we-review/reviews/:id  | PUT       | N/A    | Review.findByIDAndUpdate() |
   7   | Delete | /we-review/reviews/:id  | DELETE    | N/A    | Review.findByIDAndDelete() |

## Technologies Used
* HTML
* CSS
* JavaScript
* Node.js
* MongoDB
* Mongoose
* Express
* React

## Next Steps
*WeReview* is a work in progress as I would still like to add more functionality including, but not limited to, user authentication/authorization features, the ability to like and comment on reviews, linking reviews to specific users, and connecting the app to the Spotify API for direct linking to the content being reviewed.