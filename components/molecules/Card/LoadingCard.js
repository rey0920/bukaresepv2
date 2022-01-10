export default function LoadingCard() {
  return (
    <>
      <div className="rounded overflow-hidden shadow-lg animate-pulse">
        <div className="bg-gray-300 text-gray-300 w-full h-32">
          <br />
        </div>
        <div className="px-6 py-4">
          <div class="flex-1 space-y-6 py-1 mt-3">
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-gray-300 rounded col-span-2"></div>
                <div class="h-3 bg-gray-300 rounded col-span-1"></div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="h-3 bg-gray-300 rounded"></div>
              <div class="grid grid-cols-3 gap-4">
                <div class="h-3 bg-gray-300 rounded col-span-1"></div>
                <div class="h-3 bg-gray-300 rounded col-span-2"></div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="grid mt-10 grid-cols-3 gap-4">
                <div class="h-3 bg-gray-300 rounded col-span-2"></div>
                <div class="h-3 bg-gray-300 rounded col-span-1"></div>
              </div>
              <div class="h-3  bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl"></div>
        </div>
        <div className="px-6 pb-2">
          {/* <Badge jam={times} porsi={portion} kesulitan={dificulty} /> */}
        </div>
      </div>
    </>
  );
}
