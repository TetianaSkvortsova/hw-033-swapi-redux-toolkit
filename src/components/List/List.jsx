import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function List({fetchAction, resourceName}) {
    const dispatch = useDispatch();
    const {data, isLoading, error} = useSelector(state => state[resourceName]);
    const item = data.results;
    const nextUrl = data.next;

    if (error) {
        return <h2 className="loading" style={{color: 'red'}}>Loading error: {error}</h2>;
    }

    if (isLoading) {
        return <h2 className="loading">Loading...</h2>;
    }

    if (item.length === 0) {
        return <p className="loading">Натисніть "{resourceName.charAt(0).toUpperCase() + resourceName.slice(1)}</p>;
    }

    const handleFetchMore = () => {
        if (nextUrl) {
            dispatch(fetchAction(nextUrl));
        }
    };

    return (
        <div className="list">
            <ul>
                {data.results.map(person => <li key={person.name}>{person.name}</li>)}
            </ul>
            <button
                type="button"
                onClick={handleFetchMore}
                disabled={!nextUrl}
            >Load more</button>
        </div>
    );
}

export default List;