import React, { useContext } from 'react'
import signInAnimation from './../../assets/Animation/signInAnimation.json'
import { useLottie } from 'lottie-react';
import InputCustom from '../../components/Input/InputCustom';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { authService } from '../../service/auth.service';
import { setLocalStorage } from '../../utils/util';
import { NotificationContext } from '../../App';
import { useDispatch } from 'react-redux';
import { getInfoUser } from '../../redux/authSlice';
import useResponsive from '../../hooks/useReponsive';
import UserHeader from '../../components/UserHeader/UserHeader';

const LoginPage = () => {
    const isResponsive = useResponsive({
        mobile: 576,
        tablet:768,
    })
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const {showNotification} = useContext(NotificationContext)
    const options = {
        animationData:signInAnimation,
        loop: true
      };
    
    const { View } = useLottie(options);
    const {handleSubmit, handleChange, values, errors, touched, handleBlur } = useFormik({
        initialValues: {
            email: "",
            password:"",
        },
        onSubmit: (values) => {
            console.log(values)
            authService.signIn(values).then((res) => {
                console.log(res)
                // B1 thực hiện lưu trữ ở LocalStorage
                setLocalStorage('user', res.data.content)
                dispatch(getInfoUser(res.data.content))
                // B2 thực hiện thông báo và chuyển hướng người dùng
                showNotification("Đăng nhập thành công", "success", 2000)
                //B3 Chuyển hướng người dùng về trang chủ
                setTimeout(() => {
                    navigate("/")
                }, 1000)
            }).catch((err) => {
                console.log(err)
                showNotification(err.response.data.message, "error")
            })
        },
        validationSchema: yup.object({
            email: yup.string().required("Vui lòng không bỏ trống").email("Vui lòng nhập đúng định dạng email"),
            password: yup.string().required("Vui lòng không bỏ trống").min(6, "Vui lòng nhập tối thiểu 6 kí tự").max(10, "Vui lòng nhập tối đa 10 kí tự")
        })
    })
    return (
        <div>
            <UserHeader/>
            <div className="container">
                <div className={`loginPage_content ${isResponsive.mobile?"block":"flex"} items-center h-screen`}>
                    <div className={`loginPage_img ${isResponsive.mobile?"w-full":"w-1/2"}`}>
                        {View}
                    </div>
                    <div className={`loginPage_form ${isResponsive.mobile?"w-full":"w-1/2"}`}>
                        <form className='space-y-5' onSubmit={handleSubmit}>
                            <h1 className='text-center text-4xl font-medium uppercase'>Giao diện đăng nhập</h1>
                            {/* EMAIL  */}
                            <InputCustom name={"email"} onChange={handleChange} value={values.email} labelContent={"Email"} placeholder={"Vui lòng nhập email"} error={errors.email} touched={touched.email} onBlur={handleBlur} />
                            <InputCustom name={"password"} onChange={handleChange} value={values.password} placeholder={"Vui lòng nhập mật khẩu"} labelContent={"Password"} typeInput='password' error={errors.password} touched={touched.password} onBlur={handleBlur} />
                            <div>
                                <button className='inline-block w-full bg-black text-white py-2 px-5 rounded-md'>Đăng nhập</button>
                                <Link className='mt-3 text-blue-600 inline-block hover:underline'>Chưa có tài khoản vui lòng bấm vào đây</Link>
                            </div>
                        </form>
                    </div>
                </div>
              
            </div>
        </div>
    );
}

export default LoginPage;