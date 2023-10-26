<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { storage } from '$lib/firebase/firebase';
	import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
	import { Progress } from '$lib/components/ui/progress';

	let previewURL: string;
	let uploading = false;
	let teamName: string;

	async function upload(e: any) {
		uploading = true;
		const file = e.target.files[0];
		previewURL = URL.createObjectURL(file);

		const storageRef = ref(storage, `proofOfPayment/${teamName}/proof.png`);
		const result = await uploadBytes(storageRef, file);

		const url = await getDownloadURL(result.ref);

		alert('Uploaded!');
		uploading = false;
	}
</script>

<div class="pt-4">
	<h1 class="text-center text-5xl font-bold text-brand md:text-7xl">ESports Mayhem</h1>
	<div class="mx-10 flex items-center justify-center py-10">
		<div class="w-full max-w-[100rem] space-y-6 rounded-xl bg-gray-300 p-6 dark:bg-muted-dark">
			<div class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0">
				<div class="w-full md:w-4/5 md:pr-10">
					<img src="https://firebasestorage.googleapis.com/v0/b/tasc-8df79.appspot.com/o/Images%2FEventBanners%2FEsports23.jpeg?alt=media&token=adde05ad-73ee-4f21-a2b0-bdf51226cde4&_gl=1*ajibe2*_ga*NjA3MDQ1Mzk1LjE2OTY0MjUwNDM.*_ga_CW55HF8NVT*MTY5ODI3MDU3Mi4zNi4w.LjE2OTgyNzA1NzIuNjAuMC4w" alt="Banner" class="w-full rounded-xl" />
				</div>

				<div class="flex w-full flex-col justify-center space-y-6 md:max-w-7xl">
					<p class="text-lg md:text-xl lg:text-2xl">Dear Participants, Introducing "ESPORTS MAYHEM," an exciting esports event where you can flaunt your gaming skills in Valorant, BGMI (Battlegrounds Mobile India), and COD Mobile (Call of Duty Mobile)</p>
					<div class="space-y-2 text-lg md:text-2xl">
						<p>Number of Teammates:</p>
						<ul>
							<li>Valorant: 5</li>
							<li>BGMI: 4</li>
							<li>COD Mobile: 5</li>
						</ul>
					</div>
					<div class="space-y-2 text-lg md:text-2xl">
						<p>Entry fee per team:</p>
						<ul>
							<li>Valorant: 250 INR</li>
							<li>BGMI: 160 INR</li>
							<li>COD Mobile: 150 INR</li>
						</ul>
					</div>
					<p class="text-lg md:text-2xl">To participate, simply fill out the form below and let the games begin!</p>
				</div>
			</div>
		</div>
	</div>

	<div class="mx-10 space-y-6">
		<h3 class="text-center text-5xl text-brand">Register</h3>

		<div class=" mx-10 flex items-center justify-center py-10">
			<div class="w-full max-w-[100rem] space-y-6 rounded-xl bg-gray-300 p-6 dark:bg-muted-dark">
				<form action="https://docs.google.com/forms/d/e/1FAIpQLSdB47YWfENsSlr6c-00g1OOjX9m25_6sXeiID9MmE2K4peOyg/formResponse" method="POST" enctype="multipart/form-data">
					<div class="grid-column-1 grid w-full max-w-[100rem] space-y-6 text-black dark:text-white">
						<section class="space-y-4">
							<label for="name">Name</label>
							<Input type="text" id="name" name="entry.1148244634" class=" bg-transparent" />
						</section>

						<section class="space-y-4">
							<label for="usn">USN</label>
							<Input type="text" id="usn" name="entry.1585445463" class=" bg-transparent" />
						</section>

						<section class="space-y-4">
							<label for="sem">Semester</label>
							<div id="sem" class="w-full">
								<select name="entry.277806095" class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
									<option value="">Choose Semester</option>
									<option value="1">1</option>
									<option value="3">3</option>
									<option value="5">5</option>
									<option value="7">7</option>
								</select>
							</div>
						</section>

						<section class="space-y-4">
							<label for="ceid">College Email ID</label>
							<Input type="text" id="ceid" name="entry.1208215970" class="bg-transparent" />
						</section>

						<section class="space-y-4">
							<label for="peid">Personal Email ID</label>
							<Input type="text" id="peid" name="entry.975491952" class=" bg-transparent" />
						</section>

						<section class="space-y-4">
							<label for="pno">Phone Number</label>
							<Input type="text" name="entry.449953573" class=" bg-transparent" />
						</section>

						<section class="space-y-4">
							<label for="event">Event</label>
							<div id="event" class="w-full">
								<select name="entry.1222655786" class="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
									<option value="">Choose Event</option>
									<option value="CODM">Call of Duty Mobile</option>
									<option value="BGMI">BatlleGrounds Mobile India</option>
									<option value="Valorant">Valorant</option>
								</select>
							</div>
						</section>

						<section class="space-y-4">
							<label for="proof">Upload proof of Payment</label>
							<Input id="proof" type="text" name="entry.1257526011" placeholder="Team Name" class=" bg-transparent" bind:value={teamName} />
						</section>

						<section class="space-y-4">
							<label for="proof">Upload proof of payment</label>
							<Input on:change={upload} name="photoURL" type="file" accept="image/*" id="proof" />
						</section>
						{#if uploading}
							<p>Uploading...</p>
							<Progress value={33} />
						{/if}
					</div>

					<div class="flex w-full justify-center">
						<button type="submit" class="mt-6 rounded-xl bg-brand px-10 py-2 text-xl text-white duration-200 hover:scale-110 hover:shadow-lg hover:shadow-brand">Submit</button>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
