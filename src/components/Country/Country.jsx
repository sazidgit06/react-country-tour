const Country = ({country}) => {
    const {name} = country;
    console.log(country)
    return (
        <div>
            <h5>Name: {name.common}</h5>
        </div>
    );
};

export default Country;