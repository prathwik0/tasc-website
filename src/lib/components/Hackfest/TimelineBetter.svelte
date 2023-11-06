<script>
	// @ts-ignore
	import { concurrent } from 'svelte-typewriter';
</script>

<h1 use:concurrent={{ interval: 100 }} class="my-10 py-5 text-center font-jbExtrabold text-4xl md:py-10 md:text-5xl">Timeline</h1>

<section class="timeline">
	<div class="timeline__block">
		<div class="timeline__midpoint"></div>
		<div class="timeline__content timeline__content--left">
			<h3 class="timeline__year font-jbBold">10 November 2023</h3>
			<div class="gradient_border mr-10 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Reveal of Problem Statements</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm md:text-[16px]">The list of Problem Statements for the Smart Nitte Hackathon will be revealed on our website on 10 November 2023. We will be having 3 categories of problem statements for our Hackathon. The variety of problem statement types ensures that participants have diverse challenges to choose from and encourages a wide range of creative solutions. This diversity also attracts participants with different expertise, allowing for rich and innovative discussions during the event.</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="timeline__block">
		<div class="timeline__midpoint"></div>
		<div class="timeline__content timeline__content--right">
			<h3 class="timeline__year font-jbBold">10 - 18 November 2023</h3>
			<div class="gradient_border mr-10 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Idea Submission</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm md:text-[16px]">The submission of project ideas and presentations will open on the website from 10 November 2023 to 18 November 2023. This stage of the hackathon sets the foundation for the entire event and marks the beginning of the innovative and collaborative atmosphere of the hackathon, ultimately leading to the selection of the most promising solutions during the final event.</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="timeline__block">
		<div class="timeline__midpoint"></div>
		<div class="timeline__content timeline__content--left">
			<h3 class="timeline__year font-jbBold">22 November 2023</h3>
			<div class="gradient_border mr-10 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Announcement of Shortlisted Teams</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm md:text-[16px]">The list of shortlisted teams will be announced on 22 November 2023. This will mark the transition from the idea submission phase to the practical implementation and development phase. The selected teams are encouraged to start preparing for the upcoming challenges and opportunities they face during the Hackathon.</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="timeline__block">
		<div class="timeline__midpoint"></div>
		<div class="timeline__content timeline__content--right">
			<h3 class="timeline__year font-jbBold">22 - 24 November 2023</h3>
			<div class="gradient_border mr-10 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Registration for the Second Round</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm md:text-[16px]">All the shortlisted teams are required to confirm their availability for the hackathon and complete the final registration process as they advance to the next stage of the Smart Nitte Hackathon 2023. The final registration allows the organisers to ascertain the exact number of participating teams, facilitating the arrangement of resources, venues, and materials needed for the hackathon. This ensures a smooth and well-organised event for all involved.</li>
				</ul>
			</div>
		</div>
	</div>

	<div class="timeline__block">
		<div class="timeline__midpoint"></div>
		<div class="timeline__content timeline__content--left">
			<h3 class="timeline__year font-jbBold">25 & 26 November 2023</h3>
			<div class="gradient_border mr-10 w-auto cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">24 Hour Hackathon</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm md:text-[16px]">The final stage of the Smart Nitte Hackathon is an intense 24-hour event where teams work tirelessly to develop and present their solutions to the given problem statements. This will take place on November 25 and 26. This 24-hour hackathon is a culmination of participants' hard work and innovation, leading to the judging and selection of winners, as well as the prize distribution.</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	$primary-color: cadetblue;
	$matching-palette: honeydew;
	$tablet-width: 768px;
	$desktop-width: 1024px;
	@mixin tablet {
		@media (min-width: #{$tablet-width}) and (max-width: #{$desktop-width - 1px}) {
			@content;
		}
	}

	@mixin desktop {
		@media (min-width: #{$desktop-width}) {
			@content;
		}
	}

	.timeline {
		position: relative;
		margin-top: 55px;
		margin-left: 15px;
		&:before {
			/* vertical line*/
			content: '';
			position: absolute;
			top: 10px;
			/* to align with midline*/
			left: 7px;
			width: 2px;
			height: 97%;
			background-color: #fffba4;
		}
	}
	.timeline__block {
		position: relative;
		margin-top: 42px;
		margin-bottom: 42px;
		padding-left: 15px;
		&:last-child {
			margin-bottom: 3em;
		}
		&:after {
			content: '';
			display: table;
			clear: both;
		}
	}

	.timeline__midpoint {
		position: absolute;
		top: 6px;
		left: 0;
		width: 16px;
		height: 16px;
		border-radius: 50%;
		background: linear-gradient(to bottom, #fffba4, #f6ef70);
		&:before {
			content: '';
			position: absolute;
			top: 50%;
			left: 16px;
			width: 15px;
			border-top: 1px solid #c5e1ec;
		}
	}

	.timeline__content {
		position: relative;
		margin-left: 20px;
		p + p {
			padding-top: 0;
		}
		&:after {
			content: '';
			display: table;
			clear: both;
		}
	}

	.timeline__midpoint--highlight > .timeline__year {
		display: none;
	}

	.timeline__content .timeline__year {
		padding-top: 6px;
		color: $primary-color;
		text-align: left;
	}

	.timeline__midpoint--highlight .timeline__year {
		color: #fff;
		line-height: 4;
	}

	.timeline__year,
	.timeline__midpoint--highlight + .timeline__content {
		font-weight: 600;
	}
	/* timeline layout for desktop */

	@include desktop {
		section {
			padding: 0 250px;
		}
		.timeline {
			margin-left: 0;
			&:before {
				/* vertical line */
				left: 50%;
				margin-left: -1px;
			}
		}
		.timeline__midpoint {
			left: 50%;
			margin-left: -8px;
			&:before {
				width: 40px;
			}
			&:after {
				content: '';
				position: absolute;
				top: 50%;
				right: 16px;
				width: 40px;
				border-top: 1px solid #c5e1ec;
			}
		}
		.timeline__midpoint--highlight {
			top: 0;
			width: 76px;
			height: 76px;
			margin-left: -29px;
			margin-left: -38px;
			text-align: center;
			&.no-top-margin {
				margin-top: 0;
			}
			.timeline__year {
				display: block;
			}
		}
		.timeline__midpoint--highlight:before,
		.timeline__midpoint.timeline__midpoint--highlight:after {
			content: none;
		}
		.timeline__midpoint--highlight,
		.timeline__midpoint--highlight + .timeline__content {
			margin-top: 2em;
			margin-bottom: 2em;
		}
		.timeline__content {
			width: 50%;
			.timeline__year--mobile {
				display: none;
			}
		}
		.timeline__content--left {
			margin-left: -6%;
			.timeline__year {
				left: 128%;
			}
		}
		.timeline__year {
			position: absolute;
			width: 100%;
			margin-top: 0;
		}
		.timeline__text--left {
			padding-right: 25px;
			text-align: right;
		}
		.timeline__content--right {
			float: right;
			width: 53%;
			left: 11%;
			.timeline__year {
				right: 134%;
				text-align: right;
			}
			.timeline__text--right {
				margin-top: 0;
			}
		}
		.timeline__img {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
		.timeline__content--left .timeline__img {
			left: 127%;
		}
		.timeline__content--right .timeline__img {
			right: 133.5%;
		}
	}
</style>
