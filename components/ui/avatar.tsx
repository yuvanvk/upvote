import Image from "next/image"

export const Avatar = ({ src = "", alt = "" }: { src: string, alt: string }) => {
    return <div className="w-10 h-10 cursor-pointer relative rounded-full overflow-hidden">
        <Image src={src} alt={alt} fill/>
    </div>
}