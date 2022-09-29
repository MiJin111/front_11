// import { useState } from "react";
// import axios from 'axios';

// const App = () => {
//   const [data,setData] = useState(null);
//   const onClick = async () => {
//     try{
//       const response = await axios.get(
//       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=fc62911e5e984e68b0ba1b182bc7b12a',
//       );
//       setData(response.data);
//     }  catch (e){
//         console.log(e);
//       }
//   };
//   return(
//     <div>
//       <div>
//         <button onClick={onClick}>불러오기</button>
//       </div>
//       {data && <textarea rows={7} value={JSON.stringify(data,null,2)} readOnly={true} />}
//     </div>
//   );
// };

// export default App

import NewsList from './components/NewsList';

const App = () => {
  return <NewsList />;
};

export default App;
