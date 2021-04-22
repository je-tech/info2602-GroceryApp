import React from 'react';
const Grocery=(logout_func)=>{
    return(
        <section className="hero">
            <nav>
                <h2>The Grocery List</h2>
                <button> Add item</button>
                <button>Add recipe</button>
                <button onClick={logout_func}>logout</button>

            </nav>
        </section>
    )
}

export default Grocery;
