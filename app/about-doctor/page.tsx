'use client';
import React, { useState } from 'react';
import { Stethoscope, User, MapPin, Phone, Shield, Clock } from 'lucide-react';

const DoctorProfilePage = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const Header = () => (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Stethoscope className="w-8 h-8 text-blue-600" />
                        <div>
                            <div className="flex items-baseline space-x-1">
                                <span className="text-xl font-bold text-gray-900">California Best</span>
                            </div>
                            <div className="text-xl font-bold text-blue-600 -mt-1">Doc</div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-8">
                        <span className="text-gray-600">DocWatch</span>
                        <div className="flex items-center space-x-2 text-gray-600">
                            <User className="w-4 h-4" />
                            <span>Sign in/up</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 py-6">
                {/* Doctor Profile Header */}
                <div className="bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-sm p-8 mb-6">
                    <div className="flex items-start gap-6">
                        <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-blue-200">
                            <User className="w-12 h-12 text-blue-600" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dr. Emily Carter</h1>
                            <div className="flex items-center gap-2 mb-4">
                                <Shield className="w-5 h-5 text-blue-600" />
                                <span className="text-lg text-blue-600 font-medium">Cardiologist</span>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <div className="flex items-start gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-gray-500 mt-1" />
                                        <div>
                                            <div className="font-medium text-gray-900">Address</div>
                                            <div className="text-gray-600 text-sm">
                                                123 Health St,<br />
                                                Wellness City,<br />
                                                TX
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mb-4">
                                        <div className="font-medium text-gray-900 mb-1">Contact</div>
                                        <div className="text-gray-600 text-sm">
                                            <div className="flex items-center gap-2 mb-1">
                                                <Phone className="w-3 h-3" />
                                                <span>2143732321</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-3 h-3" />
                                                <span>2143732321</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-shrink-0">
                            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center">
                                <div className="text-xs mb-1">✓ Board Certified</div>
                                <div className="text-xs">Ensuring the highest standards of care.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Claim Profile Banner */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="text-blue-800">Are you Dr. Emily Carter, MD? </span>
                            <a href="#" className="text-blue-600 underline">Claim your profile.</a>
                        </div>
                        <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md font-medium hover:bg-blue-50">
                            Claim
                        </button>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Navigation Tabs */}
                        <div className="bg-white rounded-lg shadow-sm mb-6">
                            <div className="flex border-b border-gray-200">
                                {['Overview', 'About', 'Reviews', 'Insurance'].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`px-6 py-4 font-medium ${
                                            activeTab === tab
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        {tab}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Specialties Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Specialities</h2>
                            <div className="flex flex-wrap gap-3">
                                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                                    Rheumatology
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                                    Arthritis Treatment
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-sm font-medium">
                                    Autoimmune Disorders
                                </span>
                            </div>
                        </div>

                        {/* Office Hours Section */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h2>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium">Monday - Friday</span>
                                    <span className="text-gray-600">8:00 AM - 5:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium">Saturday</span>
                                    <span className="text-gray-600">9:00 AM - 1:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-900 font-medium">Sunday</span>
                                    <span className="text-gray-600">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Board Info */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-3">Board Info</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Want to learn more about Dr. Crush? Register or subscribe to get full access
                            </p>
                            <div className="space-y-3">
                                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700">
                                    Register
                                </button>
                                <button className="w-full bg-white text-blue-600 border border-blue-600 py-2 rounded-md font-medium hover:bg-blue-50">
                                    Subscribe
                                </button>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="bg-white rounded-lg shadow-sm p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md font-medium hover:bg-gray-50">
                                    Get Directions
                                </button>
                                <button className="w-full bg-white text-gray-700 border border-gray-300 py-2 rounded-md font-medium hover:bg-gray-50">
                                    Call Office
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfilePage;