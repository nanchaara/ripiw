const SearchBox = () => {
    return (
        <div class="flex flex-row space-x-4 pb-4 justify-center">
            
            <form class="h-10 w-9/12 rounded-xl bg-blue-300">
                <input type="text" 
                placeholder="Cari berdasarkan judul, album, atau penyanyi..." 
                class="h-full w-full rounded-xl bg-blue-500 px-4 py-2 text-white placeholder-white placeholder-opacity-40 focus:outline-none"/>
            </form>

            <button 
            class="h-10 w-64 justify-center rounded-xl bg-blue-500 px-2 py-2 font-sans text-white hover:bg-blue-600"
            >
            Filter
            </button>
        </div>
    )
}

export default SearchBox
