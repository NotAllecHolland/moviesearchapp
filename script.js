// SearchBar Component
const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = React.useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "flex w-full max-w-md mx-auto mb-8" }, /*#__PURE__*/
    React.createElement("input", {
      type: "text",
      className: "flex-1 px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500",
      placeholder: "Search for a movie...",
      value: query,
      onChange: e => setQuery(e.target.value),
      onKeyPress: handleKeyPress }), /*#__PURE__*/

    React.createElement("button", {
      onClick: handleSearch,
      className: "px-6 py-2 text-white bg-blue-600 rounded-r hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500" }, "Search")));





};

// MovieCard Component
const MovieCard = ({ movie, onClick }) => {
  return /*#__PURE__*/(
    React.createElement("div", {
      className: "flex flex-col h-full overflow-hidden rounded-lg shadow-lg bg-white cursor-pointer transform transition duration-200 hover:shadow-xl hover:scale-105",
      onClick: () => onClick(movie.imdbID) },

    movie.Poster && movie.Poster !== "N/A" ? /*#__PURE__*/
    React.createElement("img", {
      src: movie.Poster,
      alt: `${movie.Title} poster`,
      className: "object-cover w-full h-64" }) : /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-center w-full h-64 bg-gray-200" }, /*#__PURE__*/
    React.createElement("span", { className: "text-gray-500" }, "No Image Available")), /*#__PURE__*/


    React.createElement("div", { className: "flex-1 p-4" }, /*#__PURE__*/
    React.createElement("h3", { className: "mb-2 text-xl font-semibold" }, movie.Title), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600" }, "Year: ", movie.Year), /*#__PURE__*/
    React.createElement("p", { className: "mt-2 text-sm text-gray-500" }, "Type: ", movie.Type), /*#__PURE__*/
    React.createElement("div", { className: "mt-4 flex justify-center" }, /*#__PURE__*/
    React.createElement("span", { className: "px-4 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold" }, "Click for details")))));






};

// MovieList Component
const MovieList = ({ movies, isLoading, error, onMovieClick }) => {
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", { className: "text-center text-gray-600" }, "Loading movies...");
  }

  if (error) {
    return /*#__PURE__*/React.createElement("div", { className: "text-center text-red-500" }, error);
  }

  if (!movies || movies.length === 0) {
    return /*#__PURE__*/React.createElement("div", { className: "text-center text-gray-600" }, "No movies found. Try a different search term.");
  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" },
    movies.map((movie) => /*#__PURE__*/
    React.createElement(MovieCard, {
      key: movie.imdbID,
      movie: movie,
      onClick: onMovieClick }))));




};

