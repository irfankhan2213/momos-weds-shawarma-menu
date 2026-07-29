'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  Bell,
  Search,
  LogOut,
  Clock,
  Utensils,
  CheckCircle2,
  AlertCircle,
  IndianRupee,
  Phone,
  User,
  ShoppingBag,
  RefreshCw,
  Sparkles,
  Volume2
} from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { Order, OrderStatus } from '@/types/database';

export default function AdminDashboardPage() {
  const router = useRouter();
  const supabase = createClient();

  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'All' | OrderStatus>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [newOrderCount, setNewOrderCount] = useState(0);

  // Play notification chime sound when a new order arrives
  const playNotificationSound = () => {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.setValueAtTime(880, ctx.currentTime + 0.15); // A5
      gain.gain.setValueAtTime(0.3, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    } catch {
      // Audio autoplay restrictions fallback
    }
  };

  // Fetch initial orders
  const fetchOrders = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('orders')
        .select(`
          *,
          order_items (*)
        `)
        .order('created_at', { ascending: false });

      if (data) {
        setOrders(data as Order[]);
      }
    } catch (err) {
      console.error('Failed to fetch orders:', err);
    } finally {
      setLoading(false);
    }
  };

  // Supabase Realtime Listener
  useEffect(() => {
    fetchOrders();

    const channel = supabase
      .channel('admin_realtime_orders')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'orders' },
        async (payload: any) => {
          const newOrder = payload.new as Order;
          // Fetch order_items for new order
          const { data: items } = await supabase
            .from('order_items')
            .select('*')
            .eq('order_id', newOrder.id);
          
          const fullOrder = { ...newOrder, order_items: items || [] };

          setOrders(prev => [fullOrder, ...prev]);
          setNewOrderCount(c => c + 1);
          playNotificationSound();
        }
      )
      .on(
        'postgres_changes',
        { event: 'UPDATE', schema: 'public', table: 'orders' },
        (payload: any) => {
          const updated = payload.new as Order;
          setOrders(prev =>
            prev.map(ord => (ord.id === updated.id ? { ...ord, ...updated } : ord))
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [supabase]);

  // Handle order status updates directly in Supabase
  const updateOrderStatus = async (orderId: string, newStatus: OrderStatus) => {
    // Optimistic UI update
    setOrders(prev =>
      prev.map(ord => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    );

    try {
      await supabase
        .from('orders')
        .update({ status: newStatus })
        .eq('id', orderId);
    } catch (err) {
      console.error('Failed to update order status:', err);
      fetchOrders();
    }
  };

  // Logout handler
  const handleLogout = async () => {
    document.cookie = "admin_demo_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    await supabase.auth.signOut();
    router.push('/login');
    router.refresh();
  };

  // Compute Top Stats
  const stats = useMemo(() => {
    const todayStr = new Date().toISOString().split('T')[0];
    const todayOrders = orders.filter(o => o.created_at?.startsWith(todayStr) || true);
    
    let pending = 0;
    let preparing = 0;
    let ready = 0;
    let completed = 0;
    let revenue = 0;

    todayOrders.forEach(o => {
      if (o.status === 'Pending') pending++;
      else if (o.status === 'Preparing') preparing++;
      else if (o.status === 'Ready') ready++;
      else if (o.status === 'Completed') {
        completed++;
        revenue += Number(o.total || 0);
      }
    });

    return {
      totalToday: todayOrders.length,
      pending,
      preparing,
      ready,
      completed,
      revenue
    };
  }, [orders]);

  // Filtered orders list
  const filteredOrders = useMemo(() => {
    return orders.filter(ord => {
      if (activeTab !== 'All' && ord.status !== activeTab) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesName = ord.customer_name?.toLowerCase().includes(q);
        const matchesPhone = ord.customer_phone?.toLowerCase().includes(q);
        const matchesNum = ord.order_number?.toLowerCase().includes(q);
        const matchesTable = ord.table_number?.toLowerCase().includes(q);
        if (!matchesName && !matchesPhone && !matchesNum && !matchesTable) return false;
      }
      return true;
    });
  }, [orders, activeTab, searchQuery]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'white', paddingBottom: 60 }}>
      {/* ADMIN TOP NAVBAR */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(14, 14, 18, 0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-dark)', padding: '14px 20px' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: 1, textTransform: 'uppercase' }}>
              Momo <span style={{ color: 'var(--fire-red-light)' }}>Weds</span> Shawarma
            </h1>
            <span style={{ background: 'rgba(193, 18, 31, 0.2)', border: '1px solid var(--border-highlight)', color: 'var(--fire-red-light)', padding: '3px 10px', borderRadius: 99, fontSize: '0.75rem', fontWeight: 800 }}>
              LIVE KITCHEN DASHBOARD
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            {newOrderCount > 0 && (
              <button
                onClick={() => { setNewOrderCount(0); }}
                style={{ position: 'relative', background: 'rgba(234, 179, 8, 0.15)', border: '1px solid #EAB308', color: '#EAB308', padding: '8px 14px', borderRadius: 99, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
              >
                <Bell size={16} /> {newOrderCount} New Orders!
              </button>
            )}

            <button
              onClick={fetchOrders}
              title="Refresh Orders"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', color: 'var(--text-muted)', width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <RefreshCw size={16} />
            </button>

            <button
              onClick={handleLogout}
              style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#EF4444', padding: '8px 16px', borderRadius: 99, fontSize: '0.85rem', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      </header>

      <div className="container" style={{ marginTop: 24 }}>
        {/* TOP STATS CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: 14, marginBottom: 24 }}>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>Total Orders</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: 2 }}>{stats.totalToday}</h3>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: '#EAB308', fontWeight: 600 }}>⏳ Pending</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#EAB308', marginTop: 2 }}>{stats.pending}</h3>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(59, 130, 246, 0.3)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: '#3B82F6', fontWeight: 600 }}>🍳 Preparing</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#3B82F6', marginTop: 2 }}>{stats.preparing}</h3>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid rgba(34, 197, 94, 0.3)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: '#22C55E', fontWeight: 600 }}>🔔 Ready</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#22C55E', marginTop: 2 }}>{stats.ready}</h3>
          </div>

          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-dark)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>✅ Completed</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: 2 }}>{stats.completed}</h3>
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(193, 18, 31, 0.2) 0%, rgba(139, 0, 0, 0.3) 100%)', border: '1px solid var(--border-highlight)', padding: 16, borderRadius: 16 }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--fire-red-light)', fontWeight: 600 }}>💰 Today's Revenue</span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--fire-red-light)', marginTop: 2 }}>₹{stats.revenue}</h3>
          </div>
        </div>

        {/* CONTROLS BAR: SEARCH & TABS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: 8, background: 'var(--bg-card)', padding: 4, borderRadius: 12, border: '1px solid var(--border-dark)', overflowX: 'auto' }}>
              {(['All', 'Pending', 'Preparing', 'Ready', 'Completed'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 8,
                    border: 'none',
                    background: activeTab === tab ? 'var(--bg-elevated)' : 'transparent',
                    color: activeTab === tab ? 'white' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div style={{ position: 'relative', width: 280 }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="text"
                placeholder="Search orders, phone, table..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-dark)', color: 'white', padding: '9px 12px 9px 38px', borderRadius: 10, fontSize: '0.875rem', outline: 'none' }}
              />
            </div>
          </div>
        </div>

        {/* ORDERS GRID DISPLAY */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
            Loading kitchen orders...
          </div>
        ) : filteredOrders.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 60, background: 'var(--bg-card)', border: '1px dashed var(--border-dark)', borderRadius: 16 }}>
            <ShoppingBag size={48} style={{ color: 'var(--fire-red-light)', marginBottom: 12, opacity: 0.8 }} />
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>No Orders Found</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>No orders match the selected filter tab or search query.</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
            {filteredOrders.map(ord => {
              const formattedTime = ord.created_at ? new Date(ord.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '';

              return (
                <div
                  key={ord.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: ord.status === 'Pending' ? '1px solid #EAB308' : '1px solid var(--border-dark)',
                    borderRadius: 16,
                    padding: 20,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    position: 'relative'
                  }}
                  className="animate-fade-in"
                >
                  {/* Card Top Line */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: 'var(--fire-red-light)', letterSpacing: 0.5 }}>
                      {ord.order_number}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={12} /> {formattedTime}
                    </span>
                  </div>

                  {/* Customer Info */}
                  <div style={{ background: 'var(--bg-dark)', padding: 12, borderRadius: 10, border: '1px solid var(--border-dark)', display: 'flex', flexDirection: 'column', gap: 4, fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700 }}>
                      <span>👤 {ord.customer_name}</span>
                      <span style={{ color: 'var(--fire-red-light)' }}>{ord.order_type}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                      <span>📞 {ord.customer_phone}</span>
                      {ord.table_number && <span style={{ color: 'white', fontWeight: 700 }}>🪑 {ord.table_number}</span>}
                    </div>
                  </div>

                  {/* Items List */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6, borderTop: '1px solid var(--border-dark)', borderBottom: '1px solid var(--border-dark)', padding: '10px 0' }}>
                    {ord.order_items && ord.order_items.length > 0 ? (
                      ord.order_items.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                          <span>
                            <strong>{item.quantity}x</strong> {item.item_name}
                            {item.variant_name && <small style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem' }}>{item.variant_name}</small>}
                          </span>
                          <span style={{ fontWeight: 700 }}>₹{item.price * item.quantity}</span>
                        </div>
                      ))
                    ) : (
                      <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Item details recorded</span>
                    )}

                    {ord.notes && (
                      <div style={{ background: 'rgba(234, 179, 8, 0.1)', border: '1px solid rgba(234, 179, 8, 0.3)', padding: 8, borderRadius: 6, fontSize: '0.775rem', color: '#EAB308', marginTop: 4 }}>
                        📝 Note: {ord.notes}
                      </div>
                    )}
                  </div>

                  {/* Total Amount Line */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 800 }}>
                    <span>Total Amount</span>
                    <span style={{ fontSize: '1.2rem', color: 'var(--fire-red-light)' }}>₹{ord.total}</span>
                  </div>

                  {/* Status Action Buttons */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8, marginTop: 4 }}>
                    <button
                      onClick={() => updateOrderStatus(ord.id, 'Pending')}
                      style={{
                        padding: '8px',
                        borderRadius: 8,
                        border: ord.status === 'Pending' ? '1px solid #EAB308' : '1px solid var(--border-dark)',
                        background: ord.status === 'Pending' ? '#EAB308' : 'var(--bg-dark)',
                        color: ord.status === 'Pending' ? 'black' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.775rem',
                        cursor: 'pointer'
                      }}
                    >
                      ⏳ Pending
                    </button>

                    <button
                      onClick={() => updateOrderStatus(ord.id, 'Preparing')}
                      style={{
                        padding: '8px',
                        borderRadius: 8,
                        border: ord.status === 'Preparing' ? '1px solid #3B82F6' : '1px solid var(--border-dark)',
                        background: ord.status === 'Preparing' ? '#3B82F6' : 'var(--bg-dark)',
                        color: ord.status === 'Preparing' ? 'white' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.775rem',
                        cursor: 'pointer'
                      }}
                    >
                      🍳 Preparing
                    </button>

                    <button
                      onClick={() => updateOrderStatus(ord.id, 'Ready')}
                      style={{
                        padding: '8px',
                        borderRadius: 8,
                        border: ord.status === 'Ready' ? '1px solid #22C55E' : '1px solid var(--border-dark)',
                        background: ord.status === 'Ready' ? '#22C55E' : 'var(--bg-dark)',
                        color: ord.status === 'Ready' ? 'black' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.775rem',
                        cursor: 'pointer'
                      }}
                    >
                      🔔 Ready
                    </button>

                    <button
                      onClick={() => updateOrderStatus(ord.id, 'Completed')}
                      style={{
                        padding: '8px',
                        borderRadius: 8,
                        border: ord.status === 'Completed' ? '1px solid #9CA3AF' : '1px solid var(--border-dark)',
                        background: ord.status === 'Completed' ? '#3F3F46' : 'var(--bg-dark)',
                        color: ord.status === 'Completed' ? 'white' : 'var(--text-muted)',
                        fontWeight: 700,
                        fontSize: '0.775rem',
                        cursor: 'pointer'
                      }}
                    >
                      ✅ Completed
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
