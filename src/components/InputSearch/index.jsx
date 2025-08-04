import searchIcon from "@/assets/icons/search.svg";
import "./styles.scss";

export default function InputSearch({ value, handleChange, handleSearch }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="input-search">
      <input
        type="text"
        value={value}
        placeholder="Pesquise por filmes"
        onChange={(e) => handleChange(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleSearch()}>
        <img src={searchIcon} />
      </button>
    </div>
  );
}
