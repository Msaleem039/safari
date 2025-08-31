'use client';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Package, 
  Eye, 
  EyeOff, 
  Calendar, 
  Tag, 
  DollarSign, 
  MousePointer,
  Image as ImageIcon,
  AlertCircle,
  RefreshCw,
  Trash2,
  Pencil
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface Product {
  _id: string;
  title: string;
  type: string;
  price: string;
  button: string;
  image?: string;
  inclusions: string[];
  createdAt: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedProducts, setExpandedProducts] = useState<Set<string>>(new Set());
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get('http://145.223.101.153/api/all');
      setProducts(response.data.product);
      console.log(response.data);
    } catch (error: any) {
      setError(error.response?.data?.message || 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (productId: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setDeletingId(productId);
      try {
        await axios.delete(`http://145.223.101.153/api/delete/${productId}`);
        await fetchProducts(); // Refresh products list
      } catch (error: any) {
        setError(error.response?.data?.message || 'Failed to delete product');
      } finally {
        setDeletingId(null);
      }
    }
  };

  const toggleProductExpansion = (productId: string) => {
    const newExpanded = new Set(expandedProducts);
    if (newExpanded.has(productId)) {
      newExpanded.delete(productId);
    } else {
      newExpanded.add(productId);
    }
    setExpandedProducts(newExpanded);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-primary" />
          <span className="text-muted-foreground">Loading products...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Products</h1>
            <p className="text-muted-foreground mt-2">
              Manage your tour packages and services
            </p>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <AlertCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-red-800 mb-2">Error Loading Products</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <Button onClick={fetchProducts} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Products</h1>
          <p className="text-muted-foreground mt-2">
            Manage your tour packages and services ({products.length} total)
          </p>
        </div>
        <Button onClick={fetchProducts} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Refresh
        </Button>
      </div>

      {/* Products Grid */}
      {products.length === 0 ? (
        <div className="bg-card rounded-lg border border-border p-12 text-center">
          <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-foreground mb-2">No Products Found</h3>
          <p className="text-muted-foreground mb-4">
            You haven't created any products yet. Start by creating your first tour package.
          </p>
          <Button asChild>
            <a href="/admin/create-product">Create Your First Product</a>
          </Button>
        </div>
      ) : (
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Product Image */}
              <div className="aspect-video bg-muted flex items-center justify-center overflow-hidden">
                                 {product.image ? (
                   <img
                     src={product.image}
                     alt={product.title}
                     className="w-full h-full object-cover"
                     onError={(e) => {
                       const target = e.target as HTMLImageElement;
                       target.style.display = 'none';
                       const fallback = target.nextElementSibling as HTMLElement;
                       if (fallback) {
                         fallback.style.display = 'flex';
                       }
                     }}
                   />
                 ) : null}
                 <div className={`w-full h-full items-center justify-center text-muted-foreground ${product.image ? 'hidden' : 'flex'}`}>
                   <ImageIcon className="w-12 h-12" />
                 </div>
              </div>

              {/* Product Content */}
              <div className="p-6 space-y-4">
                {/* Title */}
                <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                  {product.title}
                </h3>

                {/* Meta Information */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Tag className="w-4 h-4" />
                    <span>{product.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <DollarSign className="w-4 h-4" />
                    <span>{product.price}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MousePointer className="w-4 h-4" />
                    <span>{product.button}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{formatDate(product.createdAt)}</span>
                  </div>
                </div>

                {/* Inclusions Count */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {product.inclusions.length} inclusion{product.inclusions.length !== 1 ? 's' : ''}
                  </Badge>
                  
                  <div className="flex items-center gap-2">
                    {/* <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleProductExpansion(product._id)}
                      className="text-xs"
                    >
                      {expandedProducts.has(product._id) ? (
                        <>
                          <EyeOff className="w-3 h-3 mr-1" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <Eye className="w-3 h-3 mr-1" />
                          View Details
                        </>
                      )}
                    </Button> */}
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(product._id)}
                      disabled={deletingId === product._id}
                      className="text-xs"
                    >
                      {deletingId === product._id ? (
                        <RefreshCw className="w-3 h-3 mr-1 animate-spin" />
                      ) : (
                        <Trash2 className="w-3 h-3 mr-1" />
                      )}
                      {deletingId === product._id ? 'Deleting...' : 'Delete'}
                    </Button>
                    <Link href={`/admin/edit-product/${product._id}`} passHref>
                      <Button variant="outline" size="sm" className="text-xs">
                        <Pencil className="w-3 h-3 mr-1" />
                        Edit
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Expanded Inclusions */}
                {expandedProducts.has(product._id) && (
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-3">Inclusions:</h4>
                    <ul className="space-y-2">
                      {product.inclusions.map((inclusion, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{inclusion}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 