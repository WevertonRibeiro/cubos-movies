import React from "react";

import chevronLeft from "@/assets/icons/chevron-left.svg";
import chevronRight from "@/assets/icons/chevron-right.svg";

import "./styles.scss";

export default function Pagination({
  page,
  total_pages,
  total_results,
  onPageChange,
}) {
  if (total_pages <= 1) return null;

  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < total_pages) onPageChange(page + 1);
  };

  const getPages = () => {
    let start = 1;
    let end = Math.min(total_pages, 5);

    if (page >= 3 && total_pages > 5) {
      start = page - 2;
      end = page + 2;

      if (end > total_pages) {
        end = total_pages;
        start = total_pages - 4;
      }
    }

    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const pages = getPages();

  return (
    <div className="pagination-wrapper">
      <button
        disabled={page === 1}
        className="pagination-button"
        onClick={handlePrev}
      >
        <img src={chevronLeft} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className={`pagination-button ${p === page ? "active" : ""}`}
        >
          {p}
        </button>
      ))}

      <button
        disabled={page === total_pages}
        className="pagination-button"
        onClick={handleNext}
      >
        <img src={chevronRight} />
      </button>
    </div>
  );
}
