import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

interface iSearchBarProps
{
	onChange: Function
}

export function SearchBar({ onChange }: iSearchBarProps)
{
	const [searchVal, setSearchVal] = useState("");

	function onInputChange(e)
	{
		const text = e.currentTarget.value;
		setSearchVal(text);
		onChange(text);
	}

    return <div className="search-container">
        <FaSearch className="search-icon"/>
		<input
			type="text"
			className="search-input"
			value={searchVal}
			onChange={onInputChange}
		/>
    </div>;
}
