import React from 'react';

const NewsletterSection = () => {
    return (
        <section className="py-20 px-6 relative overflow-hidden">
            {/* Background with gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-secondary opacity-90"></div>

            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-400/20 rounded-full blur-lg"></div>

            <div className="container mx-auto max-w-5xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content Side */}
                    <div className="text-white">
                        <span className="inline-block font-cursive bg-white/20 text-white px-4 py-2 rounded-full text-base font-semibold mb-4 backdrop-blur-sm">
                            STAY CONNECTED
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Don't Miss Our <span className="text-stable-100">Latest Updates</span>
                        </h2>
                        <p className="text-xl text-white/90 mb-8 leading-relaxed">
                            Join thousands of subscribers who get exclusive access to early bird tickets,
                            special offers, and behind-the-scenes content from our events.
                        </p>

                        <div className="flex items-center space-x-4">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-stable-100">5K+</div>
                                <div className="text-white/80 text-sm">Subscribers</div>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-stable-100">98%</div>
                                <div className="text-white/80 text-sm">Satisfaction</div>
                            </div>
                            <div className="w-px h-8 bg-white/30"></div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-stable-100">24/7</div>
                                <div className="text-white/80 text-sm">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                        <div className="mb-6">
                            <h3 className="text-2xl font-bold text-white mb-2">Join Our Community</h3>
                            <p className="text-white/80">Get weekly insights and event updates</p>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white/10 border border-white/20 rounded-xl p-1">
                                <div className="flex items-center px-4 py-4">
                                    <svg className="w-6 h-6 text-stable-100 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-transparent border-none outline-none text-white placeholder-white/70 text-lg"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-stable-100 to-primary hover:from-primary hover:to-stable-100 text-purple-300 font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                                <span>Subscribe Now</span>
                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </button>

                            <div className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10">
                                <input
                                    type="checkbox"
                                    id="premium-newsletter"
                                    className="w-5 h-5 text-yellow-400 bg-gray-800 border-white/30 rounded focus:ring-yellow-400"
                                    defaultChecked
                                />
                                <label htmlFor="premium-newsletter" className="ml-3 text-white/90 text-sm">
                                    Yes, I want to receive exclusive updates and agree to the privacy policy
                                </label>
                            </div>
                        </div>

                        <div className="mt-6 pt-6 border-t border-white/20">
                            <p className="text-white/70 text-sm text-center">
                                🔒 We respect your privacy. Unsubscribe at any time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSection;