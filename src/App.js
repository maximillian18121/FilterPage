import { useEffect } from "react";
import HomePage from "./Page/HomePage";
import { setCards, setFilterVal, setFilters, setLimit } from "./Features/CardSlice";
import { useSelector, useDispatch } from "react-redux";
import jobsData from "./db";
function App() {
  const dispatch = useDispatch();
  let { limit, add, filterVal, cardItems } = useSelector(
    (store) => store.cardState
  );
  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        limit = limit + add;
        dispatch(setLimit(limit));
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    dispatch(setCards(jobsData.slice(0,9)));
    dispatch(setFilters());
  },[])


  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);


  useEffect(() => {
    dispatch(setCards(jobsData.slice(0, limit)));
    dispatch(setFilters());
    dispatch(setFilterVal({}));
  }, [limit]);

  useEffect(() => {

    const filteredProperties = Object.entries(filterVal).reduce(
      (acc, [key, value]) => {
        if (value !== "" && value !== 0) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );
    const filterData = cardItems?.filter((items) => {
      for (const key in filteredProperties) {
        console.log(filteredProperties);
        if ( key === 'jobRole'  &&  filteredProperties[key] !== items[key]) {
          return false;
        }
        if(key === 'minExp' && filteredProperties[key]<items[key]){
          return false;
        }
        if(key === 'location' && filteredProperties[key]!==items[key]){
          return false;
        }
        if(key === 'minJdSalary' && filteredProperties[key]>items[key]){
          return false;
        }
        if (filteredProperties['companyName'] && items['companyName']) {
          const searchCompany = filteredProperties['companyName'].toLowerCase();
          const itemCompany = items['companyName'].toLowerCase();
          if (!itemCompany.includes(searchCompany)) {
            return false;
          }
        }
      }
      return true;
    });
    dispatch(setCards(filterData));
    dispatch(setFilters());
  }, [filterVal]);

  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
