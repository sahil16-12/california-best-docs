'use client';
import React, { useState } from 'react';
import { Stethoscope, User, MapPin, Phone, Shield, Clock, Menu, X } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const DoctorProfilePage = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                {/* Doctor Profile Header - Mobile Responsive */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-sm p-4 sm:p-6 md:p-8 mb-4 sm:mb-6">
                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-4 sm:gap-6">
                        {/* Doctor Avatar - Responsive sizing */}
                        <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-blue-200">
                            <User className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
                        </div>
                        
                        {/* Doctor Info - Full width on mobile, centered */}
                        <div className="flex-1 w-full text-center sm:text-left">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">Dr. Emily Carter</h1>
                            <div className="flex justify-center sm:justify-start items-center gap-2 mb-4">
                                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                <span className="text-base sm:text-lg text-blue-600 font-medium">Cardiologist</span>
                            </div>
                            
                            {/* Contact Info Grid - Stack on mobile, side by side on larger screens */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                {/* Address */}
                                <div>
                                    <div className="flex flex-col items-center sm:flex-row sm:items-start gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                                        <div className="text-center sm:text-left">
                                            <div className="font-medium text-gray-900 text-sm sm:text-base">Address</div>
                                            <div className="text-gray-600 text-xs sm:text-sm">
                                                123 Health St,<br />
                                                Wellness City,<br />
                                                TX
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Contact */}
                                <div>
                                    <div className="mb-4">
                                        <div className="font-medium text-gray-900 mb-1 text-center sm:text-left text-sm sm:text-base">Contact</div>
                                        <div className="text-gray-600 text-xs sm:text-sm">
                                            <div className="flex justify-center sm:justify-start items-center gap-2 mb-1">
                                                <Phone className="w-3 h-3" />
                                                <span>2143732321</span>
                                            </div>
                                            <div className="flex justify-center sm:justify-start items-center gap-2">
                                                <Phone className="w-3 h-3" />
                                                <span>2143732321</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Board Certification - Full width on mobile, centered */}
                        <div className="flex-shrink-0 w-full sm:w-auto mt-4 sm:mt-0">
                            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                                <div className="text-xs mb-1">✓ Board Certified</div>
                                <div className="text-xs">Ensuring the highest standards of care.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Claim Profile Banner - Mobile responsive */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 sm:mb-6">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center justify-between gap-3">
                        <div className="text-center sm:text-left">
                            <span className="text-blue-800 text-sm sm:text-base">Are you Dr. Emily Carter, MD? </span>
                            <a href="#" className="text-blue-600 underline">Claim your profile.</a>
                        </div>
                        <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50 w-full sm:w-auto">
                            Claim
                        </button>
                    </div>
                </div>

                {/* Responsive Grid Layout - Stack on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2 order-2 lg:order-1">
                        {/* Navigation Tabs - Scrollable on mobile */}
                        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6 overflow-x-auto">
                            <div className="flex border-b border-gray-200 whitespace-nowrap">
                                {['Overview', 'About', 'Reviews', 'Insurance'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-3 sm:px-4 md:px-6 py-3 sm:py-4 font-medium text-sm sm:text-base flex-shrink-0 ${
                                            activeTab === tab
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                            
                            {/* Tab Content */}
                            <div className="p-4 sm:p-6">
                                {activeTab === 'Overview' && (
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">About Dr. Emily Carter</h3>
                                            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                                Dr. Emily Carter is a board-certified cardiologist with over 15 years of experience.
                                            </p>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'About' && (
                                    <div className="space-y-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Professional Background</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            Detailed information about Dr. Carter's background.
                                        </p>
                                    </div>
                                )}
                                {activeTab === 'Reviews' && (
                                    <div className="space-y-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Patient Reviews</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            Patient reviews will be displayed here.
                                        </p>
                                    </div>
                                )}
                                {activeTab === 'Insurance' && (
                                    <div className="space-y-4">
                                        <h3 className="text-base sm:text-lg font-semibold text-gray-900">Insurance Information</h3>
                                        <p className="text-gray-700 text-sm sm:text-base">
                                            Insurance details will be shown here.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Specialties Section - Mobile responsive */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-4 sm:mb-6">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">Specialities</h2>
                            <div className="flex flex-wrap gap-2 sm:gap-3">
                                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    Rheumatology
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    Arthritis Treatment
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                                    Autoimmune Disorders
                                </span>
                            </div>
                        </div>

                        {/* Office Hours Section - Mobile responsive */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h2 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-4">Office Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium text-sm sm:text-base">Monday - Friday</span>
                                    <span className="text-gray-600 text-sm sm:text-base">8:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium text-sm sm:text-base">Saturday</span>
                                    <span className="text-gray-600 text-sm sm:text-base">9:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium text-sm sm:text-base">Sunday</span>
                                    <span className="text-gray-600 text-sm sm:text-base">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar - Shows first on mobile, normal order on desktop */}
                    <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                        {/* Board Info */}
                        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">Board Info</h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                Want to learn more about Dr. Crush? Register or subscribe to get full access
                            </p>
                            <div className="space-y-3">
                                <button className="w-full bg-blue-600 text-white py-2 sm:py-3 rounded-md font-medium hover:bg-blue-700 text-sm sm:text-base">
                                    Register
                                </button>
                                <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-50 text-sm sm:text-base">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions - Hidden on mobile, shown in commented code */}
                        <div className="hidden sm:block bg-white rounded-lg shadow-sm p-4 sm:p-6">
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-50 text-sm sm:text-base">
                                    Get Directions
                                </button>
                                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 sm:py-3 rounded-md font-medium hover:bg-gray-50 text-sm sm:text-base">
                                    Call Office
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default DoctorProfilePage;