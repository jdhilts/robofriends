import React from 'react';
import {Fragment} from 'react';

const SearchBox = ({searchChange}) => {
	return (
		<Fragment>
		<input 
		className = 'pa3 ba b--green bg-lightest-blue'
		type ='search' 
		placeholder = 'Search Robot'
		onChange = {searchChange}
		/>
		</Fragment>
		);
}
export default SearchBox;