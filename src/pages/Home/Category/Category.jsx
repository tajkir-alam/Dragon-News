import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const loadCategory = useLoaderData();
    console.log(loadCategory);
    
    return (
        <div>
            {
                loadCategory.map(categories => <NewsCard key={categories._id} news={categories}></NewsCard>)
            }
        </div>
    );
};

export default Category;