// Modal Component for Movie Details
const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null;

  return /*#__PURE__*/(
    React.createElement("div", { className: "fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-70", onClick: onClose }, /*#__PURE__*/
    React.createElement("div", { className: "bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-full overflow-auto", onClick: e => e.stopPropagation() }, /*#__PURE__*/
    React.createElement("div", { className: "flex justify-end p-2" }, /*#__PURE__*/
    React.createElement("button", { onClick: onClose, className: "text-gray-500 hover:text-gray-800" }, /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, /*#__PURE__*/
    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" })))), /*#__PURE__*/



    React.createElement("div", { className: "p-6" }, /*#__PURE__*/
    React.createElement("div", { className: "md:flex" }, /*#__PURE__*/
    React.createElement("div", { className: "md:w-1/3 mb-4 md:mb-0" },
    movie.Poster && movie.Poster !== "N/A" ? /*#__PURE__*/
    React.createElement("img", {
      src: movie.Poster,
      alt: `${movie.Title} poster`,
      className: "rounded-lg shadow-md w-full" }) : /*#__PURE__*/


    React.createElement("div", { className: "flex items-center justify-center w-full h-64 bg-gray-200 rounded-lg" }, /*#__PURE__*/
    React.createElement("span", { className: "text-gray-500" }, "No Image Available"))), /*#__PURE__*/



    React.createElement("div", { className: "md:w-2/3 md:pl-6" }, /*#__PURE__*/
    React.createElement("h2", { className: "text-3xl font-bold mb-2" }, movie.Title), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-2 mb-4" }, /*#__PURE__*/
    React.createElement("span", { className: "px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm" }, movie.Year), /*#__PURE__*/
    React.createElement("span", { className: "px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm" }, movie.Rated), /*#__PURE__*/
    React.createElement("span", { className: "px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm" }, movie.Runtime)), /*#__PURE__*/

    React.createElement("p", { className: "mb-4 text-gray-600" }, movie.Plot), /*#__PURE__*/
    React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-lg font-semibold mb-1" }, "Director"), /*#__PURE__*/
    React.createElement("p", null, movie.Director)), /*#__PURE__*/

    React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-lg font-semibold mb-1" }, "Cast"), /*#__PURE__*/
    React.createElement("p", null, movie.Actors)), /*#__PURE__*/

    React.createElement("div", { className: "mb-4" }, /*#__PURE__*/
    React.createElement("h3", { className: "text-lg font-semibold mb-1" }, "Genre"), /*#__PURE__*/
    React.createElement("p", null, movie.Genre)),

    movie.Ratings && movie.Ratings.length > 0 && /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("h3", { className: "text-lg font-semibold mb-1" }, "Ratings"), /*#__PURE__*/
    React.createElement("div", { className: "flex flex-wrap gap-4" },
    movie.Ratings.map((rating, index) => /*#__PURE__*/
    React.createElement("div", { key: index, className: "flex flex-col items-center" }, /*#__PURE__*/
    React.createElement("div", { className: "text-xl font-bold" }, rating.Value), /*#__PURE__*/
    React.createElement("div", { className: "text-sm text-gray-500" }, rating.Source)))))))))));











};

// Main App Component
const App = () => {
  const [movies, setMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [selectedMovie, setSelectedMovie] = React.useState(null);
  const [isModalLoading, setIsModalLoading] = React.useState(false);

  // Replace with your actual API key
  const API_KEY = "7e63da65";

  const searchMovies = async query => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No results found");
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
      setMovies([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchMovieDetails = async imdbId => {
    setIsModalLoading(true);
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbId}&plot=full&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === "True") {
        setSelectedMovie(data);
      } else {
        alert("Failed to load movie details. Please try again.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
    } finally {
      setIsModalLoading(false);
    }
  };

  const handleMovieClick = imdbId => {
    fetchMovieDetails(imdbId);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "min-h-screen px-4 py-8 bg-gray-100" }, /*#__PURE__*/
    React.createElement("div", { className: "max-w-6xl mx-auto" }, /*#__PURE__*/
    React.createElement("header", { className: "mb-8 text-center" }, /*#__PURE__*/
    React.createElement("h1", { className: "mb-2 text-4xl font-bold text-gray-800" }, "Movie Search App"), /*#__PURE__*/
    React.createElement("p", { className: "text-gray-600" }, "Search for your favorite movies using the OMDb API")), /*#__PURE__*/


    React.createElement(SearchBar, { onSearch: searchMovies }), /*#__PURE__*/

    React.createElement(MovieList, {
      movies: movies,
      isLoading: isLoading,
      error: error,
      onMovieClick: handleMovieClick }),


    isModalLoading && /*#__PURE__*/
    React.createElement("div", { className: "fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70" }, /*#__PURE__*/
    React.createElement("div", { className: "bg-white p-8 rounded-lg shadow-xl" }, /*#__PURE__*/
    React.createElement("p", { className: "text-center text-gray-600" }, "Loading movie details..."))),




    selectedMovie && /*#__PURE__*/React.createElement(MovieModal, { movie: selectedMovie, onClose: closeModal }))));



};

// Render the App
const rootElement = document.getElementById('root');
ReactDOM.render( /*#__PURE__*/React.createElement(App, null), rootElement);