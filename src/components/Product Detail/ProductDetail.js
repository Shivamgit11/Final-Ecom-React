import React, { Fragment } from "react";
import { useParams } from "react-router-dom";
import classes from "./productDetail.module.css";

const ProductDetail = (props) => {
  
  const params = useParams();
 
 

  return (
    
    <Fragment>
      {params.product_id==='1' && (<section className={classes.section}>
        <h1 className={classes.title}>COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> albela </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> gopi </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> Virat </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> shartma </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
        
        
      </section>)}

      {params.product_id==='2' && (<section className={classes.section}>
        <h1 className={classes.title}>BLACK AND WHITE COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> Lalaji </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> Priyatma </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aaryan22 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> katapa </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
        
        
      </section>)}

      {params.product_id==='3' && (<section className={classes.section}>
        <h1 className={classes.title}>YELLOW AND BLACK COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> Aaryan123 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> Saroj001 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> akshat21 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> sharma02 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
  
        
      </section>)}

      {params.product_id==='4' && (<section className={classes.section}>
        <h1 className={classes.title}> BLUE COLOURS</h1>
       
        <img
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> Aaryan123 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> attitudesinha </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> killerchhotu </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> MEChappri </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
      
        
      </section>)}

      {params.product_id==='5' && (<section className={classes.section}>
        <h1 className={classes.title}> BLUE COLOURS</h1>
       
        <img
          src="https://th.bing.com/th/id/OIP.Zlt_Mqu2JEn8itPCLMtWegHaGS?w=230&h=195&c=7&r=0&o=5&dpr=1.3&pid=1.7g"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy, I am using it since my childhood</p>
        <p className={classes.reviews}> Aaryan123 </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> abhyuday </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> varat </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> aarav </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
      
        
      </section>)}

      {params.product_id==='6' && (<section className={classes.section}>
        <h1 className={classes.title}> BLUE COLOURS</h1>
       
        <img
          src="https://th.bing.com/th/id/OIP.2sHAXJI6nHCWMZ909u9v8gHaEK?w=300&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7gg"
          alt="Website"
          className={classes.img}
        ></img>
        <div>

        <h3 className={classes.reviews}> Reviews </h3>
        <p className={classes.reviews}> @shivam01 </p>
        <p>⭐⭐⭐⭐</p>
        <p> Great product. Must buy</p>
        <p className={classes.reviews}> Technical Guruji </p>
        <p>⭐⭐</p>
        <p> Do not buy this</p>
        <p className={classes.reviews}> Lordvijaard </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again,Awesome phone loaded with awesome features

        </p>
        <p className={classes.reviews}> Lalaji </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        <p className={classes.reviews}> Gyanitech </p>
        <p>⭐⭐⭐⭐</p>
        <p> Excellent will buy again</p>
        </div>
      
        
      </section>)}

     
    </Fragment>
  );
};

export default ProductDetail;
