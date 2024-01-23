<script lang="ts">
	import Technology from '$lib/components/Technology.svelte';
	import { Badge } from '$lib/components/ui/badge';
	import { Copy } from 'lucide-svelte';
	import { base } from '$app/paths';

	let copy = false;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Mukta:wght@200;300;400;500;600;700;800&family=Outfit:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Reem+Kufi+Fun:wght@400;500;600;700&family=Sen:wght@400;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div id="main" class="px-6 md:mx-40">
	<div id="welcome">
		<div class="relative mb-24">
			<h1
				class="mx-auto my-12 scroll-m-20 text-center font-Merriweather text-4xl font-extrabold tracking-tight lg:text-5xl"
			>
				Hello World!
			</h1>
			<img
				src="https://static.wixstatic.com/media/5c2a62_977f1c7c868445aa87a4a216f219a4d4~mv2.png/v1/crop/x_1,y_0,w_515,h_282/fill/w_384,h_208,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/black-underline-png-3.png"
				alt=""
				class="absolute top-0 md:right-80"
			/>
		</div>
		<div class="items-center justify-center space-x-10 md:flex">
			<div class="basis-1/2">
				<h2
					class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					My name is Jose Zuniga
				</h2>
				<p class="my-4 leading-7 [&:not(:first-child)]:mt-6">
					I'm a creative person, eager to learn and build amazing projects. I enjoy finding
					problems, ideating a solution and executing it step by step until the project is launched
					and maintained. My favorite part is designing the UX, as I believe it's the most important
					part of the project, the interaction, the feel, how the logic will connect, and visualize
					the project beforehand. Not to say that I don't enjoy centering a div or making sure the
					backend receives the data in the correct format. All in all, I love creating.
				</p>
			</div>
			<div class=" basis-1/2">
				<img
					src="{base}/images/profile-picture.jpg"
					alt="jose ramiro zuniga duron"
					class="w-3/4 rounded-md"
				/>
			</div>
		</div>
		<div class="mx-auto my-4 w-[60vw] rounded-lg bg-secondary p-4 text-center">
			<Badge class=" bg-green-500">UX</Badge>
			<Badge class=" bg-green-500">UI</Badge>
			<Badge class=" bg-green-500">3D</Badge>
			<Badge class=" bg-blue-500">Full Stack</Badge>
			<Badge class=" bg-blue-500">Frontend</Badge>
			<Badge class=" bg-blue-500">Backend</Badge>
			<Badge class=" bg-violet-500">Graphic Design</Badge>
			<Badge class=" bg-orange-500">Entrepreneur</Badge>
		</div>
	</div>
	<div id="projects" class="my-10 md:my-24">
		<h2
			class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			My Projects
		</h2>
		<!-- MY SMART MENU -->
		<div
			class="my-8 basis-1/4 justify-center space-x-8 rounded-lg bg-slate-100 p-10 shadow-md md:flex"
		>
			<div class="w-60">
				<img src="https://www.mysmartmenu.store/images/en-phones.png" alt="" class="rounded-md" />
			</div>
			<div class="basis-1/2">
				<h2
					class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					My Smart Menu
				</h2>
				<p>
					My Smart Menu is a platform that allows users to create their own store. This store is
					generated dynamically with all of their information. Their are different tiers for which a
					user can build their store. It took many iterations and pivots to take it to where it is
					today.
				</p>
				<p class="mt-12 text-right">
					<a
						href="https://mysmartmenu.store"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFekoBix6s7nojVOvAbEDM-RNAIs0LM9oAtXVxst7mg&s"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt="" />
				</div>
				<div class="w-8">
					<img
						src="https://mms.businesswire.com/media/20220301005217/en/1374180/22/Directus-Logo.jpg"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<!-- VITAL -->
		<div
			class="my-8 basis-1/4 justify-center space-x-8 rounded-lg bg-slate-100 p-10 shadow-md md:flex"
		>
			<div class="w-60">
				<img src="https://envikoo.com/images/vital3.webp" alt="" class="rounded-md" />
			</div>
			<div class="basis-1/2">
				<h2
					class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					Vital App
				</h2>
				<p>
					Vital App was a project that involved tracking the vital signs of patients. It was a more
					modern way to keep track of sugar levels, blood pressure, oxygen saturation and a diary
					log. The data could be shared with desired doctors and family members. This project has
					been discontinued.
				</p>
				<p class="mt-12 text-right">
					<a
						href="https://envikoo.com/vital/"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Read more about it</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFekoBix6s7nojVOvAbEDM-RNAIs0LM9oAtXVxst7mg&s"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/flask-logo.png" alt="" />
				</div>
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
						alt=""
					/>
				</div>
				<div class="w-8">
					<img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="" />
				</div>

				<div class="w-8">
					<img
						src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<!-- Koala McGiver Site -->
		<div
			class="my-8 basis-1/4 justify-center space-x-8 rounded-lg bg-slate-100 p-10 shadow-md md:flex"
		>
			<div class="w-60">
				<img src="https://koalamcg.com/images/white-logo.png" alt="" class="rounded-md bg-black" />
			</div>
			<div class="basis-1/2">
				<h2
					class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					Koala McGiver
				</h2>
				<p>
					Koala McGiver is my artist name as a Dj and Producer, just thought my site was worth
					sharing ;)
				</p>
				<p class="mt-12 text-right">
					<a
						href="https://koalamcg.com/"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
						alt=""
					/>
				</div>

				<div class="w-8">
					<img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt="" />
				</div>
			</div>
		</div>

		<!-- Valu Online Store -->
		<div
			class="my-8 basis-1/4 justify-center space-x-8 rounded-lg bg-slate-100 p-10 shadow-md md:flex"
		>
			<div class="w-60">
				<img
					src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/300509508_599498878420797_5341563226855058472_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFGWD4y5fBSFI2I4EHfA7UeDaxqaG-SpFINrGpob5KkUgUFmLc0f7IuoQFFM7VzYdIpqjx1DFInxjDOaCiTkGNH&_nc_ohc=9jVSAleI2OYAX-lrejh&_nc_ht=scontent-mia3-2.xx&oh=00_AfBn99QTU-0-FLogZCzvGKWFOUlx_tTe-YWJ5i_MgeGmyw&oe=65A4CF99"
					alt=""
					class="rounded-md bg-black"
				/>
			</div>
			<div class="basis-1/2">
				<h2
					class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
				>
					Valu Online Store
				</h2>
				<p>One of my first clients needed an online store. Built in wordpress with woocommerce.</p>
				<p class="mt-12 text-right">
					<a
						href="https://valuhn.com/"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	</div>
	<div id="tech" class="my-24">
		<h2
			class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Technologies
		</h2>
		<div class="mt-4 grid w-[85vw] gap-8 md:grid-cols-2">
			<Technology
				name="Svelte + SvelteKit"
				value={85}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
			/>
			<Technology
				name="Python"
				value={80}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
			/>
			<Technology
				name="Flask"
				value={70}
				image="https://cdn.freebiesupply.com/logos/thumbs/2x/flask-logo.png"
			/>
			<Technology
				name="JavaScript"
				value={70}
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFekoBix6s7nojVOvAbEDM-RNAIs0LM9oAtXVxst7mg&s"
			/>
			<Technology
				name="Tailwind"
				value={75}
				image="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
			/>
			<Technology
				name="Pocketbase"
				value={80}
				image="https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
			/>
			<Technology
				name="C"
				value={30}
				image="https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png"
			/>
			<Technology
				name="Go"
				value={20}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png"
			/>
			<Technology
				name="Rust"
				value={10}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/220px-Rustacean-orig-noshadow.svg.png"
			/>
			<Technology
				name="WordPress"
				value={65}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png"
			/>
			<Technology
				name="Directus"
				value={80}
				image="https://mms.businesswire.com/media/20220301005217/en/1374180/22/Directus-Logo.jpg"
			/>
			<Technology
				name="MySQL"
				value={65}
				image="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png"
			/>
			<Technology
				name="PostgreSQL"
				value={65}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
			/>
			<Technology
				name="SQLite"
				value={75}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
			/>
		</div>
		<h2
			class="mt-24 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Softwares
		</h2>
		<div class="mt-4 grid gap-8 md:grid-cols-2">
			<Technology
				name="Figma"
				value={60}
				image="https://cdn.sanity.io/images/599r6htc/localized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format"
			/>
			<Technology
				name="Adobe XD"
				value={70}
				image="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png"
			/>
			<Technology
				name="Adobe Illustrator"
				value={60}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1200px-Adobe_Illustrator_CC_icon.svg.png"
			/>
			<Technology
				name="Adobe Photoshop"
				value={60}
				image="data:image/png;base64,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"
			/>
			<Technology
				name="Blender"
				value={50}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/2503px-Blender_logo_no_text.svg.png"
			/>
			<Technology
				name="Cinema 4D"
				value={60}
				image="https://upload.wikimedia.org/wikipedia/en/d/d8/C4D_Logo.png"
			/>
			<Technology
				name="Word"
				value={80}
				image="https://logos-world.net/wp-content/uploads/2020/03/Microsoft-Word-Logo.png"
			/>
			<Technology
				name="Excel"
				value={80}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/2170px-Microsoft_Excel_2013-2019_logo.svg.png"
			/>
			<Technology
				name="Powerpoint"
				value={80}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_PowerPoint_%282019%E2%80%93present%29.svg.png?20210821050414"
			/>
			<Technology
				name="Ableton"
				value={90}
				image="https://yt3.googleusercontent.com/ytc/AIf8zZR87SKAfVmyqQH5pyHMG1DT6VHqM6NPw4fgSgo1uQ=s900-c-k-c0x00ffffff-no-rj"
			/>
		</div>
	</div>

	<div id="other"></div>
	<div id="about"></div>
	<div id="contact" class="mb-60 mt-20 md:my-40">
		<h2
			class="mt-24 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Hire me
		</h2>
		<div
			class="mx-auto my-12 flex w-80 justify-center rounded-full outline outline-2 outline-offset-8"
		>
			<p
				class="items-center text-center leading-7 underline [&:not(:first-child)]:mt-6"
				id="myEmail"
			>
				jramiroz98@gmail.com<button
					on:click={async () => await navigator.clipboard.writeText('jramiroz98@gmail.com')}
					on:click={() => (copy = true)}
					class="m-2 rounded-xl bg-secondary p-2"><Copy /></button
				>
				{#if copy}
					<p class="text-sm text-muted-foreground">Email copied successfully to clipboard.</p>
				{/if}
			</p>
		</div>
	</div>
</div>
