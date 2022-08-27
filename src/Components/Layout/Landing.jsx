import React from "react"
import Header from "../Individual/Header"
import axios from "axios"
import serverData from "../../Information/Server.json"

export default function Landing() {
  /**
   * @route "/"
   * @desc Home page
   * @access Public
   */

  //--------------Variables-------------------

  /**
   * @desc Name to be sended to the server
   * @type String
   */
  const name = "Sebastian Velasco"

  //--------------Functions-------------------

  /**
   * @desc Get the current user Ip address from the geolocation app,
   * needed to send its value to the server
   * @return String (the ip on current user)
   */

  const getUserIP = async () => {
    const userIp = await axios.get("https://geolocation-db.com/json/")
    return userIp.data.IPv4
  }

  /**
   * @desc Post the data into the server hook
   *
   */

  const sendDataToServer = async (e) => {
    //Create the params object to send them
    const serverDataParams = {
      name,
      ip: await getUserIP(),
      time: new Date().toLocaleString(),
    }
    //Make the post request to server
    const postDataOnServer = axios.post(serverData.webHook, null, {
      params: serverDataParams,
    })
    //Send alert to user that the data has been sent
    alert("Data sended to server!")
  }

  return (
    /**
     * //////////////////////////////////////////////////
     * Start of component
     *
     * Assigned the full width of screen and 2 times the height
     * so we can have the 2 sections of the landing page
     */
    <div className="w-full h-400/2 flex flex-col bg-gray-100">
      <Header sendDataToServer={sendDataToServer} />
      {/*
       * ----------------------------------
       * Body Main Div
       *
       */}

      <div className="w-full flex-1">
        {/*
         * ----------------------------------
         * Main div 1 division
         */}

        <div className="w-full h-1/2 ">
          {/*
           * ----------------------------------
           * Main div 1 text
           */}

          <div className="w-1/2 h-full  inline-block relative">
            <div className="w-full h-1/2 absolute centerVertical  text-center">
              <h1 className="amikoFont font-bold text-5xl text-center text-blue-900">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h1>
              <button className="w-48 h-12 bg-blue-900 text-white mt-16 rounded-xl font-semibold">
                Lorem Ipsum
              </button>
            </div>
          </div>
          {/*
           * ----------------------------------
           * Main div 1 image
           */}

          <div className="w-1/2 h-full  inline-block py-20 px-5 relative">
            <img
              src={require("../../Images/image_top.png")}
              className="w-full h-full max-w-700px max-h-700px centerSom paddingInherit"
            />
          </div>
        </div>
        {/*
         * ----------------------------------
         * Main div 2 division
         */}

        <div className="w-full h-1/2 ">
          {/*
           * ----------------------------------
           * Main div 2 image
           */}

          <div className="w-1/2 h-full inline-block py-20 px-5 relative">
            <img
              src={require("../../Images/image_low.png")}
              className=" w-full h-full max-w-700px max-h-700px centerSom paddingInherit"
            />
          </div>
          {/*
           * ----------------------------------
           * Main div 2 table
           */}

          <div className="w-1/2 h-full  inline-block relative">
            {/*
             * ----------------------------------
             * Applied grid to get the 8 boxes
             */}

            <div className="w-3/4 h-2/3  centerSom grid grid-cols-2 gap-8 max-h-500px">
              {/*
               * ----------------------------------
               * Box 1
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  {/*
                   * ----------------------------------
                   * Box check box
                   */}

                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Possimus Omnis
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 2
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Facilis neque
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 3
               */}

              <div className="w-full h-auto relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Volup amet
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 4
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Rerum omnis
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 5
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Alias possimus
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 6
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Repellendus mollitia
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 7
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Lorem ipsum
                  </button>
                </div>
              </div>
              {/*
               * ----------------------------------
               * Box 8
               */}

              <div className="w-full h-auto  relative bg-white rounded-lg">
                <div className="w-4/5 h-2/4  centerSom">
                  <div className="w-1/6 h-full  float-left bg-gray-100 relative">
                    <span class="material-symbols-outlined centerSom">
                      done
                    </span>
                  </div>
                  <button className="w-5/6 h-full text-blue-900 text-base text-semibold float-right">
                    Volupta sint
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
