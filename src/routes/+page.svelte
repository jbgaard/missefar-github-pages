<script lang="ts">
	import { resolve } from '$app/paths';
</script>

<div class="flex items-center justify-center">
	<main class="m-2 max-w-2xl px-4 md:m-4">
		<h1 class="my-4 text-center text-4xl font-black md:text-6xl">KALLE ER BLEVET SMED!</h1>

		<img
			src="{resolve('/')}images/DSC01636.jpg"
			alt="missefar i ung alder"
			class="mx-auto w-full max-w-lg rounded-lg shadow-md"
		/>

		<br />

		<div
			class="mb-8 flex flex-col gap-2 rounded-lg bg-linear-to-br from-gray-200 p-4 shadow-md outline-1 outline-gray-300"
		>
			<p class="text-lg/6">
				Så blev det sku Kalles tur til at blive færdiguddannet. Det har ikke været nemt, mange sene
				aftner på værkstedet (åkroen) og lektier (slots øl) til laaaangt ud på natten.
			</p>
			<p class="text-lg/6">
				Men alt i alt er han sgu en god gut. <b>Tillykke med svendebrevet!</b>
			</p>
		</div>

		<h4 class="pb-1 text-xl/6">Lidt ting du bør vide, efter Kalle er blevet færdiguddannet</h4>

		<ul class="my-2 ml-6 max-w-none list-disc gap-2 text-sm md:ml-10 md:max-w-md md:text-base">
			<li class="py-1">Tilsyneladende udlært smed d. 16/01/2026</li>
			<li class="py-1">
				Han elsker når man kalder ham for <strong><em>missefar</em></strong>, så bliver han meget
				kælen og giver måske et gratis kram og en øl.
			</li>
			<li class="py-1">Hans kaldenavn i byen er <strong><em>fede flemme fedtbjerg</em></strong></li>
			<li class="py-1">
				Sidst kendte adresse er <a
					href="https://maps.app.goo.gl/fkFBX9Sx5oKWgzF7A"
					class="min-h-touch-target m-0! inline-block min-h-0! min-w-0! p-0!"
					target="_blank"
					rel="noopener noreferrer">Ved Åen 1, 8370 Hadsten</a
				> eller nærmeste kineser buffet
			</li>
			<li class="py-1">Hans yndlingsdrink er æselspark, børge, fortov eller øl</li>
			<li class="py-1">
				Han er en dårlig taber og er virkelig dårlig til billard, meyer, snyd, snyd (med kort),
				pool, 21, bowling...
			</li>
			<li class="py-1">Drømmerejse er at tage til Thailand med Rolf og hans boytoy</li>
		</ul>

		<h1 class="mt-8 text-2xl">Kalles ønskeliste</h1>
		<ul class="my-2 ml-6 max-w-none list-disc text-sm md:ml-10 md:max-w-md md:text-base">
			<li class="py-1">Ølkort</li>
			<li class="py-1">Royal Buffet gavekort</li>
			<li class="py-1">Hunkeöller lingerie størrelse 5xl</li>
			<li class="py-1">Strikkepinde</li>
			<li class="py-1">Jorts</li>
			<li class="py-1">Nanna xl gavekort</li>
		</ul>

		<br />

		<h3 class="text-xl md:text-2xl">Galleri:</h3>

		<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-4">
			<video
				autoplay
				loop
				muted
				playsinline
				class="h-[450px] w-full rounded object-cover md:h-full"
				aria-label="Video af missefar der danser"
			>
				<source src="{resolve('/')}images/dansemusen.mp4" type="video/mp4" />
				Your browser does not support the video tag.
			</video>
			<img
				src="{resolve('/')}images/569945653_877970694820508_2337974435288838911_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/592052706_889704966963593_483529784538562711_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/611293481_892735893309409_9042629071886184921_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/611624809_2073225910109181_2452048730345598000_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/612989588_1381715063652524_3401840366704835540_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/613049142_1535794591059309_8905850359040993510_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/614798545_1448836893624982_1944972222820527643_n.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/Snapchat-469831533.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/DSC01643.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/IMG_20171225_172756.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
			<img
				src="{resolve('/')}images/DSC01645.jpg"
				alt="Vores meget elskede kat"
				class="h-64 w-full rounded object-contain md:h-full"
			/>
		</div>
	</main>
</div>
