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
            
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                    <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                        {/* Profile Image */}
                        <div className="relative">
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden">
                                {/* Always show initials, image will overlay if loaded */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-blue-600">
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
                                <button className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                                    <Camera className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Basic Info */}
                        <div className="flex-1">
                            <div className="flex items-start justify-between mb-4">
                                <div>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.name}
                                            onChange={(e) => handleInputChange('name', e.target.value)}
                                            className="text-3xl font-bold text-gray-900 mb-2 border-b-2 border-blue-500 bg-transparent focus:outline-none"
                                        />
                                    ) : (
                                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{profileData.name}</h1>
                                    )}
                                    
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.specialty}
                                            onChange={(e) => handleInputChange('specialty', e.target.value)}
                                            className="text-xl text-blue-600 font-medium border-b border-blue-300 bg-transparent focus:outline-none"
                                        />
                                    ) : (
                                        <p className="text-xl text-blue-600 font-medium">{profileData.specialty}</p>
                                    )}
                                </div>
                                
                                {/* Edit/Save Buttons */}
                                <div className="flex gap-2">
                                    {isEditing ? (
                                        <>
                                            <button
                                                onClick={handleSave}
                                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                                            >
                                                <Save className="w-4 h-4" />
                                                Save
                                            </button>
                                            <button
                                                onClick={handleCancel}
                                                className="flex items-center gap-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-400 transition-colors"
                                            >
                                                <X className="w-4 h-4" />
                                                Cancel
                                            </button>
                                        </>
                                    ) : (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                            Edit Profile
                                        </button>
                                    )}
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="flex flex-wrap gap-6 mb-6">
                                <div className="flex items-center gap-2">
                                    <Star className="w-5 h-5 text-yellow-500" />
                                    <span className="font-semibold text-gray-900">{profileData.rating}</span>
                                    <span className="text-gray-600">({profileData.reviewCount} reviews)</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">{profileData.experience} Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">500+ Patients</span>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="w-5 h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.location}
                                            onChange={(e) => handleInputChange('location', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="text-gray-700">{profileData.location}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.phone}
                                            onChange={(e) => handleInputChange('phone', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="text-gray-700">{profileData.phone}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="email"
                                            value={profileData.email}
                                            onChange={(e) => handleInputChange('email', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="text-gray-700">{profileData.email}</span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    <Clock className="w-5 h-5 text-gray-400" />
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.availableHours}
                                            onChange={(e) => handleInputChange('availableHours', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="text-gray-700">{profileData.availableHours}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - About & Education */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* About Section */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">About</h2>
                            {isEditing ? (
                                <textarea
                                    value={profileData.bio}
                                    onChange={(e) => handleInputChange('bio', e.target.value)}
                                    rows={6}
                                    className="w-full text-gray-700 leading-relaxed border border-gray-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            ) : (
                                <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                            )}
                        </div>

                        {/* Education & Certifications */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Education & Certifications</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-blue-600" />
                                        Education
                                    </h3>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.education}
                                            onChange={(e) => handleInputChange('education', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.education}</p>
                                    )}
                                </div>

                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                        <Award className="w-5 h-5 text-blue-600" />
                                        Certifications
                                    </h3>
                                    <div className="space-y-2">
                                        {profileData.certifications.map((cert, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                                <span className="text-gray-700">{cert}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Languages */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Languages</h2>
                            {isEditing ? (
                                <input
                                    type="text"
                                    value={profileData.languages}
                                    onChange={(e) => handleInputChange('languages', e.target.value)}
                                    className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="e.g. English, Spanish, French"
                                />
                            ) : (
                                <p className="text-gray-700">{profileData.languages}</p>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Quick Info */}
                    <div className="space-y-6">
                        {/* Consultation Info */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation</h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Consultation Fee</span>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.consultationFee}
                                            onChange={(e) => handleInputChange('consultationFee', e.target.value)}
                                            className="text-right font-semibold text-blue-600 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="font-semibold text-blue-600">{profileData.consultationFee}</span>
                                    )}
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600">Hospital</span>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.hospital}
                                            onChange={(e) => handleInputChange('hospital', e.target.value)}
                                            className="text-right text-gray-900 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        />
                                    ) : (
                                        <span className="text-gray-900 text-right">{profileData.hospital}</span>
                                    )}
                                </div>
                            </div>
                            
                            {!isEditing && (
                                <div className="mt-6 space-y-3">
                                    <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                        Book Appointment
                                    </button>
                                    <button className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                                        Send Message
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Availability */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Availability</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-700">Available Today</span>
                                </div>
                                <div className="text-sm text-gray-600">
                                    Next available: Tomorrow 10:00 AM
                                </div>
                            </div>
                        </div>

                        {/* Recent Reviews */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Reviews</h3>
                            <div className="space-y-4">
                                <div className="border-b border-gray-100 pb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">John D.</span>
                                    </div>
                                    <p className="text-sm text-gray-700">"Excellent doctor, very thorough and caring."</p>
                                </div>
                                
                                <div className="border-b border-gray-100 pb-4">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="flex text-yellow-400">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-current" />
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">Sarah M.</span>
                                    </div>
                                    <p className="text-sm text-gray-700">"Great experience, highly recommend!"</p>
                                </div>
                            </div>
                            
                            <button className="w-full text-blue-600 hover:text-blue-700 font-medium text-sm mt-4">
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