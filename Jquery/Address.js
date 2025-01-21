import { countries } from "../JSON/countryArray.js";


export const AddressModule=(()=>{

    const countryList=$("#CountryList")

    for(let i=0;i<countries.length;i++){
        var option = $("<option></option>").text(countries[i].country);
        countryList.append(option);
    }

    var globalCountryVariable;

    const checkCountry=()=>{
        const statesToDisplay=$("#StateList").html(null);
        const citiesToDisplay=$("#cityList").html(null)
        
        let stateText=$("#StateList");
        var optionn=$("<option></option>").text("--Select a State--")
        stateText.append(optionn);
        
        let cityText=$("#cityList");
        var option=$("<option></option>").text("--Select a City--")
        cityText.append(option);
        
        const countrySelected=$("#CountryList").val();

        const filteredCountry=countries.find((c)=>{
            return c.country==countrySelected;
        })

        console.log("filteredCountry ",filteredCountry);

        let states=filteredCountry.states;
        globalCountryVariable=filteredCountry.id;

        for(let i=0;i<states.length;i++){
            const statesToDisplay=$("#StateList")
            var option=$("<option></option>").text(states[i].state)
            statesToDisplay.append(option);
        }
    }




    const checkState=()=>{
        //clearing all the options
        const citiesToDisplay=$("#cityList").html(null);

        let cityText=$("#cityList");
        var option=$("<option></option>").text("--Select a city--");
        cityText.append(option);


        const stateSelected=$('#StateList').val();

        const filteredState=countries[globalCountryVariable].states.find((e)=>{
            return e.state==stateSelected;
        })

        let citiezz=filteredState.cities;

        for(let i=0;i<citiezz.length;i++){
            const cityToDisplay=$('#cityList');
            var option=$('<option></option>').text(citiezz[i].city)
            cityToDisplay.append(option);
        }
    }

    window.checkCountry=checkCountry;
    window.checkState=checkState;



    return {
        checkCountry: checkCountry,
        checkState: checkState
    }


})();