export type OrderStatus = 'Pending' | 'Preparing' | 'Ready' | 'Completed';
export type OrderType = 'Dine In' | 'Takeaway';

export interface Category {
  id: string;
  name: string;
  sort_order: number;
}

export interface MenuItemVariant {
  name: string;
  price?: number;
  prices?: { half: number; full: number };
  isVeg?: boolean;
}

export interface MenuItem {
  id: string;
  category_id: string;
  name: string;
  description?: string;
  price: number;
  image_url?: string;
  is_veg: boolean | null;
  popular: boolean;
  is_available: boolean;
  variants?: MenuItemVariant[];
  created_at?: string;
}

export interface Order {
  id: string;
  order_number: string;
  customer_name: string;
  customer_phone: string;
  order_type: OrderType;
  table_number?: string;
  notes?: string;
  total: number;
  status: OrderStatus;
  created_at: string;
  order_items?: OrderItem[];
}

export interface OrderItem {
  id?: string;
  order_id?: string;
  menu_item_id?: string;
  item_name: string;
  quantity: number;
  price: number;
  variant_name?: string;
}
