import React, { memo } from "react";

const Search = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const item = inputRef.current.value;
        item && props.onSearch(item);
        formRef.current.reset();
    };
    return (
        <form ref={formRef} className="search-form" onSubmit={onSubmit}>
            <input
                ref={inputRef}
                type="text"
                className="search-input"
                placeholder="Search.."
            />
            <button>
                <i className="navbar-button fas fa-search"> </i>
            </button>
        </form>
    );
});

export default Search;
