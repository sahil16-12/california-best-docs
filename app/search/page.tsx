'use client';
import React, { useState } from 'react';
import { Search, MapPin, Heart, Brain, Bone, Sparkles, Users, Calendar, Star, Stethoscope, User, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/ui/Header';

const SearchResultsPage = () => {
    const [distanceFilter, setDistanceFilter] = useState('Any Distance');
    const [sortBy, setSortBy] = useState('Distance');

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-6 py-6">
                <div className="flex gap-6">
                    {/* Filters Sidebar */}
                    <div className="w-64 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                                </div>
                                <h3 className="font-semibold text-gray-900">Filters</h3>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Distance</label>
                                    <div className="relative">
                                        <select 
                                            value={distanceFilter}
                                            onChange={(e) => setDistanceFilter(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white appearance-none"
                                        >
                                            <option>Any Distance</option>
                                            <option>5 miles</option>
                                            <option>10 miles</option>
                                            <option>25 miles</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Short By</label>
                                    <div className="relative">
                                        <select 
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white appearance-none"
                                        >
                                            <option>Distance</option>
                                            <option>Rating</option>
                                            <option>Reviews</option>
                                            <option>Name</option>
                                        </select>
                                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                                    </div>
                                </div>

                                <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex-1">
                        {/* Search Bar */}
                        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
                            <div className="flex gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="e.g Cardiologist"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                        defaultValue=""
                                    />
                                    <label className="block text-xs text-gray-600 mt-1">Specialty, condition, or doctor</label>
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="e.g 71000 or Los Angeles"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                        defaultValue=""
                                    />
                                    <label className="block text-xs text-gray-600 mt-1">City or Zip Code</label>
                                </div>
                                <button className="bg-blue-600 text-white px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors h-fit">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Search Results */}
                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-1">Search Results</h2>
                            <p className="text-sm text-gray-600">10 doctors found for "doctors" near "Any Location"</p>
                        </div>

                        <div className="space-y-4">
                            {/* Doctor Result Cards */}
                            {[
                                { name: 'Dr. Emily Carter', specialty: 'Cardiologist', distance: '1.2 mi' },
                                { name: 'Dr. Emily Carter', specialty: 'Dermatologist', distance: '1.2 mi' },
                                { name: 'Dr. Emily Carter', specialty: 'Paediatrician', distance: '1.2 mi' },
                                { name: 'Dr. Emily Carter', specialty: 'Cardiologist', distance: '1.2 mi' },
                                { name: 'Dr. Emily Carter', specialty: 'Neurologist', distance: '1.2 mi' }
                            ].map((doctor, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                                            <User className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                                            <div className="flex items-center gap-2 mb-1">
                                                <Stethoscope className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">{doctor.specialty}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-gray-500 mb-3">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <p className="text-sm text-gray-500">123 Health St, Wellness City, TX ({doctor.distance})</p>
                                            </div>
                                            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex items-center justify-center gap-2 mt-8">
                            <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900">
                                <ChevronLeft className="w-4 h-4" />
                                Previous
                            </button>
                            <button className="px-3 py-2 bg-white border border-gray-200 shadow-sm rounded-md font-medium text-gray-900">1</button>
                            <button className="px-3 py-2 text-gray-600 hover:text-gray-900">2</button>
                            <button className="px-3 py-2 text-gray-600 hover:text-gray-900">3</button>
                            <button className="flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900">
                                Next
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultsPage;