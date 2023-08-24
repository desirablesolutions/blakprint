export default function CallToAction() {
    return (
        <a
        className="items-center justify-center hidden px-8 py-4 font-medium leading-none text-black transition duration-200 border border-black rounded-full group xl:inline-flex hover:text-white hover:bg-black"
        href="#"
      >
        <span className="mr-2">Get consulation</span>
        <span className="transition duration-100 transform group-hover:rotate-45">
          <svg
            width={10}
            height={10}
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 1L1 9"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 8.33571V1H1.66429"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    )
}