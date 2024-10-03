import Link from "next/link.js";
import React, { useState } from "react";
import menu_data from "./menu-data.js";
function Submen({ menu }) {
  const [show, setShow]=useState(NaN)
  return (
    <>
      {menu.has_dropdown && (
        <ul style={{marginTop:"-40px"}} className="sub-menu">
          {menu.sub_menus.map((sub_m, i) => (
            <li onMouseEnter={()=>{
              setShow(i)
            }}
             key={i}>
              <Link style={{lineHeight:"22px"}} href={sub_m.link}>{sub_m.title}</Link>
              
              {sub_m.has_dropdown && i== show &&(
                <ul style={{ top: "-20px", marginLeft: "210px" }} className="sub-menu">
                  {sub_m.sub_menus.map((sub_sub_m, j) => (
                    <li  key={j}>
                      <Link style={{lineHeight:"22px"}} href={sub_sub_m.link}>{sub_sub_m.title}</Link>

                    </li>
                  ))}
                </ul>
              )}
              
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
function Submenu({ menu}) {
  const [show, setShow]=useState(NaN)
  return (
    <>
      {menu.has_dropdown && (
        <ul  className="sub-menu">
          {menu.sub_menus.map((sub_m, i) => (
            <li  onMouseEnter={()=>{
              setShow(i)
            }}
             key={i}>
              <Link  href={sub_m.link}>{sub_m.title}</Link>
              
              {sub_m.has_dropdown && i== show &&(
                <ul style={{ top: "-20px", marginLeft: "210px" }} className="sub-menu">
                  
                      <Submen menu={sub_m}/>
                    
                </ul>
              )}
              
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

const NavMenu = ({num=false}) => {
  return (
    <>
      <ul>
        {menu_data.map((menu, index) =>
          menu.has_dropdown ? (
            <li key={menu.id} className="has-dropdown">
              <Link style={{fontSize:"14px"}} className={`${menu?.active}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              <Submenu menu={menu} mar={"210px"}/>
            </li>
          ) : (
            <li key={menu.id}>
              <Link style={{fontSize:"14px"}} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenu;
