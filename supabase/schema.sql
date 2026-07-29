-- ==============================================================================
-- SUPABASE DATABASE SCHEMA FOR MOMO WEDS SHAWARMA RESTAURANT ORDERING SYSTEM
-- ==============================================================================

-- 1. Enable UUID Extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  sort_order INT DEFAULT 0
);

-- 3. MENU ITEMS TABLE
CREATE TABLE IF NOT EXISTS menu_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id TEXT REFERENCES categories(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  price NUMERIC NOT NULL,
  image_url TEXT,
  is_veg BOOLEAN DEFAULT true,
  popular BOOLEAN DEFAULT false,
  is_available BOOLEAN DEFAULT true,
  variants JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. ORDERS TABLE
CREATE TABLE IF NOT EXISTS orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  order_type TEXT NOT NULL DEFAULT 'Dine In', -- 'Dine In' | 'Takeaway'
  table_number TEXT,
  notes TEXT,
  total NUMERIC NOT NULL DEFAULT 0,
  status TEXT NOT NULL DEFAULT 'Pending', -- 'Pending' | 'Preparing' | 'Ready' | 'Completed'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ORDER ITEMS TABLE
CREATE TABLE IF NOT EXISTS order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  menu_item_id TEXT,
  item_name TEXT NOT NULL,
  quantity INT NOT NULL DEFAULT 1,
  price NUMERIC NOT NULL DEFAULT 0,
  variant_name TEXT
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Categories RLS
CREATE POLICY "Public Read Categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Admin Full Categories" ON categories FOR ALL TO authenticated USING (true);

-- Menu Items RLS
CREATE POLICY "Public Read Menu Items" ON menu_items FOR SELECT USING (true);
CREATE POLICY "Admin Full Menu Items" ON menu_items FOR ALL TO authenticated USING (true);

-- Orders RLS
CREATE POLICY "Public Insert Orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Own Orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Admin Full Orders" ON orders FOR ALL TO authenticated USING (true);

-- Order Items RLS
CREATE POLICY "Public Insert Order Items" ON order_items FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Read Order Items" ON order_items FOR SELECT USING (true);
CREATE POLICY "Admin Full Order Items" ON order_items FOR ALL TO authenticated USING (true);

-- ==============================================================================
-- REALTIME PUBLICATION FOR ORDERS
-- ==============================================================================
DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_publication WHERE pubname = 'supabase_realtime') THEN
    ALTER PUBLICATION supabase_realtime ADD TABLE orders, order_items;
  END IF;
EXCEPTION
  WHEN OTHERS THEN NULL;
END $$;
