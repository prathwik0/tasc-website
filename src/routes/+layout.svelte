<script>
    import Navbar from "$lib/components/HeaderFooter/Navbar.svelte";
    import Footer from "$lib/components/HeaderFooter/Footer.svelte";
    import '../app.css';
</script>

<div class="app bg-secondary-light dark:bg-secondary-dark text-black dark:text-white duration-200">
    <div>
        <Navbar />
    </div>
    <main>
        <slot />
    </main>
    <Footer />
</div>

