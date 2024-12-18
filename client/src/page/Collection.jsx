import React, { useContext, useEffect, useState } from 'react';
import { dropdown_icon } from '../assets';
import ProductItem from '../component/ProductItem';
import Title from '../component/Title';
import { ShopContext } from '../context/ShopCon';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filter, setFilter] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // Sorting
  const [sortType, setSortType] = useState('relevant');

  useEffect(() => {
    console.log('Initial products:', products);
    setFilter(products);
  }, [products]);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSub = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item === value) : [...prev, value]
    );
  };

  const applyFilter = () => {
    let productCopy = products.slice();

    // Searching
    if (showSearch && search) {
      productCopy = productCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      productCopy = productCopy.filter((item) => category.includes(item.category));
    }

    if (subcategory.length > 0) {
      console.log('Applying subcategory filter:', subcategory);
      productCopy = productCopy.filter((item) => subcategory.includes(item.subcategory));
    }

    console.log('Filtered products:', productCopy);
    setFilter(productCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, products, search, showSearch]);

  // Sorting logic
  const sortProduct = () => {
    let fpCopy = filter.slice();
    switch (sortType) {
      case 'low-high':
        setFilter(fpCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilter(fpCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10">
      {/* Filter Option */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src={dropdown_icon}
            alt="dropdown icon"
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-4 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                className="w-3"
                value="Men"
              /> Men
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                className="w-3"
                value="Women"
              /> Women
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleCategory}
                type="checkbox"
                className="w-3"
                value="Kids"
              /> Kids
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-4 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <label className="flex gap-2">
              <input
                onChange={toggleSub}
                type="checkbox"
                className="w-3"
                value="Topwear"
              /> Topwear
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleSub}
                type="checkbox"
                className="w-3"
                value="Bottomwear"
              /> Bottomwear
            </label>
            <label className="flex gap-2">
              <input
                onChange={toggleSub}
                type="checkbox"
                className="w-3"
                value="Winterwear"
              /> Winterwear
            </label>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-5 max-sm flex-col">
          <Title text1="ALL" text2="COLLECTION" />

          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border border-gray-300 text-sm px-2 max-sm:py-5 max-sm:p"
          >
            <option value="relevant">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        {/* Map Product */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filter.map((item, index) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
