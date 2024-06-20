<div id="achievements" class="absolute w-full h-full">
  <div class="h-full w-full flex flex-col md:grid grid-cols-3 lg:px-20 md:px-16 gap-10 justify-items-center content-center">
    <div class="relative text-black h-[181px] w-[181px] self-center md:h-full md:w-full rounded-full transition duration-300 ease-in-out transform hover:scale-105">
      <a href="/achievements/publications/2024">
        <div class="achievements-container"><img src="/publications.png" alt="Publications" class="rounded-full"></div>
        <p class="absolute inset-0 flex items-center justify-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold dark:text-white text-black opacity-0 transition-opacity duration-300 hover:opacity-100 hover:dark:custom-drop-shadow-white hover:custom-drop-shadow-black"> Publications </p>
      </a>
    </div>
    <div class="relative text-black h-[181px] w-[181px] self-center md:h-full md:w-full rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        <a href="/achievements/patents/2024">
          <div class="achievements-container"><img src="/patents.png" alt="Patents" class="rounded-full"></div>
          <p class="absolute inset-0 flex items-center justify-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold dark:text-white text-black opacity-0 transition-opacity duration-300 hover:opacity-100 hover:dark:custom-drop-shadow-white hover:custom-drop-shadow-black"> Patents </p>
        </a>
      </div>
      <div class="relative text-black h-[181px] w-[181px] self-center md:h-full md:w-full rounded-full transition duration-300 ease-in-out transform hover:scale-105">
        <a href="/achievements/placements/2024">
          <div class="achievements-container"><img src="/placements.png" alt="Placements" class="rounded-full"></div>
          <p class="absolute inset-0 flex items-center justify-center lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold dark:text-white text-black opacity-0 transition-opacity duration-300 hover:opacity-100 hover:dark:custom-drop-shadow-white hover:custom-drop-shadow-black"> Placements </p>
        </a>
      </div>
  </div>
</div>
    
<style>
  #achievements {
    height: calc(100vh - 80px);
  }

  .achievements-container {
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }

  .relative:hover .achievements-container {
    opacity: 0.5;
  }

  /* Set initial z-index for all elements */
  .relative {
    z-index: 1;
  }
</style>
    