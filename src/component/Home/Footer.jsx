import React, { useState, useEffect } from 'react';

// Icon components for social links
const InstagramIcon = (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.457.718-2.133 1.393C1.333 2.72.91 3.393.63 4.167c-.297.765-.497 1.635-.558 2.913C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.26 2.15.558 2.913.297.783.718 1.457 1.393 2.132.677.678 1.35.99 2.132 1.393.765.297 1.635.497 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.15-.26 2.913-.558.783-.297 1.457-.718 2.132-1.393.678-.677.99-1.35 1.393-2.132.297-.765.497-1.635.558-2.913C23.985 15.667 24 15.26 24 12s-.015-3.667-.072-4.947c-.06-1.277-.26-2.15-.558-2.913-.297-.784-.718-1.457-1.393-2.133C21.282 1.333 20.61.91 19.833.63c-.765-.297-1.635-.497-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.056 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.381-.42.419-.82.679-1.38.896-.423.164-1.057.36-2.227.413-1.266.057-1.646.07-4.85.07s-3.585-.015-4.85-.07c-1.17-.056-1.805-.249-2.227-.413-.562-.217-.96-.477-1.381-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.36-1.057-.413-2.227-.057-1.266-.07-1.646-.07-4.85s.015-3.585.07-4.85c.056-1.17.249-1.805.413-2.227.217-.562.477.96.896-1.381.42-.419.819-.679 1.381-.896.422-.164 1.057-.36 2.227-.413C8.415 2.175 8.793 2.16 12 2.16zm0 9.04c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5zm0 5.84c-1.29 0-2.34-1.05-2.34-2.34s1.05-2.34 2.34-2.34 2.34 1.05 2.34 2.34-1.05 2.34-2.34 2.34zm6.36-7.74c-.795 0-1.44.645-1.44 1.44s.645 1.44 1.44 1.44 1.44-.645 1.44-1.44-.645-1.44-1.44-1.44z"/></svg>
);

const WhatsappIcon = (props) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor"/></svg>
);


const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will be called on scroll
    const toggleVisibility = () => {
        // If the user scrolls down more than 300px, show the button
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set up the event listener when the component mounts
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

  return (
    <>
        <footer className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Column: Text and Buttons */}
            <div className="text-center md:text-left">
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Let's Build Your First App!
                </h2>
                <p className="mt-4 text-lg text-slate-300 max-w-md mx-auto md:mx-0">
                If you also want to make an APP for your startup then book free consultancy today and let's start your startup together.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                {/* WhatsApp Button */}
                <a 
                    href="https://wa.me/your-whatsapp-number" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition-colors transform hover:scale-105"
                >
                    <WhatsappIcon className="h-6 w-6" />
                    <span>Message on WhatsApp</span>
                </a>
                {/* Instagram Button */}
                <a 
                    href="https://www.instagram.com/hikups_?utm_source=qr&igsh=MXBlYjgwZ2U1aXpyZA==" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center w-full sm:w-auto space-x-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity transform hover:scale-105"
                >
                    <InstagramIcon className="h-6 w-6" />
                    <span>Message on Instagram</span>
                </a>
                </div>
            </div>

            {/* Right Column: Image */}
            <div className="flex items-center justify-center">
                {/* Make sure to replace this image path with your actual image */}
                <img 
                src="/images/Footer.webp" 
                alt="Hikups App Showcase" 
                className="max-w-full h-auto"
                onError={(e) => { 
                    e.target.onerror = null; 
                    // Using a placeholder that looks like the reference
                    e.target.src = 'https://i.imgur.com/e5a2z5N.png'; 
                }}
                />
            </div>
            </div>
            
            {/* Bottom Copyright Bar */}
            <div className="mt-16 border-t border-slate-700 pt-8 text-center text-slate-400">
            <p>&copy; {new Date().getFullYear()} Hikups.com. All rights reserved.</p>
            </div>
        </div>
        </footer>

        {/* --- NEW: Sticky WhatsApp Icon --- */}
        {isVisible && (
            <a
            href="https://wa.me/your-whatsapp-number"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ease-in-out z-50 transform hover:scale-110 animate-bounce"
            aria-label="Chat on WhatsApp"
            >
            <WhatsappIcon className="h-8 w-8" />
            </a>
        )}
    </>
  );
};

export default Footer;