<script lang="ts">
	import PhoneScreenshot from '$lib/components/phone_screenshot.svelte';

	type Screenshot = {
		src: string;
		alt: string;
	};
	const screenshots: Screenshot[] = [
		{
			src: '/images/screenshots/InputLeft.webp',
			alt: `A blob that says "Personalized Devotionals - Tell us what's on your mind. Devotionals made just for you.`
		},
		{
			src: '/images/screenshots/InputRight.webp',
			alt: 'An iphone that is typing into the input field of the Faith Forward App'
		},
		{
			src: '/images/screenshots/PersonalizedDevo.webp',
			alt: '"Find Your Way - Inspiring devotionals, prayers, & Bible verses". Below is a screenshot of a personalized devotional.'
		},
		{
			src: '/images/screenshots/DailyDevo.webp',
			alt: '"Always Inspired - Devotionals written daily". Below is a screenshot of a Faith Forward daily devotional.'
		},
		{
			src: '/images/screenshots/Sermons.webp',
			alt: '"Uplifting Sermons - Daily inspiration just a tap away.". Below is a screenshot of the sermon screen of the Faith Forward app.'
		},
		{
			src: '/images/screenshots/Favs.webp',
			alt: '"Save Favorites - Keep what speaks to you all in one place.". Below is a screenshot of a user\'s favorited sermons.'
		},
		{
			src: '/images/screenshots/Bible.webp',
			alt: '"Read the Bible - See verses in context.". Below is a screenshot of the Faith Forward Bible reader'
		},
		{
			src: '/images/screenshots/Study Scripture.webp',
			alt: '"Study Scripture - Find more meaning in every verse.". Below is a screenshot of a verse analysis tailored to a user.'
		},
		{
			src: '/images/screenshots/Deeper.webp',
			alt: '"Bible Study - Easy access to meaningful answers.". Below is a screenshot of the Faith Forward Exegesis generator.'
		}
	];
</script>

<div class="h-100v min-h-[1000px] flex flex-col items-center px-4" id="features">
	<h2 class="mt-16 text-4xl font-sans-bold text-boldGrey text-center leading-snug">
		A full suite of features to help <br /> you connect with your faith
	</h2>
	<div
		class="slideshow w-full flex mx-32 space-x-8 mt-16 overflow-x-scroll overflow-y-clip mb-16 py-4 "
	>
		{#each screenshots as screenshot}
			<PhoneScreenshot src={screenshot.src} alt={screenshot.alt} />
		{/each}
	</div>
</div>
