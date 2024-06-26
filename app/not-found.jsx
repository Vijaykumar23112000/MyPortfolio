import Image from "next/image"
import { notFoundData } from "@/components/data/Data"

const NotFoundPage = () => {
    return (
        <div className="container mx-auto h-[80vh] w-full">
            <div className="flex items-center justify-center gap-10 md:flex-row flex-col">
                <div className="h-[500px] w-[500px] relative">
                    <Image
                        src={notFoundData.image}
                        alt="Not Found"
                        className="object-cover"
                        layout="fill"
                    />
                </div>
                <div className="h-full mb-10">
                    <p className="text-accent">{notFoundData.title}</p>
                    <p className="text-white/60">{notFoundData.content}</p>
                    <p className="text-white/60">{notFoundData.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage