import './Country.css'
const Country = ({country}) => {
    const {name, flags, population, timezones, region} = country;
    console.log(country)
    return (
        <div className="box">
            <h5>Name: {name?.common}</h5>
            <img src={flags.png} alt="" />
            <h5>Population: {population}</h5>
            <h5>Timezone: {timezones}</h5>
            <h5>Region: {region}</h5>
        </div>
    );
};

export default Country;