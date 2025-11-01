<script lang="ts">
	import { Badge } from '$lib/components/ui/badge';
	import { Copy, Mail, ExternalLink, TrendingUp, Database, Code } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let emailCopied = false;
	let visible = $state(false);
	onMount(() => {
		visible = true;
	});

	const copyEmail = async () => {
		await navigator.clipboard.writeText('jramiroz98@gmail.com');
		emailCopied = true;
		setTimeout(() => emailCopied = false, 2000);
	};

	const skills = {
		dataScience: [
			{ name: 'Machine Learning', level: 85 },
			{ name: 'Data Mining', level: 80 },
			{ name: 'Predictive Modeling', level: 85 },
			{ name: 'Deep Learning', level: 75 },
			{ name: 'TensorFlow & Keras', level: 80 },
			{ name: 'Python', level: 90 },
			{ name: 'Pandas', level: 90 },
			{ name: 'Numpy', level: 90 },
			{ name: 'Scikit learn', level: 90 },
			{ name: 'AutoML', level: 90 },
			{ name: 'Polars', level: 90 },
		],
		engineering: [
			{ name: 'Spark', level: 75 },
			{ name: 'Snowflake', level: 70 },
			{ name: 'Azure', level: 75 },
			{ name: 'AWS', level: 75 },
			{ name: 'Databricks', level: 80 },
			{ name: 'Tableau', level: 85 },
			{ name: 'SQL', level: 85 },
			{ name: 'NoSQL', level: 80 },
			{ name: 'MySQL', level: 65 },
			{ name: 'PostgreSQL', level: 65 },
			{ name: 'SQLite', level: 75 }
		],
		development: [
			{ name: 'Docker', level: 85 },
			{ name: 'SvelteKit', level: 85 },
			{ name: 'JavaScript', level: 80 },
			{ name: 'NextJS', level: 80 },
			{ name: 'React', level: 80 },
			{ name: 'Go', level: 20 },
			{ name: 'Echo Labstack', level: 80 },
			{ name: 'Templ', level: 80 },
			{ name: 'Python', level: 80 },
			{ name: 'Flask', level: 70 },
			{ name: 'Django', level: 70 },
			{ name: 'C', level: 30 },
			{ name: 'WordPress', level: 65 },
			{ name: 'Tailwind CSS', level: 75 },
			{ name: 'Pocketbase', level: 80 },
			{ name: 'Directus', level: 80 }
		],
		design: [
			{ name: 'UX/UI Design', level: 85 },
			{ name: 'Figma', level: 60 },
			{ name: 'Adobe XD', level: 70 },
			{ name: 'Adobe Illustrator', level: 60 },
			{ name: 'Adobe Photoshop', level: 60 },
			{ name: 'Blender', level: 50 },
			{ name: 'Cinema 4D', level: 60 }
		],
		other: [
			{ name: 'Ableton (Music Production)', level: 90 },
			{ name: 'Microsoft Office Suite', level: 80 },
			{ name: 'Graphic Design', level: 70 }
		]
	};

	const projects = [
		{
			title: 'Cropwatch Japan',
			description: 'Redesigned the entire UX for a Japan-based agronomy IoT startup. Developed intuitive interfaces for sensor data visualization, real-time monitoring dashboards, and alert systems. Collaborated with the engineering team to present complex agricultural data in an accessible manner.',
			image: '/images/cropwatch.png',
			tags: ['UX/UI Design', 'IoT', 'Data Visualization', 'Svelte'],
			link: 'https://www.cropwatch.io/en',
			category: 'client'
		},
		{
			title: 'Magnolia Restaurant Analytics',
			description: 'Comprehensive data analysis project for Magnolia Restaurant in Tegucigalpa. Built interactive Tableau dashboards to track sales trends, customer preferences, and operational efficiency. Provided actionable insights that improved inventory management and menu optimization.',
			image: '/images/magnolia.webp',
			tags: ['Tableau', 'Data Analysis', 'Business Intelligence', 'Pandas'],
			link: null,
			category: 'client'
		},
		{
			title: 'Sweet Potato Agricultural Analytics',
			description: 'Data-driven analysis for a sweet potato production company. Developed Tableau dashboards monitoring chemical usage, soil health metrics, and crop yield predictions. Implemented data mining techniques to optimize agricultural practices and reduce chemical dependency.',
			image: '/images/camotes.png',
			tags: ['Data Mining', 'Tableau', 'Agriculture', 'Pandas'],
			link: null,
			category: 'client'
		},
		{
			title: 'Hotel Edén Management System',
			description: 'Operations and finance management platform for Hotel Edén in Tegucigalpa. Features intelligent room availability system, booking management, and role-based access control. User-friendly interface prevents booking errors and provides real-time room status updates for staff.',
			image: '/images/hotel.png',
			tags: ['Management System', 'Hotel Software', 'Admin Panel', 'Sveltekit', 'Pocketbase', 'Reservation System'],
			link: 'https://hoteledenhn.com/',
			category: 'client'
		},
		{
			title: 'Estudio Jurídico Urtecho López',
			description: 'Professional website showcasing comprehensive legal services for Urtecho López Law Firm. Modern design with visually appealing elements, optimized for seamless navigation. Features legal consultations, litigation support, corporate advisory services with high usability and full responsiveness.',
			image: '/images/techo.png',
			tags: ['Sveltekit', 'Web Design', 'Professional Services', 'Responsive'],
			link: 'https://estudiojuridicourtecholopez.com/',
			category: 'client'
		},
		{
			title: 'Valu Online Store',
			description: 'E-commerce solution for one of my first clients. Built a complete online store using WordPress and WooCommerce, featuring product catalog, shopping cart, payment integration, and order management system.',
			image: '/images/valu.png',
			tags: ['E-commerce', 'Admin Panel', 'NextJS', 'React', 'Pocketbase'],
			link: 'https://valuhn.com/',
			category: 'client'
		},
		{
			title: 'Ilem Handbags',
			description: 'E-commerce platform for a Tegucigalpa-based handbag company. Features comprehensive administrative panel with inventory management, order processing, and customer management. Built with modern e-commerce best practices including secure payments and responsive design.',
			image: '/images/ilem.png',
			tags: ['E-commerce', 'Admin Panel', 'NextJS', 'React', 'Pocketbase'],
			link: 'https://ilem.store/',
			category: 'client'
		},
		{
			title: 'Zeeve - AI CV Generator',
			description: 'AI-powered platform generating optimized CVs based on user profiles and target job positions. Leverages artificial intelligence to craft effective resumes and evaluates candidate suitability for desired positions. Currently in testing phase with advanced matching algorithms.',
			image: '/images/zeeve.png',
			tags: ['AI', 'Go', 'Sveltekit', 'SaaS'],
			link: null,
			category: 'personal'
		},
		{
			title: 'My Smart Menu',
			description: 'Full-stack SaaS platform enabling businesses to create dynamic online stores. Built with SvelteKit frontend and Go backend, featuring multi-tier subscription models. Implemented real-time menu updates, order management, and customer analytics.',
			image: '/images/msm.png',
			tags: ['SvelteKit', 'Directus CMS', 'PostgreSQL', 'SaaS'],
			link: null,
			category: 'personal'
		},
		{
			title: 'Discarded Baker',
			description: 'Web platform for generating sourdough bread recipes with intelligent discard management. Automates calculations for hydration, flour ratios, and ingredient adjustments. Delivers quick, accurate results for recipe modifications and experimental baking variations.',
			image: '/images/discarded.png',
			tags: ['Go', 'Echo Labstack', 'Templ', 'Tailwind CSS', 'HTMX'],
			link: 'https://discardedbaker.com/',
			category: 'personal'
		},
		{
			title: 'Mr. Z Math Games',
			description: 'Educational platform hosting mathematics-focused games for children. Features topic explanations, examples, and practice exercises with child-friendly design. Optimized for tablets and laptops, prioritizing ease of use for young learners accessing the application.',
			image: '/images/math.png',
			tags: ['Education', 'Sveltekit', 'UI/UX', 'Typescript', 'Pocketbase'],
			link: 'https://mrz-math-games.vercel.app/',
			category: 'personal'
		},
		{
			title: 'Koala McGiver',
			description: 'Personal brand website for my DJ and music production alter ego. Clean, modern design showcasing music releases, mixes, and event schedule. Built with SvelteKit for optimal performance and seamless user experience.',
			image: '/images/koala.png',
			tags: ['SvelteKit', 'Tailwind', 'Music', 'Branding'],
			link: 'https://koalamcg.com/',
			category: 'personal'
		},
		{
			title: 'Vital Health Tracking',
			description: 'Modern health monitoring application for tracking vital signs including blood sugar, blood pressure, and oxygen saturation. Featured secure data sharing with healthcare providers and family members. Built with Python/Flask backend and responsive frontend.',
			image: '/images/vital.png',
			tags: ['Python', 'Flask', 'MySQL', 'Mobile', 'UX/UI'],
			link: null,
			category: 'personal'
		},
		{
			title: 'Forensics App',
			description: 'Application developed for the morgue in Tegucigalpa to digitalize forensic odontological reports. Features dual password security system, comprehensive activity history logging, and restricted sections for authorized personnel ensuring data integrity and forensic protocol compliance.',
			image: '/images/forensics.png',
			tags: ['Python', 'Security', 'Flask', 'Data Management'],
			link: null,
			category: 'personal'
		},
		{
			title: 'Personal Portfolio',
			description: 'My own portfolio website showcasing projects, skills, and experience. Built with modern web technologies focusing on clean design, smooth animations, and optimal performance. Features responsive design and interactive elements.',
			image: '/images/profile-picture.jpg',
			tags: ['SvelteKit', 'Tailwind', 'Web Design', 'Portfolio'],
			link: null,
			category: 'personal'
		},
		{
			title: 'University Web Projects',
			description: 'Series of web development projects completed during university coursework. Includes dynamic websites, database-driven applications, and interactive user interfaces demonstrating fundamental web development skills.',
			image: '/images/complutense.jpg',
			tags: ['Python', 'Snowflake', 'Spark', 'Databricks', 'Azure', 'Pandas', 'Scikit learn', 'Tableau', 'Data Mining'],
			link: null,
			category: 'academic'
		},
		// {
		// 	title: 'Data Science Projects',
		// 	description: 'Collection of data science and machine learning projects from Masters program. Includes predictive modeling, data mining, deep learning applications, and big data analytics using various tools and frameworks.',
		// 	image: '/images/datascience-placeholder.jpg',
		// 	tags: ['Python', 'TensorFlow', 'Spark', 'Machine Learning'],
		// 	link: null,
		// 	category: 'academic'
		// }
	];
