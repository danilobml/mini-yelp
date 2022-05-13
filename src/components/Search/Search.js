const Search = ({ handleFilter, handleSearch, handleUserInput }) => {
  return (
    <div>
      <select name="filter" id="filter" onInput={(e) => handleFilter(e)}>
        <option value="restaurant">Name</option>
        <option value="categories">Type</option>
        <option value="city">City</option>
      </select>
      <form onSubmit={(e) => handleSearch(e)}>
        <input type="text" onChange={(e) => handleUserInput(e)} />
        <input type="submit" value="search" />
      </form>
    </div>
  );
};
export default Search;
