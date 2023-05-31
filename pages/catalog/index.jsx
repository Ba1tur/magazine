import React, { useState, useEffect } from "react";
import s from "./Catalog.module.scss";
import FilterOfCatalog from "@/components/FilterOfCatalog/FilterOfCatalog";
import ProductCard from "@/components/ProductCard/ProductCard";
import { Button, Dropdown, Input, Modal, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useDebounce } from "@/hooks/debounce";
import { getProducts } from "@/redux/reducers/products";

const Catalog = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 300990]);
  const [open, setOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("default");
  const [searchValue, setSearchValue] = useState("");

  const handlePriceChange = (value) => {
    const filtered = products.filter(
      (product) =>
        parseInt(product.price) >= value[0] &&
        parseInt(product.price) <= value[1]
    );

    const sortedProducts = sortProducts(filtered, sortOrder);
    setFilteredProducts(sortedProducts);
    setPriceRange(value);
  };

  const sortProducts = (products, sortOrder) => {
    const sorted = [...products];

    if (sortOrder === "asc") {
      sorted.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortOrder === "desc") {
      sorted.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }
    return sorted;
  };

  const handleSortChange = (value) => {
    setSortOrder(value);

    if (value === "all") {
      const sortedProducts = sortProducts(filteredProducts, "default");
      setFilteredProducts(sortedProducts);
    } else if (value === "desc") {
      const sortedProducts = sortProducts(filteredProducts, "desc");
      setFilteredProducts(sortedProducts);
    } else if (value === "asc") {
      const sortedProducts = sortProducts(filteredProducts, "asc");
      setFilteredProducts(sortedProducts);
    }
  };

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const prices = products.map((product) => parseInt(product.price));
    const maxPrice = Math.max(...prices);

    setPriceRange([0, maxPrice]);
    handlePriceChange([0, maxPrice]);
  }, [products]);

  const maxPrice = products.reduce((max, product) => {
    const price = product.price;
    return price > max ? price : max;
  }, 0);

  const formatPrice = (price) => {
    return `${price.toLocaleString()}₽`;
  };

  const items = [
    {
      key: "1",
      label: <p>по убыванию цены</p>,
    },
    {
      key: "2",
      label: <p>по возрастанию цены</p>,
    },
    {
      key: "3",
      label: <p>по популярности</p>,
    },
  ];

  const filteredProductsByName = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <section className={s.Catalog}>
      <div className={s.left_side}>
        <FilterOfCatalog
          // name={name}
          // setName={setName}
          priceRange={priceRange}
          handlePriceChange={handlePriceChange}
          maxPrice={maxPrice}
          setPriceRange={setPriceRange}
          formatPrice={formatPrice}
        />
      </div>
      <div className={s.right_side}>
        <div className={s.sorting}>
          <div style={{ width: '300px', marginRight: '10px' }}>
            <Input placeholder="Поиск" onChange={handleSearchChange} size="large" />
          </div>

          <Dropdown
            overlay={
              <Modal
                padding="10px"
                footer={false}
                centered
                open={open}
                closable={true}
                onCancel={() => setOpen(false)}
                width={600}
                className="modalStyle"
              >
                <FilterOfCatalog
                  priceRange={priceRange}
                  handlePriceChange={handlePriceChange}
                  maxPrice={maxPrice}
                  setPriceRange={setPriceRange}
                  formatPrice={formatPrice}
                />
              </Modal>
            }
            trigger={["click"]}
          >
            <Button className={s.filter_button}>Фильтр</Button>
          </Dropdown>
          
          <div className={s.right_side_of_sort}>
            <Select
              size="large"
              placeholder="Сортировать"
              menu={{
                items,
              }}
              defaultValue="all"
              options={[
                {
                  value: "all",
                  label: "показать все",
                },
                {
                  value: "desc",
                  label: "по убыванию цены",
                },
                {
                  value: "asc",
                  label: "по возрастанию цены",
                },
              ]}
              placement="bottomRight"
              onChange={handleSortChange}
            >
              <Button>
                <img src="/sortimg.png" alt="sort" />
              </Button>
            </Select>
          </div>
        </div>
        <div className={s.Cards}>
          {filteredProductsByName.length === 0 ? (
            <div className={s.noProducts}>
              <h1>Не найдено товаров по данной цене!</h1>
            </div>
          ) : (
            filteredProductsByName.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Catalog;
