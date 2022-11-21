import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu, Space, Typography } from 'antd';
import '../src/styles/navbar.css';
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    PhoneOutlined
} from '@ant-design/icons';
import Logo from './media/logo-black.png';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;


const Navbar = () => {

    const items = [
        {
            key: '1',
            label: 'ENG',
        },
        {
            key: '2',
            label: 'FRC',
        },
        {
            key: '3',
            label: 'HIN',
        },
    ];


    // const menu1 =(
    //     <Menu>
    //         <Menu.Item>RUP</Menu.Item>
    //         <Menu.Item>DOL</Menu.Item>
    //         <Menu.Item>POU</Menu.Item>
    //     </Menu>
    // )

    const suffix = (
        <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
        />
    );
    const onSearch = (value) => console.log(value);

    return (
        <div className='heads'>
            <div className='head_1'>
                <div className='lang'>
                    <Dropdown
                        menu={{
                            items,
                            selectable: true,
                            defaultSelectedKeys: ['1'],
                        }}
                    >
                        <Typography.Link>
                            <Space>
                                Language
                                <DownOutlined />
                            </Space>
                        </Typography.Link>
                    </Dropdown>
                </div>

                {/* <div className='curr'>
                <Dropdown
                menu1={{
                    menu1,
                    selectable: true,
                    defaultSelectedKeys: ['1'],
                }}
                >
                <Typography.Link>
                <Space>
                CURRENCY
                <DownOutlined />
                </Space>
                    </Typography.Link>
                </Dropdown> */}

                {/* </div> */}

                <div>|</div>

                <div className='text_'>
                    <p>FREE RETURNS. STANDARD SHIPPING ORDERS $99+</p>
                </div>

                <div>|</div>

                <div className="anchors" >
                    <div><a href="https://d-themes.com/react/porto/demo15/pages/account/" className="myAccount">MY ACCOUNT</a></div>
                    <div><a href="https://d-themes.com/react/porto/demo15/pages/about-us/" className="aboutUS">ABOUT US</a></div>
                    <div><a href="https://d-themes.com/react/porto/demo15/pages/blog/" className="blog">BLOG</a></div>
                    <div><a href="https://d-themes.com/react/porto/demo15/pages/wishlist/" className="wishlist">WISHLIST</a></div>
                    <div><a href="https://d-themes.com/react/porto/demo15/pages/cart/" className="cart">CART</a></div>
                    <div><a href="/" className="login">LOGIN</a></div>
                </div>

                <div className='app_logos'>
                    <FacebookOutlined />
                    <TwitterOutlined />
                    <InstagramOutlined />

                </div>
            </div>

            <div className='heads_2'>
                <div><img className='logo' src={Logo}></img></div>
                <div className='search_bar'>
                    <Space direction="vertical">
                        <Search
                            placeholder="search "
                            enterButton="Search"
                            size="large"
                            width="400px"
                            suffix={suffix}
                            onSearch={onSearch}
                            style={{
                                width: 600,
                                // height:100,
                                color: 'gray',
                            }}
                        />
                    </Space>
                </div>
                <div className='contact'>
                    <PhoneOutlined style={{ fontSize: '30px', color: '#0005', rotate: '90deg' }} />

                    <div className='contact_text'>
                       <div className='c_text1'> <h5>CALL US NOW</h5></div>
                        <div className='c_text2'><h2>+123 5678 890</h2></div>
                    </div>

                </div>


            </div>

        </div>


    )

};
export default Navbar;









