import Image from "next/image";

export default function Home() {
  return (
    <div className="antialiased overflow-x-hidden">
      <div className="bg-white min-h-screen pt-8 px-4 lg:px-0">
        <title>TailwindTemplates v2 is here - Tailwindtemplates</title>
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          <div className="flex items-center ml-6 mb-8 lg:mb-0">
            <Image src="/images/rogo.jpeg" alt="Logo" width={60} height={60} layout="fixed" />
            <h1 className="text-2xl ml-4 font-semibold">TailwindTemplates</h1>
          </div>
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
            <nav className="ml-auto mr-20 flex space-x-6 lg:space-x-10">
              <a href="#" className="text-gray-900 hover:text-blue-600 transition duration-300 px-8 py-2">Templates</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 transition duration-300 px-8 py-2">Resources</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 transition duration-300 px-8 py-2">Blog</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 transition duration-300 px-8 py-2">About</a>
            </nav>
          </div>
        </div>
        <div className="h-96 w-full bg-gray-100 mb-24 mt-24 rounded-2xl shadow-xl bg-cover bg-center">

        </div>
        <div className="flex justify-center">
          <div className="rounded-lg p-4 max-w-5xl">
            <a href="#" className="bg-blue-100 text-blue-400 font-bold py-2 px-4 rounded-full">Update</a><br /><br /><br />
            <h1 className="text-5xl mb-4">TailwindTemplates v2 is here</h1><br />
            <p className="text-1xl text-gray-500">1 min read</p><br /><br />
            <p className="text-1xl text-gray-500">TailwindTemplates V2 is finally here! Our focus for TailwindTemplates v2 is to bring open-source design systems to Tailwindcss. Each design system has a detailed guideline to provide consistency and coherence within a user interface.</p><br />
            <h2 className="text-2xl mb-4">What to expect?</h2>
            <p className="text-1xl text-gray-500">Over the coming months, we will expand the design systems that are currently available at launch. In addition to that, we are planning to create several tailwind configurations to easily get started with the proper colors and variants that belong to each design system. </p><br />
            <h2 className="text-2xl mb-4">Not only templates</h2>
            <p className="text-1xl text-gray-500 mb-24">We are planning to bring more tailwind and web development-related content such as videos, blog posts, tutorials and news.</p>
          </div>
        </div>
        <div className="bg-blue-700 text-white flex justify-between px-6 pt-1 pb-1">
          <div className="mx-auto container px-6 pt-24 pb-16">
            <div className="grid lg:grid-cols-3 px-6 lg:px-0 gap-4">
              <div className="container mx-auto">
                <h1>About</h1>
                <ul>
                  <li><a href="#" className="text-white hover:text-yellow-500">Me</a></li>
                  <li><a href="#" className="text-white hover:text-yellow-500">Contact</a></li>
                  <li><a href="#" className="text-white hover:text-yellow-500">Disclaimer</a></li>
                </ul>
              </div>
              <div className="container mx-auto">
                <h1>Resources</h1>
                <ul>
                  <li><a href="#" className="text-white hover:text-yellow-500">Amazing</a></li>
                  <li><a href="#" className="text-white hover:text-yellow-500">Blog</a></li>
                </ul>
              </div>
              <div className="mt-4 inline-block">
                <a href="#" className="bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded">Subscribe to newsletter</a>
              </div>
            </div>
            <div className="flex lg:justify-center px-6 lg:px-0 items-center mt-12 mb-6">
              <div className="mt-20 inline-block">
                <a href="#" className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Support Me on Ko-fi</a>
              </div>
            </div>
            <div className="flex lg:justify-center">
              <p>
                Built with TALL stack &
                <a href="#" className="hover:text-red-500"> ❤ </a>
                by j-hiz
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
