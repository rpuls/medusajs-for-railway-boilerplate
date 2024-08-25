import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You have successfully deployed your Medusa store on Railway!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Need help customizing your store?
          </Heading>
        </span>
        <a
          href="https://funkyton.com/tutorial-customize-your-medusajs-webshop-storefron/"
          target="_blank"
        >
          <h1 className="text-ui-fg-base" style={{ textDecoration: "underline" }}>
            Visit the tutorial
          </h1>
        </a>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h2 className="text-ui-fg-base" style={{ fontSize: '1.5em' }}>
            New version alert: <a href="https://funkyton.com/medusajs-2-0-is-finally-here/" style={{ color: '#007bff', textDecoration: 'none' }}>medusa 2.0 has been released</a> ← Check it out!
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Hero
