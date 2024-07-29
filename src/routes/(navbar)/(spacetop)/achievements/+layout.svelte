<script lang="ts">
    import { page } from '$app/stores';

    let currentRoute: string;

    $: currentRoute = $page.url.pathname;
</script>

<div id="achievements" class="w-full h-full grid">
    <div class="flex sm:flex-row flex-col sm:w-[80%] w-[50%] justify-around sm:space-y-0 space-y-3 justify-self-center justify-items-center sm:my-5 bg-card">
        <a href="/achievements/publications/2024" class="sm:w-[32%]">
            <div class={`lg:text-3xl md:text-2xl sm:text-xl text-lg lg:py-6 md:py-4 sm:py-2 py-0 h-full text-center hover:bg-slate-900 hover:text-white dark:hover:bg-[#dfdee3] dark:hover:text-black border rounded-lg ${currentRoute.includes('/achievements/publications') ? 'dark:bg-[#dfdee3] bg-slate-900 dark:text-black text-white' : 'bg-[#dfdee3] dark:bg-slate-900'}`}>Publications</div>
        </a>
        <a href="/achievements/patents/2024" class="sm:w-[32%]">
            <div class={`lg:text-3xl md:text-2xl sm:text-xl text-lg lg:py-6 md:py-4 sm:py-2 py-0 h-full text-center hover:bg-slate-900 hover:text-white dark:hover:bg-[#dfdee3] dark:hover:text-black border rounded-lg ${currentRoute.includes('/achievements/patents') ? 'dark:bg-[#dfdee3] bg-slate-900 dark:text-black text-white' : 'bg-[#dfdee3] dark:bg-slate-900'}`}>Patents</div>
        </a>
        <a href="/achievements/placements/2024" class="sm:w-[32%]">
            <div class={`lg:text-3xl md:text-2xl sm:text-xl text-lg lg:py-6 md:py-4 sm:py-2 py-0 h-full text-center hover:bg-slate-900 hover:text-white dark:hover:bg-[#dfdee3] dark:hover:text-black border rounded-lg ${currentRoute.includes('/achievements/placements') ? 'dark:bg-[#dfdee3] bg-slate-900 dark:text-black text-white' : 'bg-[#dfdee3] dark:bg-slate-900'}`}>Placements</div>
        </a>
    </div>
    <slot />
</div>