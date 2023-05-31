import React, { useState } from "react";
import { Slider, Checkbox } from "antd";
import s from "./FilterOfCatalog.module.scss";
import Selection from "../Selection/Selection";
import Checkboxes from "../Checkbox/Checkboxes";
import { products } from "@/contants/Products";
import ColorBlocks from "../ColorBlocks/ColorBlocks";

const FilterOfCatalog = ({
  priceRange,
  setPriceRange,
  handlePriceChange,
  maxPrice,
  formatPrice,
    name,
    setName
}) => {

  return (
    <div className={s.FilterOfCatalog}>
      <div className={s.Select}>
        <h3>Раздел</h3>
        <Selection>Гостинные</Selection>
        <Selection>Мягкая мебель</Selection>
        <Selection>Диваны</Selection>
      </div>

      <div className={s.price}>
        <h3>Цена</h3>
        <Slider
          style={{ position: "relative" }}
          range={{ draggableTrack: false }}
          defaultValue={priceRange}
          onChange={handlePriceChange}
          max={maxPrice}
        />
        <div className={s.price_range}>
          <div className={s.price_block}>{formatPrice(priceRange[0])}</div>
          <div className={s.line_between_prices}></div>
          <div className={s.price_block}>{formatPrice(priceRange[1])}</div>
        </div>
      </div>
      <div className={s.color}>
      </div>
      <div className={s.brand}>
        <h3>Бренд</h3>
        <Checkboxes>Динс</Checkboxes>
        <Checkboxes>Кускен</Checkboxes>
        <Checkboxes>Эби</Checkboxes>
        <Checkboxes>Реджио</Checkboxes>
        <Checkboxes>Сайле</Checkboxes>
        <h3 className={s.more}>Посмотреть еще</h3>
      </div>
    </div>
  );
};

export default FilterOfCatalog;
