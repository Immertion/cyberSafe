import Navbar from '../components/Navbar';
import PersonalArea from '../components/PersonalArea';
import SupportButton from '../components/SupportButton';

const Security = () => {

    return ( 
        <div className="body">
            <Navbar
                activeWindow="security"
            />
            <PersonalArea />
            <footer>
                <div className="footer-container">
                    <p>CryptoSafe</p>
                    <SupportButton/>
                </div>
            </footer>
        <style jsx>
            {`
           
            `}
        </style>
        </div>
    )

}

export default Security;