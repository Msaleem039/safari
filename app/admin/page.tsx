import React from 'react';
import Link from 'next/link';
import { Package, Plus, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to your Desert Dubai Tourism admin panel
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Products</p>
              <p className="text-2xl font-bold text-foreground">24</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <p className="text-2xl font-bold text-foreground">8</p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Active Tours</p>
              <p className="text-2xl font-bold text-foreground">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link href="/admin/create-product">
              <Button className="w-full justify-start" size="lg">
                <Plus className="w-4 h-4 mr-2" />
                Create New Product
              </Button>
            </Link>
            <Link href="/admin/products">
              <Button variant="outline" className="w-full justify-start" size="lg">
                <Package className="w-4 h-4 mr-2" />
                View All Products
              </Button>
            </Link>
          </div>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span className="text-muted-foreground">New product "Desert Safari" added</span>
              <span className="text-xs text-muted-foreground ml-auto">2h ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span className="text-muted-foreground">Product "City Tour" updated</span>
              <span className="text-xs text-muted-foreground ml-auto">5h ago</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span className="text-muted-foreground">New booking received</span>
              <span className="text-xs text-muted-foreground ml-auto">1d ago</span>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Message */}
      <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-border p-8 text-center">
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Welcome to Desert Dubai Tourism Admin Panel
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Manage your tour packages, create new experiences, and monitor your business operations. 
          Use the sidebar navigation to access different sections of your admin panel.
        </p>
      </div>
    </div>
  );
} 