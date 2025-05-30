"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
	{ name: "Services", href: "/services" },
	{ name: "Work", href: "/work" },
	{ name: "About", href: "/about" },
	{ name: "Insights", href: "/insights" },
	{ name: "Contact", href: "/contact" },
]

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const pathname = usePathname()

	// Close menu when pathname changes (navigation occurs)
	useEffect(() => {
		setIsMenuOpen(false)
	}, [pathname])

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 80)
		}

		// Prevent body scrolling when menu is open
		if (isMenuOpen) {
			document.body.style.overflow = "hidden"
			document.body.style.position = "fixed"
			document.body.style.width = "100%"
			document.body.style.top = `-${window.scrollY}px`
		} else {
			const scrollY = document.body.style.top
			document.body.style.overflow = ""
			document.body.style.position = ""
			document.body.style.width = ""
			document.body.style.top = ""
			if (scrollY) {
				window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
			document.body.style.overflow = ""
			document.body.style.position = ""
			document.body.style.width = ""
			document.body.style.top = ""
		}
	}, [isMenuOpen])

	// Debug helper for device testing - only active in development
	useEffect(() => {
		if (process.env.NODE_ENV === "development") {
			const updateDebugInfo = () => {
				const screenSizeEl = document.getElementById("screen-size")
				const pixelRatioEl = document.getElementById("pixel-ratio")
				const orientationEl = document.getElementById("orientation")

				if (screenSizeEl && pixelRatioEl && orientationEl) {
					screenSizeEl.textContent = `Screen: ${window.innerWidth}x${window.innerHeight}`
					pixelRatioEl.textContent = `Pixel Ratio: ${window.devicePixelRatio.toFixed(2)}`
					orientationEl.textContent = `Orientation: ${window.innerWidth > window.innerHeight ? "landscape" : "portrait"}`
				}
			}

			// Add debug class in development mode
			if (isMenuOpen && document.body.classList.contains("menu-open")) {
				document.body.classList.add("debug-mode")
			} else {
				document.body.classList.remove("debug-mode")
			}

			updateDebugInfo()
			window.addEventListener("resize", updateDebugInfo)
			window.addEventListener("orientationchange", updateDebugInfo)

			return () => {
				window.removeEventListener("resize", updateDebugInfo)
				window.removeEventListener("orientationchange", updateDebugInfo)
			}
		}
	}, [isMenuOpen])

	useEffect(() => {
		// Device capability detection for animation optimization
		const detectDeviceCapabilities = () => {
			const deviceInfo = {
				highEnd: false,
				lowEnd: false,
				foldable: false,
				tablet: false,
				batteryOptimization: false,
			}

			// Check for high-end device indicators
			if (
				window.devicePixelRatio >= 3 ||
				window.innerWidth >= 768 ||
				(window.screen.width >= 390 && window.screen.height >= 844)
			) {
				deviceInfo.highEnd = true
			}

			// Check for low-end device indicators
			if (
				window.devicePixelRatio === 1 ||
				window.innerWidth <= 360 ||
				navigator.hardwareConcurrency <= 4 // Low CPU cores
			) {
				deviceInfo.lowEnd = true
			}

			// Check for potential foldable device
			if (
				window.screen.width / window.screen.height >= 21 / 9 ||
				(window.screen.width === 280 && window.screen.height === 653) || // Z Flip folded
				(window.screen.width === 717 && window.screen.height === 512) // Z Fold unfolded
			) {
				deviceInfo.foldable = true
			}

			// Check for tablet
			if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
				deviceInfo.tablet = true
			}

			// Check for battery optimization
			if (
				navigator.connection &&
				(navigator.connection.saveData === true ||
					navigator.connection.effectiveType === "slow-2g" ||
					navigator.connection.effectiveType === "2g")
			) {
				deviceInfo.batteryOptimization = true
			}

			return deviceInfo
		}

		if (isMenuOpen) {
			const capabilities = detectDeviceCapabilities()
			const menuElement = document.querySelector(".mobile-menu-pattern")

			if (menuElement) {
				// Apply device-specific animation classes
				if (capabilities.highEnd) {
					menuElement.classList.add("high-end-device")
				}

				if (capabilities.lowEnd) {
					menuElement.classList.add("low-end-device")
				}

				if (capabilities.foldable) {
					menuElement.classList.add("foldable-device")
				}

				if (capabilities.tablet) {
					menuElement.classList.add("tablet-device")
				}

				if (capabilities.batteryOptimization) {
					menuElement.classList.add("battery-saving")
				}

				// Add orientation class
				if (window.innerWidth > window.innerHeight) {
					menuElement.classList.add("landscape-orientation")
				} else {
					menuElement.classList.add("portrait-orientation")
				}
			}
		}

		// Handle orientation changes
		const handleOrientationChange = () => {
			const menuElement = document.querySelector(".mobile-menu-pattern")
			if (menuElement) {
				menuElement.classList.remove("landscape-orientation", "portrait-orientation")
				if (window.innerWidth > window.innerHeight) {
					menuElement.classList.add("landscape-orientation")
				} else {
					menuElement.classList.add("portrait-orientation")
				}
			}
		}

		window.addEventListener("orientationchange", handleOrientationChange)
		window.addEventListener("resize", handleOrientationChange)

		return () => {
			window.removeEventListener("orientationchange", handleOrientationChange)
			window.removeEventListener("resize", handleOrientationChange)
		}
	}, [isMenuOpen])

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out backdrop-blur-md ${isScrolled || isMenuOpen ? "bg-background/90 shadow-sm" : "bg-transparent"
				}`}
		>
			<div className="container-wide flex h-16 items-center justify-between">
				<Link
					href="/"
					className="text-xl font-bold tracking-tight flex items-center z-50"
				>
					<span className="text-black text-2xl">{'{'}</span>
					<span className="text-primary">Melling</span>
					<span>WebStudios</span>
					<span className="text-black text-2xl">{'}'}</span>
				</Link>



				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center space-x-8">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary" : ""
								}`}
						>
							{link.name}
						</Link>
					))}
					<Link href="/free-redesign">
						<Button className="btn btn-primary btn-md">Free Redesign</Button>
					</Link>
				</nav>

				{/* Mobile Navigation Toggle */}
				<div className="flex items-center md:hidden z-50">
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Toggle menu"
						className="relative w-10 h-10 flex items-center justify-center focus:outline-none"
					>
						<AnimatePresence mode="wait">
							{isMenuOpen ? (
								<motion.div
									key="close"
									initial={{ opacity: 0, rotate: -90 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: 90 }}
									transition={{ duration: 0.2 }}
								>
									<X className="h-6 w-6" />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ opacity: 0, rotate: 90 }}
									animate={{ opacity: 1, rotate: 0 }}
									exit={{ opacity: 0, rotate: -90 }}
									transition={{ duration: 0.2 }}
								>
									<Menu className="h-6 w-6" />
								</motion.div>
							)}
						</AnimatePresence>
					</Button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
						className="md:hidden fixed inset-0 top-0 z-40 flex flex-col backdrop-blur-md mobile-menu-pattern border-t-[3px] border-primary responsive-pattern"
						style={{
							backgroundColor: "rgba(255, 255, 255, 1)",
							height: "100vh",
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
						}}
					>
						<div className="h-16" aria-hidden="true"></div> {/* Spacer to account for the header height */}
						<div className="flex flex-col flex-grow overflow-y-auto">
							<div className="container-wide py-6 flex-grow flex flex-col">
								<nav className="space-y-1 mb-auto">
									{navLinks.map((link) => (
										<motion.div
											key={link.name}
											initial={{ x: -20, opacity: 0 }}
											animate={{ x: 0, opacity: 1 }}
											transition={{ duration: 0.2, delay: navLinks.indexOf(link) * 0.05 }}
										>
											<Link
												href={link.href}
												className={`flex items-center justify-between py-3 text-lg font-medium transition-colors hover:text-primary ${pathname === link.href ? "text-primary border-l-4 border-primary pl-4" : "pl-5"
													}`}
												onClick={() => setIsMenuOpen(false)}
											>
												<span>{link.name}</span>
												<ChevronRight
													className={`h-5 w-5 transition-transform ${pathname === link.href ? "text-primary" : "text-muted-foreground"
														}`}
												/>
											</Link>
											<div className="h-px bg-border w-full"></div>
										</motion.div>
									))}
								</nav>

								<div className="mt-auto">
									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.3 }}
										className="mt-6"
									>
										<Link href="/free-redesign" onClick={() => setIsMenuOpen(false)}>
											<Button className="btn btn-primary w-full py-4 text-lg">Free Redesign</Button>
										</Link>
									</motion.div>

									<motion.div
										initial={{ y: 20, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ duration: 0.3, delay: 0.4 }}
										className="mt-8 flex flex-col items-center text-center"
									>
										<p className="text-muted-foreground mb-2">Need help?</p>
										<Link href="/contact" className="text-primary font-medium" onClick={() => setIsMenuOpen(false)}>
											Contact Us
										</Link>
									</motion.div>
								</div>
							</div>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3, delay: 0.5 }}
								className="container-wide py-4 border-t border-border mt-auto"
							>
								<div className="flex justify-center space-x-6">
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<span className="sr-only">Twitter</span>
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
										</svg>
									</a>
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<span className="sr-only">LinkedIn</span>
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
										</svg>
									</a>
									<a href="#" className="text-muted-foreground hover:text-primary transition-colors">
										<span className="sr-only">GitHub</span>
										<svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
											<path
												fillRule="evenodd"
												d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</motion.div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}
