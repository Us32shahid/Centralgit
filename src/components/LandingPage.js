import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
//import { TopCollectionsModel} from './topcollection/top-collection-model';
//import TopCollectionsView from './topcollection/top-collection-view';
import CoinMarket from './CoinMarket';
import ProfileLogin from './ProfileLogin'
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import env from 'react-dotenv'

const LandingPage = () => {
    return (
        <>
        <section id="hiro">
        <div className="container">
          <div className="hiro_contant">
            <h2 className="section_heading hiro_heading text-center">
              Create, Earn, and Connect with the world with your NFTs
            </h2>
            <p className=" text-center section_pera">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor amet, consectetur
              <br />
              adipiscing elit, sed do eiusmod tempor
            </p>
            <div className="d-flex justify-content-center">
                                        <Auth0Provider
                                            domain={env.AUTH0_DOMAIN}
                                            clientId={env.AUTH0_CLIENT_ID}
                                            redirectUrl={env.LOGIN_REDIRECT_URL}
                                            onRedirectCallback={env.LOGIN_REDIRECT_URL}
                                            >
                                        <ProfileLogin />
                                    </Auth0Provider>
            
              {/* <Wallet btnText="Get Started"/> */}
            </div>
          </div>
        </div>
      </section>
      <section className="collection my-5">
            <h2 className="section_heading d-flex justify-content-center align-items-center">
                Top collections over 
                <span className="nav-link dropdown-toggle main-color"
                 href="#"
                  id="navbarDropdown" 
                  role="button"
                    data-bs-toggle="dropdown" 
                    aria-expanded="false">
                    in 7days <i className="bi bi-chevron-down main-color"></i>
                </span>
                 <ul className="dropdown-menu" 
                 aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" >1 Day</a></li>
                    <li><a className="dropdown-item" >7 Day </a></li>
                    <li><a className="dropdown-item" >1 Week</a></li>
                </ul> 
            </h2>

            
            <ul className="nav nav-pills mt-5 mb-3" 
            id="pills-tab"
             role="tablist">
                <li className="nav-item pill-1" 
                role="presentation">
                    <button className="nav-link"
                     id="pills-Artists-tab" 
                     data-bs-toggle="pill"
                        data-bs-target="#pills-Artists" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-Artists"
                        aria-selected="true">Artists</button>
                </li>
                <li className="nav-item" 
                role="presentation">
                    <button className="nav-link active" 
                    id="pills-Collections-tab" 
                    data-bs-toggle="pill"
                        data-bs-target="#pills-Collections" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-Collections"
                        aria-selected="false">Collections</button>
                </li>
                <li className="nav-item pill-2" 
                role="presentation">
                    <button className="nav-link " 
                    id="pills-Market-value-tab" 
                    data-bs-toggle="pill"
                        data-bs-target="#pills-Market-value" 
                        type="button" 
                        role="tab" 
                        aria-controls="pills-Market-value"
                        aria-selected="false">Market value</button>
                </li>
            </ul>
            <CoinMarket />
        </section>
        <section className="endles  pb-5 mt-5">
                <div className="container">
                    <h2 className="section_heading text-center">
                        Endless Possibilities <br />
                        with Funge
                    </h2>
                    <p className="section_pera mt-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur
                        <br />
                        adipiscing elit, sed do eiusmod tempor
                    </p>
                    <div className="row mt-5">
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="possibilities-box rounded mb-4 p-4 text-center">
                                <img src={"./assets/icon/Endless_1.svg"}
                                    alt=""
                                    className="img-fluid" />
                                <h3 className="font-22  w-700">The quick brown fox </h3>
                                <p className="font-14 w-400">There are many variations of passages of Lorem Ipsum available, but
                                    the majority believable.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="possibilities-box rounded mb-4 p-4 text-center">
                                <img src="./assets/icon/Endless_2.svg"
                                    alt=""
                                    className="img-fluid" />
                                <h3 className="font-22  w-700">The quick brown fox </h3>
                                <p className="font-14 w-400">There are many variations of passages of Lorem Ipsum available, but
                                    the majority believable.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="possibilities-box rounded mb-4 p-4 text-center">
                                <img src="./assets/icon/Endless_3.svg"
                                    alt=""
                                    className="img-fluid" />
                                <h3 className="font-22  w-700">The quick brown fox </h3>
                                <p className="font-14 w-400">There are many variations of passages of Lorem Ipsum available, but
                                    the majority believable.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="possibilities-box rounded mb-4 p-4 text-center">
                                <img src="./assets/icon/Endless_4.svg"
                                    alt=""
                                    className="img-fluid" />
                                <h3 className="font-22  w-700">The quick brown fox </h3>
                                <p className="font-14 w-400">There are many variations of passages of Lorem Ipsum available, but
                                    the majority believable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="call-to-action">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 px-5">
                            <h2>Create, Earn, and Connect with the world with your NFTs</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <button className="btn btn-primary signup-btn">
                                Sign Up
                            </button>
                        </div>
                        <div className="col-lg-6">
                            <img src="./assets/images/call-action-png.png"
                                alt=""
                                className="img-fluid mt-md-5 mt-5" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="endless-possibilities my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="gray_box text-center">
                                <h2>
                                    Endless Possibilities <br />
                                    with Funge
                                </h2>
                                <p className="px-0 px-md-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                </p>
                                <img src="./assets/images/endless_1.png"
                                    alt=""
                                    className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="gray_box text-center">
                                <h2>
                                    Endless Possibilities <br />
                                    with Funge
                                </h2>
                                <p className="px-0 px-md-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                    do eiusmod tempor amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor
                                </p>
                                <div className="d-flex justify-content-center download_btn_section">
                                    <a href="#"
                                        className="d-flex download_btn align-items-center">
                                        <figure className="m-0">
                                            <img src="./assets/images/google_play_button.svg"
                                                alt="" />
                                        </figure>
                                        <div className="text-start">
                                            <p>GET IT ON</p>
                                            <h4>Google Play</h4>
                                        </div>
                                    </a>
                                    <a href="#"
                                        className="d-flex download_btn align-items-center">
                                        <figure className="m-0">
                                            <img src="./assets/images/apple_button.svg"
                                                alt="" />
                                        </figure>
                                        <div className="text-start">
                                            <p>Download on the</p>
                                            <h4>App Store</h4>
                                        </div>
                                    </a>
                                </div>
                                <img src="./assets/images/endless_2.png"
                                    alt=""
                                    className="img-fluid w-75" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video_section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="text-center">
                                <img src="./assets/images/video_section.png"
                                    alt=""
                                    className="img-fluid" />
                                <div className="video_info">
                                    <img src="./assets/icon/video_icon_2.svg"
                                        alt=""
                                        className="img-fluid video_icon" />
                                    <h3>Endless Possibilities with Funge</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor amet,
                                        <br />
                                        consectetur adipiscing elit, sed do eiusmod tempor
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="footer_top">
                <div className="text-center">
                    <h2>Endless Possibilities with Funge</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur
                        adipiscing elit, sed do eiusmod tempor</p>
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-3 col-md-6 ">
                                <div className="top_resources ">
                                    <div className="post_box text-start m-0">
                                        <img src="./assets/images/media_post_4.png"
                                            alt=""
                                            className="img-fluid" />
                                        <h2>Tons of rewards from Funge
                                            this year.
                                        </h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                            believable.</p>
                                        <div className="d-flex align-items-center ">
                                            <figure className="m-0">
                                                <img src="./assets/images/eth_media.svg"
                                                    alt=""
                                                    className="img-fluid nft_img " />
                                            </figure>
                                            <div className="info">
                                                <h3>Alec Kleinman</h3>
                                                <h4>Feb 14, 2022 • 4 min read</h4>
                                            </div>
                                        </div>
                                        <div className="post_bottom_info">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 23 23"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M22.2896 15.3887V15.3537C22.2369 14.8853 22.1032 14.4294 21.8947 14.0066L19.4031 7.20409C19.3361 6.95533 19.2033 6.72921 19.0187 6.54985C18.8339 6.3703 18.604 6.24408 18.3535 6.18447C17.7402 6.04675 17.0994 6.23589 16.659 6.68425C16.4798 6.86799 16.3534 7.09636 16.2933 7.34581C16.233 7.59509 16.241 7.85607 16.3167 8.10135V8.14388L12.9403 4.74752C12.148 3.9552 11.1709 4.10269 10.6136 4.65756C10.4061 4.86344 10.2599 5.12303 10.1912 5.40735L9.37639 4.59254H9.37656C9.08701 4.28259 8.68658 4.10008 8.2628 4.08455C7.83884 4.06921 7.42621 4.22209 7.11484 4.51008C6.6935 4.86937 6.47279 5.41066 6.5225 5.96203C6.12818 5.95785 5.74657 6.10254 5.4539 6.36682C5.16121 6.63127 4.97884 6.99629 4.94314 7.38905L4.02341 6.69175C3.80185 6.50836 3.53497 6.38842 3.25065 6.34431C2.9665 6.30038 2.67571 6.33403 2.40902 6.44194C1.83565 6.68861 1.43351 7.21787 1.34947 7.83636C1.316 8.11476 1.35662 8.39697 1.46714 8.65447C1.57767 8.91212 1.75443 9.13596 1.97915 9.30331C1.69413 9.40076 1.44434 9.58084 1.26199 9.82072C0.782069 10.453 0.802106 11.4726 1.76177 12.205L2.46394 12.7374L2.46412 12.7372C2.14353 12.8369 1.86428 13.0388 1.66935 13.312C1.22952 13.9343 1.22446 14.9588 2.24674 15.7361L10.3011 21.8617C11.0734 22.4499 12.029 22.7455 12.9984 22.6962C13.9679 22.6467 14.8885 22.2555 15.5968 21.5918C16.9595 21.8793 18.3753 21.459 19.3605 20.4746L21.1098 18.7252C21.9454 17.8888 22.3813 16.7337 22.3069 15.5539C22.3135 15.4983 22.3074 15.442 22.2895 15.389L22.2896 15.3887ZM5.82028 7.08891C5.96602 6.8609 6.21687 6.72178 6.4876 6.71899C6.63106 6.72091 6.7721 6.75595 6.89988 6.8215L6.98234 6.91389C6.71004 6.97037 6.45796 7.09972 6.2533 7.28799C6.04864 7.47644 5.89907 7.71684 5.82028 7.98356C5.73067 7.85159 5.68291 7.69575 5.68291 7.53626C5.68291 7.37677 5.73067 7.2209 5.82028 7.08896L5.82028 7.08891ZM2.09407 7.95357C2.14759 7.60352 2.37683 7.30545 2.70123 7.16389C2.84574 7.10445 3.00403 7.08666 3.15794 7.11229C3.31205 7.13792 3.45604 7.20591 3.57354 7.30875L5.52041 8.7832L5.9102 9.07816C5.92275 9.11058 5.93513 9.14318 5.95012 9.17561C6.06204 9.39822 6.20969 9.60096 6.38751 9.77544L7.00479 10.3952C6.85435 10.422 6.70861 10.471 6.57246 10.5402C6.24282 10.7076 5.98517 10.9891 5.84763 11.3324L3.73077 9.72787L3.69329 9.69283L2.46621 8.76315L2.46639 8.76333C2.3346 8.67686 2.22983 8.55518 2.16394 8.41189C2.09804 8.26877 2.07381 8.10996 2.09403 7.95356L2.09407 7.95357ZM10.7558 21.2641L2.70591 15.1613C2.07609 14.684 2.04119 14.1168 2.28858 13.7669C2.44181 13.5513 2.69144 13.4251 2.95589 13.4294C3.20692 13.4381 3.45009 13.5199 3.65565 13.6644L7.24186 16.386C7.32065 16.4503 7.42229 16.4798 7.5234 16.4677C7.62451 16.4555 7.7162 16.4029 7.77774 16.3218C7.8391 16.2406 7.8649 16.1381 7.84921 16.0375C7.83352 15.9369 7.77756 15.8471 7.69424 15.7886L4.26542 13.1871L4.23788 13.162L4.18296 13.1221L2.2211 11.6225C1.61881 11.1677 1.60627 10.6229 1.86129 10.2905C2.11615 9.95802 2.63357 9.82571 3.22836 10.268L3.25591 10.2955L5.75504 12.1924H5.75487C5.84203 12.6275 6.0622 13.0247 6.38469 13.3295L12.6026 19.5474C13.0411 20.0379 13.5173 20.4934 14.027 20.9094C14.2413 21.064 14.4698 21.1979 14.7094 21.3093L14.7568 21.3318C14.1703 21.7497 13.4652 21.9686 12.7452 21.9564C12.0251 21.9444 11.3278 21.7017 10.7557 21.2643L10.7558 21.2641ZM20.5649 18.2051L18.8156 19.9544C18.1826 20.5865 17.3246 20.9414 16.4301 20.9414C15.5356 20.9414 14.6777 20.5865 14.0448 19.9544L6.91736 12.802C6.67696 12.5853 6.52338 12.2886 6.48503 11.9673C6.47161 11.8113 6.50525 11.6549 6.58143 11.5183C6.65744 11.3816 6.77284 11.2707 6.91248 11.2C7.10197 11.1238 7.30977 11.1048 7.50991 11.1452C7.71021 11.1857 7.8943 11.2838 8.0395 11.4274L11.2434 14.6314C11.3911 14.7689 11.6214 14.7649 11.764 14.6221C11.9067 14.4794 11.9109 14.2493 11.7732 14.1016L6.9173 9.23811C6.76197 9.09081 6.64309 8.90934 6.57005 8.70816C6.50432 8.53855 6.49927 8.35132 6.55575 8.17821C6.61223 8.00511 6.72676 7.85693 6.87982 7.75861C7.16223 7.58115 7.62961 7.56372 8.1144 8.04346V8.06089L12.9703 12.9119C13.118 13.0494 13.3482 13.0454 13.491 12.9027C13.6338 12.7599 13.6378 12.5298 13.5001 12.3819L8.65444 7.52871C8.6499 7.52174 8.64485 7.51494 8.63944 7.50866L7.55236 6.41409C7.51436 6.37748 7.48002 6.33738 7.44986 6.29415C7.30796 6.11164 7.24503 5.88013 7.27518 5.65089C7.30517 5.42183 7.42563 5.21421 7.60971 5.07457C7.77864 4.90879 8.0084 4.81989 8.24476 4.82878C8.48132 4.83784 8.70358 4.94383 8.85928 5.12199L14.8099 11.0699C14.9589 11.1573 15.1483 11.1315 15.2684 11.0077C15.3886 10.8839 15.4089 10.6939 15.3173 10.5476L11.2338 6.45396C10.7664 5.98658 10.8515 5.48176 11.1438 5.18695C11.4362 4.89199 11.941 4.80709 12.4108 5.2769L16.8392 9.70545C16.9604 9.82608 17.1478 9.84962 17.2951 9.76263C17.4422 9.67547 17.5118 9.49975 17.464 9.33553L17.0442 7.89108C17.0029 7.77254 16.9958 7.64476 17.0236 7.52238C17.0515 7.39983 17.1131 7.28774 17.2016 7.19883C17.4582 6.94658 17.8241 6.83972 18.1763 6.91381C18.303 6.94362 18.4186 7.00864 18.5098 7.10156C18.601 7.19447 18.6639 7.31144 18.6911 7.4387L21.1902 14.2837L21.2077 14.3211H21.2078C21.3865 14.6795 21.4991 15.0673 21.5401 15.4657C21.5396 15.4774 21.5396 15.4891 21.5401 15.5008V15.5283V15.5281C21.6262 16.5206 21.2695 17.5003 20.5654 18.2048L20.5649 18.2051Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M1.59396 1.06587C1.52492 0.987424 1.42643 0.941226 1.32219 0.938611C1.21777 0.935822 1.117 0.976614 1.04414 1.0514C0.971095 1.12601 0.932742 1.22781 0.937973 1.33206C0.943028 1.43631 0.99149 1.53358 1.07151 1.6007L3.6407 4.13977C3.78905 4.27679 4.01916 4.27174 4.16141 4.12827C4.30349 3.9848 4.30645 3.75451 4.16804 3.60755L1.59396 1.06587Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M2.73855 5.49729C2.92752 5.49921 3.0886 5.3601 3.11405 5.1727C3.1395 4.9853 3.02131 4.80836 2.83844 4.76007L0.464302 4.10284V4.10267C0.267311 4.05438 0.0677103 4.17135 0.013653 4.36677C-0.0403864 4.56219 0.0706559 4.76511 0.264335 4.82492L2.63847 5.48214V5.48232C2.6709 5.49173 2.70454 5.49679 2.73854 5.49731L2.73855 5.49729Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M5.12297 0.00142903C5.02204 0.00962217 4.9286 0.0582575 4.8641 0.136355C4.7996 0.214627 4.76944 0.315561 4.7806 0.416321L4.96556 2.74792C4.98107 2.9423 5.14302 3.09221 5.33792 3.09274H5.3679C5.4718 3.08559 5.56803 3.03538 5.6334 2.95432C5.69895 2.87326 5.72754 2.76866 5.71272 2.66546L5.52776 0.333863C5.50544 0.131469 5.32572 -0.0161854 5.12297 0.00142452L5.12297 0.00142903Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5 className="mt-1">100 Applauses</h5>
                                                </div>
                                                <div className="d-flex ms-auto align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 20 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.89641 8.56956C5.18448 10.3167 7.55561 11.232 9.76041 11.232C11.9652 11.232 14.3364 10.3167 16.6244 8.56956C18.3301 7.28 19.3701 5.99033 19.4325 5.92793C19.5781 5.74076 19.5781 5.47033 19.4325 5.26225C19.3699 5.24165 18.3299 3.95196 16.6244 2.6624C14.3363 0.915237 11.9652 0 9.76041 0C7.55561 0 5.18441 0.915237 2.89641 2.6624C1.19089 3.95196 0.15089 5.24164 0.109253 5.28316C-0.0364176 5.47033 -0.0364176 5.74076 0.109253 5.94884C0.150894 5.99033 1.19089 7.28004 2.89641 8.5696V8.56956ZM9.76041 1.03996C13.8164 1.03996 17.3108 4.51356 18.33 5.61596C17.3109 6.71836 13.8164 10.192 9.76041 10.192C5.70441 10.192 2.21001 6.71836 1.19081 5.61596C2.20994 4.51356 5.70441 1.03996 9.76041 1.03996Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M9.76011 9.46405C11.8817 9.46405 13.6081 7.73766 13.6081 5.61606C13.6081 3.49446 11.8817 1.76807 9.76011 1.76807C7.63851 1.76807 5.91211 3.49446 5.91211 5.61606C5.91211 7.73766 7.63851 9.46405 9.76011 9.46405ZM9.76011 2.80806C11.2993 2.80806 12.5682 4.07686 12.5682 5.61613C12.5682 7.15541 11.2994 8.4242 9.76011 8.4242C8.22083 8.4242 6.95204 7.15541 6.95204 5.61613C6.95204 4.07686 8.22083 2.80806 9.76011 2.80806Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5>100 Views</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 ">
                                <div className="top_resources ">
                                    <div className="post_box text-start m-0">
                                        <img src="./assets/images/media_post_5.png"
                                            alt=""
                                            className="img-fluid" />
                                        <h2>Tons of rewards from Funge
                                            this year.
                                        </h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                            believable.</p>
                                        <div className="d-flex align-items-center ">
                                            <figure className="m-0">
                                                <img src="./assets/images/eth_media.svg"
                                                    alt=""
                                                    className="img-fluid nft_img " />
                                            </figure>
                                            <div className="info">
                                                <h3>Alec Kleinman</h3>
                                                <h4>Feb 14, 2022 • 4 min read</h4>
                                            </div>
                                        </div>
                                        <div className="post_bottom_info">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 23 23"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M22.2896 15.3887V15.3537C22.2369 14.8853 22.1032 14.4294 21.8947 14.0066L19.4031 7.20409C19.3361 6.95533 19.2033 6.72921 19.0187 6.54985C18.8339 6.3703 18.604 6.24408 18.3535 6.18447C17.7402 6.04675 17.0994 6.23589 16.659 6.68425C16.4798 6.86799 16.3534 7.09636 16.2933 7.34581C16.233 7.59509 16.241 7.85607 16.3167 8.10135V8.14388L12.9403 4.74752C12.148 3.9552 11.1709 4.10269 10.6136 4.65756C10.4061 4.86344 10.2599 5.12303 10.1912 5.40735L9.37639 4.59254H9.37656C9.08701 4.28259 8.68658 4.10008 8.2628 4.08455C7.83884 4.06921 7.42621 4.22209 7.11484 4.51008C6.6935 4.86937 6.47279 5.41066 6.5225 5.96203C6.12818 5.95785 5.74657 6.10254 5.4539 6.36682C5.16121 6.63127 4.97884 6.99629 4.94314 7.38905L4.02341 6.69175C3.80185 6.50836 3.53497 6.38842 3.25065 6.34431C2.9665 6.30038 2.67571 6.33403 2.40902 6.44194C1.83565 6.68861 1.43351 7.21787 1.34947 7.83636C1.316 8.11476 1.35662 8.39697 1.46714 8.65447C1.57767 8.91212 1.75443 9.13596 1.97915 9.30331C1.69413 9.40076 1.44434 9.58084 1.26199 9.82072C0.782069 10.453 0.802106 11.4726 1.76177 12.205L2.46394 12.7374L2.46412 12.7372C2.14353 12.8369 1.86428 13.0388 1.66935 13.312C1.22952 13.9343 1.22446 14.9588 2.24674 15.7361L10.3011 21.8617C11.0734 22.4499 12.029 22.7455 12.9984 22.6962C13.9679 22.6467 14.8885 22.2555 15.5968 21.5918C16.9595 21.8793 18.3753 21.459 19.3605 20.4746L21.1098 18.7252C21.9454 17.8888 22.3813 16.7337 22.3069 15.5539C22.3135 15.4983 22.3074 15.442 22.2895 15.389L22.2896 15.3887ZM5.82028 7.08891C5.96602 6.8609 6.21687 6.72178 6.4876 6.71899C6.63106 6.72091 6.7721 6.75595 6.89988 6.8215L6.98234 6.91389C6.71004 6.97037 6.45796 7.09972 6.2533 7.28799C6.04864 7.47644 5.89907 7.71684 5.82028 7.98356C5.73067 7.85159 5.68291 7.69575 5.68291 7.53626C5.68291 7.37677 5.73067 7.2209 5.82028 7.08896L5.82028 7.08891ZM2.09407 7.95357C2.14759 7.60352 2.37683 7.30545 2.70123 7.16389C2.84574 7.10445 3.00403 7.08666 3.15794 7.11229C3.31205 7.13792 3.45604 7.20591 3.57354 7.30875L5.52041 8.7832L5.9102 9.07816C5.92275 9.11058 5.93513 9.14318 5.95012 9.17561C6.06204 9.39822 6.20969 9.60096 6.38751 9.77544L7.00479 10.3952C6.85435 10.422 6.70861 10.471 6.57246 10.5402C6.24282 10.7076 5.98517 10.9891 5.84763 11.3324L3.73077 9.72787L3.69329 9.69283L2.46621 8.76315L2.46639 8.76333C2.3346 8.67686 2.22983 8.55518 2.16394 8.41189C2.09804 8.26877 2.07381 8.10996 2.09403 7.95356L2.09407 7.95357ZM10.7558 21.2641L2.70591 15.1613C2.07609 14.684 2.04119 14.1168 2.28858 13.7669C2.44181 13.5513 2.69144 13.4251 2.95589 13.4294C3.20692 13.4381 3.45009 13.5199 3.65565 13.6644L7.24186 16.386C7.32065 16.4503 7.42229 16.4798 7.5234 16.4677C7.62451 16.4555 7.7162 16.4029 7.77774 16.3218C7.8391 16.2406 7.8649 16.1381 7.84921 16.0375C7.83352 15.9369 7.77756 15.8471 7.69424 15.7886L4.26542 13.1871L4.23788 13.162L4.18296 13.1221L2.2211 11.6225C1.61881 11.1677 1.60627 10.6229 1.86129 10.2905C2.11615 9.95802 2.63357 9.82571 3.22836 10.268L3.25591 10.2955L5.75504 12.1924H5.75487C5.84203 12.6275 6.0622 13.0247 6.38469 13.3295L12.6026 19.5474C13.0411 20.0379 13.5173 20.4934 14.027 20.9094C14.2413 21.064 14.4698 21.1979 14.7094 21.3093L14.7568 21.3318C14.1703 21.7497 13.4652 21.9686 12.7452 21.9564C12.0251 21.9444 11.3278 21.7017 10.7557 21.2643L10.7558 21.2641ZM20.5649 18.2051L18.8156 19.9544C18.1826 20.5865 17.3246 20.9414 16.4301 20.9414C15.5356 20.9414 14.6777 20.5865 14.0448 19.9544L6.91736 12.802C6.67696 12.5853 6.52338 12.2886 6.48503 11.9673C6.47161 11.8113 6.50525 11.6549 6.58143 11.5183C6.65744 11.3816 6.77284 11.2707 6.91248 11.2C7.10197 11.1238 7.30977 11.1048 7.50991 11.1452C7.71021 11.1857 7.8943 11.2838 8.0395 11.4274L11.2434 14.6314C11.3911 14.7689 11.6214 14.7649 11.764 14.6221C11.9067 14.4794 11.9109 14.2493 11.7732 14.1016L6.9173 9.23811C6.76197 9.09081 6.64309 8.90934 6.57005 8.70816C6.50432 8.53855 6.49927 8.35132 6.55575 8.17821C6.61223 8.00511 6.72676 7.85693 6.87982 7.75861C7.16223 7.58115 7.62961 7.56372 8.1144 8.04346V8.06089L12.9703 12.9119C13.118 13.0494 13.3482 13.0454 13.491 12.9027C13.6338 12.7599 13.6378 12.5298 13.5001 12.3819L8.65444 7.52871C8.6499 7.52174 8.64485 7.51494 8.63944 7.50866L7.55236 6.41409C7.51436 6.37748 7.48002 6.33738 7.44986 6.29415C7.30796 6.11164 7.24503 5.88013 7.27518 5.65089C7.30517 5.42183 7.42563 5.21421 7.60971 5.07457C7.77864 4.90879 8.0084 4.81989 8.24476 4.82878C8.48132 4.83784 8.70358 4.94383 8.85928 5.12199L14.8099 11.0699C14.9589 11.1573 15.1483 11.1315 15.2684 11.0077C15.3886 10.8839 15.4089 10.6939 15.3173 10.5476L11.2338 6.45396C10.7664 5.98658 10.8515 5.48176 11.1438 5.18695C11.4362 4.89199 11.941 4.80709 12.4108 5.2769L16.8392 9.70545C16.9604 9.82608 17.1478 9.84962 17.2951 9.76263C17.4422 9.67547 17.5118 9.49975 17.464 9.33553L17.0442 7.89108C17.0029 7.77254 16.9958 7.64476 17.0236 7.52238C17.0515 7.39983 17.1131 7.28774 17.2016 7.19883C17.4582 6.94658 17.8241 6.83972 18.1763 6.91381C18.303 6.94362 18.4186 7.00864 18.5098 7.10156C18.601 7.19447 18.6639 7.31144 18.6911 7.4387L21.1902 14.2837L21.2077 14.3211H21.2078C21.3865 14.6795 21.4991 15.0673 21.5401 15.4657C21.5396 15.4774 21.5396 15.4891 21.5401 15.5008V15.5283V15.5281C21.6262 16.5206 21.2695 17.5003 20.5654 18.2048L20.5649 18.2051Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M1.59396 1.06587C1.52492 0.987424 1.42643 0.941226 1.32219 0.938611C1.21777 0.935822 1.117 0.976614 1.04414 1.0514C0.971095 1.12601 0.932742 1.22781 0.937973 1.33206C0.943028 1.43631 0.99149 1.53358 1.07151 1.6007L3.6407 4.13977C3.78905 4.27679 4.01916 4.27174 4.16141 4.12827C4.30349 3.9848 4.30645 3.75451 4.16804 3.60755L1.59396 1.06587Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M2.73855 5.49729C2.92752 5.49921 3.0886 5.3601 3.11405 5.1727C3.1395 4.9853 3.02131 4.80836 2.83844 4.76007L0.464302 4.10284V4.10267C0.267311 4.05438 0.0677103 4.17135 0.013653 4.36677C-0.0403864 4.56219 0.0706559 4.76511 0.264335 4.82492L2.63847 5.48214V5.48232C2.6709 5.49173 2.70454 5.49679 2.73854 5.49731L2.73855 5.49729Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M5.12297 0.00142903C5.02204 0.00962217 4.9286 0.0582575 4.8641 0.136355C4.7996 0.214627 4.76944 0.315561 4.7806 0.416321L4.96556 2.74792C4.98107 2.9423 5.14302 3.09221 5.33792 3.09274H5.3679C5.4718 3.08559 5.56803 3.03538 5.6334 2.95432C5.69895 2.87326 5.72754 2.76866 5.71272 2.66546L5.52776 0.333863C5.50544 0.131469 5.32572 -0.0161854 5.12297 0.00142452L5.12297 0.00142903Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5 className="mt-1">100 Applauses</h5>
                                                </div>
                                                <div className="d-flex ms-auto align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 20 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.89641 8.56956C5.18448 10.3167 7.55561 11.232 9.76041 11.232C11.9652 11.232 14.3364 10.3167 16.6244 8.56956C18.3301 7.28 19.3701 5.99033 19.4325 5.92793C19.5781 5.74076 19.5781 5.47033 19.4325 5.26225C19.3699 5.24165 18.3299 3.95196 16.6244 2.6624C14.3363 0.915237 11.9652 0 9.76041 0C7.55561 0 5.18441 0.915237 2.89641 2.6624C1.19089 3.95196 0.15089 5.24164 0.109253 5.28316C-0.0364176 5.47033 -0.0364176 5.74076 0.109253 5.94884C0.150894 5.99033 1.19089 7.28004 2.89641 8.5696V8.56956ZM9.76041 1.03996C13.8164 1.03996 17.3108 4.51356 18.33 5.61596C17.3109 6.71836 13.8164 10.192 9.76041 10.192C5.70441 10.192 2.21001 6.71836 1.19081 5.61596C2.20994 4.51356 5.70441 1.03996 9.76041 1.03996Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M9.76011 9.46405C11.8817 9.46405 13.6081 7.73766 13.6081 5.61606C13.6081 3.49446 11.8817 1.76807 9.76011 1.76807C7.63851 1.76807 5.91211 3.49446 5.91211 5.61606C5.91211 7.73766 7.63851 9.46405 9.76011 9.46405ZM9.76011 2.80806C11.2993 2.80806 12.5682 4.07686 12.5682 5.61613C12.5682 7.15541 11.2994 8.4242 9.76011 8.4242C8.22083 8.4242 6.95204 7.15541 6.95204 5.61613C6.95204 4.07686 8.22083 2.80806 9.76011 2.80806Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5>100 Views</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 ">
                                <div className="top_resources ">
                                    <div className="post_box text-start m-0">
                                        <img src="./assets/images/media_post_6.png"
                                            alt=""
                                            className="img-fluid" />
                                        <h2>Tons of rewards from Funge
                                            this year.
                                        </h2>
                                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                            believable.</p>
                                        <div className="d-flex align-items-center ">
                                            <figure className="m-0">
                                                <img src="./assets/images/eth_media.svg"
                                                    alt=""
                                                    className="img-fluid nft_img " />
                                            </figure>
                                            <div className="info">
                                                <h3>Alec Kleinman</h3>
                                                <h4>Feb 14, 2022 • 4 min read</h4>
                                            </div>
                                        </div>
                                        <div className="post_bottom_info">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 23 23"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M22.2896 15.3887V15.3537C22.2369 14.8853 22.1032 14.4294 21.8947 14.0066L19.4031 7.20409C19.3361 6.95533 19.2033 6.72921 19.0187 6.54985C18.8339 6.3703 18.604 6.24408 18.3535 6.18447C17.7402 6.04675 17.0994 6.23589 16.659 6.68425C16.4798 6.86799 16.3534 7.09636 16.2933 7.34581C16.233 7.59509 16.241 7.85607 16.3167 8.10135V8.14388L12.9403 4.74752C12.148 3.9552 11.1709 4.10269 10.6136 4.65756C10.4061 4.86344 10.2599 5.12303 10.1912 5.40735L9.37639 4.59254H9.37656C9.08701 4.28259 8.68658 4.10008 8.2628 4.08455C7.83884 4.06921 7.42621 4.22209 7.11484 4.51008C6.6935 4.86937 6.47279 5.41066 6.5225 5.96203C6.12818 5.95785 5.74657 6.10254 5.4539 6.36682C5.16121 6.63127 4.97884 6.99629 4.94314 7.38905L4.02341 6.69175C3.80185 6.50836 3.53497 6.38842 3.25065 6.34431C2.9665 6.30038 2.67571 6.33403 2.40902 6.44194C1.83565 6.68861 1.43351 7.21787 1.34947 7.83636C1.316 8.11476 1.35662 8.39697 1.46714 8.65447C1.57767 8.91212 1.75443 9.13596 1.97915 9.30331C1.69413 9.40076 1.44434 9.58084 1.26199 9.82072C0.782069 10.453 0.802106 11.4726 1.76177 12.205L2.46394 12.7374L2.46412 12.7372C2.14353 12.8369 1.86428 13.0388 1.66935 13.312C1.22952 13.9343 1.22446 14.9588 2.24674 15.7361L10.3011 21.8617C11.0734 22.4499 12.029 22.7455 12.9984 22.6962C13.9679 22.6467 14.8885 22.2555 15.5968 21.5918C16.9595 21.8793 18.3753 21.459 19.3605 20.4746L21.1098 18.7252C21.9454 17.8888 22.3813 16.7337 22.3069 15.5539C22.3135 15.4983 22.3074 15.442 22.2895 15.389L22.2896 15.3887ZM5.82028 7.08891C5.96602 6.8609 6.21687 6.72178 6.4876 6.71899C6.63106 6.72091 6.7721 6.75595 6.89988 6.8215L6.98234 6.91389C6.71004 6.97037 6.45796 7.09972 6.2533 7.28799C6.04864 7.47644 5.89907 7.71684 5.82028 7.98356C5.73067 7.85159 5.68291 7.69575 5.68291 7.53626C5.68291 7.37677 5.73067 7.2209 5.82028 7.08896L5.82028 7.08891ZM2.09407 7.95357C2.14759 7.60352 2.37683 7.30545 2.70123 7.16389C2.84574 7.10445 3.00403 7.08666 3.15794 7.11229C3.31205 7.13792 3.45604 7.20591 3.57354 7.30875L5.52041 8.7832L5.9102 9.07816C5.92275 9.11058 5.93513 9.14318 5.95012 9.17561C6.06204 9.39822 6.20969 9.60096 6.38751 9.77544L7.00479 10.3952C6.85435 10.422 6.70861 10.471 6.57246 10.5402C6.24282 10.7076 5.98517 10.9891 5.84763 11.3324L3.73077 9.72787L3.69329 9.69283L2.46621 8.76315L2.46639 8.76333C2.3346 8.67686 2.22983 8.55518 2.16394 8.41189C2.09804 8.26877 2.07381 8.10996 2.09403 7.95356L2.09407 7.95357ZM10.7558 21.2641L2.70591 15.1613C2.07609 14.684 2.04119 14.1168 2.28858 13.7669C2.44181 13.5513 2.69144 13.4251 2.95589 13.4294C3.20692 13.4381 3.45009 13.5199 3.65565 13.6644L7.24186 16.386C7.32065 16.4503 7.42229 16.4798 7.5234 16.4677C7.62451 16.4555 7.7162 16.4029 7.77774 16.3218C7.8391 16.2406 7.8649 16.1381 7.84921 16.0375C7.83352 15.9369 7.77756 15.8471 7.69424 15.7886L4.26542 13.1871L4.23788 13.162L4.18296 13.1221L2.2211 11.6225C1.61881 11.1677 1.60627 10.6229 1.86129 10.2905C2.11615 9.95802 2.63357 9.82571 3.22836 10.268L3.25591 10.2955L5.75504 12.1924H5.75487C5.84203 12.6275 6.0622 13.0247 6.38469 13.3295L12.6026 19.5474C13.0411 20.0379 13.5173 20.4934 14.027 20.9094C14.2413 21.064 14.4698 21.1979 14.7094 21.3093L14.7568 21.3318C14.1703 21.7497 13.4652 21.9686 12.7452 21.9564C12.0251 21.9444 11.3278 21.7017 10.7557 21.2643L10.7558 21.2641ZM20.5649 18.2051L18.8156 19.9544C18.1826 20.5865 17.3246 20.9414 16.4301 20.9414C15.5356 20.9414 14.6777 20.5865 14.0448 19.9544L6.91736 12.802C6.67696 12.5853 6.52338 12.2886 6.48503 11.9673C6.47161 11.8113 6.50525 11.6549 6.58143 11.5183C6.65744 11.3816 6.77284 11.2707 6.91248 11.2C7.10197 11.1238 7.30977 11.1048 7.50991 11.1452C7.71021 11.1857 7.8943 11.2838 8.0395 11.4274L11.2434 14.6314C11.3911 14.7689 11.6214 14.7649 11.764 14.6221C11.9067 14.4794 11.9109 14.2493 11.7732 14.1016L6.9173 9.23811C6.76197 9.09081 6.64309 8.90934 6.57005 8.70816C6.50432 8.53855 6.49927 8.35132 6.55575 8.17821C6.61223 8.00511 6.72676 7.85693 6.87982 7.75861C7.16223 7.58115 7.62961 7.56372 8.1144 8.04346V8.06089L12.9703 12.9119C13.118 13.0494 13.3482 13.0454 13.491 12.9027C13.6338 12.7599 13.6378 12.5298 13.5001 12.3819L8.65444 7.52871C8.6499 7.52174 8.64485 7.51494 8.63944 7.50866L7.55236 6.41409C7.51436 6.37748 7.48002 6.33738 7.44986 6.29415C7.30796 6.11164 7.24503 5.88013 7.27518 5.65089C7.30517 5.42183 7.42563 5.21421 7.60971 5.07457C7.77864 4.90879 8.0084 4.81989 8.24476 4.82878C8.48132 4.83784 8.70358 4.94383 8.85928 5.12199L14.8099 11.0699C14.9589 11.1573 15.1483 11.1315 15.2684 11.0077C15.3886 10.8839 15.4089 10.6939 15.3173 10.5476L11.2338 6.45396C10.7664 5.98658 10.8515 5.48176 11.1438 5.18695C11.4362 4.89199 11.941 4.80709 12.4108 5.2769L16.8392 9.70545C16.9604 9.82608 17.1478 9.84962 17.2951 9.76263C17.4422 9.67547 17.5118 9.49975 17.464 9.33553L17.0442 7.89108C17.0029 7.77254 16.9958 7.64476 17.0236 7.52238C17.0515 7.39983 17.1131 7.28774 17.2016 7.19883C17.4582 6.94658 17.8241 6.83972 18.1763 6.91381C18.303 6.94362 18.4186 7.00864 18.5098 7.10156C18.601 7.19447 18.6639 7.31144 18.6911 7.4387L21.1902 14.2837L21.2077 14.3211H21.2078C21.3865 14.6795 21.4991 15.0673 21.5401 15.4657C21.5396 15.4774 21.5396 15.4891 21.5401 15.5008V15.5283V15.5281C21.6262 16.5206 21.2695 17.5003 20.5654 18.2048L20.5649 18.2051Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M1.59396 1.06587C1.52492 0.987424 1.42643 0.941226 1.32219 0.938611C1.21777 0.935822 1.117 0.976614 1.04414 1.0514C0.971095 1.12601 0.932742 1.22781 0.937973 1.33206C0.943028 1.43631 0.99149 1.53358 1.07151 1.6007L3.6407 4.13977C3.78905 4.27679 4.01916 4.27174 4.16141 4.12827C4.30349 3.9848 4.30645 3.75451 4.16804 3.60755L1.59396 1.06587Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M2.73855 5.49729C2.92752 5.49921 3.0886 5.3601 3.11405 5.1727C3.1395 4.9853 3.02131 4.80836 2.83844 4.76007L0.464302 4.10284V4.10267C0.267311 4.05438 0.0677103 4.17135 0.013653 4.36677C-0.0403864 4.56219 0.0706559 4.76511 0.264335 4.82492L2.63847 5.48214V5.48232C2.6709 5.49173 2.70454 5.49679 2.73854 5.49731L2.73855 5.49729Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M5.12297 0.00142903C5.02204 0.00962217 4.9286 0.0582575 4.8641 0.136355C4.7996 0.214627 4.76944 0.315561 4.7806 0.416321L4.96556 2.74792C4.98107 2.9423 5.14302 3.09221 5.33792 3.09274H5.3679C5.4718 3.08559 5.56803 3.03538 5.6334 2.95432C5.69895 2.87326 5.72754 2.76866 5.71272 2.66546L5.52776 0.333863C5.50544 0.131469 5.32572 -0.0161854 5.12297 0.00142452L5.12297 0.00142903Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5 className="mt-1">100 Applauses</h5>
                                                </div>
                                                <div className="d-flex ms-auto align-items-center">
                                                    <svg width="23"
                                                        height="23"
                                                        viewBox="0 0 20 12"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M2.89641 8.56956C5.18448 10.3167 7.55561 11.232 9.76041 11.232C11.9652 11.232 14.3364 10.3167 16.6244 8.56956C18.3301 7.28 19.3701 5.99033 19.4325 5.92793C19.5781 5.74076 19.5781 5.47033 19.4325 5.26225C19.3699 5.24165 18.3299 3.95196 16.6244 2.6624C14.3363 0.915237 11.9652 0 9.76041 0C7.55561 0 5.18441 0.915237 2.89641 2.6624C1.19089 3.95196 0.15089 5.24164 0.109253 5.28316C-0.0364176 5.47033 -0.0364176 5.74076 0.109253 5.94884C0.150894 5.99033 1.19089 7.28004 2.89641 8.5696V8.56956ZM9.76041 1.03996C13.8164 1.03996 17.3108 4.51356 18.33 5.61596C17.3109 6.71836 13.8164 10.192 9.76041 10.192C5.70441 10.192 2.21001 6.71836 1.19081 5.61596C2.20994 4.51356 5.70441 1.03996 9.76041 1.03996Z"
                                                            fill="black"></path>
                                                        <path
                                                            d="M9.76011 9.46405C11.8817 9.46405 13.6081 7.73766 13.6081 5.61606C13.6081 3.49446 11.8817 1.76807 9.76011 1.76807C7.63851 1.76807 5.91211 3.49446 5.91211 5.61606C5.91211 7.73766 7.63851 9.46405 9.76011 9.46405ZM9.76011 2.80806C11.2993 2.80806 12.5682 4.07686 12.5682 5.61613C12.5682 7.15541 11.2994 8.4242 9.76011 8.4242C8.22083 8.4242 6.95204 7.15541 6.95204 5.61613C6.95204 4.07686 8.22083 2.80806 9.76011 2.80806Z"
                                                            fill="black"></path>
                                                    </svg>

                                                    <h5>100 Views</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="" className="btn btn-secondary">
                                View more articles
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage