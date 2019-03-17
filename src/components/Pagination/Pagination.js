import React from 'react'
import PropTypes from 'prop-types'
import styles from './Pagination.scss'


const propTypes = {
    pages: PropTypes.number,
    page: PropTypes.number,
    onClick: PropTypes.func,
    numberPages: PropTypes.number,
    initialPage: PropTypes.number

}

const defaultProps = {
    numberPages: 10,
//    initialPage: 1

}

const Pagination = ({ pages, page, onClick, numberPages }) => {
    let counter = 0
    let initialPage = 0

    if (pages === 0 || pages <= 0) {
        return ''
    }

    if ((page - numberPages) < 0) {
        initialPage = 1
    } else if (page + numberPages >= pages) {
        initialPage = pages - (numberPages - 1)
    } else {
        initialPage = page - 5
    }

//let page = [ ...Array(numberPages).keys()].map(i => initialPage + i);
//    
//  return (
//            <ul className="pagination">
//                <li className={"item__pagination" === 1 ? 'disabled' : ''}>
//                    <a onClick={() => onClick(1)}>First</a>
//                </li>
//                <li className={"item__pagination" === 1 ? 'disabled' : ''}>
//                    <a onClick={() => onClick(initialPage - 1)}>Previous</a>
//                </li>
//                {page.pages.map((page, index) =>
//                    <li key={index} className={"item__pagination" === page ? 'active' : ''}>
//                        <a onClick={() => onClick(page)}>{page}</a>
//                    </li>
//                )}
//                <li className={"item__pagination" === numberPages ? 'disabled' : ''}>
//                    <a onClick={() => onClick(initialPage + 1)}>Next</a>
//                </li>
//                <li className={"item__pagination" === numberPages ? 'disabled' : ''}>
//                    <a onClick={() => onClick(initialPage)}>Last</a>
//                </li>
//            </ul>
//        );
    
   

    
    return (
        <ul className="pagination">

            <button className="item__pagination"
                disabled={page === 1}
                onClick={(e) => onClick(1)} >
                {'First'}
            </button>

            <button className="item__pagination"
                disabled={page === 1}
                onClick={ (e) => onClick(page - 1)}
            >
                {'Previous'}
            </button>

            {
               [ ...Array(numberPages) ]  /* количество страниц */
                    .map(() => { const className = (page === initialPage)
//                            ? styles.page__current 
//                            : styles.item__pagination

                        initialPage += 1
                        counter += 1
 
                        return (
                            <button key={counter}
//                                className={className}
                                onClick={ (e) => onClick(e)} >
                                { initialPage - 1 }
                            </button>
                        )
                    })
            }

            <button className="item__pagination"
                disabled={page === pages} 
                onClick={ (e) => onClick(page + 1)} >
                {'Next'}
            </button>

            <button className="item__pagination" 
                disabled={page === pages}
                onClick={ (e) => onClick(pages)} >
                {'Last'}
            </button>

        </ul>
    )
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;

export default Pagination
