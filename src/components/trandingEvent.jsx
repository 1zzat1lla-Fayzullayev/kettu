/* eslint-disable react/no-unknown-property */
import  { useState, useEffect } from "react";
import Wrapper from "../layout/wrapper";

function* numberGenerator(max) {
  let number = 0;
  while (number <= max) {
    yield number;
    number++;
  }
}

function TrandingEvent() {
  const [topGuides, setTopGuides] = useState(0);
  const [winterDestinations, setWinterDestinations] = useState(0);
  const [newTours, setNewTours] = useState(0);
  const [happyTravelers, setHappyTravelers] = useState(0);

  useEffect(() => {
    const guidesGenerator = numberGenerator(584);
    const destinationsGenerator = numberGenerator(7410);
    const toursGenerator = numberGenerator(680);
    const travelersGenerator = numberGenerator(2540);

    const interval = setInterval(() => {
      const guidesNext = guidesGenerator.next();
      const destinationsNext = destinationsGenerator.next();
      const toursNext = toursGenerator.next();
      const travelersNext = travelersGenerator.next();

      if (!guidesNext.done) setTopGuides(guidesNext.value);
      if (!destinationsNext.done) setWinterDestinations(destinationsNext.value);
      if (!toursNext.done) setNewTours(toursNext.value);
      if (!travelersNext.done) setHappyTravelers(travelersNext.value);

      if (
        guidesNext.done &&
        destinationsNext.done &&
        toursNext.done &&
        travelersNext.done
      ) {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <div className="text-center mb-8 relative mt-[10px] md:mt-[100px]">
        <p className=" text-[#2C3F58] lora text-[14px] md:text-[20px]">
          Trending Event of the Week
        </p>
        <h2 className="text-[25px] md:text-[30px] lg:text-[50px] font-bold text-[#2C3F58]">
          Trending Event
        </h2>
      </div>
      <div className="bg-[#FF5722] py-10">
        <Wrapper>
          <div className="flex flex-col md:flex-row md:items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <svg
                className="w-[50px]"
                viewBox="-4 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
              >
                <title>location</title>
                <desc>Created with Sketch Beta.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                  sketch:type="MSPage"
                >
                  <g
                    id="Icon-Set"
                    sketch:type="MSLayerGroup"
                    transform="translate(-104.000000, -411.000000)"
                    fill="#fff"
                  >
                    <path
                      d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z"
                      id="location"
                      sketch:type="MSShapeGroup"
                    ></path>
                  </g>
                </g>
              </svg>
              <div>
                <h4 className="text-[30px] md:text-[40px] font-[600] text-white">
                  {topGuides}
                </h4>
                <p className="text-white text-[15px]">Top Local Guides</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-[50px]"
                viewBox="0 0 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M8.5 5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5zM8.5 11c-1.378 0-2.5-1.122-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.122 2.5 2.5-1.122 2.5-2.5 2.5zM9 4h-1v-3h1v3zM8 13h1v3h-1v-3zM16 8v1h-3v-1h3zM4 9h-3v-1h3v1zM12.036 5.671l-0.707-0.707 2.121-2.121 0.707 0.707-2.121 2.121zM4.964 11.329l0.707 0.707-2.121 2.121-0.707-0.707 2.121-2.121zM12.036 11.329l2.121 2.121-0.707 0.707-2.121-2.121 0.707-0.707zM4.964 5.671l-2.121-2.121 0.707-0.707 2.121 2.121-0.707 0.707z"
                  fill="#FFf"
                />
              </svg>
              <div>
                <h4 className="text-[30px] md:text-[40px] font-[600] text-white">
                  {winterDestinations}
                </h4>
                <p className="text-white text-[15px]">Winter Destinations</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-[50px]"
                viewBox="0 0 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M17 16v1h-17v-1h17zM5.203 7.976l4.204 3.026 5.593-6.251v2.284h1v-4.035h-4.036v1h2.366l-5.070 5.665-4.129-2.974-4.372 3.956 0.671 0.741 3.773-3.412z"
                  fill="#fff"
                />
              </svg>
              <div>
                <h4 className="text-[30px] md:text-[40px] font-[600] text-white">
                  {newTours}
                </h4>
                <p className="text-white text-[15px]">New Tours</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <svg
                className="w-[50px]"
                viewBox="0 0 17 17"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M8.5 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5-3.813-8.5-8.5-8.5zM8.5 16c-4.136 0-7.5-3.364-7.5-7.5s3.364-7.5 7.5-7.5 7.5 3.364 7.5 7.5-3.364 7.5-7.5 7.5zM13 9c0 2.481-2.019 4.5-4.5 4.5s-4.5-2.019-4.5-4.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5c0-0.276 0.224-0.5 0.5-0.5s0.5 0.224 0.5 0.5zM4.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1zM10.5 5.5c0-0.552 0.448-1 1-1s1 0.448 1 1-0.448 1-1 1-1-0.448-1-1z"
                  fill="#FFf"
                />
              </svg>
              <div>
                <h4 className="text-[30px] md:text-[40px] font-[600] text-white">
                  {happyTravelers}
                </h4>
                <p className="text-white text-[15px]">Happy Travelers</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
}

export default TrandingEvent;
