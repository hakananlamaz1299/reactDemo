import { useState, useEffect } from "react";


import style from './App.module.css'

export const Tab = function ({ children, activeTab }) {



    const [active, setActive] = useState(activeTab);

    /*useEffect(() =>{
        setActive(active)
    },[active])*/

    return (

        <div>
            <nav>
                {children.map((tab, index) =>
                    <button
                        className={tab.props.panelYazisi === 'kirmizi' ? style.Kirmizi : tab.props.panelYazisi === 'mor' ? style.Mor : style.Kahverengi}
                        onClick={() => setActive(index)}

                        key={index}>{tab.props.title}</button>)}
            </nav>

            {children[active]}
        </div>
    );
}

Tab.Panel = function ({ children, panelYazisi }) {
    return <p className={panelYazisi === 'kirmizi' ? style.Kirmizi : panelYazisi === 'mor' ? style.Mor : style.Kahverengi}>{children}</p>
}