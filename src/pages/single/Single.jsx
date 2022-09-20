import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

const Single = () => {
    return (
        <div className="single">
                <Sidebar />
            <div className="singleContainer">
                <Navbar />

                <div className='top'>
                    <div className='left'>
                      <div className='editButton'>Edit</div>
                        <h1 className='title'>Information</h1>
                            <div className='item'>
                                <img 
                                src="https://images.pexels.com/photos/13445893/pexels-photo-13445893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                                alt="" 
                                className="itemImg"
                                />
                                <div className="details">
                                    <h1 className='itemTitle'>Jane Doe</h1>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Email:</span>
                                        <span className='itemValue'>Janedoe@gmail.com</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Phone:</span>
                                        <span className='itemValue'>+33607535627</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Adresse:</span>
                                        <span className='itemValue'>1516 r. de l'albanais Gresy-sur-aix</span>
                                    </div>
                                    <div className='detailItem'>
                                        <span className='itemKey'>Pays:</span>
                                        <span className='itemValue'>France</span>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className='right'>
                        <Chart aspect={3/1} title="User Spending ( Last 6 Months )"/>
                    </div>
                </div>

                <div className='bottom'>
                <h1 className='title'>Last Transactions</h1>
                    <List />
                </div>
            </div>
        </div>
    );
};

export default Single;


//https://www.youtube.com/watch?v=yKV1IGahXqA&t=5891s   2H08