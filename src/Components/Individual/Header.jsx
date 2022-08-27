import React from "react"

export default function Header({ sendDataToServer }) {
  /**
   * @desc Header div containing the web logo, name, menu, contact button
   * @access Public
   */
  return (
    /**
     * //////////////////////////////////////////////////
     * Start of component
     *
     * Assigned the full width of the screen and a height of 4rem,
     * position on top of screen and with a sticky option to make it
     * move with the page
     */
    <div className="bg-gray-100 basis-16 w-full sticky top-0 z-50 px-10 border border-b-white">
      <div className="w-full h-full  ">
        {/*
         * ----------------------------------
         * Logo & name, with float left to put them on the left side
         * of the header
         */}

        <div className="w-1/2 h-full float-left ">
          {/*
           * ----------------------------------
           * Logo image
           */}

          <div className="w-12 h-auto pt-2  inline-block">
            <img src={require("../../Images/Proxima_Logo.png")} className="" />
          </div>
          {/*
           * ----------------------------------
           * Company name
           */}

          <div className="w-40 h-full font-semibold  inline-block align-top text-center">
            <button className="w-full h-full text-3xl text-blue-900">
              PROXIMA
            </button>
          </div>
        </div>
        {/*
         * ----------------------------------
         * Menu
         *
         * With float right to put it on the right side of the header
         */}

        <div className="w-1/2 h-full float-right  grid grid-cols-11 gap-2 text-blue-900">
          <div className=" h-full  col-span-2 relative">
            <button className="w-full h-9 absolute centerVertical ">
              About Us
            </button>
          </div>
          <div className=" h-full  col-span-2 relative">
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="w-full h-9 absolute centerVertical "
            >
              Nearshoring{" "}
              <span class="material-symbols-outlined absolute centerVertical">
                expand_more
              </span>
            </button>
          </div>
          <div className=" h-full  col-span-2 relative">
            <button className="w-full h-9 absolute centerVertical ">
              Insurtech{" "}
              <span class="material-symbols-outlined absolute centerVertical">
                expand_more
              </span>
            </button>
          </div>
          <div className=" h-full  col-span-2 relative">
            <button className="w-full h-9 absolute centerVertical ">
              Careers
            </button>
          </div>
          {/*
           * ----------------------------------
           * Contact us button
           *
           * Uses the sendDataToServer function that we get as a prop
           * from the parent
           */}

          <div className=" h-full  col-span-3 text-lg relative">
            <button
              className="w-full h-11 absolute centerVertical  rounded-xl bg-blue-900 text-white"
              onClick={(e) => sendDataToServer(e)}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
