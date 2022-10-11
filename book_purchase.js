/**
 * @param {Book} book is object with title and price and printing status(boolean)
 * @param {Number} discount is percentage of discount /100
 * @param {Number} tax is percentage of tax /100
 */
function priceCalculator(book, discount, tax) {
  let result = 0;
  if (book && book.price) {
    const price = book.price;
    const totalDiscount = price * (discount/100);
    const priceAfterDiscount = price - totalDiscount;
    const totalTax = priceAfterDiscount * (tax/100);
    const priceAfterTax = priceAfterDiscount + totalTax;

    console.group();
    console.log('Original Price', price);
    console.log('Discount Amount', totalDiscount);
    console.log('Price After Discount', priceAfterDiscount);
    console.log('Tax Amount', totalTax);
    console.log('Price After Tax', priceAfterTax);
    console.groupEnd();
  }
  return result;
}

priceCalculator({title: 'HarPot', price:10000, printing_status: true}, 50, 10);