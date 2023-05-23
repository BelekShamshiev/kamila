import React from 'react';
import { Link } from 'react-router-dom';
// import axios from '../../../utils/axios';
import Pizza from '../../../assets/aboutMenu/pizza.png';
import Chicken from '../../../assets/aboutMenu/chicken.png';
import Ell from '../../../assets/aboutMenu/eel.png';
import Corndog from '../../../assets/aboutMenu/corndog.png';
import Sales from '../../../assets/aboutMenu/sales.png';
import Combo from '../../../assets/aboutMenu/combo.png';
import Wok from '../../../assets/aboutMenu/wok.png';
import Salads from '../../../assets/aboutMenu/salads.png';



const AboutMenu = () => {

    // const [aboutMenu, setAboutMenu] = useState([]);

    // useEffect(()=>{
    //     axios('/aboutmenu')
    //     .then(({data})=> {setAboutMenu(data)})
    //     .catch((err)=> console.log(err.message))
        
    // }, [])
    
    return (
        <div className='aboutMenu'>
            {/* <div className="aboutMenu__row">
                {
                    aboutMenu.map((item)=>(
                        <div key={item.id} className='aboutMenu__card'>
                            <img className='aboutMenu__card-img' src={`${item.image[0] === '.' ? '../' : ''}${item.image}`} alt="" />
                            <h2 className='aboutMenu__card-title'>{item.title}</h2>
                        </div>
                    ))
                }   
            </div> */}

            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/sets/all">
                        <img className='aboutMenu__card-img' src="https://bushido74.ru/wp-content/uploads/2020/01/%D0%9E%D0%B1%D0%BB%D0%BE%D0%B6%D0%BA%D0%B01-1000x667.jpg" alt="" />
                        <h2 className='aboutMenu__card-title'>Сеты</h2>
                    </Link>
                </div>
                <div className='aboutMenu__block'>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/wok/all">
                            <img className='aboutMenu__card-img' src="https://shared.cdn.smp.schibsted.com/v2/images/8e77ae77-1b3e-4a6a-a23b-50d50bacb6ef?fit=crop&h=750&w=1000&s=11a0b56adfedbdc6e631b53f781eb7efff37a275" alt="" />
                            <h2 className='aboutMenu__card-title'>WOK</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/rolls/all">
                            <img className='aboutMenu__card-img' src="https://lh3.googleusercontent.com/J3nZWh5BUdwhgz97oX0SyY55EM5wbcHFdNl1hsHtLs_n28DUMy-zDcAxJA-rWamUXzdRMkOaiTAfPOrM1ViteIdzI7S54V5jnw9Z9V7o_Iepi5gBulF0H43wzuUM6D7j4CgFWZrJhwDR-WKQL_0yPJ_E25jZEK5DteFmCqW5YocnA9xLW5KDugQI4zuC7Qiq" alt="" />
                            <h2 className='aboutMenu__card-title'>Роллы</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/pizza/all">
                        <img className='aboutMenu__card-img' src={Pizza} alt="" />
                        <h2 className='aboutMenu__card-title'>Пицца</h2>
                    </Link>
                </div>
                <div className='aboutMenu__card'>
                    <Link>
                        <Link to="http://localhost:3000/catalog/sushi/all">
                            <img className='aboutMenu__card-img' src="https://dasushi.od.ua/storage/article-preview/app-article/41/origin/sushi-polza-i-vred1653924777.jpg?t=1653924778" alt="" />
                            <h2 className='aboutMenu__card-title'>Суши</h2>
                        </Link>
                    </Link>
                </div>  
            </div>
            <div className="aboutMenu__row">
                <div className='aboutMenu__block'>
                     <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/soup/all">
                            <img className='aboutMenu__card-img' src="https://smaylovich.ru/upload/iblock/386/38685c29e962feb6ff89498fda495b3b.jpeg" alt="" />
                            <h2 className='aboutMenu__card-title'>Cупы</h2>
                        </Link>
                    </div>
                    <div className='aboutMenu__card'>
                        <Link to="http://localhost:3000/catalog/salads/all">
                            <img className='aboutMenu__card-img' src={Salads} alt="" />
                            <h2 className='aboutMenu__card-title'>Салаты</h2>
                        </Link>
                    </div>
                    
                </div>
                <div className='aboutMenu__card'>
                    <Link to="http://localhost:3000/catalog/snacks/all">
                        <img className='aboutMenu__card-img' src="https://upload.wikimedia.org/wikipedia/commons/8/83/French_Fries.JPG" alt="" />
                        <h2 className='aboutMenu__card-title'>Закуски</h2>
                    </Link>
                </div>
            </div>
            

        </div>
    );
};

export default AboutMenu;