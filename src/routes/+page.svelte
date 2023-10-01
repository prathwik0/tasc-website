<script>
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AboutSection from "$lib/components/Others/AboutSection.svelte";
    import AiOutlineArrowDown from 'svelte-icons-pack/ai/AiOutlineArrowDown';
</script>

<div>
    <div class="flex justify-center h-[80vh] items-center">
        <div class={'space-y-6 px-4'}>
            <h1
                    class="font-extrabold text-transparent lg:text-8xl md:text-6xl text-[40px] bg-clip-text bg-gradient-to-r from-[#835FDC] to-[#CC4FAD] text-center"
            >
                Turing <br/> Artificial Intelligence <br/> Student Committee
            </h1>

            <p class="lg:text-2xl md:text-lg text-smA font-semibold text-center">
                Department of Artificial Intelligence and Machine Learning
            </p>
        </div>
    </div>

    <a href="/#about">
        <div class={'animate-bounce flex justify-center pb-16'}>
            <Icon src={AiOutlineArrowDown} size="60" color="#5E20AB"/>
        </div>
    </a>

    <div id="about" class="py-10">
        <AboutSection />
    </div>
</div>