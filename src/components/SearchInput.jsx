import axios from "axios";
import React, { useState, useEffect, memo } from "react";
import { useDispatch } from "react-redux";
import { setFilterProducts } from "../store/product/productSlice";

let timerId;
const SearchInput = ({ setIsLoading }) => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();

  const getSearchItems = async () => {
    setIsLoading(true);
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${searchText}&key=${process.env.REACT_APP_API_KEY}&maxResults=40`;
      const res = await axios.get(url);

      if (res.data?.items) {
        dispatch(setFilterProducts(res.data.items));
      } else {
        dispatch(setFilterProducts([])); // Dispatch empty array if no items found
      }

      setIsLoading(false);
    } catch (error) {
      dispatch(setFilterProducts([]));
      setIsLoading(false);
    }
  };

  const debounceSearch = () => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      getSearchItems();
    }, 2000);
  };

  useEffect(() => {
    if (searchText?.length > 1) {
      debounceSearch();
    }
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search here"
        className="input input-bordered w-full max-w-xs focus:outline-none mx-auto bg-gray-900"
      />
    </>
  );
};

export default memo(SearchInput);
