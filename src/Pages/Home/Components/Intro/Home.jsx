import React from "react";
import style from "./Home.module.css";
import CategoriesSection from "../CategoriesSection/CategoriesSection.jsx";

function Home() {
  return (
    <>
      <section className={` ${style.Home} position-relative ${style.bgImg}`}>
        <svg
          className={`position-absolute `}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 819"
          fill="none"
        >
          <g clipPath="url(#clip0_47_4485)">
            <path
              d="M-19 617.776L1440 481.907V-20.6866H1.97125L-19 617.776Z"
              fill="#67729D"
            />
            <g clipPath="url(#clip1_47_4485)">
              <rect
                width="1440"
                height="169"
                transform="translate(0 -12)"
                fill="#67729D"
              />
              <path
                opacity="0.25"
                d="M0 -12V53.1918C57.348 84.4568 124.308 98.4978 189.6 92.6251C274.032 85.0623 353.196 45.7135 437.76 39.8126C526.368 33.6723 614.808 63.5853 699.6 89.4704C782.724 114.82 865.56 124.51 950.88 107.891C994.26 99.4414 1034.7 82.7668 1076.22 66.5709C1187.39 23.2083 1335.6 -32.1251 1440 61.8953V-12H0Z"
                fill="white"
              />
              <path
                opacity="0.5"
                d="M0 2V24.2658C15.6 53.9957 33.168 82.0778 57.228 103.47C119.292 158.705 198 158.325 269.496 130.975C306.876 116.681 341.604 94.2599 377.1 74.9235C426.204 48.1652 478.776 10.1402 534.096 4.97158C577.608 0.957833 619.176 18.2381 652.416 49.4186C690.54 85.1762 727.2 136.735 776.772 152.227C825.3 167.423 874.392 142.805 919.728 118.033C965.064 93.26 1009.92 63.1076 1060.03 57.4038C1131.71 49.1651 1195.97 89.6265 1262.71 112.104C1298.95 124.3 1333.51 120.793 1367.22 101.541C1394.14 86.2043 1424.82 63.6146 1440 32.1947V2H0Z"
                fill="white"
              />
              <path
                d="M0 -12V-4.07108C179.916 71.0917 376.908 88.4423 570.996 47.9528C622.596 37.1931 672.072 19.6171 724.128 10.6883C794.928 -1.46567 859.104 27.9263 922.8 60.5433C993.516 96.7515 1063.2 122.13 1141.44 114.75C1245.28 104.892 1348.39 50.3751 1440 -4.69075V-12H0Z"
                fill="white"
                fillOpacity="0.75"
              />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_47_4485">
              <rect width="1440" height="819" fill="white" />
            </clipPath>
            <clipPath id="clip1_47_4485">
              <rect
                width="1440"
                height="169"
                fill="white"
                transform="translate(0 -12)"
              />
            </clipPath>
          </defs>
        </svg>

        <div
          className={`container ${style.container}  position-relative d-flex flex-wrap  justify-content-between align-items-center`}
        >
          <div
            className={` d-flex flex-column col-md-7 col-sm-5  ${style.introTxt}`}
          >
            <h1 className={`DancingScriptFont color4 ${style.titleStyle}`}>
              {" "}
              Fabulous
            </h1>
            <span className={`crushedFont color4 ${style.spanStyle}`}>
              FINDS
            </span>
            <p
              className={`CrimsonTextFont color4 pe-2 pe-sx-0 ${style.pStyle} `}
            >
              Discover the latest trends and must-have fashion at Fabulous Finds
              – your ultimate destination for chic styles and fabulous deals!
            </p>
          </div>

          <svg
            className={` col-md-5  col-sm-7  ${style.svgStyle}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 645 590"
            fill="none"
          >
            <g clipPath="url(#clip0_96_292)">
              <path
                d="M426.567 93.3252L455.234 103.045V60.4846H429.22L426.567 93.3252Z"
                fill="#F8A8AB"
              />
              <path
                d="M451.686 72.2587C467.463 72.2587 480.252 59.0698 480.252 42.8003C480.252 26.5309 467.463 13.3419 451.686 13.3419C435.91 13.3419 423.12 26.5309 423.12 42.8003C423.12 59.0698 435.91 72.2587 451.686 72.2587Z"
                fill="#F8A8AB"
              />
              <path
                d="M444.41 45.109L448.35 50.038L455.469 37.1787C455.469 37.1787 464.559 37.6636 464.559 30.703C464.559 23.7424 472.898 23.5461 472.898 23.5461C472.898 23.5461 484.707 2.28341 460.249 7.8819C460.249 7.8819 443.28 -4.10002 434.851 6.13887C434.851 6.13887 408.983 19.5752 416.381 42.9619L428.683 67.0758L431.47 61.6159C431.47 61.6159 429.78 38.7025 444.41 45.0859V45.109Z"
                fill="#2F2E43"
              />
              <path
                d="M441.411 535.04H417.971V569.335H441.411V535.04Z"
                fill="#F8A8AB"
              />
              <path
                d="M438.813 588.982C434.806 589.351 414.747 590.991 413.74 586.246C412.822 581.894 414.176 577.346 414.367 576.723C416.292 556.938 417.008 556.719 417.445 556.592C418.128 556.384 420.12 557.365 423.355 559.512L423.557 559.651L423.601 559.893C423.657 560.205 425.09 567.465 431.885 566.346C436.541 565.584 438.052 564.522 438.534 564.002C438.142 563.818 437.649 563.494 437.302 562.94C436.799 562.132 436.709 561.093 437.045 559.847C437.918 556.557 440.537 551.697 440.649 551.501L440.951 550.947L467.592 569.485L484.047 574.334C485.289 574.703 486.285 575.615 486.789 576.838C487.483 578.547 487.058 580.532 485.715 581.779C482.726 584.549 476.793 589.294 470.558 589.882C468.902 590.044 466.708 590.102 464.245 590.102C453.958 590.102 438.937 589.005 438.825 588.982H438.813Z"
                fill="#2F2E43"
              />
              <path
                d="M471.342 239.371L409.855 236.127C409.855 236.127 400.43 272.973 412.34 311.366L413.773 542.566H448.518L481.27 304.071L471.342 239.371Z"
                fill="#2F2E43"
              />
              <path
                d="M460.977 85.1411L427.228 66.6718C427.228 66.6718 390.86 121.479 395.886 151.169C400.923 180.858 409.855 236.127 409.855 236.127L484.304 239.371L471.308 130.529L460.977 85.1411Z"
                fill="#E2E3E4"
              />
              <path
                d="M458.089 535.04H434.649V569.335H458.089V535.04Z"
                fill="#F8A8AB"
              />
              <path
                d="M455.492 588.982C451.484 589.351 431.426 590.991 430.418 586.246C429.5 581.894 430.855 577.346 431.045 576.723C432.97 556.938 433.687 556.719 434.123 556.592C434.806 556.384 436.798 557.365 440.033 559.512L440.235 559.651L440.28 559.893C440.336 560.205 441.768 567.465 448.563 566.346C453.219 565.584 454.731 564.522 455.212 564.002C454.82 563.818 454.328 563.494 453.981 562.94C453.477 562.132 453.387 561.093 453.723 559.847C454.596 556.557 457.216 551.697 457.327 551.501L457.63 550.947L484.27 569.485L500.725 574.334C501.967 574.703 502.964 575.615 503.467 576.838C504.161 578.547 503.736 580.532 502.393 581.779C499.404 584.549 493.471 589.294 487.237 589.882C485.58 590.044 483.386 590.102 480.924 590.102C470.637 590.102 455.615 589.005 455.503 588.982H455.492Z"
                fill="#2F2E43"
              />
              <path
                d="M484.304 239.371L409.855 236.127C409.855 236.127 400.43 272.973 412.34 311.366L426.735 542.566H461.48L494.232 304.071L484.304 239.371Z"
                fill="#2F2E43"
              />
              <path
                d="M476.536 390.38C471.331 390.38 465.656 389.064 460.048 387.771C455.895 386.813 452.235 386.571 449.302 386.386C444.847 386.097 441.321 385.866 439.362 383.177C437.426 380.522 437.426 376.009 439.362 367.109C441.937 355.288 447.668 336.404 454.675 320.866C463.73 300.827 472.428 291.604 480.543 293.486C491.412 296.002 495.744 314.714 497.367 325.634C499.628 340.882 499.427 359.005 496.875 370.733C493.494 386.259 485.737 390.368 476.525 390.368H476.536V390.38ZM478.517 296.729C472.551 296.729 465.23 305.71 457.731 322.332C450.824 337.627 445.183 356.223 442.642 367.871C441.019 375.351 440.84 379.425 442.048 381.099C443.078 382.507 445.776 382.692 449.503 382.923C452.559 383.119 456.365 383.362 460.775 384.389C478.304 388.441 489.263 389.918 493.595 369.983C498.24 348.628 494.703 300.319 479.804 296.868C479.379 296.764 478.943 296.718 478.506 296.718H478.517V296.729Z"
                fill="#DFDFE0"
              />
              <path
                d="M547.425 533.921L380.473 535.052L354.537 522.747L369.648 363.784L384.849 364.581L541.257 372.788L547.425 533.921Z"
                fill="#BB9CC0"
              />
              <path
                opacity="0.2"
                d="M380.473 535.052L354.537 522.747L369.648 363.784L384.849 364.581L380.473 535.052Z"
                fill="#272223"
              />
              <path
                d="M479.054 361.06C475.954 361.06 472.562 360.275 469.226 359.502C466.753 358.925 464.57 358.786 462.812 358.671C460.16 358.497 458.055 358.359 456.891 356.754C455.738 355.173 455.738 352.483 456.891 347.173C458.425 340.121 461.839 328.866 466.025 319.608C471.42 307.661 476.614 302.166 481.45 303.286C487.931 304.787 490.517 315.937 491.479 322.459C492.822 331.555 492.71 342.36 491.188 349.344C489.173 358.601 484.55 361.048 479.054 361.048V361.06ZM480.241 305.225C476.681 305.225 472.316 310.581 467.85 320.497C463.73 329.616 460.361 340.698 458.861 347.647C457.887 352.102 457.787 354.538 458.514 355.531C459.13 356.373 460.73 356.477 462.958 356.616C464.783 356.731 467.044 356.881 469.674 357.493C480.118 359.906 486.655 360.783 489.24 348.905C492.005 336.173 489.901 307.372 481.024 305.318C480.767 305.26 480.509 305.225 480.252 305.225H480.241Z"
                fill="#DFDFE0"
              />
              <path
                d="M521.31 446.653L421.777 447.323L406.307 439.993L415.318 345.211L424.385 345.684L517.638 350.579L521.31 446.653Z"
                fill="#E2E3E4"
              />
              <path
                opacity="0.2"
                d="M421.777 447.323L406.307 439.993L415.318 345.211L424.385 345.684L421.777 447.323Z"
                fill="#272223"
              />
              <path
                d="M484.875 297.087C486.543 305.537 483.487 313.259 478.069 314.333C472.652 315.406 466.909 309.415 465.253 300.966C464.548 297.595 464.659 294.109 465.577 290.785L458.984 254.873L476.021 252.091L480.711 287.783C482.827 290.508 484.248 293.693 484.875 297.087Z"
                fill="#F8A8AB"
              />
              <path
                d="M418.049 84.4715C418.049 84.4715 442.966 81.2163 445.944 88.8926C448.921 96.5689 483.912 279.287 483.912 279.287H460.831L418.049 84.4715Z"
                fill="#E2E3E4"
              />
              <path
                d="M186.93 121.766L161.901 130.251V93.1045H184.613L186.93 121.766Z"
                fill="#F8A8AB"
              />
              <path
                d="M165.001 103.39C178.775 103.39 189.941 91.875 189.941 77.6711C189.941 63.4672 178.775 51.9527 165.001 51.9527C151.228 51.9527 140.062 63.4672 140.062 77.6711C140.062 91.875 151.228 103.39 165.001 103.39Z"
                fill="#F8A8AB"
              />
              <path
                d="M171.852 75.12C167.676 74.9931 164.934 70.6412 163.311 66.6704C161.688 62.6995 160.02 58.1399 156.147 56.5007C152.979 55.1617 147.394 64.2232 144.897 61.8106C142.289 59.2942 144.83 46.3773 147.595 44.0571C150.36 41.7369 154.143 41.2867 157.703 41.1135C166.389 40.698 175.131 41.4252 183.65 43.2606C188.922 44.3918 194.339 46.1002 198.145 50.025C202.958 55.0117 204.19 62.5263 204.537 69.5562C204.895 76.7476 204.492 84.2739 201.1 90.5649C197.709 96.856 190.612 101.496 183.806 99.8919C183.123 96.0826 183.817 92.1695 184.086 88.2909C184.344 84.4239 184.075 80.2453 181.78 77.1632C179.486 74.0811 174.594 72.8576 171.93 75.5933"
                fill="#2F2E43"
              />
              <path
                d="M202.534 84.0315C205.03 82.1499 208.018 80.5685 211.085 80.961C214.399 81.3765 217.208 84.1931 218.059 87.5291C218.91 90.8651 217.958 94.5359 215.899 97.2601C213.85 99.9843 210.794 101.785 207.571 102.685C205.701 103.205 203.653 103.424 201.873 102.639C199.254 101.473 197.832 98.0219 198.862 95.2746"
                fill="#2F2E43"
              />
              <path
                d="M178.669 535.131H155.229V569.426H178.669V535.131Z"
                fill="#F8A8AB"
              />
              <path
                d="M132.394 590.181C129.932 590.181 127.738 590.123 126.081 589.962C119.858 589.373 113.914 584.629 110.925 581.858C109.582 580.612 109.156 578.626 109.85 576.918C110.354 575.694 111.35 574.771 112.593 574.413L129.047 569.565L155.688 551.026L155.99 551.58C156.102 551.788 158.722 556.648 159.595 559.926C159.931 561.173 159.841 562.212 159.337 563.02C158.99 563.574 158.498 563.897 158.106 564.082C158.587 564.601 160.098 565.663 164.755 566.425C171.549 567.533 172.982 560.272 173.038 559.972L173.083 559.73L173.284 559.591C176.519 557.444 178.512 556.463 179.195 556.671C179.62 556.798 180.336 557.029 182.273 576.802C182.463 577.426 183.818 581.974 182.9 586.326C181.903 591.058 161.845 589.431 157.826 589.061C157.714 589.073 142.692 590.181 132.406 590.181H132.394Z"
                fill="#2F2E43"
              />
              <path
                d="M245.411 508.165L225.522 520.956L243.121 550.055L263.009 537.264L245.411 508.165Z"
                fill="#F8A8AB"
              />
              <path
                d="M218.988 585.483C216.234 585.483 213.704 585.137 211.902 584.813C210.134 584.49 208.746 583.036 208.455 581.212C208.253 579.896 208.622 578.569 209.496 577.587L220.969 564.497L234.065 534.231L234.603 534.531C234.804 534.646 239.517 537.336 241.946 539.645C242.875 540.522 243.334 541.457 243.311 542.415C243.3 543.085 243.054 543.615 242.808 543.996C243.479 544.181 245.304 544.25 249.647 542.357C255.982 539.598 253.475 532.649 253.363 532.361L253.274 532.13L253.374 531.911C255.02 528.321 256.195 526.404 256.889 526.208C257.326 526.081 258.042 525.885 269.829 541.619C270.31 542.034 273.791 545.162 275.247 549.353C276.825 553.912 258.971 563.481 255.378 565.351C255.266 565.444 236.584 579.446 228.905 583.428C225.861 585.01 222.256 585.495 218.977 585.495L218.988 585.483Z"
                fill="#2F2E43"
              />
              <path
                d="M195.929 248.338H130.301L124.346 311.295L150.405 543.916H183.907L170.509 409.563L224.853 530.86L254.628 509.367L212.193 396.127C212.193 396.127 227.349 297.478 215.439 272.903C203.53 248.327 195.929 248.338 195.929 248.338Z"
                fill="#2F2E43"
              />
              <path
                d="M228.57 252.171H124.346L155.61 113.213H201.022L228.57 252.171Z"
                fill="#BB9CC0"
              />
              <path
                d="M98.4556 110.477C96.7878 102.027 99.8436 94.305 105.261 93.2314C110.679 92.1579 116.421 98.1489 118.078 106.599C118.783 109.969 118.671 113.455 117.753 116.78L124.346 152.691L107.31 155.473L102.62 119.781C100.504 117.057 99.0824 113.871 98.4556 110.477Z"
                fill="#F8A8AB"
              />
              <path
                d="M199.914 113.213H159.863L132.864 168.898L122.678 127.169L100.302 129.616C100.302 129.616 105.597 211.146 128.734 208.387C151.871 205.628 205.835 132.179 199.903 113.201H199.914V113.213Z"
                fill="#BB9CC0"
              />
              <path
                d="M237.737 377.335C234.636 377.335 231.245 376.55 227.909 375.776C225.435 375.199 223.252 375.061 221.495 374.945C218.842 374.772 216.738 374.633 215.574 373.029C214.421 371.448 214.421 368.758 215.574 363.448C217.107 356.395 220.521 345.14 224.708 335.883C230.103 323.935 235.297 318.441 240.132 319.561C246.613 321.061 249.199 332.212 250.162 338.734C251.505 347.83 251.393 358.634 249.871 365.618C247.856 374.876 243.233 377.323 237.737 377.323V377.335ZM238.923 321.5C235.364 321.5 230.998 326.856 226.532 336.772C222.413 345.891 219.044 356.972 217.544 363.921C216.57 368.377 216.469 370.813 217.197 371.805C217.812 372.648 219.413 372.752 221.641 372.89C223.465 373.006 225.726 373.156 228.357 373.768C238.8 376.18 245.337 377.058 247.923 365.18C250.688 352.447 248.584 323.647 239.707 321.592C239.45 321.534 239.192 321.5 238.935 321.5H238.923Z"
                fill="#DFDFE0"
              />
              <path
                d="M280.004 462.916L180.471 463.586L165.001 456.256L174.012 361.474L183.079 361.947L276.333 366.842L280.004 462.916Z"
                fill="#E2E3E4"
              />
              <path
                opacity="0.2"
                d="M180.471 463.586L165.001 456.256L174.012 361.474L183.079 361.947L180.471 463.586Z"
                fill="#272223"
              />
              <path
                d="M244.632 324.974C246.3 333.424 243.244 341.146 237.827 342.22C232.409 343.293 226.667 337.303 225.01 328.853C224.305 325.482 224.417 321.996 225.335 318.672L218.742 282.761L235.778 279.979L240.468 315.67C242.584 318.395 244.006 321.581 244.632 324.974Z"
                fill="#F8A8AB"
              />
              <path
                d="M177.079 113.213C177.079 113.213 199.836 112.22 201.022 113.213C207.235 118.442 243.67 307.186 243.67 307.186H220.589L177.079 113.213Z"
                fill="#BB9CC0"
              />
            </g>
            <defs>
              <clipPath id="clip0_96_292">
                <rect width="645" height="590" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </section>
      <CategoriesSection />
    </>
  );
}

export default Home;
