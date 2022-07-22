<template>
  <div>
    <!-- nav bar  -->


    <IndexNavBar />

    <div>
      <div class="bg-[#121212] flex">
        <div class="p-2">

          <!-- hot hero card -->
          <IndexHeroCard />

        </div>
      </div>

      <!-- weird slant thing across screen -->
      <IndexWave />


      <div>

        <div class="p-2 md:mt-0 mt-4 container max-w-7xl mx-auto relative w-full">
          <div class="bg-black md:ml-auto ml-0 bg-opacity-20 rounded-lg w-full md:max-w-md max-w-xl p-4 shadow-lg ">

            <!-- user statistics card -->
            <IndexStatsCard />

          </div>
        </div>
      </div>


    </div>
    <div class="p-2 relative">
      <!-- Promo card things -->
      <IndexPromoCard />
    </div>

    <!-- footer -->
    <IndexFooter />

  </div>
</template>
