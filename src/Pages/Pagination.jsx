import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({getpage}) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    getpage(pageNumber);
  };

  return (
    <div className="pagination">
      <div
        className={`page-item ${activePage === 1 ? 'active' : ''}`}
        onClick={() => handlePageChange(1)}
      >
        1
      </div>
      <div
        className={`page-item ${activePage === 2 ? 'active' : ''}`}
        onClick={() => handlePageChange(2)}
      >
        2
      </div>
      <div className="page-item" onClick={() => handlePageChange(activePage + 1)}>
        Next
      </div>
    </div>
  );
};

export default Pagination;