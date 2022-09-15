import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Single = () => {
    return (
        <div className="single">
                <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className='top'>
                    <div className='left'>
                        <h1 className='title'>Information</h1>
                        {/* <div className='item'>
                            <img 
                            src="https://images.pexels.com/photos/13445893/pexels-photo-13445893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                            alt="" 
                            className="itemImg"
                            />
                        </div> */}
                    </div>

                    <div className='right'>

                    </div>
                </div>

                <div className='bottom'></div>
            </div>
        </div>
    );
};

export default Single;


//https://www.youtube.com/watch?v=yKV1IGahXqA&t=5891s    1:58   