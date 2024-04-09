import Link from 'next/link'

const textobotao = "Começe Agora"
const href = "#"
const target = ""

interface ButtonProps {
    textobotao: string;
    href: string;
    target: string;
}

export function ButtonVerde({ textobotao, href }: ButtonProps) {
    return (
        <button
            type="button"
            className="transition-all ease-in-out rounded-xl px-16 py-4 text-md font-semibold bg-gradient-to-br from-green-500 from-10% to-green-700 to-95% hover:from-escurocannabis hover:to-azulcannabis text-gray-800 shadow-xl hover:text-gray-600 hover:shadow-sm duration-500 "
        >
            <Link href={href} target={target}>
                {textobotao}
            </Link>
        </button>
    );
}

export function ButtonBranco({ textobotao, href }: ButtonProps) {
    return (
        <button
            type="button"
            className="transition-all ease-in-out rounded-xl px-16 py-4 text-md font-semibold bg-gradient-to-bl from-white from-55% to-green-600 to-100% hover:from-gray-100 hover:to-green-800 text-gray-800 shadow-xl hover:text-gray-600 hover:shadow-sm duration-500"
        >
            <Link href={href} target={target}>
                {textobotao}
            </Link>
        </button>
    );
}

export function ButtonGradient({ textobotao, href }: ButtonProps) {
    return (
        <div className="relative inline-flex  group">
            <div
                className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-2xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
            </div>
            <Link href={href} target={target} title="Button"
                className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black  rounded-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button">{textobotao}
            </Link>
        </div>

    );
}


