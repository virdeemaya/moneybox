"use client";
import React, { useState } from "react";
import styles from "./carousel.module.scss";
import classNames from "classnames/bind";
import Product from "../product";

const cx = classNames.bind(styles);

type ProductType = {
  id: string;
  name: string;
  description: string;
  image: string;
  url: string;
};

type Category = {
  id: string;
  name: string;
  products: ProductType[];
};

type CarouselProps = {
  categories: Category[];
};

export const Carousel = ({ categories }: CarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, categories.length - 1));
  };

  return (
    <div className={cx("carousel-wrapper")}>
      <div className={cx("carousel-navigation")}>
        <button
          onClick={handlePrev}
          disabled={activeIndex === 0}
          aria-label="Previous category"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7634 6.22922C14.448 5.92359 13.9366 5.92359 13.6212 6.22922L8.23657 11.4466C8.0851 11.5934 8 11.7924 8 12C8 12.2076 8.0851 12.4066 8.23657 12.5534L13.6212 17.7708C13.9366 18.0764 14.448 18.0764 14.7634 17.7708C15.0789 17.4652 15.0789 16.9696 14.7634 16.664L9.94994 12L14.7634 7.336C15.0789 7.03037 15.0789 6.53485 14.7634 6.22922Z"
            />
          </svg>
        </button>
        <h1>Explore accounts</h1>
        <button
          onClick={handleNext}
          disabled={activeIndex === categories.length - 1}
          aria-label="Next category"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.23657 6.22922C9.55199 5.92359 10.0634 5.92359 10.3788 6.22922L15.7634 11.4466C15.9149 11.5934 16 11.7924 16 12C16 12.2076 15.9149 12.4066 15.7634 12.5534L10.3788 17.7708C10.0634 18.0764 9.55199 18.0764 9.23657 17.7708C8.92114 17.4652 8.92114 16.9696 9.23657 16.664L14.0501 12L9.23657 7.336C8.92114 7.03037 8.92114 6.53485 9.23657 6.22922Z"
            />
          </svg>
        </button>
      </div>

      <div className={cx("carousel-container")}>
        <div
          className={cx("carousel-track")}
          style={
            {
              "--active-index": activeIndex,
            } as React.CSSProperties
          }
        >
          {categories.map((category, index) => (
            <div
              key={category.id}
              className={cx("category", index === activeIndex && "active")}
            >
              <div className={cx("category-title")}>
                <h2>{category.name}</h2>
              </div>
              <div className={cx("category-list")}>
                {category.products.map((product) => (
                  <Product
                    key={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    url={product.url}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Carousel as default };
