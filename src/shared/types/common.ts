import { ReactNode, ChangeEvent, MouseEvent } from 'react';

// Common props types
export interface BaseProps {
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
}

// Common event handler types
export type ChangeEventHandler<T = HTMLInputElement> = (event: ChangeEvent<T>) => void;
export type MouseEventHandler<T = HTMLButtonElement> = (event: MouseEvent<T>) => void;

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
  success: boolean;
}

// Common data types
export interface Identifiable {
  id: string | number;
}

export interface Timestamps {
  createdAt: string | Date;
  updatedAt: string | Date;
}

// Status types
export type Status = 'idle' | 'loading' | 'success' | 'error';

// Utility types
export type Optional<T> = {
  [P in keyof T]?: T[P];
};

export type NonNullable<T> = {
  [P in keyof T]: Required<NonNullable<T[P]>>;
};

// Common form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'date' | 'select' | 'textarea';
  placeholder?: string;
  required?: boolean;
  options?: { label: string; value: string | number }[];
}

// Size variants
export type Size = 'small' | 'medium' | 'large';

// Direction types
export type Direction = 'horizontal' | 'vertical';

// Common theme types
export type Theme = 'light' | 'dark';

// Common alignment types
export type Alignment = 'left' | 'center' | 'right';

// Common spacing types
export type Spacing = 'none' | 'small' | 'medium' | 'large';