
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Michael",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hello! I'm Michael",
	description: "A Software Engineer writing highly optimized and scalable code.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/drive/folders/15oANUOua80IPNIZtZ5PRdcW1LZfg1ZTG?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "This is me",
	description: [
		"I graduated from Gordon College in 2022 with a bachelors degree in Computer Science and Mathematics. I am currently a Software Engineer specializing in Backend, and I kickstarted my career by joining Citrix, a company leading the tech industry in both Virtual Client Computing (VCC) and Virtual Desktop Infrastructure (VDI).",
		"I am passionate about computing, mathematics, understanding the problems that they are able to solve, and learning about popular trends within the tech industry. Sporting a smile and an uplifting attitude, I am constantly looking for opportunities to work with others. I aspire to learn and achieve excellence in any field and would love to bring you along on my journey!",
		"When I’m not programming, I enjoy cooking and baking, playing sports, gaming, and hanging out with friends.",
	],
}

export const work = {
	title: "What I do",
	cards: [
		{
			title: "Backend Engineering",
			description: "I design, build, and maintain efficient server-side code for complex systems.",
			icons: null,
		},
		{
			title: "Cloud Computing",
			description: "I work on products that provide on-demand computer system resources as a service.",
			icons: null,
		},
		{
			title: "Virtualization",
			description: "I contribute to software that runs virtual instances of actual hardware in an abstraction layer.",
			icons: null,
		}
	],
}

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "Alumni 360",
			description: "A widget integrated into Gordon's people search app which provides Gordon College alummi a way to update their personal information.",
		},
		{
			title: "The Homework Machine",
			description: "A bundle of scripts which parses images for text with Tesseract OCR and rewrites the text to a PDF file in a font that resembles your own handwriting.",
		},
		{
			title: "Power Method Calculator",
			description: "A program which uses CUDA-parallelized power iteration to calculate the dominant eigenvalue of a matrix, taking advantage shared memory and reduction algorithms.",
		}
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out to me directly through email at michael.xiao@gordon.edu.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:michael.xiao@gordon.edu",
			isPrimary: true,
		}
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Michael Xiao | Software Engineer | Cloud Computing | SaaS Enthusiast",
	description: "I write highly optimized and scalable code. I graduated from Gordon College in 2022 with a bachelors degree in Computer Science and Mathematics.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@michaelxiao7",
	description: "Software Engineer | Cloud Computing | SaaS Enthusiast",
	cards: [
		{
			title: "My website",
			link: "https://michaelxiao7.github.io/portfolio/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/michaelxiao7/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/michaelxiao7/",
		},
	]
}