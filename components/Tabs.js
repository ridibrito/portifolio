import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import CardCoruss from "./cardCoruss";
import CardConsultas from "./CardConsultas";
import CardBetoven from "./CardBetoven";
import ContentCoruss from "./contents/contentCoruss";
import ContentConsultas from "./contents/contentConsultas";
import ContentBetoven from "./contents/contentBetoven";



const coruss = <CardCoruss/>
const consultas = <CardConsultas/>
const betoven = <CardBetoven/>
const items = [coruss, consultas, betoven];

const content = [ContentCoruss, ContentConsultas, ContentBetoven];


export default function Tabs() {
  const [selectTabs, setSelectTabs] = useState(content[0]);
  

  return (
    <>
      <div className="sm:flex items-start justify-between sm:max-w-7xl sm:mx-auto mx-3 mt-5">
        <ul className="m-auto">
          {items.map((item) => <li
              key={item.content}
              onClick={() => setSelectTabs(item)}
            >
            {item}</li>)}
        </ul>
        <div className="w-2/3">
          <ul>
            {content.map((content) => <li
            key={content}
            className={selectTabs === <CardCoruss/> ? content : ""}
            >{content}</li>

            )}
            
          </ul>
          </div>


      
     
        </div>
    </>
  );
}
