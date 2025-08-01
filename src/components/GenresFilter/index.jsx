import { useEffect, useRef, useState } from "react";

import chevronLeftIcon from "@/assets/icons/chevron-left.svg";
import chevronRightIcon from "@/assets/icons/chevron-right.svg";

import "./styles.scss";

export default function GenresFilter({
  genres = [],
  onSelect = () => {},
  selectedGenres = [],
  multiply = false,
}) {
  const [leftButtonActive, setLeftButtonActive] = useState(false);
  const [rightButtonActive, setRightButtonActive] = useState(false);
  const scrollRef = useRef();

  const scrollLeft = () => {
    const toScroll = scrollRef.current.clientWidth - 100;
    scrollRef.current.scrollBy({ left: -toScroll, behavior: "smooth" });
  };

  const scrollRight = () => {
    const toScroll = scrollRef.current.clientWidth - 100;
    scrollRef.current.scrollBy({ left: toScroll, behavior: "smooth" });
  };

  const toggleGenre = (id) => {
    const isSelected = selectedGenres.includes(id);
    if (multiply) {
      onSelect(
        isSelected
          ? selectedGenres.filter((genreId) => genreId !== id)
          : [...selectedGenres, id]
      );
      return;
    }
    onSelect(isSelected ? [] : [id]);
  };

  const handleScroll = (element) => {
    const scrollPosition = element.scrollLeft;
    const maxScroll = element.scrollWidth - element.clientWidth;

    const atStart = scrollPosition <= 0;
    const atEnd = scrollPosition >= maxScroll;

    console.log(scrollPosition, maxScroll);

    setLeftButtonActive(!atStart);
    setRightButtonActive(!atEnd);
  };

  useEffect(() => {
    if (!scrollRef.current) return;
    handleScroll(scrollRef?.current);
  }, [genres]);

  return (
    <div className="genres-wrapper">
      <button
        className={`scroll-btn left ${leftButtonActive ? "active" : ""}`}
        disabled={!leftButtonActive}
        onClick={scrollLeft}
      >
        <img src={chevronLeftIcon} />
      </button>

      <div
        className="genres-container"
        ref={scrollRef}
        onScroll={({ target }) => handleScroll(target)}
      >
        {genres.map((genre) => (
          <button
            key={genre.id}
            className={`genre-btn ${
              selectedGenres.includes(genre.id) ? "active" : ""
            }`}
            onClick={() => toggleGenre(genre.id)}
          >
            <span>{genre.name}</span>
          </button>
        ))}
      </div>

      <button
        className={`scroll-btn right ${rightButtonActive ? "active" : ""}`}
        onClick={scrollRight}
        disabled={!rightButtonActive}
      >
        <img src={chevronRightIcon} />
      </button>
    </div>
  );
}
