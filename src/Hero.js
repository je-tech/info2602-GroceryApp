import React from 'react';
const Hero=(handlelogout)=>{
    return(
        <section className="hero">
            <nav>
                <h2>The Grocery List</h2>
                <button> Add item</button>
                <button>Add recipe</button>
                <button onClick={handlelogout}>logout</button>

            </nav>
        </section>
    )
}

export default Hero;
