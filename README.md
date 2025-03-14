# Movie Mafia

**Movie Mafia** is a movie database application built with React that allows users to search for movies, view detailed information about them, and explore trending and top-rated movies. The application pulls data from the TMDb (The Movie Database) API to provide rich movie details like the cast, genres, ratings, and more.

---

## Features

- **Search for Movies**: Users can search for movies by title and view a list of results.
- **Movie Details**: View detailed information about a selected movie, including the cast, release date, rating, genres, and more.
- **Trending Movies**: Displays the top trending movies of the week.
- **Top Rated Movies**: Displays the top-rated movies from the database.
- **Scrollable Divs**: Movies displayed are scrollable horizontally so more movies can be displayed

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router DOM**: For routing between different pages.
- **TMDb API**: The Movie Database API to fetch movie data.
- **CSS**: Styling for the app.
- **JavaScript (ES6)**: Used for logic and API handling.

---

## Setup

Follow these steps to set up the project locally:

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (includes npm)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository**:
   git clone https://github.com/your-username/movie-mafia.git
   cd movie-mafia
2. **Install dependencies**:

   **Run the following command to install all the required dependencies**:

**npm install**

4. **Start the app: Start the development server with the following command**:

**npm run dev**

**Open the app: Open your browser and visit http://localhost:3000 to view the app in action.**

### Endpoints Used

- **Search Movies**:  
  https://api.themoviedb.org/3/search/movie?query={query}&api_key=API_KEY

- **Trending Movies**:  
  https://api.themoviedb.org/3/trending/movie/week?api_key=API_KEY

- **Top Rated Movies**:  
  https://api.themoviedb.org/3/movie/top_rated?api_key=API_KEY

- **Movie Details**:  
  https://api.themoviedb.org/3/movie/{id}?api_key=API_KEY

- **Movie Cast**:  
  https://api.themoviedb.org/3/movie/{id}/credits?api_key=API_KEY
