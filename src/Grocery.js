import React from 'react';
const Grocery=(logout_func)=>{
    return(
        <section className="Grocery">
            
            <nav>
                <h2>The Grocery List</h2>
                <button type="button" class="btn btn-default waves-effect waves-light"> Add item</button>
                <button type="button" class="btn btn-default waves-effect waves-light">Add recipe</button>
                <button  type="button" class="btn btn-default waves-effect waves-light" onClick={logout_func}>logout</button>

            </nav>
            <body>
                
                
            </body>

        </section>
        
        
    )
}

export default Grocery;
