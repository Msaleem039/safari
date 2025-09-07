import Cookies from 'js-cookie';

const API_BASE_URL = 'https://api.fsroyaldesertsafaridubai.com/api';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export interface Product {
  _id: string;
  title: string;
  type: string;
  rating: number;
  reviews: number;
  duration: string;
  price: string;
  button: string;
  image: string;
  inclusions?: string[];
  description?: string;
  originalPrice?: string;
  subtitle?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  name?: string;
  phone?: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
}

class ApiService {
  private getAuthHeaders(): HeadersInit {
    const token = Cookies.get('auth_token');
    return {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` }),
    };
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    try {
      const data = await response.json();
      
      if (response.ok) {
        return {
          success: true,
          data,
        };
      } else {
        return {
          success: false,
          error: data.message || `HTTP ${response.status}: ${response.statusText}`,
        };
      }
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Login API
  async login(credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      return this.handleResponse<LoginResponse>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Register API
  async register(credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      return this.handleResponse<LoginResponse>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Get all products
  async getAllProducts(): Promise<ApiResponse<Product[]>> {
    try {
      const response = await fetch(`${API_BASE_URL}/all`, {
        // Ensure fresh data in production (disable Next.js fetch cache)
        cache: 'no-store',
        next: { revalidate: 0 },
        headers: this.getAuthHeaders(),
      });
    
      const result = await this.handleResponse<Product[]>(response);
      
      // Handle different response formats
      if (result.success && result.data) {
        const products = Array.isArray(result.data) ? result.data : (result.data as any).product || [];
        return {
          success: true,
          data: products,
        };
      }
      
      return result;
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Create product
  async createProduct(product: Omit<Product, '_id'>): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${API_BASE_URL}/product`, {
        method: 'POST',
        headers: this.getAuthHeaders(),
        body: JSON.stringify(product),
      });

      return this.handleResponse<Product>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Update product
  async updateProduct(id: string, product: Partial<Product>): Promise<ApiResponse<Product>> {
    try {
      const response = await fetch(`${API_BASE_URL}/product`, {
        method: 'PUT',
        headers: this.getAuthHeaders(),
        body: JSON.stringify({ _id: id, ...product }),
      });

      return this.handleResponse<Product>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Delete product
  async deleteProduct(id: string): Promise<ApiResponse<void>> {
    try {
      const response = await fetch(`${API_BASE_URL}/product/${id}`, {
        method: 'DELETE',
        headers: this.getAuthHeaders(),
      });

      return this.handleResponse<void>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Check if user is authenticated
  isAuthenticated(): boolean {
    const token = Cookies.get('auth_token');
    return !!token;
  }

  // Logout
  logout(): void {
    Cookies.remove('auth_token');
    Cookies.remove('adminUser');
  }

  // Get current user
  getCurrentUser(): any {
    const userData = Cookies.get('adminUser');
    return userData ? JSON.parse(userData) : null;
  }

  // Forgot password
  async forgotPassword(request: ForgotPasswordRequest): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_BASE_URL}/forgot-password`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      return this.handleResponse<any>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }

  // Reset password
  async resetPassword(request: ResetPasswordRequest): Promise<ApiResponse<any>> {
    try {
      const response = await fetch(`${API_BASE_URL}/reset-password/${request.token}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password: request.password }),
      });

      return this.handleResponse<any>(response);
    } catch (error) {
      return {
        success: false,
        error: 'Network error. Please check your connection.',
      };
    }
  }
}

export const apiService = new ApiService();
