'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams, useParams, useRouter } from 'next/navigation';
import { CheckCircle2, Clock, Utensils, ArrowLeft, Phone, Sparkles } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';
import { OrderStatus } from '@/types/database';

export default function OrderSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const supabase = createClient();

  const orderId = params.orderId as string;
  const orderNumber = searchParams.get('num') || '#MWS-ORDER';
  const customerName = searchParams.get('name') || 'Guest';
  const total = searchParams.get('total') || '0';

  const [status, setStatus] = useState<OrderStatus>('Pending');

  // Supabase Realtime listener to track live order status updates
  useEffect(() => {
    if (!orderId || orderId.startsWith('local-')) return;

    // Fetch initial status
    const fetchStatus = async () => {
      const { data } = await supabase
        .from('orders')
        .select('status')
        .eq('id', orderId)
        .single();
      if (data?.status) {
        setStatus(data.status as OrderStatus);
      }
    };
    fetchStatus();

    // Subscribe to realtime status changes on this order
    const channel = supabase
      .channel(`order_status_${orderId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'orders',
          filter: `id=eq.${orderId}`,
        },
        (payload: any) => {
          if (payload.new?.status) {
            setStatus(payload.new.status as OrderStatus);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [orderId, supabase]);

  const getStatusBadge = () => {
    switch (status) {
      case 'Pending':
        return { text: 'Order Received (Pending)', bg: 'rgba(234, 179, 8, 0.15)', color: '#EAB308', icon: <Clock size={20} /> };
      case 'Preparing':
        return { text: 'Preparing in Kitchen', bg: 'rgba(59, 130, 246, 0.15)', color: '#3B82F6', icon: <Utensils size={20} /> };
      case 'Ready':
        return { text: 'Ready for Serve / Pickup!', bg: 'rgba(34, 197, 94, 0.15)', color: '#22C55E', icon: <Sparkles size={20} /> };
      case 'Completed':
        return { text: 'Order Completed', bg: 'rgba(156, 163, 175, 0.15)', color: '#9CA3AF', icon: <CheckCircle2 size={20} /> };
      default:
        return { text: status, bg: 'rgba(234, 179, 8, 0.15)', color: '#EAB308', icon: <Clock size={20} /> };
    }
  };

  const statusBadge = getStatusBadge();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ maxWidth: 500, width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-highlight)', borderRadius: 20, padding: 32, textAlign: 'center', boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }} className="animate-fade-in">
        
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(34, 197, 94, 0.15)', border: '2px solid #22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', margin: '0 auto 16px' }}>
          <CheckCircle2 size={40} />
        </div>

        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>Order Placed!</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 20 }}>Thank you, {customerName}! Your order has been sent to the kitchen.</p>

        {/* Order Number Box */}
        <div style={{ background: 'var(--bg-dark)', border: '1px dashed var(--border-dark)', padding: '16px 20px', borderRadius: 12, marginBottom: 20 }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase', letterSpacing: 0.5 }}>Order Number</span>
          <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--fire-red-light)', fontFamily: 'var(--font-display)', letterSpacing: 1 }}>{orderNumber}</span>
        </div>

        {/* Live Status Indicator */}
        <div style={{ background: statusBadge.bg, border: `1px solid ${statusBadge.color}`, padding: '12px 16px', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, color: statusBadge.color, fontWeight: 700, fontSize: '0.95rem', marginBottom: 24 }}>
          {statusBadge.icon}
          <span>Status: {statusBadge.text}</span>
        </div>

        {/* Details Summary */}
        <div style={{ borderTop: '1px solid var(--border-dark)', paddingTop: 16, marginBottom: 24, textAlign: 'left', display: 'flex', flexDirection: 'column', gap: 8, fontSize: '0.9rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Total Paid</span>
            <span style={{ fontWeight: 800, color: 'var(--fire-red-light)' }}>₹{total}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ color: 'var(--text-muted)' }}>Restaurant</span>
            <span>Momo Weds Shawarma</span>
          </div>
        </div>

        <button
          onClick={() => router.push('/')}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            width: '100%',
            background: 'linear-gradient(135deg, var(--fire-red-light) 0%, var(--fire-red) 100%)',
            color: 'white',
            padding: '14px',
            borderRadius: 'var(--radius-full)',
            fontWeight: 800,
            fontSize: '0.95rem',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 6px 20px var(--fire-red-glow)'
          }}
        >
          <ArrowLeft size={18} /> Back to Menu
        </button>
      </div>
    </div>
  );
}
