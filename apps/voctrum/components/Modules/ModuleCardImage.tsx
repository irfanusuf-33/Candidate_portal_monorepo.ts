import Image from "next/image"

type ModuleCardImageProps = {
  src: string
  alt: string
}

const ModuleCardImage = ({ src, alt }: ModuleCardImageProps) => {
  return (
    <div className="mx-auto aspect-square w-full max-w-[390px] overflow-hidden rounded-[34px] lg:max-w-[420px]">
      <Image
        src={src}
        alt={alt}
        width={1728}
        height={1920}
        className="h-full w-full scale-[1.075] object-cover"
      />
    </div>
  )
}

export default ModuleCardImage
