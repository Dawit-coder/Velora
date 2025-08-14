import { useGSAP } from '@gsap/react'
import { openingHours } from '../../constants/index'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { Instagram, Linkedin } from 'lucide-react'

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', { type: 'word' })
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center',
            },
            ease: "power1.inOut"
        })

        timeline.from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        })
        .to('#f-left-leaf', {
            y: '-50', duration: 1, ease: 'power1.inOut'
        }, '<')
    })

    return (
        <footer id="contact" className="relative">
            {/* Decorative leaves */}
            <img 
                src="/images/footer-right-leaf.png" 
                alt="leaf decoration" 
                id="f-right-leaf" 
                className="absolute right-0 top-1/2"
            />
            <img 
                src="/images/footer-left-leaf.png" 
                alt="leaf decoration" 
                id="f-left-leaf" 
                className="absolute left-0 top-1/2"
            />

            <div className="content max-w-6xl mx-auto px-4 py-12 relative z-10">
                <h2 className="text-3xl font-bold mb-8">Where to Find Us</h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Address */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">📍 Visit Our Bar</h3>
                        <p className="text-gray-300 text-base">456, Raq Blvd, #404<br/>Los Angeles, CA 90210</p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                        <p className="text-gray-200 text-base">📞(555) 987-6543</p>
                        <p className="text-gray-300 text-base">velora@gmail.com</p>
                    </div>

                    {/* Hours */}
                    <div>
                        <h3 className="text-xl font-semibold mb-2">Open Every Day</h3>
                        {openingHours.map((time) => (
                            <p key={time.day} className="text-gray-300 text-base">
                                {time.day} : {time.time}
                            </p>
                        ))}
                    </div>

                    {/* Social */}
                    <div className='flex flex-col'>
                        <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                        <div className="flex gap-4 justify-center">
                            <a 
                                href="https://www.instagram.com/novawhisperer/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="transition-transform hover:scale-110"
                            >
                                <Instagram className="text-[#E1306C] w-6 h-6" />
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/dawitteshome/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="transition-transform hover:scale-110"
                            >
                                <Linkedin className="text-[#0A66C2] w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} Velora • Built by <span 
                        className="underline hover:text-white transition-colors">
                        Dawit
                    </span></p>
                </div>
            </div>
        </footer>
    )
}

export default Contact
