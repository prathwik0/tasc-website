<!-- <div class="container">
	<div class="timeline-block timeline-block-right">
		<div class="marker"></div>

		<div class="timeline-content">
			<div class="gradient_border w-96 cursor-default bg-[#d1f2f9] bg-opacity-5 p-10 backdrop-blur-sm transition duration-300 md:hover:scale-[102%]">
				<h3 class="font-jbExtrabold text-xl text-[#fffba4] md:text-[24px]">Hackfest</h3>
				<ul class="mt-5 space-y-2">
					<li class="pb-1 font-jbRegular text-sm text-secondary md:text-[16px]">Hello World</li>
				</ul>
			</div>
		</div>
        
	</div>
</div>

<style lang="scss">
	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		outline: none;
	}

	.container {
		width: 80%;
		padding: 50px 0;
		margin: 50px auto;
		position: relative;
		overflow: hidden;
	}

	.container:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		margin-left: -1px;
		width: 2px;
		height: 100%;
		background: #ccd1d9;
		z-index: 1;
	}

	.timeline-block {
		width: -webkit-calc(50% + 8px);
		width: -moz-calc(50% + 8px);
		width: calc(50% + 8px);
		display: -webkit-box;
		display: -webkit-flex;
		display: -moz-box;
		display: flex;
		-webkit-box-pack: justify;
		-webkit-justify-content: space-between;
		-moz-box-pack: justify;
		justify-content: space-between;
		clear: both;
	}

	.timeline-block-right {
		float: right;
	}

	.timeline-block-left {
		float: left;
		direction: rtl;
	}

	.marker {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		border: 2px solid #f5f7fa;
		background: #4fc1e9;
		margin-top: 10px;
		z-index: 9999;
	}

	.timeline-content {
		width: 95%;
		padding: 0 15px;
		color: #666;
	}

	.timeline-content h3 {
		margin-top: 5px;
		margin-bottom: 5px;
		font-size: 25px;
		font-weight: 500;
	}

	@media screen and (max-width: 768px) {
		.container:before {
			left: 8px;
			width: 2px;
		}
		.timeline-block {
			width: 100%;
			margin-bottom: 30px;
		}
		.timeline-block-right {
			float: none;
		}

		.timeline-block-left {
			float: none;
			direction: ltr;
		}
	}
</style> -->
<section class="design-section">
	<div class="timeline">
		<div class="timeline-empty">23-04-2003</div>

		<div class="timeline-middle">
			<div class="timeline-circle"></div>
		</div>
		<div class="timeline-component timeline-content">
			<h3>HTML</h3>
			<p>Some Text</p>
		</div>
		<div class="timeline-component timeline-content">
			<h3>CSS</h3>
			<p>Some Text.</p>
		</div>
		<div class="timeline-middle">
			<div class="timeline-circle"></div>
		</div>
		<div class="timeline-empty"></div>

		<div class="timeline-empty"></div>

		<div class="timeline-middle">
			<div class="timeline-circle"></div>
		</div>
		<div class=" timeline-component timeline-content">
			<h3>Javascript</h3>
			<p>Some Text.</p>
		</div>
	</div>
</section>

<style>
	.design-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		min-height: 100vh;
		padding: 100px 0;
	}

	.design {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.timeline {
		width: 80%;
		height: auto;
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
	}

	.timeline-content {
		padding: 20px;
		background: #1f1f1f;
		-webkit-box-shadow:
			5px 5px 10px #1a1a1a,
			-5px -5px 10px #242424;
		box-shadow:
			5px 5px 10px #1a1a1a,
			-5px -5px 10px #242424;
		border-radius: 5px;
		color: white;
		padding: 1.75rem;
		transition: 0.4s ease;
		overflow-wrap: break-word !important;
		margin: 1rem;
		margin-bottom: 20px;
		border-radius: 6px;
	}

	.timeline-component {
		margin: 0px 20px 20px 20px;
	}

	@media screen and (min-width: 768px) {
		.timeline {
			display: grid;
			grid-template-columns: 1fr 3px 1fr;
		}
		.timeline-middle {
			position: relative;
			background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
			width: 3px;
			height: 100%;
		}
		.main-middle {
			opacity: 0;
		}
		.timeline-circle {
			position: absolute;
			top: 0;
			left: 50%;
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background-image: linear-gradient(45deg, #f27121, #e94057, #8a2387);
			-webkit-transform: translateX(-50%);
			transform: translateX(-50%);
		}
	}
</style>
