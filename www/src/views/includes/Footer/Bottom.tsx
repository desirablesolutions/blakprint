export default function BottomFooter() {
    return (
        <div className="pt-10 border-t-2 border-orange-400 border-opacity-50">
        <div className="sm:flex items-center justify-between">
          <span className="inline-block mb-4 sm:mb-0 text-gray-50">
            © All rights reserved
          </span>
          <div className="sm:flex mb-6 sm:mb-0 items-center">
            <a
              className="inline-block mr-6 sm:mr-12 text-orange-200 hover:text-orange-100"
              href="#"
            >
              Terms &amp; Conditions
            </a>
            <a
              className="inline-block text-orange-200 hover:text-orange-100"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    )
}