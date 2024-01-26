import { useEffect,useState } from "react"

export const useRestrauntList = ()=>{

    const [resFilterList , setResFilterList] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchText, setSearchText] = useState("")

useEffect(()=>{
fetchData()
},[])   

const fetchData = async ()=>{

    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.5235719&lng=77.81397179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json()
    console.log(json);
    setResFilterList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setSearchList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

}
const handleFilter = ()=>{

    const filteredData = searchList.filter(res =>
        res.info.avgRating > 4 )
        console.log(filteredData);
        setSearchList(filteredData)
  
    
     
};

const handleSearch = () => {
    if (searchList) {
      const filterRestraunt = resFilterList.filter((res) =>
        res.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setSearchList(filterRestraunt);
    }
  };

    return {resFilterList, searchList, handleFilter, handleSearch ,searchText , setSearchText};
}


