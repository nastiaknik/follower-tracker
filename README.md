# **Follower Tracker**

The Follower Tracker App is a web application that allows users to **track and manage their followers** on the platforms.

## Routes

### 1. Home Page

The Home page features two cards that show the most active user and the most popular user. These cards are designed with a stylish layout that includes a custom background image and a logoGoIT. The card's dimensions are adjustable based on the screen size, ensuring that the design remains responsive and user-friendly on all devices.
The cards' content includes the user's profile picture, username, and a brief overview of their activity or popularity on the platform.
The most active user card highlights the user who has the most tweets on the platform. The most popular user card highlights the user who has the most followers on the platform, indicating their significant influence and impact within the community.

Users can easily navigate to the Tweets page clicking on button at the bottom of the page.

### 2. Tweets Page

The Tweets page displays the tweets of users in card format with pagination and a Back button that takes you back to the home page. The page also has a dropdown filter with three options:

1.  _Show all_ - displays all tweets
2.  _Show followed_ - displays tweets with status "Following"
3.  _Show not followed_ - displays tweets with status "Follow"

### 3. User Profile Page

The User Profile page displays additional information about a user including their avatar, name, username, country, statistics of their followers and their tweets and has a Back button that takes you back to the previous page.

## Features

    View a list of all users and their profiles.
    Follow and unfollow users, and see real-time updates of the follower count.
    Filter users by followed and not followed.
    View the user with the most followers or the user with the most tweets.

## Technologies Used

The Follower Tracker App is built using the following technologies:

1. **React**: a JavaScript library for building user interfaces
2. **Redux**: a predictable state container for JavaScript apps
3. **React Router**: a library for routing in React apps
4. **Redux Toolkit**: a set of tools and utilities for building Redux apps
5. **Axios**: a library for making HTTP requests
6. **Styled Components**: a library for styling React components
7. **Node.js**: a server-side JavaScript runtime environment that enables developers to build applications
8. **mockApi**: a tool that allows developers to create and simulate RESTful APIs
9. **NumericFormat**: a library for formatting numbers 
10. **React Select**: a library for creating dropdown menus in React
11. **React Loading Skeleton**: a library for creating placeholder loading animations in React

### Getting Started

To run the Follower Tracker App on your local machine, follow these steps:

    1. Clone this repository: git clone https://github.com/nastiaknik/follower-tracker.git
    2. Install the dependencies: npm install
    3. Start the app: npm start
    4. Open the app in your web browser: http://localhost:3000/follower-tracker

### Testing

To run the tests for the Follower Tracker App, run the following command: npm test

### Contributing

To contribute to the Follower Tracker App, follow these steps:

    1. Fork this repository.
    2. Create a new branch: git checkout -b my-new-feature
    3. Make your changes and commit them: git commit -m "Add some feature"
    4. Push your changes to your fork: git push origin my-new-feature
    5. Create a pull request.
