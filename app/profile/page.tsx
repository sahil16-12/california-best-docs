'use client';
import React, { useState } from 'react';
import { Camera, MapPin, Phone, Mail, Calendar, Award, BookOpen, Star, Clock, Users, Edit2, Save, X } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        email: 'sarah.johnson@email.com',
        phone: '+1 (555) 123-4567',
        location: 'San Francisco, CA',
        experience: '15 years',
        education: 'MD from Harvard Medical School',
        languages: 'English, Spanish, French',
        bio: 'Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in treating cardiovascular diseases. She specializes in preventive cardiology and has published numerous research papers in leading medical journals.',
        rating: 4.9,
        reviewCount: 248,
        consultationFee: '$150',
        availableHours: 'Mon-Fri: 9:00 AM - 6:00 PM',
        hospital: 'San Francisco General Hospital',
        certifications: ['Board Certified in Cardiology', 'Advanced Cardiac Life Support (ACLS)', 'Echocardiography Certification']
    });

    const handleInputChange = (field: string, value: string) => {
        setProfileData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = () => {
        setIsEditing(false);
        // Save profile data logic here
        console.log('Profile updated:', profileData);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form data if needed
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-12">
                {/* Header Section - Improved for mobile */}
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 border border-gray-100">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                        {/* Profile Image - Smaller on mobile */}
                        <div className="relative">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* Always show initials, image will overlay if loaded */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <span className="text-2xl sm:text-4xl font-bold text-blue-600">
                                        {profileData.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                <img 
                                    src="/api/placeholder/128/128" 
                                    alt="Profile" 
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            {isEditing && (
                                <button className="absolute bottom-0 right-0 w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
                                </button>
                            )}
                        </div>

                        {/* Basic Info - Center aligned on mobile */}
                        <div className="flex-1 w-full text-center lg:text-left">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                <div>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 border-b-2 border-blue-500 bg-transparent focus:outline-none text-center lg:text-left"
                                        />
                                    ) : (
                                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                                    )}
                                    
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.specialty}
                                            onChange={(e) => handleInputChange('specialty', e.target.value)}
                                            className="text-lg sm:text-xl text-blue-600 font-medium border-b border-blue-300 bg-transparent focus:outline-none text-center lg:text-left"
                                        />
                                    ) : (
                                        <p className="text-lg sm:text-xl text-blue-600 font-medium">{profileData.specialty}</p>
                                    )}
                                </div>
                                
                                {/* Edit/Save Buttons - Full width on mobile */}
                                <div className="flex gap-2 mt-4 lg:mt-0 w-full lg:w-auto">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={handleSave}
                                                className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors w-full lg:w-auto"
                                            >
                                                <Save className="w-4 h-4" />
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="flex items-center justify-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition-colors w-full lg:w-auto"
                                            >
                                                <X className="w-4 h-4" />
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors w-full lg:w-auto"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                            Edit Profile
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Quick Stats - Better wrapping on mobile */}
                            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-6 mb-4 sm:mb-6">
                                <div className="flex items-center gap-2">
                                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
                                    <span className="font-semibold text-gray-900">{profileData.rating}</span>
                                    <span className="text-sm sm:text-base text-gray-600">({profileData.reviewCount} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                    <span className="text-sm sm:text-base text-gray-700">{profileData.experience} Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                    <span className="text-sm sm:text-base text-gray-700">500+ Patients</span>
                                </div>
                            </div>

                            {/* Contact Info - Centered on mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.location}
                                            onChange={(e) => handleInputChange('location', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-center sm:text-left w-full sm:w-auto"
                                        />
                                    ) : (
                                        <span className="text-sm sm:text-base text-gray-700">{profileData.location}</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-center sm:text-left w-full sm:w-auto"
                                        />
                                    ) : (
                                        <span className="text-sm sm:text-base text-gray-700">{profileData.phone}</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-center sm:text-left w-full sm:w-auto"
                                        />
                                    ) : (
                                        <span className="text-sm sm:text-base text-gray-700">{profileData.email}</span>
                                    )}
                                </div>
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.availableHours}
                                            onChange={(e) => handleInputChange('availableHours', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 text-center sm:text-left w-full sm:w-auto"
                                        />
                                    ) : (
                                        <span className="text-sm sm:text-base text-gray-700">{profileData.availableHours}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content - Improved grid for mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Left Column - About & Education */}
                    <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                        {/* About Section - Adjusted padding for mobile */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">About</h2>
                            {isEditing ? (
                                <textarea
                                    value={profileData.bio}
                                    onChange={(e) => handleInputChange('bio', e.target.value)}
                                    rows={6}
                                    className="w-full text-gray-700 leading-relaxed border border-gray-300 rounded-xl p-3 sm:p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                                />
                            ) : (
                                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{profileData.bio}</p>
                            )}
                        </div>

                        {/* Education & Certifications */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Education & Certifications</h2>
                            
                            <div className="space-y-5 sm:space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                        Education
                                    </h3>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.education}
                                            onChange={(e) => handleInputChange('education', e.target.value)}
                                            className="w-full text-sm sm:text-base text-gray-700 border border-gray-300 rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-sm sm:text-base text-gray-700">{profileData.education}</p>
                                    )}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 flex items-center gap-2">
                                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                        Certifications
                                    </h3>
                                    <div className="space-y-2">
                                        {profileData.certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-sm sm:text-base text-gray-700">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100">
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Languages</h2>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.languages}
                                    onChange={(e) => handleInputChange('languages', e.target.value)}
                                    className="w-full text-sm sm:text-base text-gray-700 border border-gray-300 rounded-xl p-2 sm:p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. English, Spanish, French"
                                />
                            ) : (
                                <p className="text-sm sm:text-base text-gray-700">{profileData.languages}</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Quick Info */}
                    <div className="space-y-6">
                        {/* Consultation Info - Touch friendly */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Consultation</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm sm:text-base text-gray-600">Consultation Fee</span>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.consultationFee}
                                            onChange={(e) => handleInputChange('consultationFee', e.target.value)}
                                            className="text-right font-semibold text-blue-600 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 w-1/2 text-sm sm:text-base"
                                        />
                                    ) : (
                                        <span className="font-semibold text-blue-600 text-sm sm:text-base">{profileData.consultationFee}</span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm sm:text-base text-gray-600">Hospital</span>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.hospital}
                                            onChange={(e) => handleInputChange('hospital', e.target.value)}
                                            className="text-right text-gray-900 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 w-1/2 text-sm sm:text-base"
                                        />
                                    ) : (
                                        <span className="text-gray-900 text-right text-sm sm:text-base">{profileData.hospital}</span>
                                    )}
                                </div>
                            </div>
                            
                            {!isEditing && (
                                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                                    <button className="w-full bg-blue-600 text-white py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                        Book Appointment
                                    </button>
                                    <button className="w-full bg-gray-100 text-gray-700 py-2.5 sm:py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Availability - Mobile optimized */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Availability</h3>
                            <div className="space-y-2 sm:space-y-3">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm sm:text-base text-gray-700">Available Today</span>
                                </div>
                                <div className="text-xs sm:text-sm text-gray-600">
                                    Next available: Tomorrow 10:00 AM
                                </div>
                            </div>
                        </div>

                        {/* Recent Reviews - More compact on mobile */}
                        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Recent Reviews</h3>
                            <div className="space-y-3 sm:space-y-4">
                                <div className="border-b border-gray-100 pb-3 sm:pb-4">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-600">John D.</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-700">"Excellent doctor, very thorough and caring."</p>
                                </div>
                                
                                <div className="border-b border-gray-100 pb-3 sm:pb-4">
                                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-600">Sarah M.</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-gray-700">"Great experience, highly recommend!"</p>
                                </div>
                            </div>
                            
                            <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-xs sm:text-sm mt-3 sm:mt-4">
                                View All Reviews
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default ProfilePage;