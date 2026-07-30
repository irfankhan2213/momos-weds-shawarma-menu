import React, { useState, useMemo, useRef } from 'react';
import {
  Search,
  X,
  Flame,
  Sparkles,
  Phone,
  MessageCircle,
  MapPin,
  Utensils,
  UtensilsCrossed,
  Plus,
  Minus,
  ShoppingCart,
  ChevronRight,
  Clock,
  CheckCircle2,
  Award,
  Scroll,
  Soup,
  Drumstick,
  Salad,
  Sandwich,
  Cookie,
  Crown,
  Star,
  ExternalLink
} from 'lucide-react';
import { RESTAURANT_INFO, CATEGORIES, MENU_ITEMS } from './data/menuData';
import './App.css';

// Icon mapper helper
function getCategoryIcon(iconName) {
  switch (iconName) {
    case 'Flame': return <Flame size={16} />;
    case 'Sparkles': return <Sparkles size={16} />;
    case 'UtensilsCrossed': return <UtensilsCrossed size={16} />;
    case 'Utensils': return <Utensils size={16} />;
    case 'Scroll': return <Scroll size={16} />;
    case 'Soup': return <Soup size={16} />;
    case 'Drumstick': return <Drumstick size={16} />;
    case 'Salad': return <Salad size={16} />;
    case 'Sandwich': return <Sandwich size={16} />;
    case 'Cookie': return <Cookie size={16} />;
    case 'Crown': return <Crown size={16} />;
    default: return <Utensils size={16} />;
  }
}

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all'); // 'all' | 'veg' | 'nonveg'
  const [cart, setCart] = useState({}); // { [variantKey]: { item, variantIndex, variantName, price, quantity } }
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemVariants, setItemVariants] = useState({}); // { [itemId]: activeVariantIndex }

  const menuRef = useRef(null);

  // Handle active variant selection per item
  const handleSelectVariant = (itemId, variantIdx) => {
    setItemVariants(prev => ({ ...prev, [itemId]: variantIdx }));
  };

  // Get active pricing/details for item considering active variant
  const getItemDetails = (item) => {
    if (item.variants && item.variants.length > 0) {
      const activeIdx = itemVariants[item.id] || 0;
      const variant = item.variants[activeIdx];
      return {
        price: variant.price,
        variantIndex: activeIdx,
        variantName: variant.name,
        variantKey: `${item.id}_${activeIdx}`,
        isVeg: item.isVeg ?? (variant.name ? !variant.name.toLowerCase().includes('chicken') : true)
      };
    }
    return {
      price: item.price,
      variantIndex: null,
      variantName: null,
      variantKey: item.id,
      isVeg: item.isVeg
    };
  };

  // Add item to cart
  const addToCart = (item) => {
    const details = getItemDetails(item);
    setCart(prev => {
      const existing = prev[details.variantKey];
      const newQty = existing ? existing.quantity + 1 : 1;
      return {
        ...prev,
        [details.variantKey]: {
          item,
          variantIndex: details.variantIndex,
          variantName: details.variantName,
          price: details.price,
          quantity: newQty
        }
      };
    });
  };

  // Remove / Decrement item in cart
  const removeFromCart = (variantKey) => {
    setCart(prev => {
      const existing = prev[variantKey];
      if (!existing) return prev;
      if (existing.quantity <= 1) {
        const next = { ...prev };
        delete next[variantKey];
        return next;
      }
      return {
        ...prev,
        [variantKey]: {
          ...existing,
          quantity: existing.quantity - 1
        }
      };
    });
  };

  // Compute Cart Summaries
  const cartSummary = useMemo(() => {
    let totalItems = 0;
    let totalPrice = 0;
    Object.values(cart).forEach(entry => {
      totalItems += entry.quantity;
      totalPrice += entry.price * entry.quantity;
    });
    return { totalItems, totalPrice };
  }, [cart]);

  // Filter Items
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      // 1. Search Query Filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = item.description && item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      // 2. Dietary Filter
      if (dietFilter === 'veg') {
        if (item.isVeg === false) return false;
      } else if (dietFilter === 'nonveg') {
        if (item.isVeg === true) return false;
      }

      // 3. Category Filter
      if (selectedCategory === 'popular') {
        return item.popular === true;
      }
      if (selectedCategory !== 'all') {
        return item.category === selectedCategory;
      }

      return true;
    });
  }, [searchQuery, dietFilter, selectedCategory]);

  // Group items by Category for section display
  const groupedSections = useMemo(() => {
    if (selectedCategory !== 'all') {
      const catObj = CATEGORIES.find(c => c.id === selectedCategory);
      return [{
        category: catObj || { id: selectedCategory, name: selectedCategory, icon: 'Utensils' },
        items: filteredItems
      }];
    }

    const map = {};
    filteredItems.forEach(item => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });

    return CATEGORIES.filter(cat => cat.id !== 'all' && cat.id !== 'popular' && map[cat.id] && map[cat.id].length > 0)
      .map(cat => ({
        category: cat,
        items: map[cat.id]
      }));
  }, [selectedCategory, filteredItems]);

  const scrollToMenu = () => {
    if (menuRef.current) {
      menuRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate WhatsApp Order Link
  const sendWhatsAppOrder = () => {
    if (cartSummary.totalItems === 0) return;

    let text = `*New Order from ${RESTAURANT_INFO.name}*\n\n`;
    Object.values(cart).forEach((entry, idx) => {
      const vText = entry.variantName ? ` (${entry.variantName})` : '';
      text += `${idx + 1}. *${entry.item.name}*${vText} x ${entry.quantity} - ₹${entry.price * entry.quantity}\n`;
    });
    text += `\n*Total Amount: ₹${cartSummary.totalPrice}*\n`;
    text += `\nPlease confirm my order! Thank you.`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="app-container">
      {/* HERO SECTION */}
      <header className="app-header">
        <div
          className="hero-section"
          style={{ backgroundImage: `url('/images/hero_shawarma.png')` }}
        >
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="badge-tag">
              <Star size={14} fill="#FFD700" color="#FFD700" /> {RESTAURANT_INFO.rating} ⭐ on Zomato &bull; Dugri, Ludhiana
            </div>
            <h1 className="hero-title">
              Momo <span>Weds</span> Shawarma
            </h1>
            <p className="hero-tagline">
              {RESTAURANT_INFO.tagline}
            </p>

            <div className="hero-info-pills">
              <div className="info-pill">
                <Clock size={14} /> {RESTAURANT_INFO.timing}
              </div>
              <div className="info-pill">
                <Phone size={14} /> {RESTAURANT_INFO.phones.slice(0, 2).join(' / ')}
              </div>
              <div className="info-pill">
                <MapPin size={14} /> {RESTAURANT_INFO.shortAddress}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
              <button className="btn-browse" onClick={scrollToMenu}>
                <Utensils size={18} /> Browse Menu <ChevronRight size={18} />
              </button>
              <a
                className="btn-zomato"
                href={RESTAURANT_INFO.zomatoUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: '#CB202D',
                  color: '#fff',
                  padding: '14px 24px',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  boxShadow: '0 8px 20px rgba(203, 32, 45, 0.4)',
                  transition: 'transform 0.2s ease'
                }}
              >
                Order on Zomato <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* STICKY NAVIGATION CONTROLS */}
      <div className="sticky-nav-container" ref={menuRef}>
        <div className="container">
          <div className="search-filter-wrapper">
            {/* Search Input */}
            <div className="search-box">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                className="search-input"
                placeholder="Search shawarma, momos, rolls, pasta..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button className="clear-search" onClick={() => setSearchQuery('')}>
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Veg / Non-Veg Toggle Pills */}
            <div className="diet-filter-group">
              <button
                className={`diet-btn ${dietFilter === 'all' ? 'active' : ''}`}
                onClick={() => setDietFilter('all')}
              >
                All
              </button>
              <button
                className={`diet-btn ${dietFilter === 'veg' ? 'active veg-active' : ''}`}
                onClick={() => setDietFilter('veg')}
              >
                <span className="veg-icon-box" style={{ width: 14, height: 14 }}>
                  <span className="veg-dot" style={{ width: 6, height: 6 }} />
                </span>
                Veg
              </button>
              <button
                className={`diet-btn ${dietFilter === 'nonveg' ? 'active nonveg-active' : ''}`}
                onClick={() => setDietFilter('nonveg')}
              >
                <span className="nonveg-icon-box" style={{ width: 14, height: 14 }}>
                  <span className="nonveg-triangle" style={{ borderBottomWidth: 7, borderLeftWidth: 4, borderRightWidth: 4 }} />
                </span>
                Non-Veg
              </button>
            </div>
          </div>

          {/* Horizontal Category Chips */}
          <div className="category-chips-scroll">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                className={`chip-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {getCategoryIcon(cat.icon)}
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN MENU CONTENT DISPLAY */}
      <main className="container menu-main-content">
        {groupedSections.length === 0 ? (
          <div className="empty-state animate-fade-in">
            <UtensilsCrossed size={48} className="empty-icon" />
            <h3 className="empty-title">No Menu Items Found</h3>
            <p className="empty-text">
              Try adjusting your search query or switching your dietary filter.
            </p>
          </div>
        ) : (
          groupedSections.map(({ category, items }) => (
            <section key={category.id} id={category.id} className="section-block animate-fade-in">
              <div className="section-header">
                <h2 className="section-title">
                  {category.name}
                </h2>
                <span className="item-count-badge">{items.length} Items</span>
              </div>

              <div className="menu-grid">
                {items.map(item => {
                  const details = getItemDetails(item);
                  const cartEntry = cart[details.variantKey];
                  const qty = cartEntry ? cartEntry.quantity : 0;

                  return (
                    <div key={item.id} className={`food-card${item.image ? '' : ' food-card-no-img'}`}>
                      {/* Card Media Header — only shown when image exists */}
                      {item.image && (
                        <div className="card-media">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="food-img"
                            loading="lazy"
                            onError={e => {
                              const card = e.currentTarget.closest('.food-card');
                              if (card) card.classList.add('food-card-no-img');
                              e.currentTarget.parentElement.style.display = 'none';
                            }}
                          />

                          {/* Popular Badge */}
                          {item.popular && (
                            <div className="badge-popular">
                              <Flame size={12} /> Popular
                            </div>
                          )}

                          {/* Dietary Badge */}
                          {details.isVeg !== null && (
                            <div className="badge-diet">
                              {details.isVeg ? (
                                <div className="veg-icon-box">
                                  <span className="veg-dot" />
                                </div>
                              ) : (
                                <div className="nonveg-icon-box">
                                  <span className="nonveg-triangle" />
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      )}

                      {/* Card Content */}
                      <div className="card-content">
                        <div className="card-header-line">
                          <h3 className="food-name">{item.name}</h3>
                          {/* Inline badges for no-image cards */}
                          {!item.image && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0 }}>
                              {details.isVeg !== null && (
                                details.isVeg ? (
                                  <div className="veg-icon-box"><span className="veg-dot" /></div>
                                ) : (
                                  <div className="nonveg-icon-box"><span className="nonveg-triangle" /></div>
                                )
                              )}
                              {item.popular && (
                                <span style={{ fontSize: '0.65rem', background: 'var(--fire-red)', color: '#fff', padding: '2px 6px', borderRadius: '99px', fontWeight: 700 }}>Popular</span>
                              )}
                            </div>
                          )}
                        </div>

                        {item.description && (
                          <p className="food-desc">{item.description}</p>
                        )}

                        {/* Variant Selector Pill (if item has variants) */}
                        {item.variants && item.variants.length > 0 && (
                          <div className="variant-picker">
                            {item.variants.map((v, vIdx) => {
                              const activeIdx = itemVariants[item.id] || 0;
                              return (
                                <button
                                  key={vIdx}
                                  className={`variant-btn ${activeIdx === vIdx ? 'active' : ''}`}
                                  onClick={() => handleSelectVariant(item.id, vIdx)}
                                >
                                  {v.name}
                                </button>
                              );
                            })}
                          </div>
                        )}

                        {/* Card Footer: Price & Add Button */}
                        <div className="card-footer">
                          <div className="price-display">
                            <span className="price-val">₹{details.price}</span>
                          </div>

                          {qty === 0 ? (
                            <button
                              className="btn-add-item"
                              onClick={() => addToCart(item)}
                            >
                              <Plus size={16} /> ADD
                            </button>
                          ) : (
                            <div className="counter-box">
                              <button
                                className="counter-btn"
                                onClick={() => removeFromCart(details.variantKey)}
                              >
                                <Minus size={14} />
                              </button>
                              <span className="counter-val">{qty}</span>
                              <button
                                className="counter-btn"
                                onClick={() => addToCart(item)}
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))
        )}
      </main>

      {/* FIXED CALL FAB IN BOTTOM RIGHT CORNER */}
      <a
        href={`tel:${RESTAURANT_INFO.phones[0]}`}
        className="fixed-call-fab"
        title="Call Momo Weds Shawarma"
      >
        <Phone size={20} />
        <span>Call</span>
      </a>

      {/* Floating Cart Order Summary Bar (if cart has items) */}
      {cartSummary.totalItems > 0 && (
        <div className="cart-floating-container">
          <div className="cart-floating-bar animate-fade-in">
            <div className="cart-info">
              <span className="cart-count">{cartSummary.totalItems} Items Added</span>
              <span className="cart-total">₹{cartSummary.totalPrice}</span>
            </div>
            <button className="btn-view-cart" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={18} /> View Order <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* ORDER CART MODAL DRAWER */}
      {isCartOpen && (
        <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <ShoppingCart size={20} className="text-fire-red" /> Your Selected Order
              </h3>
              <button className="modal-close" onClick={() => setIsCartOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              {Object.entries(cart).map(([variantKey, entry]) => (
                <div key={variantKey} className="cart-item-row">
                  <div className="cart-item-details">
                    <span className="cart-item-title">
                      {entry.item.name}
                      {entry.variantName && <small style={{ opacity: 0.75, display: 'block', fontSize: '0.8rem' }}>{entry.variantName}</small>}
                    </span>
                    <span className="cart-item-price">₹{entry.price * entry.quantity}</span>
                  </div>

                  <div className="counter-box">
                    <button
                      className="counter-btn"
                      onClick={() => removeFromCart(variantKey)}
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{entry.quantity}</span>
                    <button
                      className="counter-btn"
                      onClick={() => addToCart(entry.item)}
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="modal-footer">
              <div className="order-summary-line">
                <span>Total Amount</span>
                <span className="text-fire-red">₹{cartSummary.totalPrice}</span>
              </div>
              <button className="btn-send-whatsapp" onClick={sendWhatsAppOrder}>
                <MessageCircle size={20} /> Place Order on WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="app-footer">
        <h2 className="footer-logo">Momo <span>Weds</span> Shawarma</h2>
        <p className="footer-text">
          Delhi's Premier Destination for Shawarmas, Kathi Rolls, Dumplings & Tandoori Delights.
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Momo Weds Shawarma. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
