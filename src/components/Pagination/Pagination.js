import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.scss';
import NavLink from 'react-router-dom/es/NavLink';

const propTypes = {
  current: PropTypes.array,
  pagesTotal: PropTypes.number,
  urlTemplate: PropTypes.string.isRequired,
};

const defaultProps = {
  pagesTotal: 0,
  current: [1]
};

const to = (template, number) => {
  if (number === 1) {
    return template.replace(new RegExp('/page/:page'), '');
  }
  return template.replace(new RegExp(':page'), number);
};


const Pagination = ({ pagesTotal, current, urlTemplate }) => {
  if (pagesTotal < 2) {
    return null;
  }
  return (
    <div className="pagination">
      {/*{!current.includes(1)*/}
        {/*? <NavLink to={to(urlTemplate, 1)} className="pagination__item">First</NavLink>*/}
        {/*: <span className="pagination__item pagination__item_disabled">First</span>*/}
      {/*}*/}
      {!current.includes(1)
        ? <NavLink to={to(urlTemplate, current[0] - 1)} className="pagination__item">{'<'}</NavLink>
        : <span className="pagination__item pagination__item_disabled">{'<'}</span>
      }
      {
        [...new Array(pagesTotal)].map((x, i) => {
          const index = i + 1;
          return (
            current.includes(index)
              ? <span key={`span${index}`} className="pagination__page pagination__page_current">{index}</span>
              : <NavLink key={`NavLink${index}`} to={to(urlTemplate, index)} className="pagination__page">{index}</NavLink>
          );
        })
      }
      {!current.includes(pagesTotal)
        ? <NavLink to={to(urlTemplate, current[current.length - 1] + 1)} className="pagination__item">{'>'}</NavLink>
        : <span className="pagination__item pagination__item_disabled">{'>'}</span>
      }
      {/*{!current.includes(pagesTotal)*/}
        {/*? <NavLink to={to(urlTemplate, pagesTotal)} className="pagination__item">Last</NavLink>*/}
        {/*: <span className="pagination__item pagination__item_disabled">Last</span>*/}
      {/*}*/}
    </div>
  );
};

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination;