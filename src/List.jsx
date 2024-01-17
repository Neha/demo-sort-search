import { useState } from "react";
import Search from "./Search";
import Button from "./components/Button";
import ListItem from "./components/ListItem";

const TEST_DATA = [
  { name: "product one", id: 12, price: 23 },
  { name: "product two", id: 2, price: 345 },
  { name: "product 3", id: 43, price: 907 },
  { name: "product four", id: 46, price: 1000 },
  { name: "product five", id: 5, price: 890 },
];

const Grid = (url) => {
  const [productsList, setProductsList] = useState(TEST_DATA);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  const sortItemsOnPrice = () => {
    const sortedList = [...productsList].sort((a, b) => {
      if (isSorted) {
        return b.price - a.price;
      } else {
        return a.price - b.price;
      }
    });
    setIsSorted(!isSorted);
    setProductsList(sortedList);
  };

  const selectItemHandler = (product) => {
    setSelectedItems((prevProducts) => [...prevProducts, product]);
  };

  const deleteItemHandler = (product) => {
    
    const updatedSelectedItems = selectedItems.filter(
      (item) => item.id !== product.id
    );
    setSelectedItems(updatedSelectedItems);


    const updatedProductsList = productsList.filter(
      (item) => item.id !== product.id
    );
    setProductsList(updatedProductsList);
  };

  const searchHandler = (searchTerm) => {
    if (searchTerm) {
      const filteredItems = productsList.filter(
        (item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.price.toString().includes(searchTerm)
      );
      setProductsList(filteredItems);
    } else {
      setProductsList(TEST_DATA);
    }
  };
  const createGrid = () => {
    return productsList.map((product) => {
      return (
        <ListItem key={product.id}
          product={product}
          selectItemHandler={selectItemHandler}
          deleteItemHandler={deleteItemHandler}
        />
      );
    });
  };

  return (
    <section className="container mx-auto">
      <Search
        searchHandler={searchHandler}
        placeholder="Search..."
        classes="mb-2"
      />
      <div className="flex bg-gray-200">
        <div className="p-2 font-semibold w-24">Select</div>
        <div className="p-2 font-semibold w-24">Name</div>
        <div className="p-2 font-semibold w-24">
          Price
          <Button clickHandler={sortItemsOnPrice} buttonLabel="sort" />
        </div>
        <div className="p-2 font-semibold w-24">Actions</div>
      </div>
      <ul>{createGrid()}</ul>
    </section>
  );
};

export default Grid;
