import React from 'react';

const CATEGORY_ICONS = {
  "Tümü": "bi-grid-fill",
  "Elektronik": "bi-laptop",
  "Giyim": "bi-person-arms-up",
  "Kitap": "bi-book",
  "Spor": "bi-dribbble",
  "Kozmetik": "bi-heart-pulse-fill"
};

export default function CategoriesList({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="d-flex align-items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hidden">
      {categories.map((category) => {
        const icon = CATEGORY_ICONS[category] || "bi-tag-fill";
        const isActive = selectedCategory === category;
        return (
          <button
            key={category}
            className={`btn rounded-pill px-4 py-2 border-0 fw-semibold text-nowrap d-flex align-items-center gap-2 btn-hover-scale ${
              isActive 
                ? 'btn-primary text-white shadow-sm' 
                : 'btn-white bg-white text-dark shadow-sm'
            }`}
            onClick={() => onSelectCategory(category)}
          >
            <i className={`bi ${icon} ${isActive ? 'text-white' : 'text-primary'}`}></i>
            {category}
          </button>
        );
      })}
    </div>
  );
}
