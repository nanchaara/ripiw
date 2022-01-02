const Kotak = ({ isOpen, setIsOpen, laguKotak, setIndex }) => {
    const handleClick = (index) => {
        setIsOpen(true)
        setIndex(index)
    }
    return (
        <div class="flex justify-center flex-col space-y-5">
            <div class="flex justify-center flex-row space-x-10">
                {laguKotak.map((item, index) => (
                    <div
                        class="kotak bg-sc bg-cover relative cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    >
                        <div class="font-semibold text-2xl z-10">
                            {item.Judul}
                        </div>
                        <div class="font-light text-base z-10">
                            {item.Penyanyi}
                        </div>
                        <div class=" h-48 w-full rounded-3xl bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0"></div>
                    </div>
                ))}

            </div>
            <div class="flex justify-center flex-row space-x-10">
                <div class="kotak"></div>
                <div class="kotak"></div>
                <div class="kotak"></div>
                <div class="kotak"></div>
                <div class="kotak"></div>
            </div>
        </div>
    );
};

export default Kotak;
