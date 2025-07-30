import React from "react";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        margin: "20px 0",
      }}
    >
      <button disabled={page === 1} onClick={handlePrev}>
        ← Anterior
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          style={{
            padding: "6px 12px",
            background: p === page ? "#333" : "#eee",
            color: p === page ? "#fff" : "#000",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          {p}
        </button>
      ))}

      <button disabled={page === total_pages} onClick={handleNext}>
        Próxima →
      </button>
    </div>
  );
}
