import React, { useState } from 'react'
import style from './login.module.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import {NavLink,useNavigate} from 'react-router-dom'


function Login() {
  const navigate = useNavigate();
  const [loader,setLoader]=useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    try{
      const { data } = await axios.post(`${import.meta.env.VITE_API}/auth/signin`, user);
      localStorage.setItem('userToken',data.token);
      setUser({ email: '', password: '' });
      toast('login is successfull!');
      navigate('/')
    }
    catch(error){
      toast.error(error.response.data.message);
    }finally{
      setLoader(false);
    }
  }
  return (
    <div className={`container `}>
      <div className={`${style.login} m-lg-5 my-5 mx-0   d-flex flex-row-reverse justify-content-between flex-wrap`}>


        <form onSubmit={handleSubmit} className={`col-md-6 col-12 p-md-5 p-4 d-flex flex-column justify-content-evenly gap-5`}>
          <div className='d-flex flex-column gap-3'>
            <label htmlFor='email' className={`color1 fw-semibold CrimsonTextFont`}>Email</label>
            <input type='email' id='email' name='email' value={user.email} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>
          <div className='d-flex flex-column gap-3'>
            <label htmlFor='password' className={`color1 fw-semibold CrimsonTextFont`}>Password</label>
            <input type='password' id='password' name='password' value={user.password} onChange={handleChange} className={`${style.inputStyle}`} required></input>
          </div>

          <NavLink className={`nav-link fs-6  CrimsonTextFont text-center  color1 `} to="/SendCode" >forget password ?</NavLink>
          

          <input className={`bgcolor1 fw-semibold whiteC p-2  CrimsonTextFont ${style.submit}`} type='submit' disabled={loader?'disabled':null } value="login"></input>
        </form>
        <div className={`${style.animation} bgcolor1 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center `}>
          <svg className={`col-12`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 732 626" fill="none">
            <g clipPath="url(#clip0_139_33)">
              <path d="M376.763 311.697C379.384 322.197 375.878 332.05 368.935 333.704C361.991 335.357 354.24 328.186 351.62 317.681C350.514 313.499 350.464 309.116 351.475 304.897L340.957 260.267L362.821 255.807L370.869 300.278C373.755 303.57 375.776 307.485 376.763 311.697Z" fill="#FDADB0" />
              <path d="M285.095 566.897L286.442 596.149L285.093 604.244L289.814 613.687L326.913 617.734L328.937 600.196L309.376 590.078L308.807 573.55L285.095 566.897Z" fill="#FDADB0" />
              <path d="M324.215 610.989L322.191 613.687L283.34 602.491C283.34 602.491 285.093 619.758 285.093 623.13C285.093 626.503 349.173 626.503 358.815 625.154C368.458 623.805 365.361 615.036 365.361 615.036L325.373 596.107L324.215 610.989Z" fill="#2F2E43" />
              <path d="M188.439 545.365L180.354 573.509L176.486 580.746L177.937 591.204L211.79 606.911L219.319 590.943L204.025 575.097L213.619 550.219L188.439 545.365Z" fill="#FDADB0" />
              <path d="M211.392 599.657L208.611 601.566L175.386 578.525C175.386 578.525 171.521 595.445 170.441 598.64C169.362 601.835 230.072 622.342 239.639 624.15C249.206 625.958 249.079 616.659 249.079 616.659L217.252 585.929L211.392 599.657Z" fill="#2F2E43" />
              <path d="M287.71 83.9671L289.126 106.973L246.168 109.152L259.471 78.8418L287.71 83.9671Z" fill="#FDADB0" />
              <path d="M290.223 103.532C278.708 108.667 260.291 107.262 239.42 103.532L236.158 248.128C236.158 248.128 301.446 261.254 323.894 237.035L312.079 118.89L290.223 103.532Z" fill="#E0E1E2" />
              <path d="M316.805 240.579L224.635 249.689L179.149 558.536H214.002L273.682 346.909L278.408 586.743H310.307L337.48 293.153L316.805 240.579Z" fill="#2F2E43" />
              <path d="M252.524 94.6707L221.556 112.997C209.824 119.939 204.295 133.953 208.125 147.036L232.059 228.782C232.059 228.782 193.085 295.74 205.749 301.647C234.208 314.921 276.676 311.689 276.676 311.689L267.184 151.38L252.524 94.6707Z" fill="#3F3D58" />
              <path d="M288.877 102.924L323.894 116.527L332.164 217.541L355.324 298.917C316.096 313.236 319.759 306.563 319.759 306.563L313.261 166.148L288.877 102.924Z" fill="#3F3D58" />
              <path d="M340.031 297.196L339.911 296.643L304.117 131.092C303.117 126.467 304.396 121.83 307.625 118.37C310.855 114.91 315.394 113.317 320.078 113.998C325.856 114.838 330.481 119.046 331.861 124.719L371.177 286.325L340.031 297.196Z" fill="#3F3D58" />
              <path d="M269.07 90.0789C288.318 90.0789 303.922 74.4751 303.922 55.2268C303.922 35.9785 288.318 20.3747 269.07 20.3747C249.822 20.3747 234.218 35.9785 234.218 55.2268C234.218 74.4751 249.822 90.0789 269.07 90.0789Z" fill="#FDADB0" />
              <path d="M285.651 10.0733C293.328 12.7714 297.721 14.3153 301.744 18.1917C308.541 24.7396 309.663 33.49 310.705 41.6204C311.52 47.9809 312.575 56.2046 308.85 65.6004C307.579 68.8068 301.413 83.0927 289.611 84.898C287.294 85.2525 281.852 85.3458 283.421 84.1878C297.936 73.4714 304.131 67.0019 303.623 50.4861C303.308 40.2239 287.627 29.1441 278.316 27.1523C274.393 26.3134 269.171 27.0798 265.427 30.1538C257.601 36.5783 257.935 63.1447 249.683 68.6982C246.29 70.9821 248.551 54.9053 246.16 57.5124C241.442 62.6566 244.468 70.5346 245.316 73.5347C249.337 87.7656 256.92 89.1584 260.848 101.311C265.089 114.431 259.751 126.784 258.485 129.713C256.284 134.808 252.505 143.553 243.872 147.749C232.914 153.074 224.276 146.14 219.182 152.085C216.334 155.408 217.874 158.928 212.73 169.265C211.051 172.639 210.212 174.327 209.469 174.267C205.951 173.984 200.257 145.829 209.467 119.609C213.332 108.605 217.119 97.8246 227.27 89.3944C232.636 84.9375 237.137 83.3337 238.418 78.129C240.249 70.6934 232.649 67.5197 231.125 55.7876C230.083 47.764 229.352 36.2886 232.185 28.9335C234.86 21.9877 237.183 15.9583 243.261 10.4915C244.721 9.17842 256.506 0.253037 269.002 0.00126749C274.755 -0.114473 278.981 7.72912 285.651 10.0733Z" fill="#2F2E43" />
              <path d="M359.295 314.523C406.373 314.523 444.538 276.358 444.538 229.28C444.538 182.201 406.373 144.037 359.295 144.037C312.216 144.037 274.052 182.201 274.052 229.28C274.052 276.358 312.216 314.523 359.295 314.523Z" fill="#BB9CC0" />
              <path d="M337.725 284.894C342.9 266.227 348.075 247.561 353.249 228.895C354.351 224.921 355.203 220.507 357.725 217.135C359.675 214.527 362.741 212.821 365.986 213.894C373.723 216.45 373.598 227.615 373.461 234.128C373.253 243.961 371.034 253.772 366.948 262.722C366.387 263.949 366.597 265.413 367.845 266.142C368.919 266.771 370.702 266.48 371.265 265.245C375.356 256.284 377.788 246.691 378.354 236.848C378.842 228.355 378.879 217.154 371.517 211.366C367.919 208.537 363.327 207.696 359.109 209.652C354.94 211.584 352.395 215.585 350.794 219.728C349.014 224.334 347.954 229.274 346.637 234.027L342.391 249.343C339.228 260.75 336.066 272.157 332.904 283.564C332.043 286.67 336.865 287.995 337.725 284.894Z" fill="white" />
              <path d="M359.896 258.897C363.098 246.878 364.734 234.45 364.747 222.012C364.751 218.794 359.751 218.789 359.747 222.012C359.734 234.028 358.168 245.956 355.074 257.568C354.245 260.68 359.067 262.008 359.896 258.897Z" fill="white" />
              <path d="M308.494 258.753C311.845 242.596 315.472 226.387 320.123 210.548C323.894 197.705 330.397 183.151 344.121 178.494C350.937 176.181 358.324 176.554 365.301 177.896C372.219 179.226 379.226 181.207 385.601 184.236C391.637 187.104 397.221 191.056 401.194 196.501C405.116 201.875 407.558 208.112 408.875 214.608C411.93 229.681 408.334 245.079 404.305 259.607C403.769 261.54 403.221 263.47 402.672 265.4C401.791 268.501 406.614 269.824 407.493 266.73C411.946 251.067 416.571 234.705 414.496 218.266C413.599 211.157 411.605 204.173 408.051 197.916C404.41 191.505 399.155 186.264 392.856 182.454C386.503 178.612 379.352 176.167 372.191 174.331C364.584 172.382 356.669 171.181 348.835 172.271C341.447 173.298 334.792 176.801 329.561 182.089C324.202 187.507 320.578 194.276 317.904 201.351C314.954 209.154 313.028 217.35 311 225.428C308.855 233.966 306.855 242.54 304.999 251.145C304.548 253.236 304.107 255.329 303.672 257.423C303.398 258.744 304.058 260.125 305.418 260.499C306.657 260.839 308.218 260.081 308.494 258.753Z" fill="white" />
              <path d="M334.264 207.066C338.163 195.235 350.718 187.91 362.875 188.722C376.35 189.622 388.029 199.463 392.76 211.846C395.571 219.204 396.396 227.303 395.214 235.089C395.012 236.422 395.55 237.777 396.96 238.164C398.142 238.489 399.832 237.761 400.035 236.418C402.397 220.856 398.057 203.898 385.809 193.375C380.066 188.44 373.032 185.025 365.502 184.002C358.261 183.018 350.961 184.359 344.55 187.884C337.518 191.751 331.963 198.089 329.442 205.737C328.433 208.8 333.26 210.113 334.264 207.066Z" fill="white" />
              <path d="M323.625 229.997C322.551 242.824 319.318 255.507 314.088 267.27C313.54 268.503 313.73 269.956 314.985 270.691C316.05 271.314 317.854 271.034 318.406 269.794C324.019 257.168 327.472 243.77 328.625 229.997C328.738 228.65 327.395 227.497 326.125 227.497C324.679 227.497 323.738 228.646 323.625 229.997Z" fill="white" />
              <path d="M384.021 244.315C382.947 257.141 379.714 269.824 374.484 281.588C373.936 282.82 374.126 284.274 375.381 285.008C376.446 285.631 378.25 285.351 378.802 284.111C384.415 271.485 387.868 258.088 389.021 244.315C389.134 242.968 387.791 241.815 386.521 241.815C385.075 241.815 384.134 242.964 384.021 244.315Z" fill="white" />
              <path d="M336.205 234.364C339.42 221.615 344.747 209.533 351.974 198.55C353.748 195.854 349.42 193.346 347.657 196.026C340.213 207.339 334.695 219.904 331.384 233.035C330.597 236.156 335.418 237.487 336.205 234.364Z" fill="white" />
              <path d="M287.343 211.895C298.106 210.763 307.375 215.606 308.045 222.713C308.715 229.819 300.534 236.496 289.767 237.627C285.472 238.14 281.124 237.579 277.087 235.99L231.427 240.19L230.056 217.918L275.215 216.142C278.876 213.742 283.035 212.286 287.343 211.895Z" fill="#FDADB0" />
              <path d="M231.713 114.053C220.66 112.497 210.291 119.764 207.993 130.687C199.979 168.794 185.596 249.968 208.185 251.323C237.722 253.095 266.076 246.007 266.076 246.007L258.988 205.247L235.949 202.884L249.501 139.498C252.074 127.462 243.9 115.77 231.713 114.053Z" fill="#3F3D58" />
            </g>
            <defs>
              <clipPath id="clip0_139_33">
                <rect width="731.67" height="625.997" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

    </div>
  )
}



export default Login
