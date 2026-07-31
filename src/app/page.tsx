'use client';

import React, { useState, useMemo, useRef } from 'react';
import { useRouter } from 'next/navigation';
import {
  Search,
  X,
  Flame,
  Sparkles,
  Phone,
  Utensils,
  UtensilsCrossed,
  Plus,
  Minus,
  ShoppingCart,
  ChevronRight,
  Clock,
  Award,
  Scroll,
  Soup,
  Drumstick,
  Salad,
  Sandwich,
  Cookie,
  Crown,
  User,
  MapPin,
  FileText,
  Star,
  ExternalLink,
  Car,
  Utensils as DineIcon,
  ShoppingBag
} from 'lucide-react';
import { RESTAURANT_INFO, CATEGORIES, MENU_ITEMS } from '../data/menuData';
import { createClient } from '@/lib/supabase/client';

// Category Icon Helper
const getCategoryIcon = (iconName: string) => {
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
};

export default function CustomerMenuPage() {
  const router = useRouter();
  const supabase = createClient();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [dietFilter, setDietFilter] = useState<'all' | 'veg' | 'nonveg'>('all');
  const [cart, setCart] = useState<{ [key: string]: any }>({});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [itemVariants, setItemVariants] = useState<{ [key: string]: number }>({});

  // Checkout Form State
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [orderType, setOrderType] = useState<'Car Drive-In' | 'Dine In' | 'Takeaway'>('Car Drive-In');
  const [carNumber, setCarNumber] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectVariant = (itemId: string, variantIdx: number) => {
    setItemVariants(prev => ({
      ...prev,
      [itemId]: variantIdx,
    }));
  };

  const getItemDetails = (item: any) => {
    if (item.variants && item.variants.length > 0) {
      const selectedIdx = itemVariants[item.id] || 0;
      const variant = item.variants[selectedIdx];
      
      let price = item.basePrice;
      let label = variant.name;

      if (typeof variant.price === 'number') {
        price = variant.price;
      } else if (variant.prices) {
        price = variant.prices.full || variant.prices.half || item.basePrice;
        label = `${variant.name} (₹${variant.prices.half} Half / ₹${variant.prices.full} Full)`;
      }

      const isVeg = variant.isVeg !== undefined ? variant.isVeg : item.isVeg;

      return {
        variantKey: `${item.id}_v${selectedIdx}`,
        variantName: label,
        price,
        isVeg
      };
    }

    return {
      variantKey: item.id,
      variantName: '',
      price: item.price,
      isVeg: item.isVeg
    };
  };

  const addToCart = (item: any) => {
    const details = getItemDetails(item);
    setCart(prev => {
      const existing = prev[details.variantKey];
      const currentQty = existing ? existing.quantity : 0;
      return {
        ...prev,
        [details.variantKey]: {
          item,
          variantName: details.variantName,
          price: details.price,
          isVeg: details.isVeg,
          quantity: currentQty + 1
        }
      };
    });
  };

  const removeFromCart = (variantKey: string) => {
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

  const cartSummary = useMemo(() => {
    let totalItems = 0;
    let totalPrice = 0;
    Object.values(cart).forEach((entry: any) => {
      totalItems += entry.quantity;
      totalPrice += entry.price * entry.quantity;
    });
    return { totalItems, totalPrice };
  }, [cart]);

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item: any) => {
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description?.toLowerCase().includes(query);
        const matchesCat = item.category?.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesCat) return false;
      }

      if (dietFilter === 'veg') {
        if (item.isVeg === false) return false;
      } else if (dietFilter === 'nonveg') {
        if (item.isVeg === true) return false;
      }

      if (selectedCategory === 'popular') {
        if (!item.popular) return false;
      } else if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, dietFilter]);

  const groupedSections = useMemo(() => {
    if (selectedCategory !== 'all') {
      const catObj = CATEGORIES.find(c => c.id === selectedCategory);
      return [{
        category: catObj || { id: selectedCategory, name: selectedCategory, icon: 'Utensils' },
        items: filteredItems
      }];
    }

    const map: { [key: string]: any[] } = {};
    filteredItems.forEach((item: any) => {
      if (!map[item.category]) map[item.category] = [];
      map[item.category].push(item);
    });

    return CATEGORIES.filter(cat => cat.id !== 'all' && cat.id !== 'popular' && map[cat.id] && map[cat.id].length > 0)
      .map(cat => ({
        category: cat,
        items: map[cat.id]
      }));
  }, [selectedCategory, filteredItems]);

  // Place order into Supabase
  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim()) {
      setFormError('Please enter your name.');
      return;
    }
    if (!customerPhone.trim()) {
      setFormError('Please enter your phone number.');
      return;
    }
    if (orderType === 'Car Drive-In' && !carNumber.trim()) {
      setFormError('Please enter your Car Number & Model for Car Drive-In.');
      return;
    }
    if (orderType === 'Dine In' && !tableNumber.trim()) {
      setFormError('Please enter your Table Number for Dine In.');
      return;
    }

    setIsSubmitting(true);

    try {
      const generatedOrderNumber = `#MWS-${Math.floor(1000 + Math.random() * 9000)}`;

      const locationDetails = orderType === 'Car Drive-In'
        ? `Car No: ${carNumber}`
        : orderType === 'Dine In'
        ? `Table No: ${tableNumber}`
        : 'Takeaway';

      // 1. Insert into orders table in Supabase
      const { data: orderData, error: orderError } = await supabase
        .from('orders')
        .insert({
          order_number: generatedOrderNumber,
          customer_name: customerName,
          customer_phone: customerPhone,
          order_type: orderType,
          table_number: locationDetails,
          notes: notes.trim() ? notes : null,
          total: cartSummary.totalPrice,
          status: 'Pending',
        })
        .select()
        .single();

      const orderId = orderData?.id || `local-${Date.now()}`;

      // 2. Insert into order_items table in Supabase
      const orderItemsToInsert = Object.values(cart).map((entry: any) => ({
        order_id: orderId,
        menu_item_id: entry.item.id,
        item_name: entry.item.name,
        quantity: entry.quantity,
        price: entry.price,
        variant_name: entry.variantName || null,
      }));

      if (orderData?.id) {
        await supabase.from('order_items').insert(orderItemsToInsert);
      }

      // Clear Cart & Redirect to Order Confirmation Success page
      setCart({});
      setIsCartOpen(false);
      router.push(`/order-success/${orderId}?num=${encodeURIComponent(generatedOrderNumber)}&name=${encodeURIComponent(customerName)}&total=${cartSummary.totalPrice}`);

    } catch (err: any) {
      console.error('Order Error:', err);
      setFormError('There was an issue saving your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              Ludhiana's Authentic Shawarmas, Kathi Rolls, Dumplings & Street Delights
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
                {items.map((item: any) => {
                  const details = getItemDetails(item);
                  const cartEntry = cart[details.variantKey];
                  const qty = cartEntry ? cartEntry.quantity : 0;

                  return (
                    <div key={item.id} className={`food-card${item.image ? '' : ' food-card-no-img'}`}>
                      {item.image && (
                        <div className="card-media">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="food-img"
                            loading="lazy"
                            onError={(e) => {
                              const card = (e.currentTarget as HTMLElement).closest('.food-card');
                              if (card) card.classList.add('food-card-no-img');
                              if (e.currentTarget.parentElement) e.currentTarget.parentElement.style.display = 'none';
                            }}
                          />

                          {item.popular && (
                            <div className="badge-popular">
                              <Flame size={12} /> Chef's Special
                            </div>
                          )}

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

                      <div className="card-content">
                        <div className="card-header-line">
                          <h3 className="food-name">{item.name}</h3>
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
                                <span style={{ fontSize: '0.65rem', background: 'var(--fire-red)', color: '#fff', padding: '2px 6px', borderRadius: '99px', fontWeight: 700 }}>Special</span>
                              )}
                            </div>
                          )}
                        </div>

                        {item.description && (
                          <p className="food-desc">{item.description}</p>
                        )}

                        {item.variants && item.variants.length > 0 && (
                          <div className="variant-picker">
                            {item.variants.map((v: any, vIdx: number) => {
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

                        <div className="card-footer">
                          <div className="price-display">
                            <span className="price-val">₹{details.price}</span>
                          </div>

                          <div className="action-area">
                            {qty === 0 ? (
                              <button className="btn-add" onClick={() => addToCart(item)}>
                                <Plus size={16} /> ADD
                              </button>
                            ) : (
                              <div className="qty-control">
                                <button className="qty-btn" onClick={() => removeFromCart(details.variantKey)}>
                                  <Minus size={14} />
                                </button>
                                <span className="qty-val">{qty}</span>
                                <button className="qty-btn" onClick={() => addToCart(item)}>
                                  <Plus size={14} />
                                </button>
                              </div>
                            )}
                          </div>
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

      {/* FLOATING CALL BUTTON */}
      <a
        href={`tel:${RESTAURANT_INFO.phones[0]}`}
        className="fixed-call-fab"
        title="Call Momo Weds Shawarma Dugri"
      >
        <Phone size={20} />
        <span>Call</span>
      </a>

      {/* FLOATING CART SUMMARY BAR */}
      {cartSummary.totalItems > 0 && (
        <div className="cart-floating-container">
          <div className="cart-floating-bar animate-fade-in">
            <div className="cart-info">
              <span className="cart-count">{cartSummary.totalItems} Items Added</span>
              <span className="cart-total">₹{cartSummary.totalPrice}</span>
            </div>
            <button className="btn-view-cart" onClick={() => setIsCartOpen(true)}>
              <ShoppingCart size={18} /> Checkout <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      {/* CHECKOUT & ORDER MODAL DRAWER */}
      {isCartOpen && (
        <div className="modal-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3 className="modal-title">
                <ShoppingCart size={20} style={{ color: 'var(--fire-red-light)' }} /> Checkout & Place Order
              </h3>
              <button className="modal-close" onClick={() => setIsCartOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="modal-body">
              {/* Order Items List */}
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: 0.5 }}>Order Summary</h4>
                {Object.entries(cart).map(([variantKey, entry]: [string, any]) => (
                  <div key={variantKey} className="cart-item-row" style={{ marginBottom: 8 }}>
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

              {/* Checkout Input Form */}
              <form onSubmit={handlePlaceOrder} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {formError && (
                  <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#EF4444', padding: '10px 14px', borderRadius: 8, fontSize: '0.85rem' }}>
                    {formError}
                  </div>
                )}

                <div>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 6 }}>Serving Location / Order Type *</label>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                    <button
                      type="button"
                      onClick={() => setOrderType('Car Drive-In')}
                      style={{
                        flex: 1,
                        padding: '10px 6px',
                        borderRadius: 8,
                        border: orderType === 'Car Drive-In' ? '1px solid var(--fire-red-light)' : '1px solid var(--border-dark)',
                        background: orderType === 'Car Drive-In' ? 'rgba(193, 18, 31, 0.25)' : 'var(--bg-dark)',
                        color: orderType === 'Car Drive-In' ? 'white' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4
                      }}
                    >
                      🚗 Car Drive-In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('Dine In')}
                      style={{
                        flex: 1,
                        padding: '10px 6px',
                        borderRadius: 8,
                        border: orderType === 'Dine In' ? '1px solid var(--fire-red-light)' : '1px solid var(--border-dark)',
                        background: orderType === 'Dine In' ? 'rgba(193, 18, 31, 0.25)' : 'var(--bg-dark)',
                        color: orderType === 'Dine In' ? 'white' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4
                      }}
                    >
                      🍽 Dine In
                    </button>
                    <button
                      type="button"
                      onClick={() => setOrderType('Takeaway')}
                      style={{
                        flex: 1,
                        padding: '10px 6px',
                        borderRadius: 8,
                        border: orderType === 'Takeaway' ? '1px solid var(--fire-red-light)' : '1px solid var(--border-dark)',
                        background: orderType === 'Takeaway' ? 'rgba(193, 18, 31, 0.25)' : 'var(--bg-dark)',
                        color: orderType === 'Takeaway' ? 'white' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 4
                      }}
                    >
                      🛍 Takeaway
                    </button>
                  </div>
                </div>

                {orderType === 'Car Drive-In' && (
                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Car Number & Vehicle Details *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PB10 AB 1234 (White Swift)"
                      value={carNumber}
                      onChange={(e) => setCarNumber(e.target.value)}
                      style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>
                )}

                {orderType === 'Dine In' && (
                  <div>
                    <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Table Number *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Table 4"
                      value={tableNumber}
                      onChange={(e) => setTableNumber(e.target.value)}
                      style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
                    />
                  </div>
                )}

                <div>
                  <label style={{ fontSize: '0.85rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Special Instructions / Notes (Optional)</label>
                  <textarea
                    rows={2}
                    placeholder="Extra spicy, less oil, sauces on the side..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px', borderRadius: 8, fontSize: '0.9rem', outline: 'none', resize: 'none' }}
                  />
                </div>

                <div className="order-summary-line" style={{ marginTop: 8 }}>
                  <span>Total Amount</span>
                  <span style={{ color: 'var(--fire-red-light)' }}>₹{cartSummary.totalPrice}</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    width: '100%',
                    background: 'linear-gradient(135deg, var(--fire-red-light) 0%, var(--fire-red) 100%)',
                    color: 'white',
                    padding: '14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    boxShadow: '0 6px 20px var(--fire-red-glow)',
                    marginTop: 8
                  }}
                >
                  {isSubmitting ? 'Submitting Order...' : '🚀 Confirm & Place Order'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="app-footer">
        <h2 className="footer-logo">Momo <span>Weds</span> Shawarma</h2>
        <p className="footer-text">
          Ludhiana's Premier Destination for Shawarmas, Kathi Rolls, Dumplings & Tandoori Delights.
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 4 }}>
          📍 Booth 71C, B-28-1402/71, Urban Estate, Phase 2, Dugri, Ludhiana
        </p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Momo Weds Shawarma Dugri. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
