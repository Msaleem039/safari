'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react';

import { apiService } from '@/lib/api';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [tokenValid, setTokenValid] = useState(true);
  const router = useRouter();
  const params = useParams();
  const token = params.token as string;

  useEffect(() => {
    if (!token) {
      setTokenValid(false);
      setError('Invalid or missing reset token.');
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Validate passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      setLoading(false);
      return;
    }
    
    try {
      const result = await apiService.resetPassword({ token, password });

      if (result.success) {
        setSuccess(true);
        // Redirect to login after 3 seconds
        setTimeout(() => {
          router.push('/login');
        }, 3000);
      } else {
        setError(result.error || 'Failed to reset password. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 animate-fade-in">
        <div className="animate-scale-in">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="animate-slide-down">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertCircle className="w-8 h-8 text-red-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Invalid Reset Link
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  This password reset link is invalid or has expired.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center text-sm text-gray-500">
                  <p>Please request a new password reset link.</p>
                </div>
                
                <div className="space-y-2">
                  <Link href="/forgot-password">
                    <Button className="w-full bg-amber-600 hover:bg-amber-700">
                      Request New Reset Link
                    </Button>
                  </Link>
                  
                  <Link href="/login">
                    <Button variant="ghost" className="w-full">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Login
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 animate-fade-in">
        <div className="animate-scale-in">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="animate-slide-down">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Password Reset Successful
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  Your password has been successfully reset.
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center text-sm text-gray-500">
                  <p>You will be redirected to the login page in a few seconds.</p>
                </div>
                
                <Link href="/login">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Go to Login
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 animate-fade-in">
      <div className="animate-scale-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="animate-slide-down">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Reset Password
              </CardTitle>
              <p className="text-gray-600">
                Enter your new password below
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 animate-slide-up">
                <Label htmlFor="password">New Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              <div className="space-y-2 animate-slide-up">
                <Label htmlFor="confirmPassword">Confirm New Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center p-2 bg-red-50 rounded animate-scale-in">
                  {error}
                </div>
              )}
              
              <div className="animate-slide-up">
                <Button 
                  type="submit" 
                  className="w-full bg-amber-600 hover:bg-amber-700"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    'Reset Password'
                  )}
                </Button>
              </div>
            </form>
            
            <div className="mt-6 text-center animate-fade-in">
              <Link href="/login">
                <Button variant="ghost" className="text-amber-600 hover:text-amber-700">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Login
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
