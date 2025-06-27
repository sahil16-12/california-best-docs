'use client';
import React, { useState } from 'react';
import { Camera, MapPin, Phone, Mail, Calendar, User, Heart, Shield, Clock, Edit2, Save, X, Plus, Trash2 } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const UserProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        name: 'John Smith',
        email: 'john.smith@email.com',
        phone: '+1 (555) 987-6543',
        dateOfBirth: '1985-03-15',
        gender: 'Male',
        location: 'Los Angeles, CA',
        emergencyContact: 'Jane Smith - +1 (555) 123-4567',
        bloodType: 'O+',
        height: '5\'10"',
        weight: '175 lbs',
        allergies: 'Penicillin, Shellfish',
        medicalConditions: 'Hypertension',
        currentMedications: 'Lisinopril 10mg daily',
        insurance: 'Blue Cross Blue Shield',
        policyNumber: 'BCBS123456789',
        preferredLanguage: 'English',
        bio: 'I am a 38-year-old professional looking to maintain good health and stay active. I enjoy hiking and running, and I\'m committed to regular check-ups and preventive care.'
    });

    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctor: 'Dr. Sarah Johnson',
            specialty: 'Cardiologist',
            date: '2024-01-15',
            time: '10:00 AM',
            status: 'Upcoming',
            type: 'Regular Checkup'
        },
        {
            id: 2,
            doctor: 'Dr. Michael Chen',
            specialty: 'General Physician',
            date: '2023-12-20',
            time: '2:30 PM',
            status: 'Completed',
            type: 'Annual Physical'
        }
    ]);

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
                            <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center overflow-hidden relative">
                                {/* Initials always visible */}
                                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                                    <span className="text-4xl font-bold text-blue-600">
                                        {profileData.name.split(' ').map(n => n[0]).join('')}
                                    </span>
                                </div>
                                {/* Image overlays initials if loaded */}
                                <img
                                    src="/api/placeholder/128/128"
                                    alt="Profile"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    onError={e => { e.currentTarget.style.display = 'none'; }}
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
                                    
                                    <p className="text-xl text-blue-600 font-medium">Patient</p>
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
                                    <Calendar className="w-5 h-5 text-blue-600" />
                                    <span className="text-gray-700">Age: {new Date().getFullYear() - new Date(profileData.dateOfBirth).getFullYear()}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Heart className="w-5 h-5 text-red-600" />
                                    <span className="text-gray-700">Blood Type: {profileData.bloodType}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-green-600" />
                                    <span className="text-gray-700">Insured</span>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="grid md:grid-cols-2 gap-4">
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
                                    <User className="w-5 h-5 text-gray-400" />
                                    {isEditing ? (
                                        <select
                                            value={profileData.gender}
                                            onChange={(e) => handleInputChange('gender', e.target.value)}
                                            className="text-gray-700 border-b border-gray-300 bg-transparent focus:outline-none focus:border-blue-500"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    ) : (
                                        <span className="text-gray-700">{profileData.gender}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column - Personal & Medical Info */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Personal Information */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Date of Birth</label>
                                    {isEditing ? (
                                        <input
                                            type="date"
                                            value={profileData.dateOfBirth}
                                            onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{new Date(profileData.dateOfBirth).toLocaleDateString()}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Emergency Contact</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.emergencyContact}
                                            onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.emergencyContact}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Preferred Language</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.preferredLanguage}
                                            onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.preferredLanguage}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Medical Information */}
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Medical Information</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Blood Type</label>
                                    {isEditing ? (
                                        <select
                                            value={profileData.bloodType}
                                            onChange={(e) => handleInputChange('bloodType', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        >
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    ) : (
                                        <p className="text-gray-700">{profileData.bloodType}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Height</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.height}
                                            onChange={(e) => handleInputChange('height', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.height}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Weight</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.weight}
                                            onChange={(e) => handleInputChange('weight', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.weight}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mt-6 space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Allergies</label>
                                    {isEditing ? (
                                        <textarea
                                            value={profileData.allergies}
                                            onChange={(e) => handleInputChange('allergies', e.target.value)}
                                            rows={2}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="List any allergies..."
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.allergies}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Medical Conditions</label>
                                    {isEditing ? (
                                        <textarea
                                            value={profileData.medicalConditions}
                                            onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                                            rows={2}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="List any medical conditions..."
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.medicalConditions}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-2">Current Medications</label>
                                    {isEditing ? (
                                        <textarea
                                            value={profileData.currentMedications}
                                            onChange={(e) => handleInputChange('currentMedications', e.target.value)}
                                            rows={2}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="List current medications..."
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.currentMedications}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Insurance & Appointments */}
                    <div className="space-y-6">
                        {/* Insurance Information */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Insurance Information</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Insurance Provider</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.insurance}
                                            onChange={(e) => handleInputChange('insurance', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.insurance}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-600 mb-1">Policy Number</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={profileData.policyNumber}
                                            onChange={(e) => handleInputChange('policyNumber', e.target.value)}
                                            className="w-full text-gray-700 border border-gray-300 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-700">{profileData.policyNumber}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Recent Appointments */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-gray-900">Recent Appointments</h3>
                                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                                    View All
                                </button>
                            </div>
                            <div className="space-y-4">
                                {appointments.map((appointment) => (
                                    <div key={appointment.id} className="border border-gray-100 rounded-xl p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="font-semibold text-gray-900">{appointment.doctor}</h4>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                                appointment.status === 'Upcoming' 
                                                    ? 'bg-green-100 text-green-800' 
                                                    : 'bg-gray-100 text-gray-800'
                                            }`}>
                                                {appointment.status}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-600 mb-1">{appointment.specialty}</p>
                                        <p className="text-sm text-gray-500">{appointment.date} at {appointment.time}</p>
                                        <p className="text-sm text-blue-600 font-medium">{appointment.type}</p>
                                    </div>
                                ))}
                            </div>
                            
                            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                Book New Appointment
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default UserProfilePage;