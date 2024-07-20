import React from "react";
import CategoryCard from "../Card/CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <div className="justify-center flex flex-col h-full pt-10 pb-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl text-purple-950 ">There are some type</h2>
        <div>Editor's pick</div>
      </div>

      <div className="grid justify-items-center sm:grid-cols-2 sm:justify-items-center md:justify-center md:grid-cols-3 lg:grid-cols-5 ">
        {categories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
