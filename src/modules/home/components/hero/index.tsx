import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative" 
    styles={{background: "linear-gradient(to right top, #7359ff, #635bf8, #535cf0, #435de7, #335dde, #1e6be3, #0677e6, #0083e7, #009def, #00b2e9, #00c5da, #00d5c7)"}}>
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-6xl font-bold mb-4 drop-shadow-md shadow-black ">
        What do you like <br></br> to eat right now?
        </h1>
        <p className="text-lg max-w-[32rem] mb-6 drop-shadow-md shadow-black text-gray-300">
        Order, chill, and enjoy—we&apos;ll deliver your favourites to you.
         
        </p>
        <UnderlineLink  href="/store" >Explore Menu</UnderlineLink>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1579027989536-b7b1f875659b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format"
        layout="fill"
        loading="eager"
        priority={true}
        quality={100}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
