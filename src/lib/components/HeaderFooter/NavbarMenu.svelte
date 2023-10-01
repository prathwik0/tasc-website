<script lang="ts">
    import {NAVITEM} from "$lib/data/NavItems.js";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineClose from 'svelte-icons-pack/ai/AiOutlineClose';
    import {menuToggle} from "$lib/stores/menuToggle";
    const toggleMenu = () => {
        menuToggle.set(!$menuToggle);
    };

</script>

<div class={`h-[100vh] absolute right-0 top-0 bg-primary-dark dark:bg-primary-light rounded-l-xl ${$menuToggle ? '' : 'hidden'} px-10`}>
    <button on:click={toggleMenu} class="top-0 right-0 flex justify-end w-full py-5">
        <Icon src={AiOutlineClose} size="30"/>
    </button>
    <ul class="space-y-16 pt-32">
        {#each NAVITEM as item}
            <a href={`${item.href}`} >
                <li class="text-white dark:text-black text-3xl mb-5 text-center font-bold "><button on:click={toggleMenu}>{item.title}</button></li>
            </a>
        {/each}
    </ul>
    <!--    <div class="flex justify-center w-full pt-4">-->
    <!--        <button class="bg-brand text-white px-4 py-2 rounded-xl hover:scale-110 duration-200">-->
    <!--            Login-->
    <!--        </button>-->
    <!--    </div>-->
</div>