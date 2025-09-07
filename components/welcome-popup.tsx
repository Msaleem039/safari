'use client';

import { useState, useEffect } from 'react';
import { X, Star, MapPin, Clock, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function WelcomePopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasSeenPopup = sessionStorage.getItem('welcome-popup-shown');
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
        setIsAnimating(true);
        sessionStorage.setItem('welcome-popup-shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-all duration-300 ${
          isAnimating ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
      />
      
      {/* Popup */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
      }`}>
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden transform transition-all duration-500 ease-out">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
          >
            <X className="w-4 h-4 text-gray-600" />
          </button>

          {/* Header with Gradient Background */}
          <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-8 text-white overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            {/* Logo/Icon */}
            <div className="relative z-10 flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Welcome Text */}
            <div className="relative z-10 text-center">
              <h1 className="text-2xl font-bold mb-2 animate-fade-in-up">
                Welcome to
              </h1>
              <h2 className="text-3xl font-bold mb-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                FS Royal Desert Safari Dubai
              </h2>
              
              {/* Rating Stars */}
              <div className="flex items-center justify-center gap-1 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300 animate-bounce" style={{ animationDelay: `${0.6 + i * 0.1}s` }} />
                ))}
                <span className="ml-2 text-sm font-medium">4 Star Rated</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Service Highlights */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.8s' }}>
                <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Premium Desert Experiences</h3>
                  <p className="text-sm text-gray-600">Luxury safaris with world-class service</p>
                </div>
              </div>

              <div className="flex items-center gap-3 animate-slide-in-right" style={{ animationDelay: '1s' }}>
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">24/7 Professional Service</h3>
                  <p className="text-sm text-gray-600">Round-the-clock support for your comfort</p>
                </div>
              </div>

              <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '1.2s' }}>
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Expert Local Guides</h3>
                  <p className="text-sm text-gray-600">Knowledgeable guides for unforgettable adventures</p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4 animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <Button 
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={handleClose}
              >
                Explore Our Adventures
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="text-center pt-2 animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              <p className="text-xs text-gray-500">
                Trusted by thousands of travelers worldwide
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
