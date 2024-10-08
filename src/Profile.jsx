import React from 'react';

import { CiFaceSmile } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { RiHome8Line } from "react-icons/ri";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaRegListAlt } from "react-icons/fa";
import { RiEdit2Line } from "react-icons/ri";
function Profile() {
    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "#510808",
            display: 'flex',
            flexDirection: 'column',
            color: 'white',
            fontFamily: "'Kanit', sans-serif",
            overflow: 'hidden',
            position: 'relative',
            alignItems:"center"
        }}>
            <div style={{
                width: "100%",
                height: "35vh",
                backgroundImage: 'url("https://previews.123rf.com/images/rawpixel/rawpixel1705/rawpixel170502548/77394524-beauty-nature-outdoors-outside-sunlight.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    bottom: '-50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid white',
                    backgroundColor: 'white'
                }}>
                    <img src="https://via.placeholder.com/100" alt="Profile" style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }} />
                </div>
            </div>
            <div style={{
                textAlign: 'center',
                marginTop: '35px',
                padding: '0 20px',
                width:"100%",maxWidth:"1000px"
            }}>
                <div style={{ margin: '5px 0', textAlign: "right",width:"97%",maxWidth:"1000px",marginRight:"3rem" }}>เหล่า ทบ.</div>
                <h2 style={{ margin: '5px 0' }}>ร.ท.รักชาติ ยิ่งชีพ</h2>
                <p style={{ margin: '5px 0' }}>ผบ.มว.ปล</p>
            </div>

            <div style={{
               width:"100%",
               maxWidth:"1000px"
            }}>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    //marginBottom:"10px"
                    marginLeft: "15px",
                    marginRight: "15px",
                    padding:"10px"
                }}>
                    <div>ข้อมูลพื้นฐาน</div>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            color: "#BB6969"
                        }}><RiEdit2Line /></div>
                        <div style={{
                            color: "#BB6969"
                        }}>แก้ไข</div>

                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    borderRadius: "14px 14px 0px 0px",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><CiFaceSmile /></div>
                        <div>ชื่อเล่น</div>

                    </div>
                    <div>ปาล์ม</div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><BsTelephone /></div>
                        <div>เบอร์โทร</div>

                    </div>
                    <div>0959878787</div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><RiHome8Line /></div>
                        <div>ที่อยู่</div>

                    </div>
                    <div>ปาล์ม</div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    borderRadius: "0px 0px 14px 14px",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><MdOutlineHomeRepairService /></div>
                        <div>สถานที่ทำงาน</div>

                    </div>
                    <div>ปาล์ม</div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    //marginBottom:"10px"
                    marginLeft: "15px",
                    marginRight: "15px",
                    padding: "10px"
                }}>
                    <div>ข้อมูลอื่นๆ</div>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>

                        <div style={{
                            color: "#BB6969"
                        }}><RiEdit2Line /></div>
                        <div style={{
                            color: "#BB6969"
                        }}>แก้ไข</div>
                    </div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    borderRadius: "14px 14px 0px 0px",
                    padding: "10px"
                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"

                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><FaRegQuestionCircle /></div>
                        <div>ฉายา</div>
                    </div>

                    <div>ปาล์ม</div>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: "#831818",
                    marginBottom: "5px",
                    marginLeft: "15px",
                    marginRight: "15px",
                    borderRadius: "0px 0px 14px 14px",
                    padding: "10px"

                }}>
                    <div style={{
                        display: "flex",
                        gap: "10px"
                    }}>
                        <div style={{
                            marginTop: "3px"
                        }}><FaRegListAlt /></div>
                        <div>รายละเอียด</div>
                    </div>
                    <div >ปาล์ม</div>
                </div>



            </div>

        </div>
    );
}

export default Profile;
