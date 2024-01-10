import React, { useState } from "react";
import "./ProductCatalog.css";
import ProductCatalogFilter from "../ProductCatalogFilter/ProductCatalogFilter.js";
import ProductCatalogSort from "../ProductCatalogSort/ProductCatalogSort.js";
import Card from "../Card/Card.js";
import ServiceAndService from "../ServiceAndService/ServiceAndService.js";
import products from "../../../product.json";

const ProductCatalog = (props) => {
  const [producers, setProducers] = useState([
    { name: "SilverCrest", id: 1, category: "producer" },
    { name: "Elenberg", id: 2, category: "producer" },
    { name: "SeaBreeze", id: 3, category: "producer" },
    { name: "Magio", id: 4, category: "producer" },
  ]);

  const [categories, setCategories] = useState([
    { key: "all", name: "Всі" },
    { key: "Kettle", name: "Чайники" },
    { key: "telephone", name: "Телефони" },
    { key: "Grill", name: "Грилі" },
    { key: "Microwave", name: "Мікрохвильовки" },
    { key: "VacuumCleaner", name: "Пилососи" },
    { key: "ThermalMug", name: "Термокружки" },
  ]);

  const [product, setProduct] = useState(
    products.product
  );

  const [currentItems, setCurrentItems] = useState([...product]);
  const [newItem, setNewItem] = useState([]);
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProducers, setSelectedProducers] = useState([]);
  const [renderCart, setRenderCart] = useState(false);

  const services = [
    {
      iconClass: "fa-solid fa-truck",
      name: "Доставка",
      description:
        "Перевірка при отриманні та можливість безкоштовно повернути товар",
    },
    {
      iconClass: "fa-brands fa-sellsy",
      name: "Б/У техніка",
      description:
        "У нас також в наявності є вживана техніка за солодкими цінами",
    },
    {
      iconClass: "fa-solid fa-laptop-file",
      name: "Ремонт",
      description: "Відремонтуємо будь-яку річ швидко та якісно",
    },
    {
      iconClass: "fa-solid fa-shop",
      name: "Магазини",
      description: "Легко відкрийте свій інтернет-магазин",
    },
    {
      iconClass: "fa-solid fa-circle-info",
      name: "Допоможи іншим",
      description:
        "Передайте ваші речі дитячим будинкам та благодійним організаціям",
    },
    {
      iconClass: "fa-solid fa-credit-card",
      name: "Товар в кредит",
      description:
        "Можна купити будь який наш товар в кредит або митєву розтрочку",
    },
  ];

  const choseCategory = (category, heading) => {
    if (category === "all") {
      setCurrentItems(product);
    } else {
      setCurrentItems(
        product.filter(
          (el) => el.category === category || el.heading === heading
        )
      );
    }
  };

  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);

    const results = product.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearchResults(results);
  };

  const handleMinPriceChange = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPriceChange = (event) => {
    setMaxPrice(event.target.value);
  };

  const filterByPcrice = () => {
    if (minPrice !== "" && maxPrice !== "") {
      const FilterProductPrice = currentItems.filter((el) => {
        return el.price >= Number(minPrice) && el.price <= Number(maxPrice);
      });
      setCurrentItems(FilterProductPrice);
    }
  };

  const filterByProducer = () => {
    if (selectedProducers.length > 0) {
      const filteredProducts = product.filter((el) =>
        selectedProducers.includes(el.producer)
      );
      setCurrentItems(filteredProducts);
    } else {
      setCurrentItems(product);
    }
  };

  const choseProducer = (producer) => {
    if (selectedProducers.includes(producer)) {
      setSelectedProducers(selectedProducers.filter((p) => p !== producer));
    } else {
      setSelectedProducers([...selectedProducers, producer]);
    }
  };

  const renderElement = (el) => {
    setNewItem([...newItem, el]);
  };

  const showFunction = () => {
    filterByProducer();
    filterByPcrice();
  };

  return (
    <React.Fragment>
      <div className="product-catalog-wrapper-osn">
        <ServiceAndService services={services} />
        <div className="product-catalog-wrapper">
          <div className="product-catalog">
            <div className="product-catalog-name">Каталог товарів</div>
            <ProductCatalogSort renderCart={renderCart} />
            <Card
              searchTerm={searchTerm}
              searchResults={searchResults}
              addClass={props.addClass}
              addToOrder={props.addToOrder}
              infoProduct={props.infoProduct}
              currentItems={currentItems}
              choseProducer={choseProducer}
              renderCart={renderCart}
            />
          </div>
          <ProductCatalogFilter
            categories={categories}
            minPrice={minPrice}
            maxPrice={maxPrice}
            producers={producers}
            selectedProducers={selectedProducers}
            showFunction={showFunction}
            choseCategory={(category) =>
              choseCategory(category, product.heading)
            }
            searchTerm={searchTerm}
            handleSearch={handleSearch}
            choseProducer={choseProducer}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductCatalog;
