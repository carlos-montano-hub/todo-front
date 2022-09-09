import "./Filter.css";

export const Filter = () => {
  return (
    <div className="filter-box">
      <form>
        <div>
          <label>Name</label>
          <input></input>
        </div>
        <div>
          <label>Priority</label>
          <select>
            <option>All, High, Medium,Low</option>
          </select>
        </div>
        <div>
          <label>State</label>
          <select>
            <option>All, Done, Undone</option>
          </select>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};
