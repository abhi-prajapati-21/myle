import "./App.css";
import Header from "./components/Header/Header";
import { createContext, useEffect, useState } from "react";
import AppRouter from "./Router/AppRouter";

export const Context = createContext('');

function App() {
  const [weekPlanner, setWeekPlaner] = useState({});
  const [finalSteperContext, setFinalSteperContext] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn'))
  }, [])

  const maskingFinalObj = (data) => {
    return {
      serviceId: '1234',
      serviceName: data[0]?.serviceName,
      serviceTasks: data[1]?.tasks,
      propertyDetails : {...data[3]},
      addressDetails : {...data[4]},
      userDetails : {...data[5]},
      schedule : {...data[7] ,weekPlanner: data[6]?.plannerArr },
      paymentDetails: {...data[8]}
    }
 } 

 const finalMaskedObj = maskingFinalObj(finalSteperContext);

   console.log(isLoggedIn);

  return (
    <div className="app">
      <Context.Provider
        value={{
          weekPlannerInfo: { weekPlanner, setWeekPlaner },
          logInfo: { isLoggedIn, setIsLoggedIn },
          steperContext: { finalMaskedObj,finalSteperContext, setFinalSteperContext },
        }}
      >
        <Header />
        <AppRouter />
      </Context.Provider>
    </div>
  );
}

export default App;
