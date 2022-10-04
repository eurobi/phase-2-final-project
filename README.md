# phase-2-final-project

# SUMMARY

This is a Reviews app, where a user can keep all of their reviews for movies, shows, books, and more, all in one place. The app is a single page application built in React.

# FUNCTIONALITY - USER FACING

User's reviews load onto the home page.

User can filter their reviews by category.

User can sort their reviews by rating.

User can search for a review.

User can click delete to remove a review.

User can click edit on a review and be brought to the edit review page where they can update and submit their edits.

User can navigate to 'add review' in the navbar and be brought to a add review form.

User can fill out and submit the add review form.

User can navigate to 'my favorites' to see all of their 5 star reviews.

# FUNCTIONALITY - HOW IT WORKS

React Components:
- Navbar: uses Link componenets for navigation
- ReviewList: maps through review state and creates a Review component for each review
- Review: Each individual review
- ReviewForm: controlled form for submitting reviews
- Filters: controlled inputs for sorting review state
- Favorites: creates a Favorite component for each review category
- Favorite: filters 5 star reviews for the category 
