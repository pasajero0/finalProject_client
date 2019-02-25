// import React, {Component} from 'react';
// import CartItem from './CartItem/CartItem';
// import { FaLongArrowAltRight } from "react-icons/fa";
//
// import './Cart.scss';
//
// class Cart extends Component {
//
//       state = {
//         deleteCartItem: false,
//         products: [{
//               id: 1,
//               img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
//               title: 'Dress',
//               price: '$89'
//             },
//             {
//               id: 2,
//               img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
//               title: 'Dress',
//               price: '$89'
//             },
//             {
//               id: 3,
//               img: 'https://cooperst-media.global.ssl.fastly.net/media/wysiwyg/Category_Block_-_Dress.jpg',
//               title: 'Dress',
//               price: '$89'
//             }]
//       }
//
//   removeItem = () => {
//     this.setState({
//       deleteCartItem: !this.state.deleteCartItem
//     })
//   }
//
// // getNumberInput = (e) => {
// //     let count= e.target.value;
// //     return count;
//
// // }
//
//     render() {
//
//         let totalAmount = 0;
//         this.state.products.map(item => {
//           let price = Number(item.price.slice(1));
//           totalAmount += price;
//           return totalAmount;
//         })
//
//
//         return (
//          <div>
//                 <div className="cart">
//                 <h1 className="cart__header">Cart</h1>
//                     <div className="cartTableHeader">
//                         <div className="cartTableHeader__product">ProductSingle</div>
//                         <div className="cartTableHeader__quantity">Quantity</div>
//                         <div className="cartTableHeader__price">Price</div>
//                     </div>
//
//                      {this.state.products.map(item => {
//                           return <CartItem key={item.id} imgSrc={item.img} title={item.title} price={item.price} count={this.props.count}/>
//                       })}
//
//                     <div className="cart__total">
//                       <span>Total</span>
//                       <span>${totalAmount}</span>
//                     </div>
//                     <button className="cart__btnCheckout">Proceed to checkout <FaLongArrowAltRight/></button>
//                 </div>
//           </div>
//         )
//     }
// }
//
// export default Cart;