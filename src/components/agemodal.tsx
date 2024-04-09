import { useState } from 'react';

interface Props {
    onConfirm: (isOver18: boolean) => void;
    isOver18: any;

}

const AgeConfirmationModal: React.FC<Props> = ({ onConfirm }: Props) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleConfirm = (isOver18) => {
        setIsOpen(false);
        onConfirm(isOver18);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75">

            <div className="bg-white p-12 text-center  rounded-lg">
                <h2 className="text-2xl font-bold text-verde text-center mb-4">Confirmação de Idade</h2>
                <p className="text-lg text-gray-900 mb-4">Você confirma que é maior de 18 anos?</p>
                <div className="flex justify-center mt-4 gap-8">
                    <button
                        onClick={() => handleConfirm(true)}
                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-12 rounded-xl "
                    >
                        Sim
                    </button>
                    <button
                        onClick={() => handleConfirm(false)}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-12 rounded-xl"
                    >
                        Não
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeConfirmationModal;