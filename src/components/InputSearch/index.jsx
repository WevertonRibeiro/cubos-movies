import searchIcon from "@/assets/icons/search.svg";
import "./styles.scss";

export default function InputSearch({ value, handleChange, handleSearch }) {
  return (
    <div className="input-search">
      <input
        type="text"
        value={value}
        placeholder="Pesquise por filmes"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleSearch()}>
        <img src={searchIcon} />
      </button>
    </div>
  );
}
