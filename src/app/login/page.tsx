'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ShieldCheck, ArrowRight, Utensils } from 'lucide-react';
import { createClient } from '@/lib/supabase/client';

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setErrorMsg(error.message || 'Invalid login credentials.');
      } else if (data.user) {
        router.push('/admin');
        router.refresh();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected authentication error occurred.');
    } finally {
      setLoading(false);
    }
  };

  // Demo Admin access helper for quick testing
  const handleDemoAdmin = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      document.cookie = "admin_demo_session=true; path=/; max-age=86400";
      const { error } = await supabase.auth.signInWithPassword({
        email: 'admin@momowedsshawarma.com',
        password: 'AdminPassword123!',
      });
      router.push('/admin');
      router.refresh();
    } catch {
      document.cookie = "admin_demo_session=true; path=/; max-age=86400";
      router.push('/admin');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
      <div style={{ maxWidth: 440, width: '100%', background: 'var(--bg-card)', border: '1px solid var(--border-dark)', borderRadius: 20, padding: 32, boxShadow: '0 12px 35px rgba(0,0,0,0.6)' }} className="animate-fade-in">
        
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(193, 18, 31, 0.15)', border: '1px solid var(--border-highlight)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--fire-red-light)', margin: '0 auto 12px' }}>
            <ShieldCheck size={28} />
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: 1, textTransform: 'uppercase' }}>
            Momo <span style={{ color: 'var(--fire-red-light)' }}>Weds</span> Shawarma
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: 4 }}>Restaurant Admin Portal</p>
        </div>

        {errorMsg && (
          <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.4)', color: '#EF4444', padding: '10px 14px', borderRadius: 8, fontSize: '0.85rem', marginBottom: 16 }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div>
            <label style={{ fontSize: '0.825rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Admin Email</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="email"
                required
                placeholder="admin@momowedsshawarma.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px 10px 40px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>

          <div>
            <label style={{ fontSize: '0.825rem', color: 'var(--text-sub)', display: 'block', marginBottom: 4 }}>Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', background: 'var(--bg-dark)', border: '1px solid var(--border-dark)', color: 'white', padding: '10px 14px 10px 40px', borderRadius: 8, fontSize: '0.9rem', outline: 'none' }}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              width: '100%',
              background: 'linear-gradient(135deg, var(--fire-red-light) 0%, var(--fire-red) 100%)',
              color: 'white',
              padding: '12px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 800,
              fontSize: '0.95rem',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 6px 20px var(--fire-red-glow)',
              marginTop: 6
            }}
          >
            {loading ? 'Authenticating...' : 'Log In to Dashboard'} <ArrowRight size={18} />
          </button>

          <button
            type="button"
            onClick={handleDemoAdmin}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              width: '100%',
              background: 'rgba(255, 255, 255, 0.06)',
              color: 'var(--text-sub)',
              padding: '10px',
              borderRadius: 'var(--radius-full)',
              fontWeight: 600,
              fontSize: '0.85rem',
              border: '1px solid var(--border-dark)',
              cursor: 'pointer'
            }}
          >
            <Utensils size={14} /> Quick Demo Access (Dev Mode)
          </button>
        </form>
      </div>
    </div>
  );
}
