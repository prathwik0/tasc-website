<script>
    import {page} from '$app/stores';
    const pageNumber = $page.params.pageNumber;
</script>

<div class={'rounded-xl flex justify-center w-full items-center md:h-[80vh] h-[100vh]'}>
    <iframe title="handbook" src={`https://heyzine.com/flip-book/d49adcee6e.html#page/${pageNumber}`} width="100%" height="600" class={'px-10'}/>
</div>