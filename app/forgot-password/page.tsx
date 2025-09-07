'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail } from 'lucide-react';

import { apiService } from '@/lib/api';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    try {
      const result = await apiService.forgotPassword({ email });

      if (result.success) {
        setSuccess(true);
      } else {
        setError(result.error || 'Failed to send reset email. Please try again.');
      }
    } catch (error) {
      setError('Network error. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 animate-fade-in">
        <div className="animate-scale-in">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <div className="animate-slide-down">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800">
                  Check Your Email
                </CardTitle>
                <p className="text-gray-600 mt-2">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center text-sm text-gray-500">
                  <p>Please check your email and click the reset link to continue.</p>
                  <p className="mt-2">Didn't receive the email? Check your spam folder.</p>
                </div>
                
                <div className="space-y-2">
                  <Button 
                    onClick={() => {
                      setSuccess(false);
                      setEmail('');
                    }}
                    variant="outline"
                    className="w-full"
                  >
                    Try Different Email
                  </Button>
                  
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center p-4 animate-fade-in">
      <div className="animate-scale-in">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="animate-slide-down">
              <CardTitle className="text-2xl font-bold text-gray-800">
                Forgot Password
              </CardTitle>
              <p className="text-gray-600">
                Enter your email address and we'll send you a link to reset your password
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2 animate-slide-up">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                    'Send Reset Link'
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
