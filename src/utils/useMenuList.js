import { useEffect, useState } from "react";

const useMenuList = (resId) =>{
const [menuList,setMenuList] = useState(null)

 
useEffect(()=>{
    fetchData()
},[resId])

const fetchData = async ()=>{
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.5235719&lng=77.81397179999999&restaurantId=${resId}`);
    const json = await data.json()
    setMenuList(json.data)
}


    return menuList;

}

export default useMenuList;