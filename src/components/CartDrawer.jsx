import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

export default function CartDrawer({ isOpen, onClose }) {
  const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

  const handleCheckout = () => {
    alert("¡Gracias por tu compra! (Demo)");
    clearCart();
    onClose();
  };

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
      />
      <aside className={`cart-drawer ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2>Tu carrito</h2>
          <button className="close-btn" onClick={onClose} aria-label="Cerrar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <p>Tu carrito está vacío</p>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">{formatPrice(item.price)}</span>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="cart-remove"
                    onClick={() => removeFromCart(item.id)}
                    aria-label="Eliminar"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>{formatPrice(totalPrice)}</strong>
              </div>
              <button className="checkout-btn" onClick={handleCheckout}>
                Finalizar compra
              </button>
              <button className="clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
