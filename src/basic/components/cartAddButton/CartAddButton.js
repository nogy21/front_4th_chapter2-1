import { handleAddToCart } from './handleAddToCart';

export default function CartAddButton() {
  const addToCartButton = document.createElement('button');
  addToCartButton.id = 'add-to-cart';
  addToCartButton.className = 'bg-blue-500 text-white px-4 py-2 rounded';
  addToCartButton.textContent = '추가';

  addToCartButton.addEventListener('click', handleAddToCart);

  return addToCartButton;
}
