import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-no-repeat bg-cover bg-local bg-[center_bottom]" style={{backgroundImage: "url(`https://console-production-05bc.up.railway.app/api/v1/buckets/tw-pub-1/objects/download?preview=true&prefix=20240810_175152_1.jpg&version_id=null`)"}}>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-8xl font-normal tracking-wider text-sky-200"
          >
            TONKA&apos;S WORLD
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
          </Heading>
        </span>
      </div>
    </div>
  )
}

export default Hero
