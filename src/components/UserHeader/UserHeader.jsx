import React from 'react'
import { Link } from 'react-router-dom';
import LogoIcon from '../Icon/LogoIcon';

import { path } from '../../common/path';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Space } from 'antd';
import { useSelector } from 'react-redux';
import LogoutIcon from '../Icon/LogoutIcon';
import UserIcon from '../Icon/UserIcon';
import FormSearchProduct from '../Form/FormSearchProduct';
import WrapperSuggestJob from '../WrapperSuggestJob/WrapperSuggestJob';
const items = [
    {
      label: <Link className='flex space-x-2 items-center'><UserIcon /><span>Thông tin cá nhân</span></Link>,
      key: '0',
    },
    {
      label: <Link className='flex space-x-2 items-center'><LogoutIcon /><span>Đăng xuất</span></Link>,
      key: '1',
    },
  
  
  ];
const UserHeader = () => {
    const { infoUser } = useSelector(state => state.authSlice)
    const checkUserLogin = () => {
        return infoUser ? <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <Avatar className="cursor-pointer hover:bg-orange-500 duration-300">{infoUser.user.name.slice(0, 1)}</Avatar>
        </Dropdown> : <>
          <Link to={path.signIn} className='py-2 px-4 rounded-md hover:bg-gray-200 duration-300'>sign in</Link>
          <Link to={path.signUp} className='py-2 px-4 text-green-500 border border-green-500 rounded-md hover:bg-green-500 duration-300 hover:text-white '>Join</Link>
        </>
      }
    
    return (
        <header className='py-5 mb-4'>
            <div className="container">
                <div className="header_content flex items-center justify-between">
                    <div className="header_logo flex items-center space-x-5">
                        <Link to={path.homePage}>
                            <LogoIcon />
                        </Link>
                        <WrapperSuggestJob>
                            <FormSearchProduct />
                        </WrapperSuggestJob>
                    </div>
                    <nav className="header_navigate space-x-5">
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='bg-white rounded-md px-2 py-2 hover:bg-gray-100 hover:rounded-md hover:px-2 hover:py-2 duration-300'>
                                    Fiverr Pro
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <Dropdown
                            menu={{
                                items,
                            }}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space className='bg-white rounded-md px-2 py-2 hover:bg-gray-100 hover:rounded-md hover:px-2 hover:py-2 duration-300'>
                                    Explore
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                        <button>English</button>
                        <button>Become a Seller</button>
                        {checkUserLogin()}
                </nav>
                </div>
                
            </div>
          
          
        </header>
    );
};

export default UserHeader;