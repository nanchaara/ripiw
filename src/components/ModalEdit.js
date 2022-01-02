import Modal from "react-modal";
import { FiX } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const ModalEdit = ({ isOpen, setIsOpen }) => {
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
                        <button class="bintang" value={5}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />5
                        </button>
                        <button class="bintang" value={4}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />4
                        </button>
                        <button class="bintang" value={3}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />3
                        </button>
                        <button class="bintang" value={2}>
                            <AiFillStar size={20} class="flex flex-col mx-2" />2
                        </button>
                        <button class="bintang" value={1}>
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
                            class="text-base mb-4 p-4 rounded-3xl bg-gray-100 focus:outline-none"
                        ></textarea>
                    </div>
                    <div class="flex flex-row">
                        <textarea
                            cols="46"
                            rows="6"
                            placeholder="Ripiw..."
                            class="text-base p-4 rounded-3xl bg-gray-100 focus:outline-none"
                        ></textarea>
                    </div>
                    <div class="flex flex-row">
                        <button class="h-10 w-full mt-5 mr-1 justify-center rounded-full p-2 font-semibold text-white bg-red-600 hover:bg-red-700">
                            Delete
                        </button>
                        <button class="h-10 w-full mt-5 ml-1 justify-center rounded-full p-2 font-semibold text-white bg-blue-500 hover:bg-blue-600">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};
export default ModalEdit;
