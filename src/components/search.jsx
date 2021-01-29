import React, { memo } from "react";

const Search = memo((props) => {
    const formRef = React.createRef();
    const inputRef = React.createRef();
    const onSubmit = (event) => {
        event.preventDefault();
        const name = inputRef.current.value;
        name && props.onAdd(name);
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
            <button className="navbar-button fas fa-search"></button>
        </form>
    );
});

export default Search;
