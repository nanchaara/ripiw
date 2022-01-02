import Modal from "react-modal";
import ModalAdd from "./ModalAdd";
import ModalEdit from "./ModalEdit";
import { useState, useEffect } from "react";
import { FiX } from "react-icons/fi";
import { AiFillStar } from "react-icons/ai";

const MyModal = ({ isOpen, setIsOpen, laguKotak, index }) => {
    const [modalAddIsOpen, setModalAddIsOpen] = useState(false);
    const [modalEditIsOpen, setModalEditIsOpen] = useState(false);
    const [ripiw, setRipiw] = useState([{}]);

    useEffect(() => {
        fetch(`/lagu/${index+1}`)
            .then((res) => res.json())
            .then((data) => setRipiw(data.data.Ripiw));
    }, [index]);

    console.log(ripiw);
    console.log('lagu', laguKotak)

    return (
        <Modal
            isOpen={isOpen}
            style={{
                overlay: { backgroundColor: "rgba(0,0,0,0.75)", zIndex: 100 },
                content: { zIndex: 100 },
            }}
            className="flex h-5/6 w-4/6 rounded-2xl bg-white mx-64 my-14 outline-none"
        >
            <ModalAdd 
                isOpen={modalAddIsOpen} 
                setIsOpen={setModalAddIsOpen} 
            />
            <ModalEdit
                isOpen={modalEditIsOpen}
                setIsOpen={setModalEditIsOpen}
            />

            <div class="flex flex-col space-x-10">
                <div class="flex flex-row kotak bg-sc bg-cover mt-8 ml-8 mb-4"></div>
                <div class="flex flex-row font-bold text-4xl">
                    {laguKotak[index].Judul}
                </div>
                <div class="flex flex-row text-2xl my-2">
                    {laguKotak[index].Penyanyi}
                </div>
                <div class="flex flex-row text-xl mt-36">
                    {laguKotak[index].Album}
                </div>
                <div class="flex flex-row text-xl">
                    {laguKotak[index].Genre}
                </div>
            </div>
            <div class="flex flex-col h-fit w-0.5 bg-gray-300 ml-8 mr-4 my-2.5 rounded-full"></div>
            <div class="flex flex-col">
                <div class="flex flex-row justify-between">
                    <div class="flex flex-row ml-4 mt-8 mb-4">
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
                    <div class="flex flex-row justify-center mt-8 mr-8 cursor-pointer">
                        <FiX
                            color={"#9a9b9c"}
                            size={30}
                            onClick={() => setIsOpen(false)}
                        />
                    </div>
                </div>
                <div class="flex flex-row flex-wrap">
                    {
                    ripiw.map((item) => (
                        <div
                            class={`flex flex-col h-48 w-72 rounded-3xl bg-blue-200 m-4 justify-between p-4 cursor-pointer`}
                            onClick={() => setModalEditIsOpen(true)}
                            // ${item.Username.includes('nanchaara') && 'cursor-pointer'}`}
                            // onClick={() => handleClickReview(item.Username)}
                        >
                            <div class="flex flex-row justify-between">
                                <div class="flex flex-col font-semibold">
                                    {item.Username}
                                </div>
                                <div class="flex flex-col">{item.Rating}</div>
                            </div>
                            <div class="flex flex-row">{item.Ripiw}</div>
                        </div>
                    ))
                    }
                </div>
                <div class="flex flex-row mt-4 ml-4 mr-4">
                    <button
                        class="h-12 w-full px-4 font-semibold text-xl text-white rounded-full bg-blue-500 hover:bg-blue-600"
                        onClick={() => setModalAddIsOpen(true)}
                        // onClick={() => handleClickButton(lagu.filter(item => item.name === 'nanchaara').ripiw)}
                    >
                        Add Review
                    </button>
                </div>
            </div>
        </Modal>
    );
};
export default MyModal;
