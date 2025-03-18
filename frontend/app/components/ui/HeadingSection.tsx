import Image from "next/image"

type HeadingSectionProps = {
    name: string
    icon?: React.ReactNode
}

async function HeadingSection({ name, icon }: HeadingSectionProps) {
    return (
        <div className="bg-green-400 py-2 px-5 text-gray-50 rounded-xs">
            <h2 className="flex flex-row items-center gap-2 text-2xl justify-center font-bold">
                { name}
                {icon}
            </h2>
        </div>
    )
}

export default HeadingSection