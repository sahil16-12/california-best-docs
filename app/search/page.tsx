'use client';
import React, { useState, useEffect } from 'react';
import { Search, MapPin, Heart, Brain, Bone, Sparkles, Users, Calendar, Star, Stethoscope, User, ChevronDown, ChevronLeft, ChevronRight, Filter, X } from 'lucide-react';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';

const SearchResultsPage = () => {
    // Selected filter values (before applying)
    const [distanceFilter, setDistanceFilter] = useState('Any Distance');
    const [sortBy, setSortBy] = useState('Distance');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(5);
    
    // Applied filter values (after clicking Apply)
    const [appliedFilters, setAppliedFilters] = useState({
        distance: 'Any Distance',
        sortBy: 'Distance'
    });
    
    // Track if filters have been applied
    const [filtersApplied, setFiltersApplied] = useState(false);
    
    // Mock data for doctors (in a real app this would come from an API)
    const allDoctors = [
        { id: 1, name: 'Dr. Emily Carter', specialty: 'Cardiologist', distance: 1.2, rating: 4.9, reviews: 120, page: 1 },
        { id: 2, name: 'Dr. Michael Lee', specialty: 'Dermatologist', distance: 2.5, rating: 4.7, reviews: 98, page: 1 },
        { id: 3, name: 'Dr. Sarah Johnson', specialty: 'Paediatrician', distance: 0.8, rating: 4.8, reviews: 145, page: 1 },
        { id: 4, name: 'Dr. David Smith', specialty: 'Cardiologist', distance: 3.4, rating: 4.5, reviews: 87, page: 2 },
        { id: 5, name: 'Dr. Jessica Wong', specialty: 'Neurologist', distance: 1.6, rating: 4.9, reviews: 132, page: 2 },
        { id: 6, name: 'Dr. Robert Chen', specialty: 'Orthopedist', distance: 2.1, rating: 4.6, reviews: 76, page: 2 },
        { id: 7, name: 'Dr. Rachel Green', specialty: 'Psychiatrist', distance: 4.0, rating: 4.8, reviews: 110, page: 3 },
        { id: 8, name: 'Dr. James Wilson', specialty: 'Oncologist', distance: 2.7, rating: 5.0, reviews: 95, page: 3 },
        { id: 9, name: 'Dr. Emma Thompson', specialty: 'Endocrinologist', distance: 1.9, rating: 4.7, reviews: 88, page: 3 },
        { id: 10, name: 'Dr. Thomas Brown', specialty: 'Urologist', distance: 3.2, rating: 4.6, reviews: 72, page: 4 },
        { id: 11, name: 'Dr. Olivia Martinez', specialty: 'Gynecologist', distance: 2.3, rating: 4.8, reviews: 105, page: 4 },
        { id: 12, name: 'Dr. Ryan Taylor', specialty: 'Ophthalmologist', distance: 1.7, rating: 4.7, reviews: 93, page: 4 },
        { id: 13, name: 'Dr. Sophia Kim', specialty: 'Allergist', distance: 3.8, rating: 4.9, reviews: 86, page: 5 },
        { id: 14, name: 'Dr. William Garcia', specialty: 'Rheumatologist', distance: 2.9, rating: 4.5, reviews: 78, page: 5 },
        { id: 15, name: 'Dr. Ava Rodriguez', specialty: 'Pulmonologist', distance: 1.4, rating: 4.8, reviews: 115, page: 5 }
    ];

    // Apply filters function
    const handleApplyFilters = () => {
        setAppliedFilters({
            distance: distanceFilter,
            sortBy: sortBy
        });
        setFiltersApplied(true);
        setCurrentPage(1); // Reset to first page when filters change
        setShowFilters(false); // Close filter panel on mobile
    };
    
    // Filter doctors by distance
    interface Doctor {
        id: number;
        name: string;
        specialty: string;
        distance: number;
        rating: number;
        reviews: number;
        page: number;
    }

    interface AppliedFilters {
        distance: string;
        sortBy: string;
    }

    const filterDoctorsByDistance = (doctors: Doctor[]): Doctor[] => {
        if (appliedFilters.distance === 'Any Distance') {
            return doctors;
        }
        
        // Extract numeric distance value
        const maxDistance: number = parseInt(appliedFilters.distance.split(' ')[0]);
        
        return doctors.filter((doc: Doctor) => doc.distance <= maxDistance);
    };
    
    // Sort doctors based on sortBy criteria
    interface SortableDoctor {
        id: number;
        name: string;
        specialty: string;
        distance: number;
        rating: number;
        reviews: number;
        page: number;
    }

    type SortByOption = 'Distance' | 'Rating' | 'Reviews' | 'Name';

    const sortDoctors = (doctors: SortableDoctor[]): SortableDoctor[] => {
        return [...doctors].sort((a, b) => {
            switch (appliedFilters.sortBy as SortByOption) {
                case 'Distance':
                    return a.distance - b.distance;
                case 'Rating':
                    return b.rating - a.rating;
                case 'Reviews':
                    return b.reviews - a.reviews;
                case 'Name':
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });
    };
    
    // Apply filtering and sorting
    const getFilteredAndSortedDoctors = () => {
        let filteredDocs = [...allDoctors];
        
        // Apply distance filter
        filteredDocs = filterDoctorsByDistance(filteredDocs);
        
        // Apply sorting
        filteredDocs = sortDoctors(filteredDocs);
        
        return filteredDocs;
    };
    
    // Get paginated doctors
    const filteredAndSortedDoctors = getFilteredAndSortedDoctors();
    
    // Calculate total pages based on filtered results
    useEffect(() => {
        const doctorsPerPage = 3;
        const calculatedTotalPages = Math.ceil(filteredAndSortedDoctors.length / doctorsPerPage);
        setTotalPages(calculatedTotalPages || 1); // At least 1 page even if no results
    }, [filteredAndSortedDoctors.length]);
    
    // Get doctors for current page
    const startIndex = (currentPage - 1) * 3; // 3 doctors per page
    const currentDoctors = filteredAndSortedDoctors.slice(startIndex, startIndex + 3);

    // Handle page changes
    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Scroll to top when changing pages (smooth scroll for better UX)
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const goToPreviousPage = () => {
        goToPage(currentPage - 1);
    };

    const goToNextPage = () => {
        goToPage(currentPage + 1);
    };

    // Generate page buttons dynamically
    const renderPageButtons = () => {
        const buttons = [];
        
        // Determine range of pages to show (always show current page and some neighbors)
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);
        
        // Ensure we're showing at least 3 pages if available
        if (endPage - startPage < 2) {
            if (startPage === 1) {
                endPage = Math.min(3, totalPages);
            } else {
                startPage = Math.max(1, endPage - 2);
            }
        }
        
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button 
                    key={i}
                    onClick={() => goToPage(i)}
                    className={`min-w-[40px] h-10 px-2 sm:px-3 py-2 rounded-md font-medium
                        ${currentPage === i ? 
                            'bg-blue-600 text-white' : 
                            'bg-white border border-gray-200 shadow-sm text-gray-700 hover:bg-gray-50'
                        }`}
                    aria-current={currentPage === i ? "page" : undefined}
                >
                    {i}
                </button>
            );
        }
        
        return buttons;
    };
    
    // Format distance for display
    interface FormatDistance {
        (distance: number): string;
    }

    const formatDistance: FormatDistance = (distance) => {
        return `${distance} mi`;
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
                {/* Mobile search bar */}
                <div className="block md:hidden mb-4">
                    <div className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
                        <div className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="e.g Cardiologist"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                    defaultValue=""
                                />
                                <label className="block text-xs text-gray-600 mt-1">Specialty, condition, or doctor</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="e.g 71000 or Los Angeles"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                                    defaultValue=""
                                />
                                <label className="block text-xs text-gray-600 mt-1">City or Zip Code</label>
                            </div>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors">
                                    Search
                                </button>
                                <button 
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="bg-gray-100 text-gray-800 py-2 px-3 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center gap-2"
                                >
                                    {showFilters ? <X className="w-4 h-4" /> : <Filter className="w-4 h-4" />}
                                    {showFilters ? "Close" : "Filter"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`flex flex-col md:flex-row gap-4 md:gap-6 ${showFilters ? 'relative' : ''}`}>
                    {/* Filters Sidebar - Collapsible on Mobile */}
                    <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-64 md:flex-shrink-0 z-10 md:z-auto absolute md:relative left-0 right-0 top-0 md:top-auto bg-gray-50 md:bg-transparent`}>
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6">
                            <div className="flex items-center justify-between md:justify-start gap-2 mb-4 sm:mb-6">
                                <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                                </div>
                                <h3 className="font-semibold text-gray-900">Filters</h3>
                                <button 
                                    className="md:hidden text-gray-500"
                                    onClick={() => setShowFilters(false)}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
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
                                    <label className="block text-sm font-medium text-gray-900 mb-2">Sort By</label>
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

                                <button 
                                    onClick={handleApplyFilters}
                                    className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition-colors"
                                >
                                    Apply Filters
                                </button>
                            </div>
                        </div>
                        
                        {/* Active filters indicator (desktop only) */}
                        {filtersApplied && (
                            <div className="hidden md:block mt-4 bg-blue-50 border border-blue-200 p-3 rounded-lg">
                                <div className="text-sm text-blue-800">
                                    <span className="font-medium">Active filters:</span> {appliedFilters.distance}, Sorted by {appliedFilters.sortBy}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right Column */}
                    <div className="flex-1">
                        {/* Search Bar - Desktop only */}
                        <div className="hidden md:block bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
                            <div className="flex gap-4 flex-col lg:flex-row">
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
                                <button className="lg:w-auto w-full bg-blue-600 text-white px-6 lg:px-8 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors h-fit">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Active filters indicator (mobile only) */}
                        {filtersApplied && (
                            <div className="md:hidden mb-4 bg-blue-50 border border-blue-200 p-3 rounded-lg">
                                <div className="text-sm text-blue-800 flex justify-between items-center">
                                    <span>
                                        <span className="font-medium">Filters:</span> {appliedFilters.distance}, Sort: {appliedFilters.sortBy}
                                    </span>
                                    <button 
                                        onClick={() => setShowFilters(true)}
                                        className="text-blue-600 text-xs underline"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Search Results */}
                        <div className="mb-4 sm:mb-6">
                            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">Search Results</h2>
                            <p className="text-xs sm:text-sm text-gray-600">
                                {filteredAndSortedDoctors.length} doctors found • Page {currentPage} of {totalPages}
                            </p>
                        </div>

                        {/* Doctor Result Cards for current page */}
                        <div className="space-y-4">
                            {currentDoctors.map((doctor) => (
                                <div key={doctor.id} className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-200 p-4 sm:p-6">
                                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                        <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                                            <User className="w-8 h-8 text-blue-600" />
                                        </div>
                                        <div className="flex-1 text-center sm:text-left">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{doctor.name}</h3>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                                <Stethoscope className="w-4 h-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">{doctor.specialty}</span>
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 mb-1">
                                                <MapPin className="w-4 h-4 text-gray-400" />
                                                <p className="text-sm text-gray-500">123 Health St, Wellness City, TX ({formatDistance(doctor.distance)})</p>
                                            </div>
                                            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-500 mb-3">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                <p className="text-sm text-gray-500">{doctor.rating} ({doctor.reviews} reviews)</p>
                                            </div>
                                            <button className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 sm:py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                                                View Profile
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* No results message (when filtered results are empty) */}
                        {currentDoctors.length === 0 && (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 text-center">
                                <p className="text-gray-600 mb-2">No doctors found for your search criteria.</p>
                                <p className="text-sm text-gray-500">Try adjusting your filters or search terms.</p>
                            </div>
                        )}

                        {/* Enhanced Pagination - Now fully functional */}
                        {filteredAndSortedDoctors.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
                                <button 
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                    className={`flex items-center gap-1 px-2 sm:px-3 py-2 min-w-[80px] justify-center rounded-md
                                        ${currentPage === 1 ? 
                                            'text-gray-400 cursor-not-allowed' : 
                                            'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                    <span className="hidden sm:inline">Previous</span>
                                </button>
                                
                                {/* Dynamically generated page buttons */}
                                {renderPageButtons()}
                                
                                <button 
                                    onClick={goToNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`flex items-center gap-1 px-2 sm:px-3 py-2 min-w-[80px] justify-center rounded-md
                                        ${currentPage === totalPages ? 
                                            'text-gray-400 cursor-not-allowed' : 
                                            'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="hidden sm:inline">Next</span>
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
    );
};

export default SearchResultsPage;