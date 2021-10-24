import  './Preloader.css';

type PropsType ={

}

let Preloader: React.FC<PropsType> = (props) => {
    return <div className="lds-hourglass"></div>
}

export default Preloader;