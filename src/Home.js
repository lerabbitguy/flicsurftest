import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import useFetch from './useFetch';

const Home = () => {
    const { data: reviews, isPending, error } = useFetch('http://localhost:8000/reviews');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {reviews && <ReviewList reviews={reviews} title="All Reviews For moviename"/>}
            {/* <ReviewList reviews={reviews.filter((review) => review.author === 'reviewman')} title="All Reviews For moviename by reviewman "/> */}
        </div>
    );
}
 
export default Home;