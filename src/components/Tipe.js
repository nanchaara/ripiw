const Tipe = () => {
    const onClick = () => {
        console.log('Tipe clicked')
    }
    return (
        <div class="flex justify-center flex-row pt-4 pb-1">
            <div>
                <button
                onClick={onClick}
                class="btn btn-tipe"
                >
                    Lagu
                </button>
            </div>
            <div>
                <button class="btn btn-tipe">Film</button>
            </div>
            <div>
                <button class="btn btn-tipe">Tempat</button>
            </div>
        </div>
    )
}

export default Tipe
