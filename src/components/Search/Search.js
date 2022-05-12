const Search = ({ handleFilter, handleSearch }) => {
  return (
    <div>
      <select name="filter" id="filter" onInput={(e) => handleFilter(e)}>
        <option value="restaurant">Name of the restaurant</option>
        <option value="categories">Type of food</option>
        <option value="city">City</option>
      </select>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="search" />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};
export default Search;
