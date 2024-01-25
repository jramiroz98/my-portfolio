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

<div id="main" class="px-6 lg:mx-40">
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
				class="absolute top-0 md:right-40 lg:right-80"
			/>
		</div>
		<div class="items-center justify-center lg:flex lg:space-x-10">
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
				<p class="my-4 leading-7 [&:not(:first-child)]:mt-6">
					I speak english, español, en een beetje Nederlands
				</p>
			</div>
			<div class=" basis-1/2">
				<img
					src="{base}/images/profile-picture.jpg"
					alt="jose ramiro zuniga duron"
					class="mx-auto w-3/4 rounded-md text-center"
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
	<div id="projects" class="my-10 lg:my-24">
		<h2
			class="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			My Projects
		</h2>
		<!-- MY SMART MENU -->
		<div
			class="my-8 basis-1/4 justify-center rounded-lg bg-slate-100 p-4 shadow-md lg:flex lg:space-x-8 lg:p-10"
		>
			<div class="w-60">
				<img
					src="https://scontent.ftgu1-3.fna.fbcdn.net/v/t39.30808-6/418317321_122113237190162964_1533185003363019617_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGfAk2blqkqLJuLA6U-XEj-qfVSWITu4zip9VJYhO7jOGQkOPm8D5x8xAYqmkaQDD3dHtyK7I4RCbouPi7dW55o&_nc_ohc=VIj4b3sodN0AX9BJoUt&_nc_zt=23&_nc_ht=scontent.ftgu1-3.fna&oh=00_AfDlgjPLw82L3HcYbei41kGrAVggRqtGi6FA3wL5LYkQoQ&oe=65B800E8"
					alt=""
					class="rounded-md"
				/>
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
				<p class="mb-12 mt-6 lg:mt-12 lg:text-right">
					<a
						href="https://mysmartmenu.store"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFekoBix6s7nojVOvAbEDM-RNAIs0LM9oAtXVxst7mg&s"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1280px-Go_Logo_Blue.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt="" />
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="data:image/jpeg;base64,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"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://seeklogo.com/images/P/pocketbase-logo-CA73994F09-seeklogo.com.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/1664px-PayPal_Logo_Icon_2014.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx7DSg4nCl19gISVmRKabAjuby1wzdjG85rZzqdnn5g&s"
						alt=""
					/>
				</div>
			</div>
		</div>

		<!-- VITAL -->
		<div
			class="my-8 basis-1/4 justify-center rounded-lg bg-slate-100 p-4 shadow-md lg:flex lg:space-x-8 lg:p-10"
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
				<p class="mb-12 mt-6 lg:mt-12 lg:text-right">
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
				<div class="w-12 lg:w-8">
					<img
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFFekoBix6s7nojVOvAbEDM-RNAIs0LM9oAtXVxst7mg&s"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img src="https://cdn.freebiesupply.com/logos/thumbs/2x/flask-logo.png" alt="" />
				</div>
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/2048px-Sqlite-square-icon.svg.png"
						alt=""
					/>
				</div>
				<div class="w-12 lg:w-8">
					<img src="https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png" alt="" />
				</div>

				<div class="w-12 lg:w-8">
					<img
						src="https://gdm-catalog-fmapi-prod.imgix.net/ProductLogo/22b74bf9-830b-4bad-88ee-871368b6f6a3.png"
						alt=""
					/>
				</div>
			</div>
		</div>

		<!-- Koala McGiver Site -->
		<div
			class="my-8 basis-1/4 justify-center rounded-lg bg-slate-100 p-4 shadow-md lg:flex lg:space-x-8 lg:p-10"
		>
			<div class="w-60">
				<img
					src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/44/c1/e2/44c1e2ea-9502-5e5b-2d46-74704a7aa973/pr_source.png/375x375bb.jpg"
					alt=""
					class="rounded-md bg-black"
				/>
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
				<p class="mb-12 mt-6 lg:mt-12 lg:text-right">
					<a
						href="https://koalamcg.com/"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-12 lg:w-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png"
						alt=""
					/>
				</div>

				<div class="w-12 lg:w-8">
					<img src="https://avatars.githubusercontent.com/u/67109815?s=280&v=4" alt="" />
				</div>
			</div>
		</div>

		<!-- Valu Online Store -->
		<div
			class="my-8 basis-1/4 justify-center rounded-lg bg-slate-100 p-4 shadow-md lg:flex lg:space-x-8 lg:p-10"
		>
			<div class="w-60">
				<img
					src="data:image/png;base64,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"
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
				<p class="mb-12 mt-6 lg:mt-12 lg:text-right">
					<a
						href="https://valuhn.com/"
						class="mt-12 rounded-md bg-primary px-4 py-2 text-white"
						target="_blank"
						rel="noopener noreferrer">Visit page</a
					>
				</p>
			</div>
			<div class=" columns-3 space-y-8 rounded-md">
				<div class="w-12 lg:w-8">
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
		<div class="mt-4 grid gap-8 lg:grid-cols-2">
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
				image="data:image/jpeg;base64,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"
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
			<Technology
				name="PayPal API"
				value={75}
				image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/PayPal_Logo_Icon_2014.svg/1664px-PayPal_Logo_Icon_2014.svg.png"
			/>
			<Technology
				name="Stripe API"
				value={75}
				image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRx7DSg4nCl19gISVmRKabAjuby1wzdjG85rZzqdnn5g&s"
			/>
		</div>
		<h2
			class="mt-24 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Softwares
		</h2>
		<div class="mt-4 grid gap-8 lg:grid-cols-2">
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
	<div id="contact" class="mb-60 mt-20 lg:my-40">
		<h2
			class="mt-24 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
		>
			Hire me
		</h2>
		<p class="mx-auto my-6 w-fit text-center">
			<a href="https://github.com/jramiroz98" target="_blank" rel="noopener noreferrer">
				<img src="{base}/images/github-mark.svg" alt="" />
			</a>
		</p>

		<div
			class="mx-auto my-12 flex w-80 justify-center rounded-full outline outline-2 outline-offset-8"
		>
			<p
				class="items-center text-center text-xl leading-7 underline [&:not(:first-child)]:mt-6"
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
