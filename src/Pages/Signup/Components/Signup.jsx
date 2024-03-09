import React,{useState} from 'react'
import style from './Signup.module.css'
import axios from 'axios';

import { toast } from 'react-toastify';

function Signup() {
  const [loader,setLoader]=useState(false);
  const [user,setUser] = useState({
    userName:'',
    email:'',
    password:'',
    image:'',
  });
  const handleChange = (e)=>{
    const  {name , value}= e.target;
    setUser({
      ...user,
      [name]:value,
    })
  }
  const handleImageChange = (e)=>{
    const {name , files} = e.target;
    setUser({
      ...user,
      [name]:files[0],
    })
  }
  const handleSubmit = async (e)=>{
    e.preventDefault();
    setLoader(true);
    const formData =new FormData();
    formData.append('userName',user.userName);
    formData.append('email',user.email);
    formData.append('password',user.password);
    formData.append('image',user.image);

    
    try{
      const {data} = await axios.post(`${import.meta.env.VITE_API}/auth/signup`,formData);
      e.target.reset();
      toast('Your account has been created successfully!');
    }
    catch(error){
      toast.error(error.response.data.message);
    }finally{
      setLoader(false);
    }
  }
  return (
    <div className={`container`}>
      <div className={`${style.signUp} m-lg-5 my-5 mx-0   d-flex justify-content-between flex-wrap`}>
        <form  onSubmit={handleSubmit} className={`col-md-6 col-12 p-md-5 p-4 d-flex flex-column justify-content-between gap-3`}>
          <div className='d-flex flex-column gap-3'>
            <label htmlFor='userName' className={`color1 fw-semibold `}>User Name</label>
            <input type='text' id='userName' name='userName' value={user.userName} onChange={handleChange} className={`${style.inputStyle}`} required ></input>
          </div>
          <div  className='d-flex flex-column gap-3'>
            <label htmlFor='email' className={`color1 fw-semibold`}>Email</label>
            <input type='email' id='email' name='email' value={user.email} onChange={handleChange} className={`${style.inputStyle}` }  required></input>
          </div>
          <div  className='d-flex flex-column gap-3'>
            <label htmlFor='password' className={`color1 fw-semibold`}>Password</label>
            <input type='password' id='password' name='password' value={user.password} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <div  className='d-flex flex-column gap-3'>
            <label htmlFor='image' className={`color1 fw-semibold`}>Image</label>
            <input type='file' id='image' name='image'  onChange={handleImageChange} ></input>
          </div>

          <input  className={`bgcolor1 fw-semibold whiteC p-2  ${style.submit}`} type='submit' disabled={loader?'disabled':null } value="Sign up"></input>
        </form>
        <div className={`${style.animation} bgcolor1 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center `}>
          <svg className={`col-md-10 col-8`} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 363 446" fill="none">
            <g clipPath="url(#clip0_130_810)">
              <path d="M351.268 164.384H11.4215C8.39343 164.38 5.49034 163.111 3.34914 160.856C1.20795 158.6 0.00349649 155.542 0 152.352V12.0312C0.00349649 8.84148 1.20795 5.78342 3.34914 3.52791C5.49034 1.27241 8.39343 0.00365454 11.4215 -2.86102e-05H351.268C354.296 0.00365454 357.199 1.27241 359.34 3.52791C361.481 5.78342 362.686 8.84148 362.689 12.0312V152.352C362.686 155.542 361.481 158.6 359.34 160.856C357.199 163.111 354.296 164.38 351.268 164.384Z" fill="#F2F2F2" />
              <path d="M272.008 156.71H65.3667C49.9681 156.692 35.2052 150.24 24.3167 138.771C13.4283 127.301 7.30351 111.75 7.28613 95.5291V68.8613C7.30349 52.6406 13.4282 37.0894 24.3167 25.6196C35.2051 14.1498 49.9681 7.69797 65.3667 7.67957H297.324C312.723 7.69797 327.486 14.1498 338.374 25.6196C349.262 37.0894 355.387 52.6406 355.405 68.8613C355.38 92.1522 346.585 114.482 330.951 130.951C315.316 147.42 294.118 156.684 272.008 156.71Z" fill="white" />
              <path d="M218.703 47.8489H82.1106C81.3294 47.8489 80.5802 47.522 80.0278 46.9401C79.4754 46.3582 79.165 45.569 79.165 44.746C79.165 43.9231 79.4754 43.1339 80.0278 42.552C80.5802 41.9701 81.3294 41.6432 82.1106 41.6432H218.703C219.484 41.6432 220.233 41.9701 220.786 42.552C221.338 43.1339 221.648 43.9231 221.648 44.746C221.648 45.569 221.338 46.3582 220.786 46.9401C220.233 47.522 219.484 47.8489 218.703 47.8489Z" fill="#E6E6E6" />
              <path d="M287.848 80.9545H82.1106C81.3294 80.9545 80.5802 80.6276 80.0278 80.0457C79.4754 79.4638 79.165 78.6745 79.165 77.8516C79.165 77.0287 79.4754 76.2394 80.0278 75.6575C80.5802 75.0756 81.3294 74.7487 82.1106 74.7487H287.848C288.629 74.7487 289.379 75.0756 289.931 75.6575C290.483 76.2394 290.794 77.0287 290.794 77.8516C290.794 78.6745 290.483 79.4638 289.931 80.0457C289.379 80.6276 288.629 80.9545 287.848 80.9545Z" fill="#E6E6E6" />
              <path d="M287.848 114.06H82.1106C81.3294 114.06 80.5802 113.733 80.0278 113.151C79.4754 112.569 79.165 111.78 79.165 110.957C79.165 110.134 79.4754 109.345 80.0278 108.763C80.5802 108.181 81.3294 107.854 82.1106 107.854H287.848C288.629 107.854 289.379 108.181 289.931 108.763C290.483 109.345 290.794 110.134 290.794 110.957C290.794 111.78 290.483 112.569 289.931 113.151C289.379 113.733 288.629 114.06 287.848 114.06Z" fill="#E6E6E6" />
              <path d="M287.848 114.06H82.1106C81.3294 114.06 80.5802 113.733 80.0278 113.151C79.4754 112.569 79.165 111.78 79.165 110.957C79.165 110.134 79.4754 109.345 80.0278 108.763C80.5802 108.181 81.3294 107.854 82.1106 107.854H287.848C288.629 107.854 289.379 108.181 289.931 108.763C290.483 109.345 290.794 110.134 290.794 110.957C290.794 111.78 290.483 112.569 289.931 113.151C289.379 113.733 288.629 114.06 287.848 114.06Z" fill="#E6E6E6" />
              <path d="M204.289 84.7541C204.322 85.6888 204.549 86.6045 204.954 87.4368C205.359 88.269 205.932 88.9977 206.633 89.5713C207.335 90.1449 208.147 90.5495 209.012 90.7567C209.878 90.964 210.777 90.9687 211.644 90.7706L222.878 110.183L227.659 99.496L216.258 82.7001C215.846 81.1866 214.921 79.8851 213.658 79.0423C212.395 78.1994 210.883 77.8737 209.408 78.1269C207.932 78.38 206.596 79.1945 205.653 80.416C204.709 81.6374 204.224 83.181 204.289 84.7541Z" fill="#FFB6B6" />
              <path d="M288.589 140.389L249.876 118.269L237.665 106.201C237.665 106.201 232.357 104.704 234.311 102.886C236.265 101.068 230.697 99.3145 230.697 99.3145L224.142 92.8362L214.827 99.7787L217.523 104.18C217.523 104.18 217.337 111.468 221.127 110.066C224.917 108.664 223.97 114.707 223.97 114.707L246.589 151.643L288.589 140.389Z" fill="#BB9CC0" />
              <path d="M174.313 119.549C195.197 119.549 212.126 101.716 212.126 79.7172C212.126 57.7188 195.197 39.8856 174.313 39.8856C153.43 39.8856 136.5 57.7188 136.5 79.7172C136.5 101.716 153.43 119.549 174.313 119.549Z" fill="#67729D" />
              <path d="M288.708 430.514H280.846L277.104 398.569H288.708V430.514Z" fill="#FFB6B6" />
              <path d="M292.858 444.863H287.22L286.214 439.256L283.636 444.863H268.682C267.965 444.863 267.267 444.622 266.689 444.175C266.112 443.727 265.685 443.097 265.472 442.376C265.259 441.655 265.27 440.882 265.504 440.168C265.737 439.454 266.182 438.837 266.771 438.408L278.714 429.721V424.052L291.274 424.841L292.858 444.863Z" fill="#2F2E41" />
              <path d="M225.826 430.514H217.963L214.222 398.569H225.826V430.514Z" fill="#FFB6B6" />
              <path d="M229.975 444.863H224.337L223.331 439.256L220.753 444.863H205.799C205.082 444.863 204.384 444.622 203.806 444.175C203.229 443.727 202.803 443.097 202.589 442.376C202.376 441.655 202.387 440.882 202.621 440.168C202.855 439.454 203.299 438.837 203.889 438.408L215.831 429.721V424.052L228.392 424.841L229.975 444.863Z" fill="#2F2E41" />
              <path d="M280.366 188.917H240.683V236.507H280.366V188.917Z" fill="#FFB6B6" />
              <path d="M241.599 212.39L234.883 220.751L223.283 246.475L194.055 319.731L187.874 335.223L192.865 362.61C192.865 362.61 193.673 381.905 193.673 385.064C193.673 391.495 198.78 395.058 198.78 395.058L202.526 415.611L238.851 414.003C238.851 414.003 237.584 391.348 229.976 385.633C222.367 379.919 218.87 350.136 218.87 350.136L214.736 336.922L255.03 286.608L255.29 304.195L255.416 312.708C255.416 312.708 249.515 368.075 256.393 378.82C263.272 389.565 256.534 388.301 256.534 388.301L256.861 410.466L299.902 410.788L290.407 346.974C290.407 346.974 285.585 342.964 288.165 338.933C290.745 334.902 285.665 329.964 285.665 329.964L287.943 280.147C287.943 280.147 285.42 271.542 288.388 270.423C291.355 269.305 288.777 261.905 288.777 261.905L289.218 252.263L280.366 222.358L241.599 212.39Z" fill="#2F2E41" />
              <path d="M280.977 188.917L285.25 175.412L288.303 170.91L289.524 158.048C289.524 123.32 282.17 129.103 282.17 129.103L277.924 116.889L258.388 116.246L245.872 128.787L235.493 132.645L231.429 154.89L238.851 178.627L240.683 191.489C237.189 198.284 237.484 195.07 240.378 200.171L274.871 210.139C287.082 214.641 287.082 203.065 284.633 200.171C282.185 197.277 280.977 188.917 280.977 188.917Z" fill="#BB9CC0" />
              <path d="M265.632 111.929C275.634 111.929 283.743 103.388 283.743 92.8514C283.743 82.315 275.634 73.7736 265.632 73.7736C255.63 73.7736 247.521 82.315 247.521 92.8514C247.521 103.388 255.63 111.929 265.632 111.929Z" fill="#FFB6B6" />
              <path d="M289.81 118.317C289.981 118.62 290.084 118.96 290.113 119.311C290.142 119.663 290.095 120.016 289.976 120.346C289.856 120.675 289.668 120.972 289.425 121.214C289.182 121.456 288.89 121.638 288.571 121.745C286.141 122.594 284.645 125.07 282.899 127.05C281.159 129.025 278.357 130.665 276.135 129.32C273.919 127.983 273.766 124.568 271.91 122.716C270.103 120.915 267.099 121.134 264.975 122.504L264.911 122.545C264.545 122.797 264.116 122.93 263.678 122.928C263.24 122.925 262.813 122.788 262.448 122.533C262.083 122.278 261.798 121.915 261.627 121.491C261.456 121.066 261.406 120.598 261.485 120.145C262.23 115.974 262.974 111.804 263.717 107.635C261.763 112.594 258.926 117.112 255.359 120.947C254.377 122.142 253.132 123.064 251.733 123.635C250.463 124.06 249.23 122.677 247.996 122.928C251.061 120.105 261.367 102.008 259.523 89.911C257.356 90.1683 255.188 90.4255 253.021 90.6827C252.786 89.6023 252.285 88.6062 251.568 87.7952C251.656 88.8468 251.529 89.9058 251.196 90.9014C250.292 91.0107 249.382 91.1136 248.479 91.2229C247.221 91.3709 245.854 91.4995 244.773 90.805C242.972 89.6474 242.917 86.9077 243.43 84.7469C244.932 78.4638 249.486 73.2096 255.06 70.4571C260.634 67.7111 262.282 73.827 268.156 71.872C279.755 68.0134 288.644 74.6116 291.776 86.8563C294.408 97.1267 292.497 108.027 289.81 118.317Z" fill="#2F2E41" />
              <path d="M339.95 445.278H317.773L317.678 445.096C317.395 444.555 317.121 443.981 316.865 443.391C314.581 438.239 313.615 432.347 312.763 427.149L312.122 423.231C312.044 422.756 312.103 422.268 312.29 421.829C312.477 421.39 312.785 421.019 313.173 420.765C313.561 420.511 314.012 420.385 314.469 420.402C314.926 420.42 315.368 420.581 315.737 420.864C319.107 423.448 322.479 426.028 325.852 428.607C327.129 429.585 328.587 430.718 329.984 431.943C330.119 431.253 330.26 430.562 330.401 429.88C330.498 429.409 330.726 428.979 331.057 428.646C331.387 428.313 331.804 428.091 332.255 428.009C332.706 427.926 333.169 427.988 333.587 428.185C334.004 428.382 334.356 428.706 334.598 429.115L337.192 433.506C339.085 436.713 340.755 439.873 340.415 443.281C340.417 443.323 340.414 443.364 340.406 443.405C340.338 443.965 340.212 444.515 340.03 445.046L339.95 445.278Z" fill="#F0F0F0" />
              <path d="M362.208 445.784L151.474 446C151.264 445.999 151.063 445.91 150.914 445.753C150.766 445.596 150.683 445.383 150.683 445.162C150.683 444.94 150.766 444.728 150.914 444.571C151.063 444.414 151.264 444.325 151.474 444.324L362.208 444.107C362.419 444.109 362.62 444.197 362.768 444.354C362.917 444.511 363 444.724 363 444.946C363 445.167 362.917 445.38 362.768 445.537C362.62 445.694 362.419 445.783 362.208 445.784Z" fill="#CACACA" />
              <path d="M170.876 133.328L147.696 112.707C146.904 112.001 146.41 110.992 146.322 109.903C146.235 108.813 146.562 107.732 147.231 106.895L151.497 101.574C152.168 100.739 153.125 100.219 154.16 100.127C155.194 100.035 156.221 100.379 157.014 101.084L180.194 121.704C180.987 122.411 181.481 123.419 181.568 124.509C181.655 125.598 181.328 126.68 180.659 127.516L176.393 132.838C175.723 133.672 174.765 134.193 173.731 134.284C172.696 134.376 171.67 134.032 170.876 133.328Z" fill="#BB9CC0" />
              <path d="M148.912 107.324C148.552 107.775 148.376 108.358 148.423 108.945C148.47 109.532 148.736 110.076 149.163 110.456L172.343 131.077C172.771 131.456 173.324 131.642 173.881 131.592C174.439 131.543 174.955 131.262 175.316 130.813L179.582 125.491C179.943 125.04 180.119 124.458 180.072 123.871C180.025 123.283 179.759 122.74 179.332 122.359L156.152 101.739C155.724 101.359 155.171 101.174 154.614 101.223C154.056 101.273 153.54 101.553 153.179 102.003L148.912 107.324Z" fill="white" />
              <path d="M162.521 115.34C162.44 115.459 162.335 115.556 162.212 115.624C162.09 115.693 161.954 115.73 161.816 115.733L158.174 115.821C158.057 115.824 157.94 115.802 157.831 115.758C157.722 115.713 157.623 115.647 157.538 115.561C157.453 115.476 157.385 115.374 157.338 115.262C157.291 115.149 157.265 115.027 157.262 114.904C157.26 114.781 157.28 114.658 157.322 114.543C157.365 114.428 157.428 114.323 157.509 114.234C157.59 114.145 157.687 114.074 157.794 114.024C157.901 113.974 158.016 113.947 158.133 113.944L160.516 113.886L158.169 107.364C158.086 107.132 158.094 106.874 158.191 106.647C158.288 106.421 158.467 106.244 158.687 106.156C158.908 106.068 159.153 106.075 159.368 106.177C159.584 106.279 159.752 106.467 159.836 106.699L162.629 114.462C162.679 114.602 162.697 114.753 162.681 114.903C162.664 115.052 162.614 115.195 162.535 115.319L162.521 115.34Z" fill="#67729D" />
              <path d="M162.988 116.98C163.866 117.115 164.706 117.453 165.447 117.967C166.188 118.482 166.814 119.161 167.279 119.958C167.744 120.755 168.037 121.649 168.139 122.578C168.24 123.508 168.147 124.449 167.866 125.336L184.963 139.21L174.358 143.054L159.748 129.29C158.364 128.693 157.237 127.583 156.579 126.169C155.921 124.755 155.778 123.136 156.177 121.619C156.576 120.102 157.49 118.791 158.746 117.936C160.001 117.081 161.51 116.741 162.988 116.98Z" fill="#FFB6B6" />
              <path d="M252.003 123.839L208.227 152.191C208.227 152.191 190.577 145.312 194.026 142.128C197.476 138.943 186.495 136.79 186.495 136.79L174.364 128.193L167.325 136.811C167.325 136.811 168.607 150.808 170.79 148.385C172.972 145.961 176.234 152.582 176.234 152.582C176.234 152.582 177.198 159.975 183.41 158.114C189.623 156.254 206.292 175.754 206.292 175.754L260.167 154.588L252.003 123.839Z" fill="#BB9CC0" />
              <path d="M172.983 95.6953C172.476 95.6953 171.975 95.5708 171.522 95.3316C171.068 95.0925 170.673 94.7453 170.368 94.3176L162.351 83.0567C162.093 82.695 161.906 82.2833 161.8 81.8453C161.693 81.4072 161.669 80.9513 161.73 80.5037C161.791 80.056 161.935 79.6254 162.153 79.2363C162.372 78.8472 162.661 78.5072 163.005 78.2359C163.698 77.688 164.57 77.4527 165.429 77.5819C165.854 77.6459 166.262 77.7974 166.632 78.0278C167.001 78.2582 167.324 78.563 167.581 78.9248L172.827 86.2913L186.299 65.005C186.78 64.2451 187.527 63.7175 188.377 63.5384C189.228 63.3593 190.111 63.5433 190.832 64.0499C191.553 64.5565 192.054 65.3442 192.224 66.2398C192.394 67.1354 192.22 68.0654 191.739 68.8253L175.704 94.1618C175.414 94.62 175.024 94.9983 174.566 95.2649C174.109 95.5316 173.597 95.6788 173.074 95.6942C173.044 95.6947 173.014 95.6953 172.983 95.6953Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0_130_810">
                <rect width="363" height="446" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>


    </div>
  )
}

export default Signup