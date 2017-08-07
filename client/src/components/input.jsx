import React from 'react';

function Header(props) {
  return (
  	<div className='header'>
	    <form onSubmit={props.handleSubmit}>
			  <input type="text" value={props.city} onChange={props.handleChange} placeholder='Enter City' />
			  <input type="submit" value="Submit" />
			</form>
	  </div>
  )
}

export default Header