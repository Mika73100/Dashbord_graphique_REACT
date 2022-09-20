import "./new.scss"
import Slidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"

const New = () => {
    return (
        <div className="new">
            <Slidebar />
            <div className="newContainer">
                <Navbar />
                <div className="top">
                    <h1>Add New User</h1>
                </div>
                <div className="bottom">
                    <div className="left">
                        <img src="https://images.pexels.com/photos/995978/pexels-photo-995978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt=""></img>
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon /></label>
                                <input type='file'id="file" style={{display: "none"}}/>
                            </div>

                            <div className="formInput">
                                <label>Username</label>
                                <input type='text' placeholder="John_Doe"/>
                            </div>

                            <div className="formInput">
                                <label>Name and surname</label>
                                <input type='text' placeholder="John Doe"/>
                            </div>

                            <div className="formInput">
                                <label>Email</label>
                                <input type='email' placeholder="John_Doe@gmail.com"/>
                            </div>

                            <div className="formInput">
                                <label>Phone</label>
                                <input type='text' placeholder="+33 607535627"/>
                            </div>

                            <div className="formInput">
                                <label>Password</label>
                                <input type='password'/>
                            </div>

                            <div className="formInput">
                                <label>Adress</label>
                                <input type='text' placeholder="1516 route de l'albanais Gresy-sur-aix"/>
                            </div>

                            <div className="formInput">
                                <label>Pays</label>
                                <input type='text' placeholder="France"/>
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default New;


//https://www.youtube.com/watch?v=yKV1IGahXqA&t=5891s 2h20