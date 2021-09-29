# OpenTable front-end coding challenge

Thank you for accepting our coding challenge. Please take as much time as required to give us a good indication of your coding strengths, as your application will provide many topics of conversation in the next interview stage.

However, in this challenging time, we understand that not everyone has the luxury of sitting down to work on a test uninterrupted. Therefore if you don't manage to implement all of the rules, please describes how you would achieve them or any improvement you would make in the email.

## The task

Welcome Zoe's Menu.

Through using Zoe's Menu you will be able to:

-   Select dishes on behalf of two diners.
-   View a menu that will be provided and may later require adjustment by a restaurant.
-   Enforces some restrictions provided by the restaurant. (see [#rules](#rules))

The menu data is served via GraphQL (http://localhost:3000/graphql). The client application is in `src/App.js`.

## Improvements / Changes if I had more time

- I would like to have separated UserOne and UserTwo more through the component structure
- Add unit tests for all components (I only had time to add a handful of tests for the Menu compoent)
- Add some E2E tests
- Enforce Typescript
- Add a 'remove/delete' functionality specfic for each user item
- Allow for more than on error to displayed at one time
- Apply more styling
## Rules

Rules that have been enforced within the application:

-   Each person must have at least two courses, one of which must be a main.
-   Each diner cannot have more than one of the same course.
-   There is only one piece of cheesecake left.
-   Pierre the snobby waiter will not let you have a prawn cocktail and salmon fillet in the same meal.

## Acceptance criteria

-   The total bill amount is displayed when at least one dish has been selected.
-   An error message is displayed when I try to select an invalid menu combination.

## Submission

Please submit your program as an online repository or downloadable link to your point of contact at OpenTable.
