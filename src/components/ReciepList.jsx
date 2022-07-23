import React from "react";
import Recipe from "./Recipe";

const ReciepList = ({recipes})=>{
    return (
        <div>
            {
                recipes.map(recipe => {
                    return(
                        <Recipe key={recipe.id} {...recipe}/>
                    )
                })
            }
        </div>
    )
};

export default ReciepList;