</script>

<svelte:head>
	<title>José Zúñiga - Data Scientist & Full Stack Developer</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
				rel="stylesheet" />
</svelte:head>

<div class="min-h-screen bg-white">
	<!-- Floating Contact Button -->
	<button
		on:click={copyEmail}
		class="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-sky-500 text-white shadow-lg transition hover:bg-sky-600 hover:shadow-xl lg:h-auto lg:w-auto lg:gap-2 lg:rounded-lg lg:px-6 lg:py-4"
		title="Contact me"
	>
		<Mail size={24} />
		<span class="hidden font-semibold lg:inline">Quick Contact</span>
	</button>

	{#if emailCopied}
		<div
			class="fixed bottom-28 right-8 z-50 animate-fade-in rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg lg:bottom-24">
			✓ Email copied: jramiroz98@gmail.com
		</div>
	{/if}

	<!-- Hero Section -->
	<section class="relative overflow-hidden border-b border-gray-100 bg-white">
		<div class="absolute right-0 top-0 h-full w-1/2 bg-sky-50"></div>
		<div class="relative mx-auto max-w-7xl px-6 py-32 lg:px-8">
			<div class="grid items-center gap-16 lg:grid-cols-2">
				<div>
					<div class="mb-6 flex flex-wrap gap-2">
						{#if visible}
							<div in:fade={{duration: 250}}>
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Full Stack Developer</Badge>
							</div>
							<div in:fade={{duration: 500}}>
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Energy Engineer</Badge>
							</div>
							<div in:fade={{duration: 1000}}>
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Data Scientist</Badge>
							</div>
						{:else}
							<div class="opacity-0">
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Full Stack Developer</Badge>
							</div>
							<div class="opacity-0">
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Energy Engineer</Badge>
							</div>
							<div class="opacity-0">
								<Badge class="bg-sky-100 text-sky-700 border-0 px-3 py-1">Data Scientist</Badge>
							</div>
						{/if}
					</div>
					{#if visible}
						<h1 in:fly={{x:10, duration:600}} class="mb-6 text-6xl font-black tracking-tight text-gray-900 animate-appear">
							José Ramiro<br />Zúñiga
						</h1>
					{:else}
						<h1 class="mb-6 text-6xl font-black tracking-tight text-gray-900 animate-appear opacity-0">
							José Ramiro<br />Zúñiga
						</h1>
					{/if}
					<p class="mb-10 text-xl leading-relaxed text-gray-600">
						Transforming data into insights and ideas into digital solutions. I blend engineering precision
						with creative development, specializing in data science, machine learning, and full-stack development.
					</p>
					<div class="flex flex-wrap gap-4">
						<button on:click={copyEmail}
										class="rounded-lg bg-sky-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600">
							Contact Me
						</button>
						<a href="#projects"
							 class="rounded-lg border-2 border-gray-200 bg-white px-8 py-4 font-semibold text-gray-900 transition hover:border-sky-500 hover:text-sky-600">
							View Work
						</a>
					</div>
				</div>
				<div class="relative flex justify-center">
					<div class="relative">
						<div class="absolute -inset-4 rounded-3xl bg-sky-100 opacity-60"></div>
						<img
							src="/images/profile-picture.jpg"
							alt="José Zúñiga"
							class="relative h-96 w-96 rounded-3xl object-cover shadow-xl transition-all ease-in  delay-500"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- About Section -->
	<section class="mx-auto  px-6 py-24 lg:px-24 bg-gray-900 ">
		<div class="grid gap-12 lg:grid-cols-3 lg:gap-16">
			<div class="lg:col-span-2">
				<h2 class="mb-8 text-4xl font-bold text-gray-100">About Me</h2>
				<div class="space-y-6 text-lg leading-relaxed text-gray-200">
					<p>
						As an <span class="font-semibold text-gray-500">Energy Engineer</span> pursuing a Master's in Data Science,
						Big Data, and Business Analytics,
						I bring a unique perspective to problem-solving. My journey spans from renewable energy systems to
						building scalable web applications and developing machine learning models.
					</p>
					<p>
						I'm passionate about the intersection of <span class="font-semibold text-gray-500">data science</span> and
						<span class="font-semibold text-gray-500">sustainable technology</span>.
					</p>
					<p>
						Currently, I work with cutting-edge technologies like <span class="font-semibold text-gray-500"> Snowflake, Spark, Databricks, and TensorFlow</span> while
						maintaining my love for full-stack development with <span class="text-sky-500 font-semibold">Go</span>, <span class="text-orange-600 font-semibold">SvelteKit</span> and <span class="text-blue-500 font-semibold">Python</span>.
					</p>
				</div>
			</div>
			<div class="space-y-6">
				<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<div class="mb-2 flex items-center gap-3">
						<TrendingUp class="text-sky-400" size={24} />
						<h3 class="font-bold text-gray-900">Current Focus</h3>
					</div>
					<p class="text-gray-600">Master's in Data Science & Business Analytics</p>
				</div>
				<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<div class="mb-2 flex items-center gap-3">
						<svg class="text-emerald-300" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-width="2" stroke-linecap="round"
										stroke-linejoin="round" />
						</svg>
						<h3 class="font-bold text-gray-900">Background</h3>
					</div>
					<p class="text-gray-600">Full Stack Development, Energy Engineering & Data Science </p>
				</div>
				<div class="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
					<div class="mb-2 flex items-center gap-3">
						<svg class="text-red-500" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
							<path
								d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
								stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						</svg>
						<h3 class="font-bold text-gray-900">Passion</h3>
					</div>
					<p class="text-gray-600">Building new things</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Skills Section -->
	<section class="border-y border-gray-100 bg-gray-50 py-24">
		<div class="mx-auto  px-6 lg:px-24">
			<h2 class="mb-16 text-center text-4xl font-bold text-gray-900">Technical Expertise</h2>
			<div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
				<!-- Data Science -->
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-8 flex items-center gap-3">
						<div class="rounded-xl bg-sky-950 p-3">
							<TrendingUp class="text-sky-100" size={28} />
						</div>
						<h3 class="text-xl font-bold text-gray-900">Data Science & AI</h3>
					</div>
					{#each skills.dataScience as skill}
						<div class="mb-2">
							<div class="mb-2 flex justify-between text-sm bg-sky-50 p-2 rounded-md border-1 border-solid border-gray-200">
								<span class="font-semibold text-gray-900">{skill.name}</span>
							</div>
						</div>
					{/each}
				</div>

				<!-- Big Data Engineering -->
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-8 flex items-center gap-3">
						<div class="rounded-xl bg-sky-950 p-3">
							<Database class="text-sky-100" size={28} />
						</div>
						<h3 class="text-xl font-bold text-gray-900">Big Data & Databases</h3>
					</div>
					{#each skills.engineering as skill}
						<div class="mb-2">
							<div class="mb-2 flex justify-between text-sm bg-sky-50 p-2 rounded-md border-1 border-solid border-gray-200">
								<span class="font-semibold text-gray-900">{skill.name}</span>
							</div>
						</div>
					{/each}
				</div>

				<!-- Full Stack -->
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-8 flex items-center gap-3">
						<div class="rounded-xl bg-sky-950 p-3">
							<Code class="text-sky-100" size={28} />
						</div>
						<h3 class="text-xl font-bold text-gray-900">Full Stack Development</h3>
					</div>
					{#each skills.development as skill}
						<div class="mb-2">
							<div class="mb-2 flex justify-between text-sm bg-sky-50 p-2 rounded-md border-1 border-solid border-gray-200">
								<span class="font-semibold text-gray-900">{skill.name}</span>
							</div>
						</div>
					{/each}
				</div>

				<!-- Design & Creative -->
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-8 flex items-center gap-3">
						<div class="rounded-xl bg-sky-950 p-3">
							<svg class="text-sky-100" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<path d="M12 19l7-7 3 3-7 7-3-3z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke-width="2" stroke-linecap="round"
											stroke-linejoin="round" />
								<path d="M2 2l7.586 7.586" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<circle cx="11" cy="11" r="2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Design & Creative</h3>
					</div>
					{#each skills.design as skill}
						<div class="mb-2">
							<div class="mb-2 flex justify-between text-sm bg-sky-50 p-2 rounded-md border-1 border-solid border-gray-200">
								<span class="font-semibold text-gray-900">{skill.name}</span>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Other Skills -->
			<div class="mt-8">
				<div class="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
					<div class="mb-8 flex items-center gap-3">
						<div class="rounded-xl bg-sky-950 p-3">
							<svg class="text-sky-100" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor">
								<circle cx="12" cy="12" r="10" stroke-width="2" />
								<polyline points="12 6 12 12 16 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</div>
						<h3 class="text-xl font-bold text-gray-900">Additional Skills</h3>
					</div>
					<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{#each skills.other as skill}
							<div class="mb-2">
								<div class="mb-2 flex justify-between text-sm bg-sky-50 p-2 rounded-md border-1 border-solid border-gray-200">
									<span class="font-semibold text-gray-900">{skill.name}</span>
								</div>
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="mx-auto max-w-7xl px-6 py-24 lg:px-8">
		<div class="mb-16 text-center">
			<h2 class="mb-4 text-4xl font-bold text-gray-900">Featured Projects</h2>
			<p class="text-lg text-gray-600">A comprehensive portfolio showcasing my work across data science, full-stack
				development, and client solutions</p>
		</div>

		<!-- Client Projects -->
		<div class="mb-12">
			<h3 class="mb-6 text-2xl font-bold text-gray-900">Client Work</h3>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each projects.filter(p => p.category === 'client') as project}
					<div
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
						<div class="relative h-64 overflow-hidden bg-sky-50">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="p-8">
							<h4 class="mb-4 text-2xl font-bold text-gray-900">{project.title}</h4>
							<p class="mb-6 leading-relaxed text-gray-600">{project.description}</p>
							<div class="mb-6 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<Badge class="bg-sky-50 text-sky-700 border-0 font-medium">{tag}</Badge>
								{/each}
							</div>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-700"
								>
									View Project
									<ExternalLink size={18} />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Personal Projects -->
		<div class="mb-12">
			<h3 class="mb-6 text-2xl font-bold text-gray-900">Personal Projects</h3>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each projects.filter(p => p.category === 'personal') as project}
					<div
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
						<div class="relative h-64 overflow-hidden bg-sky-50">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="p-8">
							<h4 class="mb-4 text-2xl font-bold text-gray-900">{project.title}</h4>
							<p class="mb-6 leading-relaxed text-gray-600">{project.description}</p>
							<div class="mb-6 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<Badge class="bg-sky-50 text-sky-700 border-0 font-medium">{tag}</Badge>
								{/each}
							</div>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-700"
								>
									View Project
									<ExternalLink size={18} />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- Academic Projects -->
		<div>
			<h3 class="mb-6 text-2xl font-bold text-gray-900">Academic Work</h3>
			<div class="grid gap-8 lg:grid-cols-2">
				{#each projects.filter(p => p.category === 'academic') as project}
					<div
						class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
						<div class="relative h-64 overflow-hidden bg-sky-50">
							<img
								src={project.image}
								alt={project.title}
								class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							/>
						</div>
						<div class="p-8">
							<h4 class="mb-4 text-2xl font-bold text-gray-900">{project.title}</h4>
							<p class="mb-6 leading-relaxed text-gray-600">{project.description}</p>
							<div class="mb-6 flex flex-wrap gap-2">
								{#each project.tags as tag}
									<Badge class="bg-sky-50 text-sky-700 border-0 font-medium">{tag}</Badge>
								{/each}
							</div>
							{#if project.link}
								<a
									href={project.link}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex items-center gap-2 font-semibold text-sky-600 transition hover:text-sky-700"
								>
									View Project
									<ExternalLink size={18} />
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Contact Section -->
	<section class="border-t border-gray-100 bg-sky-50 py-24">
		<div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
			<h2 class="mb-6 text-4xl font-bold text-gray-900">Let's Work Together</h2>
			<p class="mb-10 text-xl text-gray-600">
				I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
			</p>
			<div class="flex flex-col items-center gap-4">
				<button
					on:click={copyEmail}
					class="flex items-center gap-3 rounded-lg bg-sky-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-sky-600"
				>
					<Mail size={24} />
					jramiroz98@gmail.com
					<Copy size={20} />
				</button>
				{#if emailCopied}
					<p class="text-sm text-sky-600">✓ Email copied successfully!</p>
				{/if}
			</div>
		</div>
	</section>

	<!-- Footer -->
	<footer class="border-t border-gray-200 bg-white py-8">
		<div class="mx-auto max-w-7xl px-6 text-center text-gray-600 lg:px-8">
			<p>&copy; 2024 José Ramiro Zúñiga. All rights reserved.</p>
		</div>
	</footer>
</div>

<style>
    :global(body) {
        font-family: 'Inter', sans-serif;
    }

    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .animate-fade-in {
        animation: fade-in 0.3s ease-out;
    }
</style>