/**
 * @param {Book} book is object with title and price and printing status(boolean)
 * @param {Number} discount is percentage of discount /100
 * @param {Number} tax is percentage of tax /100
 * @param {Number} stock is stock number in storage
 * @param {Number} order is number of order by customer
 */
function priceCalculator(book, discount, tax, stock, order) {
  let result = 0;
  for (let loopIndex = 0; loopIndex < order; loopIndex++) {
    if (book && book.price && (loopIndex < stock)) {
      const price = book.price;
      const totalDiscount = price * (discount/100);
      const priceAfterDiscount = price - totalDiscount;
      const totalTax = priceAfterDiscount * (tax/100);
      const priceAfterTax = priceAfterDiscount + totalTax;
      result += priceAfterTax;
    } else {
      console.log('Stock has run out');
      break;
    }
  }
  return result;
}

console.log(priceCalculator({title: 'HarPot', price:10000, printing_status: true}, 0, 0, 4, 3));