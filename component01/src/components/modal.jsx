const Modal = ({ modalOpen, onClose }) => {
    console.log(typeof modalOpen);

    const overlay = () => {
        return (
            <div className="fixed inset-0 flex justify-center items-center" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                <div className="bg-white text-black p-5 rounded-lg shadow-lg w-96">
                    <header className="text-xl font-bold">This is the header</header>
                    <div className="py-4">
                        This is the modal content
                    </div>
                    <button
                        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
                        onClick={onClose}
                    >
                        Close
                    </button>
                </div>
            </div>
        );
    };

    return (
        <>
            {modalOpen ? overlay() : null}
        </>
    );
};

export default Modal;
