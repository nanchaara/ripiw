import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ModalEdit = ({ isOpen, setIsOpen, user, review, rating, index, setReview, setUser, setRating, setRipiw }) => {
    const handleChangeReview = (e) => {
        setReview(e.target.value)
    }
    const handleChangeUser = (e) => {
        setUser(e.target.value)
    }
    const refetch = () => {
        fetch(`/lagu/${index+1}`)
            .then((res) => res.json())
            .then((data) => setRipiw(data.data.Ripiw));
    }
    const handleDelete = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', user)
        const reqOpts = {
            method: 'DELETE',
            body: formData
        }

        fetch(`/lagu/${index+1}`, reqOpts).then((res) => refetch())
        setIsOpen(false)
    }
    const handleEdit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('username', user)
        formData.append('ripiw', review)
        formData.append('rating', rating)
        const reqOpts = {
            method: 'PUT',
            body: formData
        }

        fetch(`/lagu/${index+1}`, reqOpts).then((res) => refetch())
        setIsOpen(false)
    }
    return (
        <Modal
            isOpen={isOpen}
            style={{
                overlay: { backgroundColor: "rgba(0,0,0,0.25)", zIndex: 100 },
                content: { zIndex: 100 },
            }}
            className="flex h-7/12 w-1/3 rounded-2xl bg-white mx-auto my-44 outline-none"
        >
            <div class="p-6">
                <div class="flex flex-row items-center justify-between">
                    <div class="w-7"></div>
                    <div class="flex flex-row mb-5 place-content-center">
                        <button class={`bintang ${rating === 5 && 'bg-blue-500'}`} onClick={() => setRating(5)}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />5
                        </button>
                        <button class={`bintang ${rating === 4 && 'bg-blue-500'}`} onClick={() => setRating(4)}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />4
                        </button>
                        <button class={`bintang ${rating === 3 && 'bg-blue-500'}`} onClick={() => setRating(3)} >
                            <AiFillStar size={20} class="flex flex-col mx-2" />3
                        </button>
                        <button class={`bintang ${rating === 2 && 'bg-blue-500'}`} onClick={() => setRating(2)}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />2
                        </button>
                        <button class={`bintang ${rating === 1 && 'bg-blue-500'}`} onClick={() => setRating(1)}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />1
                        </button>
                    </div>
                    <div class="flex flex-row justify-center mr-2 mb-5 cursor-pointer">
                        <FiX
                            color={"#9a9b9c"}
                            size={25}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
                <form action="">
                    <div class="flex flex-row">
                        <textarea
                            cols="46"
                            rows="1"
                            placeholder="Username"
                            value={user}
                            onChange={(e) => handleChangeUser(e)}
                            class="text-base mb-4 p-4 rounded-3xl bg-gray-100 focus:outline-none"
                        ></textarea>
                    </div>
                    <div class="flex flex-row">
                        <textarea
                            cols="46"
                            rows="6"
                            value={review}
                            onChange={(e) => handleChangeReview(e)}
                            placeholder="Ripiw..."
                            class="text-base p-4 rounded-3xl bg-gray-100 focus:outline-none"
                        ></textarea>
                    </div>
                    <div class="flex flex-row">
                        <button onClick={(e) => handleDelete(e)} class="h-10 w-full mt-5 mr-1 justify-center rounded-full p-2 font-semibold text-white bg-red-600 hover:bg-red-700">
                            Delete
                        </button>
                        <button onClick={e => handleEdit(e)} class="h-10 w-full mt-5 ml-1 justify-center rounded-full p-2 font-semibold text-white bg-blue-500 hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
export default ModalEdit;
