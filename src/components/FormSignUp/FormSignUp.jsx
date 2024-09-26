import React, { useContext } from 'react'
import { NotificationContext } from '../../App';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { authService } from '../../service/auth.service';
import * as yup from 'yup';
import InputCustom from '../Input/InputCustom';
import { DatePicker } from 'antd';

const FormSignUp = () => {
    const { showNotification } = useContext(NotificationContext)
    const navigate = useNavigate()
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            gender: "",
        },
        onSubmit: (values) => {
            console.log(values)
            authService.signUp({ ...values, gender: values.gender == "Nam" ? true : false }).then((res) => {
                console.log(res)
                // Thông báo cho người dùng
                showNotification("Tạo tài khoản thành công", "success")
                setTimeout(() => {
                    navigate("/sign-in")
                }, 1000)
            }).catch((err) => {
                console.log(err)
                showNotification(err.response.data.content, "error")
            });
        },
        validationSchema: yup.object({
            name: yup.string().required("Vui lòng không bỏ trống").matches(/^[A-Za-zÀ-ỹ\s]+$/, "Vui lòng chỉ nhập chữ cái không nhập số thứ tự"),
            email: yup.string().required("Vui lòng không bỏ trống").email("Vui lòng nhập đúng định dạng email"),
            password: yup.string().required("Vui lòng không bỏ trống").matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/, "Mật khẩu phải chứa ít nhất 1 chữ hoa, 1 số và 1 ký tự đặc biệt, độ dài tối thiểu 8 ký tự"),
            phone: yup.string().required("Vui lòng không bỏ trống").matches(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[1-9]|9[0-9])[0-9]{7}$/, "Vui lòng nhập số điện thoại đúng định dạng Việt Nam"),
            birthday: yup.string().required("Vui lòng chọn ngày tháng năm sinh"),
            gender: yup.string().required("Vui lòng chọn giới tính"),
        }),
    });
  return (
      <div className='flex justify-center flex-col h-full items-center'>
          <h1 className='text-center text-4xl font-medium uppercase'>Giao diện đăng ký</h1>
          <form onSubmit={handleSubmit}>
              <div className="flex flex-wrap">
                  {/* NAME  */}
                  <InputCustom onChange={handleChange} value={values.name} labelContent={"Name"} name={"name"} placeholder={"Vui lòng nhập Họ tên"} classWrapper='w-1/2 p-3' onBlur={handleBlur} touched={touched.name} error={errors.name} />
                  {/* email  */}
                  <InputCustom onChange={handleChange} value={values.email} labelContent={"Email"} name={"email"} placeholder={"Vui lòng nhập email"} classWrapper='w-1/2 p-3' onBlur={handleBlur} touched={touched.email} error={errors.email}/>
                  {/* password  */}
                  <InputCustom onChange={handleChange} value={values.password} labelContent={"Password"} name={"password"} placeholder={"Vui lòng nhập password"} classWrapper='w-1/2 p-3' onBlur={handleBlur} touched={touched.password} error={errors.password} />
                  {/* phone  */}
                  <InputCustom onChange={handleChange} value={values.phone} labelContent={"Phone Number"} name={"phone"} placeholder={"Vui lòng nhập số điện thoại"} classWrapper='w-1/2 p-3' onBlur={handleBlur} touched={touched.phone} error={errors.phone} />
                  {/* birthday */}
                  <div className="p-3 w-1/2">
                      <lable className="block text-sm font-medium text-gray-900 mb-2">Birthday</lable>
                      <DatePicker className='w-full' format="DD-MM-YYYY" onChange={(dayjs, dateString) => {
                          setFieldValue("birthday", dateString);
                      }} />
                      {errors.birthday && touched.birthday ? (<p className='text-red-500'>{errors.birthday}</p>):null}
                  </div>
                  {/* gender */}
                  <div className="p-3 w-1/2">
                  <lable className="block text-sm font-medium text-gray-900 mb-2">Gender</lable>
                      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' name='gender' value={values.gender} onChange={handleChange}>
                          <option value="">Vui lòng chọn giới tính</option>
                          <option value="Nam">Nam</option>
                          <option value="Nữ">Nữ</option>  
                      </select>
                      {errors.gender && touched.gender ? (<p className='text-red-500'>{errors.gender}</p>):null}
                  </div>
                  <div className="p-3 w-full">
                      <button type='submit' className='py-3 px-5 bg-black text-white rounded-md w-full'>Đăng ký</button>
                  </div>
              </div>
          </form>
    </div>
  )
}

export default FormSignUp;