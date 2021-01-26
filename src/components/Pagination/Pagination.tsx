import React from 'react';
import { Link } from 'react-router-dom';
import { getEndpoint } from '../../helper';
import './Pagination.css';

export interface PaginationProps {
	next: string;
	prev: string
}

const Pagination = ({ next, prev }: PaginationProps): JSX.Element => {

	return (
		<aside className="Pagination">
			<Link className={`button ${!prev ? 'notVisible': ''}`} to={ getEndpoint(prev) } target="_self">&#8592;</Link>
			<Link className={`button ${!next ? 'notVisible': ''}`} to={ getEndpoint(next) } target="_self">&#8594;</Link>
		</aside>
	)
};
export default Pagination;