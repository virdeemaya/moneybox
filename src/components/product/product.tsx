import React, { useState } from "react";
import styles from "./product.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ProductProps = {
  name: string;
  description: string;
  image?: string;
  url: string;
};

export const Product = ({ name, description, image, url }: ProductProps) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div className={cx("product")}>
      <div className={cx("product-navigation")}>
        <button onClick={() => setisOpen(!isOpen)}>
          <h3>{name}</h3>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className={cx(isOpen && "close-button")}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.7634 6.22922C14.448 5.92359 13.9366 5.92359 13.6212 6.22922L8.23657 11.4466C8.0851 11.5934 8 11.7924 8 12C8 12.2076 8.0851 12.4066 8.23657 12.5534L13.6212 17.7708C13.9366 18.0764 14.448 18.0764 14.7634 17.7708C15.0789 17.4652 15.0789 16.9696 14.7634 16.664L9.94994 12L14.7634 7.336C15.0789 7.03037 15.0789 6.53485 14.7634 6.22922Z"
              fill="inherit"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className={cx("product-info")}>
          <div className={cx("image")}>
            {image && <img src={image} alt={name} />}
          </div>
          <div className={cx("content")}>
            {description && <p>{description}</p>}
            {url && (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={cx("learn-more")}
              >
                Learn more
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { Product as default };
