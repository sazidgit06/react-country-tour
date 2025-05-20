import './Country.css'
const Country = ({country}) => {
    const {name, flags} = country;
    console.log(country)
    return (
        <div className="box">
            <h5>Name: {name?.common}</h5>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;