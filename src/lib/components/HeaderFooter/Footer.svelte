<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import BsInstagram from 'svelte-icons-pack/bs/BsInstagram';
    import BsGithub from 'svelte-icons-pack/bs/BsGithub';
    import BsLinkedin from 'svelte-icons-pack/bs/BsLinkedin';
</script>

<div class={'hidden md:flex w-full bg-[#ECDBFF] dark:bg-[#000015] py-10 px-16 items-center justify-between'}>
    <div class={'flex space-x-5'}>
        <img src="/TASCLogo.png" alt="" class="w-32 h-10"/>
        <div class={'border-l-2 dark:border-white border-black items-center'}>
            <h1 class={'dark:text-white text-black text-2xl pl-5'}>© 2023 TASC</h1>
        </div>
    </div>

    <a href={'https://www.instagram.com/nandanpi__/'} target={'_blank'}><span class={'text-black dark:text-white text-xl'}>Made with ❤️</span></a>

    <ul class={'flex space-x-8 text-black dark:text-white'}>
        <a href={'https://www.instagram.com/tasc_nmamit/'} target={'_blank'}>
            <Icon src={BsInstagram} size="30" className="hover:scale-110 duration-200"/>
        </a>
        <a href={'https://github.com/tasc-nmamit'} target={'_blank'}>
            <Icon src={BsGithub} size="30" className="hover:scale-110 duration-200"/>
        </a>
        <a href={'https://www.linkedin.com/company/tasc-aiml/'} target={'_blank'}>
            <Icon src={BsLinkedin} size="30" className="hover:scale-110 duration-200"/>
        </a>
    </ul>
</div>

<div class={'md:hidden flex w-full bg-[#ECDBFF] dark:bg-[#000015] py-10 px-6 justify-between items-center'}>
    <div class={'flex space-x-4'}>
        <img src="/TASCLogo.png" alt="" class="w-16 h-6"/>
        <div class={'border-l-2 dark:border-white border-black items-center pt-1'}>
            <h1 class={'dark:text-white text-black text-sm pl-3'}>© 2023 TASC</h1>
        </div>
    </div>

    <ul class={'flex space-x-8 text-black dark:text-white '}>
        <a href={'https://www.instagram.com/tasc_nmamit/'} target={'_blank'}>
            <Icon src={BsInstagram} size="20"/>
        </a>
        <a href={'https://github.com/tasc-nmamit'} target={'_blank'}>
            <Icon src={BsGithub} size="20"/>
        </a>
        <a href={'https://www.linkedin.com/company/tasc-aiml/'} target={'_blank'}>
            <Icon src={BsLinkedin} size="20"/>
        </a>
    </ul>
</div>