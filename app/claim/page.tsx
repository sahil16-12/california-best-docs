'use client';
import React, { useState } from 'react';
import { Stethoscope, User, UserPlus, Shield, BarChart3, Users } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const ClaimProfilePage = () => {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        npi: '',
        password: ''
    });

    interface ClaimProfileFormData {
        email: string;
        mobile: string;
        npi: string;
        password: string;
    }

    type ClaimProfileField = keyof ClaimProfileFormData;

    const handleInputChange = (field: ClaimProfileField, value: string) => {
        setFormData((prev: ClaimProfileFormData) => ({
            ...prev,
            [field]: value
        }));
    };

    const handleViewProfile = () => {
        // Navigate to doctor profile page
        window.location.href = '/about-doctor';
    };

    const handleRegisterClaim = () => {
        // Scroll to the registration form
        const formElement = document.querySelector('.registration-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleFormSubmit = () => {
        // Handle form submission
        console.log('Form submitted:', formData);
        // Add your form submission logic here
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
                {/* Hero Section - Improved for mobile */}
                <div className="text-center mb-8 sm:mb-12">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                        <UserPlus className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Claim Your Professional Profile</h1>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Join HealthConnect to manage your information and connect with new patients.</p>
                </div>

                {/* Main content - Stack on mobile, side by side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
                    {/* Left Side - Why Claim Your Profile */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl sm:rounded-2xl p-6 sm:p-8">
                        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Why Claim Your Profile?</h2>
                        <p className="text-blue-800 text-sm mb-5 sm:mb-6">Unlock benefits that help you serve more patients.</p>
                        
                        <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-4 h-4 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-1">Verified Information</h3>
                                    <p className="text-blue-700 text-sm">Ensure patients see accurate details.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Users className="w-4 h-4 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-1">Reach New Patients</h3>
                                    <p className="text-blue-700 text-sm">Increase visibility to those seeking care.</p>
                                </div>
                            </div>
                            
                            <div className="flex items-start gap-3 sm:gap-4">
                                <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <BarChart3 className="w-4 h-4 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-1">Manage Reputation</h3>
                                    <p className="text-blue-700 text-sm">Respond to reviews and build trust.</p>
                                </div>
                            </div>
                        </div>

                        {/* Profile Preview - Mobile optimized */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
                            <div className="flex items-start gap-3 mb-4">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <User className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Dr. Emily Carter</h4>
                                    <p className="text-xs sm:text-sm text-gray-600">Cardiologist</p>
                                    <p className="text-xs text-gray-500 truncate">123 Health St, Wellness City, TX</p>
                                </div>
                                <button 
                                    onClick={handleViewProfile}
                                    className="bg-blue-600 text-white px-2 sm:px-3 py-1 rounded text-xs whitespace-nowrap hover:bg-blue-700 transition-colors"
                                >
                                    View Profile
                                </button>
                            </div>
                            <div className="text-xs text-gray-500 border-t pt-2">
                                We only show you FREE Clinics profile.
                            </div>
                        </div>

                        {/* Responsive grid for specialties and info */}
                        <div className="bg-white rounded-lg p-4">
                            <div className="mb-3">
                                <h4 className="font-semibold text-gray-900 text-sm mb-2">Specialties</h4>
                                <div className="flex flex-wrap gap-1">
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Rheumatology</span>
                                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Arthritis Treatment</span>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                                <div>
                                    <h5 className="font-medium text-gray-900 mb-1">Office Hours</h5>
                                    <div className="text-gray-600 space-y-1">
                                        <div>Monday - Friday: 8:00 AM - 5:00 PM</div>
                                        <div>Saturday: 9:00 AM - 1:00 PM</div>
                                        <div>Sunday: Closed</div>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-medium text-gray-900 mb-1">Board Info</h5>
                                    <p className="text-gray-600">Want to learn more about Dr. Carter? Register to get full access</p>
                                    <button 
                                        onClick={handleRegisterClaim}
                                        className="bg-blue-600 text-white px-2 py-1 rounded text-xs mt-1 hover:bg-blue-700 transition-colors"
                                    >
                                        Register & Claim
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Registration Form - More touch-friendly on mobile */}
                    <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-6 sm:p-8 registration-form">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Register & Verify</h2>
                        <p className="text-gray-600 mb-6 sm:mb-8">Provide your details to get started</p>
                        
                        <div className="space-y-5 sm:space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-1.5 sm:mb-2">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-1.5 sm:mb-2">Mobile Number</label>
                                <input
                                    type="tel"
                                    placeholder="(555) 123-4567"
                                    value={formData.mobile}
                                    onChange={(e) => handleInputChange('mobile', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <p className="text-xs text-gray-500 mt-1">We'll send a verification code</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-1.5 sm:mb-2">NPI Number</label>
                                <input
                                    type="text"
                                    placeholder="Your NPI"
                                    value={formData.npi}
                                    onChange={(e) => handleInputChange('npi', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                                <p className="text-xs text-gray-500 mt-1">Required to claim your profile</p>
                            </div>
                            
                            <div>
                                <label className="block text-sm font-medium text-gray-900 mb-1.5 sm:mb-2">Create Password</label>
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={(e) => handleInputChange('password', e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            
                            <div className="text-sm text-gray-600 pt-2">
                                I agree to <span className="text-blue-600 underline cursor-pointer">terms</span> & <span className="text-blue-600 underline cursor-pointer">privacy policy</span>
                            </div>
                            
                            <button 
                                onClick={handleFormSubmit}
                                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors mt-2"
                            >
                                Register & Claim
                            </button>
                            
                            <div className="text-center text-sm text-gray-600 pt-2">
                                Already have an account? <span className="text-blue-600 underline cursor-pointer">Sign in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ClaimProfilePage;