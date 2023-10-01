<script lang="ts">
    import {NAVITEM} from "$lib/data/NavItems";
    import ThemeToggle from "$lib/components/HeaderFooter/ThemeToggle.svelte";
    import {page} from "$app/stores";
    import NavbarMenu from "$lib/components/HeaderFooter/NavbarMenu.svelte";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import CgMenu from 'svelte-icons-pack/cg/CgMenu';
    import {menuToggle} from "$lib/stores/menuToggle";
    const toggleMenu = () => {
        menuToggle.set(!$menuToggle); // Toggle the menu state
    };

    import { fade } from 'svelte/transition';

</script>

<section class="flex justify-between bg-primary-light dark:bg-primary-dark py-4 px-10 border-zinc-300 dark:border-zinc-800 items-center shadow-slate-100 dark:shadow-white">
    <a href="/"><img src="/TASCLogo.png" alt="" class="w-20 h-7 hover:scale-110 duration-200"></a>
    <ul class="md:flex space-x-10 hidden">
        {#each NAVITEM as item}
            <a href={`${item.href}`}>
                <li class={`text-xl font-bold hover:dark:bg-primary-light hover:dark:text-black hover:bg-primary-dark hover:text-white px-3 py-2 rounded-xl hover:scale-110 duration-200 ${$page.url.pathname.split('/')[1] === item.title.toLowerCase() || ($page.url.pathname === '/' && item.title === 'Home') ? 'underline underline-offset-4' : ''}`}>
                    <span>{item.title}</span>
                </li>
            </a>
        {/each}
    </ul>
    <div class="items-center flex space-x-5">
        <!--        <button class="bg-brand text-white px-4 py-2 rounded-xl hover:scale-110 duration-200 md:block hidden">-->
        <!--            Login-->
        <!--        </button>-->
        <div ><ThemeToggle /></div>
        <button class="md:hidden" on:click={toggleMenu}>
            <Icon src={CgMenu} size="30"/>
        </button>
    </div>



    <div class={`md:hidden ${menuToggle? '' : 'hidden'} fixed z-50 top-0 right-0`} transition:fade={{ delay: 250, duration: 300 }}>
        <NavbarMenu {$menuToggle}/>
    </div>
</section>
